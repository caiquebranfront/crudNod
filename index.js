const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');


const app = express();


app.use(cors());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const serviceAccount = require('./path/to/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

app.get('/:collection', async (req, res) => {
  const collection = db.collection(req.params.collection);
  const snapshot = await collection.get();
  const docs = snapshot.docs.map(doc => doc.data());
  res.send(docs);
});

app.get('/:collection/:id', async (req, res) => {
  const collection = db.collection(req.params.collection);
  const doc = await collection.doc(req.params.id).get();
  res.send(doc.data());
});

app.post('/:collection', async (req, res) => {
  const collection = db.collection(req.params.collection);
  await collection.add(req.body);
  res.send('Document added');
});

app.put('/:collection/:id', async (req, res) => {
  const collection = db.collection(req.params.collection);
  await collection.doc(req.params.id).set(req.body);
  res.send('Document updated');
});

app.delete('/:collection/:id', async (req, res) => {
  const collection = db.collection(req.params.collection);
  await collection.doc(req.params.id).delete();
 
});