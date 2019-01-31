import React,{Component} from 'react';
import '../styles/movie_detail.css'
import  * as ACTIONS from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


class movie_detail extends Component {
    constructor(props){
        super(props)

        this.clickPayment = this.clickPayment.bind(this)
    }
    
    componentWillMount() {
        if(localStorage.getItem('token_jajan')){
            localStorage.setItem('token_jajan',100000)
        }else{
            localStorage.setItem('token_jajan',localStorage.getItem('token_jajan'))
        }
    }
    

    componentDidMount() {
        this.props.actions.getMovieDetail(this.props.match.params.movie_id)
    }

    pricing(rate){
        
        let nilai = 0
        if(rate<3){
            nilai =3500   
        }
        if(3<rate<6){
            nilai= 8250
        }
        if(6<rate<=8){
            nilai= 16350   
        }
        if(rate>8){
            nilai= 21250
        }
        return nilai
    }

    clickPayment(harga){
        let uang = parseInt(localStorage.getItem('token_jajan'))        
        localStorage.setItem('token_jajan',uang-harga)
        alert(`uang anda sekarang : ${uang-harga}`)
    }
    
    render() {
        let {data} = this.props
        
        if(data.length !==0){
            return (
                <main className="container">
                    {/* Left Column / Headphones Image */}
                    <div className="left-column">
                        <img  className="active" src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="true" />
                        
                    </div>
                    {/* Right Column */}
                    <div className="right-column">
                        {/* Product Description */}
                        <div className="product-description">
                            <h1>{data.original_title}</h1>
                            <p>{data.overview}</p>
                        </div>
                        {/* Product Configuration */}
                        <div className="product-configuration">
                            {/* Product Color */}
                            <div className="product-color">
                                <span>Realease date : {data.release_date}</span>
                                
                            </div>
                            {/* Cable Configuration */}
                            <div className="cable-config">
                                <span>Memory choosing</span>
                                <div className="cable-choose">
                                    <div>{data.vote_average} Rate</div>
                                    <button>{data.status}</button>
                                </div>
                            </div>
                        </div>
                        {/* Product Pricing */}
                        <div className="product-price">
                            <span>Rp {this.pricing(data.vote_average)}</span>
                            <div  className="cart-btn" onClick={()=>this.clickPayment(this.pricing(data.vote_average))}>Add to cart</div>
                        </div>
                    </div>
                </main>        
            )
        }else{
            return(
                <h1>Loading...</h1>
            )
        }
    }
}





const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(ACTIONS, dispatch)
    }
}
const mapStateToProps = (state) => {

    return {
        data: state.products,

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(movie_detail);







