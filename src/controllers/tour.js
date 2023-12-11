const Tour = require('../models/tour');

const getAllTours = async () => {
    return await Tour.getAllTours();
}

const getMatchesByTourName = async params => {
    const { name, pageNumber, pageSize } = params;

    if (!name) {
        throw new Error('Missing required parameter: name');
    }

    const res = await Tour.getMatchesByTourName({ name, pageNumber, pageSize });
    return res
}

module.exports = {
    getAllTours: getAllTours,
    getMatchesByTourName: getMatchesByTourName
}