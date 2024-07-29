const express = require("express")
const router = express.Router()
const User = require("../models/user.model.js")
const { addUser, getUsers, deleteUser, getUserById, updateUserById } = require("../controllers/user.controllers.js")

router.get("/", getUsers)
router.get("/:id", getUserById)
router.post("/", addUser)
router.put("/:id", updateUserById)
router.delete("/:id", deleteUser)

module.exports = router