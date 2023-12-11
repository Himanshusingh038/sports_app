const News = require('../models/news');

const createNews = async (newsData) => {
    const { title, description, matchId, tourId } = newsData;
    return await News.createNews(title, description, matchId, tourId);
};

const getNewsByTourId = async (params) => {
    return await News.getNewsByTourId(params);
};

const getNewsByMatchId = async (params) => {
    return await News.getNewsByMatchId(params);
};

const getNewsBySportId = async (params) => {
    return await News.getNewsBySportId(params);
}

module.exports = {
    createNews: createNews,
    getNewsByTourId: getNewsByTourId,
    getNewsByMatchId: getNewsByMatchId,
    getNewsBySportId: getNewsBySportId
}