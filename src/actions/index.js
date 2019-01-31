
import axios from 'axios';
import * as TYPES from '../action_types';
const M_URL = 'https://api.themoviedb.org/3/movie'
const API_KEY = 'f76ffd152bb60dbec060db9173776255';

const URL = 'http://localhost:8888/api/products';




function getMovieListSuccess(data){
    return { type: TYPES.GET_MOVIE_LIST_SUCCESS ,data}
}
function getMovieListFailure(){
    return { type: TYPES.GET_MOVIE_LIST_FAILURE }
}


export function paymentProduct(){
    
}


export function getMovieList(page){
    return dispatch => {
        return axios
            .get(`${M_URL}/now_playing?api_key=${API_KEY}&&page=${page}`)
            .then(snap=>dispatch(getMovieListSuccess(snap.data)))
            .catch(err=>dispatch(getMovieListFailure(err)))
    }
}

function getMovieDetailSuccess(data){
    return { type: TYPES.GET_MOVIE_DETAIL_SUCCESS ,data}
}
function getMovieDetailFailure(){
    return { type: TYPES.GET_MOVIE_DETAIL_FAILURE }
}


export function getMovieDetail(id){
    return dispatch => {
        return axios
            .get(`${M_URL}/${id}?api_key=${API_KEY}`)
            .then(snap=>dispatch(getMovieDetailSuccess(snap.data)))
            .catch(err=>dispatch(getMovieDetailFailure(err)))
    }
}

















// function loadAllProductFailure(err) {
//     return { type: TYPES.LOAD_ALL_PRODUCTS_FAILURE ,err}
// }

// function loadAllProductSuccess(products) {
//     return { type: TYPES.LOAD_ALL_PRODUCTS_SUCCESS, products }
// }



// export function loadProductsAll(hal) {
//     return dispatch => {
//         return axios
//             .get(`${URL}?page=${hal}`)
//         .then(snap=>dispatch(loadAllProductSuccess(snap.data)))
//         .catch(err=>dispatch(loadAllProductFailure(err)))
//     }

// }

// function letPage(pages){
//     return {type:TYPES.GET_PAGES,pages:pages}
// }

// export function getPages() {
//     return dispatch=>{ axios.get(`${URL}/pages`)
//         .then(snap=>dispatch(letPage(snap.data)))
//     }
//   }
  
  