// import express from 'express';
// import bodyParser from 'body-parser';
// import db from './db';
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
          // articles.forEach( article => {
          //   article.date = moment(objectidToTimestamp(article._id)).format('YYYY-MM-DD');
          // } );

          res.json(articles);
        });
      })

      .post((req, res) => {
        let article = new db.Articles();
        article.title = req.body.title;
        article.state = req.body.state;
        article.content = req.body.content;

        article.save((err) => {
          if (err) res.send(err);
          res.json({ message: 'new article has been created' });
        });
      });
router.route('/api/:post_id')
      .get((req, res) => {
        db.Articles.findById(req.params.post_id, (err, post) => {
          if (err) {
            res.send(err);
          }
          //post.date = moment(objectidToTimestamp(post._id)).format('YYYY-MM-DD');
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
