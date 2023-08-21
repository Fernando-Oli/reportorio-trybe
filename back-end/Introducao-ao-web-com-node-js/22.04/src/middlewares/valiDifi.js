module.exports = (req, res, next) => {
    const { description:  { difficulty } } = req.body;
    if(difficulty === 'Fácil' || difficulty === 'Médio' || difficulty === 'Difícil') {
        next();
    } else {
        res.status(400).json( { "message": "O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'" });
    }
}