import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { storeProducts } from "../data";
import {ProductConsumer} from '../content'

export default class Productlist extends Component {

    state = {
        products: storeProducts
    }


    render() {

        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title type="mobile" title="products"></Title>
                    
                    <div className="row">
                        <ProductConsumer>
                            {
                                (value)=>{
                                return value.products.map(product =>{
                                    return <Product key={product.id} value={product} />
                                })
                                }
                            }
                        </ProductConsumer>
                    </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}