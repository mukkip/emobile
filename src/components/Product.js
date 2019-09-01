import React, { Component } from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../content';
import {Link} from 'react-router-dom';
export default class Product extends Component{
render(){

    const {id,title,img,price,inCart} = this.props.value;

    return(

        <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3">
      <div className="card">
          <ProductConsumer>
              {
                  value => (
                  <div className="img-container p-5" onClick={()=>value.handleDetail(id)}>
                  <Link to="/details">
                      <img src ={img} alt="product" className="card-img-top" />
                  </Link>
                  <button className="cart-btn" disabled={inCart?true:false} 
                  onClick={
                      ()=>{
                      value.addToCart(id);
                      value.openModal(id);
                      }
                  }>
                      {inCart? (<p className="text-capitalize mb-0" disabled> inCart</p>):
                    <i class="material-icons">
                    add_shopping_cart
                    </i> }
                  </button>
                  </div>
      )

              }
        

            </ProductConsumer>
            {/*Card Footer */}

            <div className="card-footer d-flex justify-content-between">
                <p className="align-self-center mb-0">
                    {title}
                </p>
                <h5 className="text-blue font-italic mb-0">
                    <span className="mr-1">
                      $
                    </span>
                    {price}
                </h5>
            </div>
        
      </div>
        </ProductWrapper >
    );
}

}


const ProductWrapper = styled.div `
.card{
    border-color:transparent;
    transition:all 1s linear;

}
.card-footer{
    backgroud:transparent;
    border-top:transparent;
    transition: all 1s linear;
}
&:hover{
    .card{
        border:0.04rem solid rgba(0,0,0.2);
        box-shadow:2px 2px 2px 2px rgba(0,0,0.2);
    }
    .card-footer{
        backgroud:rgba(247,247,247);
 
    }
    
}

.img-container{
    position:relative;
    overflow:hidden;
}
.card-img-top{
    transiton:all 3s linear;
}
.img-container:hover .card-img-top{
    transform:scale(1.2);
}

.cart-btn{
    position:absolute;
    bottom:0;
    right:0;
    padding:0.2rem 0.4rem;
    background:var(--lightBlue);
    broder:none;
    color:var(--mainWhite);
    font-size:1.4rem;
    border-radius:0.5rem 0 0 0;
    transform:translate(100%,100%)
}

.img-container:hover .cart-btn{

    transform:translate(0,0)
}

.cart-btn:hover{

    color:var(--mainBlue);
    cursor:pointer;
}

`;