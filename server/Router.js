const db = require('./db');
const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.use((req, res, next) => {
  // console.log('something is happend!');
  next();
});

router.route('/api')
      .get((req, res) => {
        db.Articles.find((err, articles) => {
          if (err) {
            res.send(err);
            return;
          }
          res.json(articles);
        });
      })

      .post((req, res) => {
        let articles = new db.Articles();
        articles.title = req.body.title;
        articles.date = req.body.date;
        articles.state = req.body.state;
        articles.content = req.body.content;

        articles.save((err) => {
          if (err) res.send(err);
          res.json({ message: 'new articles has been created' });
        });
      });
router.route('/api/:post_id')
      .get((req, res) => {
        db.Articles.findById(req.params.post_id, (err, post) => {
          if (err) {
            res.send(err);
          }
          res.json(post);
        });
      })
      .delete((req, res) => {
        db.Articles.remove({ _id: req.params.post_id }, (err, post) => {
          if (err) {
            res.send(err);
          }
          res.json({ message: 'Successfully Delete!' });
        })
      })
      .put((req, res) => {
        db.Articles.findById(req.params.post_id, (err, post) => {
          if (err) res.send(err);
          post.title = req.body.title;
          post.date = req.body.date;
          post.state = req.body.state;
          post.content = req.body.content;

          post.save( err => {
            if (err) res.send(err);
            res.json({ message: 'Update Successfully' })
          })
        });

      })

app.use('/', router);

app.listen(9999);
// console.log('magic has been run on 9999');
