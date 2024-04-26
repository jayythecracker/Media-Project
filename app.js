require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload')
//H7phtdVEZTswlTbd
mongoose.connect(`mongodb+srv://jayythecracker:H7phtdVEZTswlTbd@jayy.ryk5chg.mongodb.net/?retryWrites=true&w=majority&appName=jayy`);


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

