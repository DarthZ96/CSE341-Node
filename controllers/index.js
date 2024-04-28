const awesomeFunction = (req, res, next) => {
    res.json('Alena McClure');
};

const returnAnotherPerson = (req, res, next) => {
    res.json('Super awsome person');
};

module.exports = { awesomeFunction, returnAnotherPerson };