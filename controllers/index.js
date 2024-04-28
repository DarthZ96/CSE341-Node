const awesomeFunction = (req, res, next) => {
    res.json('Awsome person');
};

const returnAnotherPerson = (req, res, next) => {
    res.json('Super awsome person');
};

module.exports = { awesomeFunction, returnAnotherPerson };