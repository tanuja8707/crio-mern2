const router = require("express").Router();
const {getUsers, getUserById, searchUserByGenderOrAge} = require("../controllers/users.controllers");

router.get("/", getUsers);

router.get("/search",searchUserByGenderOrAge);

router.get("/:uuid",getUserById);

module.exports = router;