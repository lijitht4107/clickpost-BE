var express = require("express");
var router = express.Router();
const { AddImage} = require("../controllers/AddImage");
const {getAllImages,getimage,imageDataUpdate, deleteImage} = require('../controllers/ImagesController')
const multer = require("multer");
const { userAuth } = require("../middleware/Authorisation");
const {  AddComments,getImageComments} = require("../controllers/CommentsController");
const { LikeStore } = require("../controllers/LikeStore");


router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./pitchers");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: fileStorage });

router.post("/AddImages",userAuth, upload.single("image"), AddImage);
router.get('/getAllImages',userAuth,getAllImages)
router.get('/getsingleimage/:id',userAuth,getimage)
router.post('/:id/comments',userAuth,AddComments)
router.get('/:id/comments',userAuth,getImageComments)
router.post('/like',userAuth,LikeStore)
router.patch('/imageDataUpdate/:id',userAuth,imageDataUpdate)
router.delete('/imageDelete/:id',userAuth,deleteImage)

module.exports = router;
