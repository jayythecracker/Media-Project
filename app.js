require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DB_NAME}`);


app.use(express.json());

const userRoute = require('./routes/user');
const postRoute = require('./routes/post');

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

