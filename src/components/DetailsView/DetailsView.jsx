import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function DetailsView() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <section className="movie">
                return (
                <div key={movie.id} >
                    <h1>{movie.title}</h1>
                    <h5>Genres: {movie.genre}</h5>
                    <h5>Summary:</h5>
                    <p>{movie.description}</p>
                    <img src={movie.poster} alt={movie.title} />
                </div>
                );
            </section>
        </main>

    );
}

export default DetailsView;