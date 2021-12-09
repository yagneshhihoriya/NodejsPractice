const uploadController = (req, res) => {
    // res.send({ success: true, message: "File Uploaded Successfully", file: req.file })
    res.send(req.body)
}

module.exports = { uploadController }