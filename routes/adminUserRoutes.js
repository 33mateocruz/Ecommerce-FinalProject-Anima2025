const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/adminUserController.js");

router.post("/", AdminController.store);
router.get("/", AdminController.index);
router.get("/:id", AdminController.show);
router.put("/:id", AdminController.update);
router.delete("/:id", AdminController.destroy);

module.exports = router;
