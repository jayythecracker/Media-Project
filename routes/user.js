const router = require('express').Router();

router.get("/", (req, res) => {
   res.json({ msg: "All Users" });
});
router.post("/", (req, res) => {
   res.json(req.body);
});

router.route("/:id")
   .get((req, res) => res.json({ msg: "Request id is " + req.params.id }))
   .patch((req, res) => res.json({ msg: "Edit id is " + req.params.id }))
   .delete((req, res) => res.json({ msg: "Delete id is " + req.params.id }));


// router.get("/:id", (req, res) => {
//    let id = req.params.id;
//    res.json({ msg: "Request id is " + id });
// });

// router.patch("/:id", (req, res) => {
//    let id = req.params.id;
//    res.json({ msg: "Edit id is " + id });
// })

// router.delete("/:id",(req,res)=> {
//    let id = req.params.id;
//    res.json({ msg: "Delete id is " + id });
// })

module.exports = router;