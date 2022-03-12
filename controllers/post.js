const all = async (req, res, next) => {
   res.json({ msg: "All Posts" });
}
const get = async (req, res, next) => {
   res.json({ msg: "Single Posts" });
}
const post = async(req,res,next) =>{
   res.json({msg:"Add New Post",result:req.body})
}
const patch = async (req, res, next) => {
   res.json({ msg: "Patch Post" })
}
const drop = async (req, res, next) => {
   res.json({ msg: "Delete Post" })
}

module.exports = {
   all,
   get,
   post,
   patch,
   drop
}