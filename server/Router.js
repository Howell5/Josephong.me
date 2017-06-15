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
        const articles = new db.Articles();
        articles.title = req.body.title;
        articles.date = req.body.date;
        articles.state = req.body.state;

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
        db.Articles.remove({ _id: req.params.post_id }, (err, res) => {
          if (err) {
            res.send(err);
          }
          res.json({ message: 'Successfully Delete!' });
        })
      })

app.use('/', router);

app.listen(9999);
// console.log('magic has been run on 9999');
