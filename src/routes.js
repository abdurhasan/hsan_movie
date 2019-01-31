import React from 'react';
import {Route,Switch} from 'react-router-dom'
import ProductList from './components/productList';
import MovieDetail from './components/movie_detail'
const routes = () => {
    return (
        <div>
        
            <header>
                <h1>Uang anda : {localStorage.getItem('token_jajan')}</h1>    
            </header>           
            <Route exact path="/:movie_id/:slug" component={MovieDetail}/>            
            <Route exact path="/" component={ProductList}/>            
              
        </div>
    );
};

export default routes;