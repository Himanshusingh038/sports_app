const mysql = require('../lib/mysql');

const getAllTours = async () => {
    const statement = 'select * from tours;';
    const parameters = [];
    return await mysql.query(statement, parameters);
}
const cache = {};
const getMatchesByTourName = async (params) => {
    const cacheKey = `matches:${params.name}:${params.pageNumber}:${params.pageSize}`;
    if (cache[cacheKey]) {
        return cache[cacheKey];
    }
    const offset = (params.pageNumber - 1) * params.pageSize;
    const statement = `
            SELECT m.id AS matchId, 
            m.name AS matchName, 
            m.format, 
            m.startTime, 
            m.endTime,
            t.id AS tourId,
            t.name AS tourName
        FROM matches m
        INNER JOIN tours t ON m.tourId = t.id
        WHERE t.name =? 
        LIMIT ? OFFSET ?`;

    const parameters = [ params.name,  parseInt(params.pageSize, 10), parseInt(offset, 10) ];
    const result = await mysql.query(statement, parameters);
    cache[cacheKey] = result;
    return result;
};

module.exports = {
    getAllTours: getAllTours,
    getMatchesByTourName: getMatchesByTourName
}