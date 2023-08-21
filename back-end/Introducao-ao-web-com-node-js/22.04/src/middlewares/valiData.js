module.exports = (req, res, next) => {
    const { description:  { watchedAt } } = req.body;
    const  dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    // regex de https://www.w3resource.com/javascript/form/javascript-date-validation.php
    if (!watchedAt) return res.status.json({ message: 'O campo "watchedAt" é obrigatório' });
    if(watchedAt.match(dateformat)) {
        next();
    } else {
        res.status(400).json({ "message": "O campo createdAt deve ter o formato \'dd/mm/aaaa\'" });
    }
}