const DB = require('../dbs/user');
const Helper = require('../utils/helper');

const all = async (req, res, next) => {
   let users = await DB.find();
   Helper.fMsg(res, "All Users", users);
}
const add = async (req, res, next) => {
   let saveUser = new DB(req.body);
   let result = await saveUser.save();
   Helper.fMsg(res, "User Added", result);
}
const get = async (req, res, next) => {
   let id = req.params.id;
   let user = await DB.findById(id);
   Helper.fMsg(res, "Single User Get", user);
}
const patch = async (req, res, next) => {
   let user = await DB.findById(req.params.id);
   if (user) {
      await DB.findByIdAndUpdate(user._id, req.body);
      let retUser = await DB.findById(user._id);
      Helper.fMsg(res, "Update Updated", retUser);
   } else {
      next(new Error("Error, No user with that id"))
   }
}
const drop = async (req, res, next) => {
   await DB.findByIdAndDelete(req.params.id);
   Helper.fMsg(res, "User Deleted");
}

module.exports = {
   all,
   add,
   get,
   patch,
   drop
}