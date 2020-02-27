import express from 'express';

import config from '../config';

import assert from 'assert';
import { MongoClient, ObjectID } from 'mongodb';

let mdb;
MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err);

  mdb = db;
});

const router = express.Router();

router.get('/contests', (_req, res) => {
  let contests = {};
  mdb
    .collection('contests')
    .find({})
    .project({
      categoryName: 1,
      contestName: 1
    })
    .each((err, contest) => {
      assert.equal(null, err);
      if (!contest) {
        res.send({ contests });
        return;
      }
      contests[contest._id] = contest;
    });
});

router.get('/names/:nameIds', (req, res) => {
  //req.params.nameIds
  const nameIds = req.params.nameIds.split(',').map(ObjectID);
  let names = {};
  mdb
    .collection('names')
    .find({_id:{$in:nameIds}})
    .each((err, name) => {
      assert.equal(null, err);
      if (!name) {
        res.send({ names });
        return;
      }
      names[name._id] = name;
    });
});

router.get('/contests/:contestId', (req, res) => {
  mdb
    .collection('contests')
    .findOne({ _id: Number(req.params.contestId) })
    .then(contest => {
      res.send(contest);
    })
    .catch(console.error);
});

export default router;
