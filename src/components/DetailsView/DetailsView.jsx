import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom';


function DetailsView() {

    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const detailsData = useSelector(store => store.detailsData);
    console.log('detailsdata:', detailsData);


    useEffect(() => {
        dispatch({ type: 'FETCH_DETAILS_DATA', payload: params.id });
    }, []);

    return (
        <main>
            <section className="movie">
                <h1>{detailsData.title}</h1>
                <h5>Genres: {detailsData.genres.join(', ')}</h5>
                <h5>Summary:</h5>
                <p>{detailsData.description}</p>
                <img src={detailsData.poster} alt={detailsData.title} />
            </section>
        </main>

    );
}

export default DetailsView;