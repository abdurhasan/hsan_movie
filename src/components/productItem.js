import React from 'react';
import {Link} from 'react-router-dom';

function productItem({ item, key }) {
    
    return (

        <div className="card_container" >
            <div href="#" className="card">
                <div className="img-product">
                    <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="true" />
                </div>
                <div className="info-product">
                    <div className="name-product">{item.title}</div>
                    <div className="price-product">Rating {item.vote_average}</div>
                </div>
                <button type="button"> <Link to={`/${item.id}/${item.title}`} style={{ textDecoration: 'none', color: 'white' }}> Detail </Link> </button>
                
            </div>
        </div>
    )

}


export default productItem;

