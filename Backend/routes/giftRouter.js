const express = require("express");
const { createDocument, getDocuments, deleteDocument } = require("../controllers/giftController");

const router = express.Router();

router.post("/", createDocument);
router.get("/", getDocuments);
router.delete("/:id", deleteDocument);

module.exports = router;
