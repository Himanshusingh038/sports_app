const mysql = require('../lib/mysql');

const createNews = async (title, description, matchId, tourId) => {
    try {
        const statement = `
            INSERT INTO mydb.news (title, description, matchId, tourId)
            VALUES (?, ?, ?, ?)
        `;
        const parameters = [title, description, matchId, tourId];
        const response = await mysql.query(statement, parameters);
        if (response.affectedRows > 0) {
            return {message:'News added successfully',status:true}
        }else{
            return {status:false}
        }
    } catch (error) {
        throw error;
    }
};

const getNewsByTourId = async (params) => {
    try {
        const statement = `
            SELECT n.title, n.description, COALESCE(m.name, 'FOR TOUR') matchName, t.name tourName 
                FROM news n
                JOIN tours t on n.tourId = t.id 
                LEFT JOIN matches m on m.id = n.matchId 
            WHERE t.id=?`;
        const parameters = [params.tourId];
        const response = await mysql.query(statement, parameters);
        return response;
    } catch (error) {
        throw error;
    }
}

const getNewsByMatchId = async (params) => {
    try {
        const statement = `
            SELECT n.title, n.description, m.name matchName, t.name tourName 
                FROM news n
                JOIN tours t on n.tourId = t.id 
                LEFT JOIN matches m on m.id = n.matchId 
            WHERE m.id=?`;
        const parameters = [params.matchId];
        const response = await mysql.query(statement, parameters);
        return response;
    } catch (error) {
        throw error;
    }
}

const getNewsBySportId = async (params) => {
    try {
        const statement = `
            SELECT n.title, n.description, COALESCE(m.name, 'FOR MATCH') matchName, t.name tourName 
                FROM news n
                JOIN tours t on n.tourId = t.id 
                LEFT JOIN matches m on m.id = n.matchId 
            WHERE t.sportId=?`;
        const parameters = [params.sportId];
        const response = await mysql.query(statement, parameters);
        return response;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createNews: createNews,
    getNewsByTourId: getNewsByTourId,
    getNewsByMatchId: getNewsByMatchId,
    getNewsBySportId: getNewsBySportId
}