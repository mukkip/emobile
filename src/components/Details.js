import React, { Component } from 'react';
import { ProductConsumer } from '../content';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button'

export default class Details extends Component {
    render() {

        return (

            <ProductConsumer>
                {(value) => {

                    const { id, company, img, info, price, title, inCart } = value.detailProduct;

                    return (
                        <div className="container py-5">
                            {/*title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue ">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/*End Of title */}
                            {/*Product Info */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">

                                    <img src={img} className="img-fluid" alt="product" />

                                </div>
                                {/*product text */}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <h2>model: {title}</h2>
                                <h4>Price : {price}</h4>
                                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                    Summary:
                                </p>
                                <p className="text-muted lead">{info}</p>

                                {/* Add to cart buttons */}
                                <div> 
                                <Link to='/'>
                                    <ButtonContainer>
                                        Bact to Products
                                    </ButtonContainer>
                                    </Link>

                                    <ButtonContainer cart disabled={inCart?true:false}
                                    onClick={
                                        ()=>{
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }
                                    }>
                                        {inCart?"inCart" : "add to Cart"}
                                    </ButtonContainer>
                                </div>
                                </div>
                            </div>
                        </div>
                    )
                }

                }
            </ProductConsumer>
        );
    }

}