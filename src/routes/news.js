const News = require('../controllers/news');

module.exports = function(app) {
    app.route('/news/create').post(async (req, res, next) => {
        try {
            let { matchId, tourId } = req.query;
            let { title, description } = req.body;
            const result = await News.createNews({ title, description, matchId, tourId });
            return res.status(201).json(result);
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/get_by_tour_id').get(async (req, res, next) => {
        try {
            let params = req.query;
            params.tourId = parseInt(params.tourId, 10);
            let result = await News.getNewsByTourId(params);
            return res.json(result);
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/get_by_match_id').get(async (req, res, next) => {
        try {
            let params = req.query;
            params.matchId = parseInt(params.matchId, 10);
            let result = await News.getNewsByMatchId(params);
            return res.json(result);
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/get_by_sport_id').get(async (req, res, next) => {
        try {
            let params = req.query;
            params.sportId = parseInt(params.sportId, 10);
            let result = await News.getNewsBySportId(params);
            return res.json(result);
        } catch (err) {
            return next(err);
        }
    })

}