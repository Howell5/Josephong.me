const db = require('./db');
const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

express.use(bodyParser.urlencoded({ extended: true }));
express.use(bodyParser.json());

router.use((req, res, next) => {
  console.log('something is happend!');
  next();
});

router.route('/post')

      .post((req, res) => {
        const user = new db.User();
        user.name = req.body.name;
        user.pwd = req.body.pwd;

        user.save((err) => {
          if (err) res.send(err);
          res.json({ message: 'new User has been created' });
        });
      });

express.use('/', router);

express.listen(9999);
console.log('magic has been run on 9999');
