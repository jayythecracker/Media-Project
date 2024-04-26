require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload')
mongoose.set('strictQuery', false);
//H7phtdVEZTswlTbd
mongoose.connect("postgres://media_esuy_user:RqGKzc5F5EAfi0k2kJjwRBRxWbxT3tz3@dpg-coluqj20si5c73fagkr0-a/media_esuy");


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

