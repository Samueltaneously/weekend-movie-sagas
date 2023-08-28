const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
    const params = req.params.id
    const query = `select movies.title, movies.description, array_agg(genres.name) as genres, movies.poster
    from movies
    join movies_genres on movies.id = movies_genres.movie_id
    join genres on movies_genres.genre_id = genres.id
    where movies.id = $1
    group by movies.title,movies.description,movies.poster;`;
    pool.query(query, [params])
        .then(result => {
            res.send(result.rows);
        })
        .catch(err => {
            console.log('ERROR: ', err);
            res.sendStatus(500)
        })

});

module.exports = router;