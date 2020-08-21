const router = require("express").Router();

const { signup, loadUser, login } = require("../controllers/auth");
const auth = require("../middlewares/auth");

router.get("/", auth, loadUser);
router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
