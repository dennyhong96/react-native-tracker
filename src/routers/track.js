const router = require("express").Router();
const auth = require("../middlewares/auth");

const { listTracks, createTrack } = require("../controllers/track");

router.use(auth);
router.route("/").get(listTracks).post(createTrack);

module.exports = router;
