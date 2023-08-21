module.exports = (req, res, next) => {
    const { email, password, firstName, phone } = req.body;
    if(!email) {
        return res.status(401).json( { "message": "O campo email é obrigatório" });
    }
    if(!password) {
        return res.status(401).json({ "message": "O campo password é obrigatório" });
    }
    if(!firstName) {
        return res.status(401).json({ "message": "O campo firstName é obrigatório" });
    }
    if(!phone) {
        return res.status(401).json({ "message": "O campo phone é obrigatório" });
    }
    next();
}