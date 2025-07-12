const Document = require("../models/giftModel");

const createDocument = async (req, res) => {
    const { name, email, phone, message } = req.body;

    try {
        const newDocument = new Document({ name, email, phone, message });
        await newDocument.save();
        res.status(200).json(newDocument);
    } catch (error) {
        res.status(500).json({ error: "Failed to add Document" });
    }
};

const getDocuments = async (req, res) => {
    const { search = '', sort = 'createdAt', limit = 10 } = req.query;

    try {
        const searchRegex = new RegExp(search, 'i');
        const documents = await Document.find({
            $or: [
                { name: searchRegex },
                { email: searchRegex },
                { message: searchRegex }
            ]
        })
        .sort({ [sort]: 1 })
        .limit(parseInt(limit));

        res.status(200).json(documents);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch Documents" });
    }
};

const deleteDocument = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await Document.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({ error: "Document not found" });
        }
        res.status(200).json({ message: "Document deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete Document" });
    }
};

module.exports = { createDocument, getDocuments, deleteDocument };
