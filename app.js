require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload')
//H7phtdVEZTswlTbd

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://jayythecracker:H7phtdVEZTswlTbd@jayy.ryk5chg.mongodb.net/?retryWrites=true&w=majority&appName=jayy";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


app.use(express.json());
app.use(fileUpload());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const catRoute = require('./routes/cat');
const userRoute = require('./routes/user');
const postRoute = require('./routes/post');

app.use('/cats', catRoute);
app.use("/users", userRoute);
app.use("/posts", postRoute);

app.use((err, req, res, next) => {
   err.status = err.sattus || 200;
   res.status(err.status).json({
      cons: false,
      msg: err.message
   })
})

app.listen(process.env.PORT, console.log(`Server is running at port ${process.env.PORT}`));

