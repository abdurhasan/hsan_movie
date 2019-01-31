import axios from 'axios'
import '../styles/product_list.css'
import React, { Component } from 'react';
import * as ACTIONS from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'


// component
import ProductItem from '../components/productItem'

class productList extends Component {
    constructor(props) {
        super(props)

        this.state = {            
            hasMore: true,
            currentPage: 0,
            totalPages: 0

        }

        window.onscroll = () => {                        
            // console.log('INNERHEIGHT',window.innerHeight)            
            // console.log('SCROLL Y',window.scrollY)
            
            // console.log('OFFSETHEIGHT',document.documentElement.offsetHeight)
            // if (
            //     (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500)
                
            //   ) {
            //     alert('woi')
            //   }
        };

    }

    loadData = () => {
        this.setState({
            currentPage: this.state.currentPage + 1
        })

    }



    componentDidMount() {
        this.props.actions.getMovieList();        
    }

    render() {
        let {data} = this.props
        
        
        
        let result = data[0] !== undefined ?  data[0].results : []
        
        let displayProduct = result.map((item, index) => {
            return (<ProductItem key={index} item={item} />)
        })

        if (result.length !== 0) {
            
            return (
                <div>                    
                    <div id="body">                    
                        {displayProduct}
                    </div>
                </div>
            );
        } else {
            return <div><h1>Loading..</h1></div>
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
export default connect(mapStateToProps, mapDispatchToProps)(productList);