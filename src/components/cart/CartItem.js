import React from 'react';

export default function CartItem({ item, value }) {

    const { id, title, img, price, total, count } = item;
    const { increment, decrement, removeItem } = value;

    return (
        <div className="row my-1 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} style={{ width: '5rem', height: '5rem' }} alt="product" className="img-fluid" />
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Product:</span>{title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Prize:</span>{price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" onClick={() => decrement(id)}>-</span>
                    </div>
                    <span className="btn btn-black mx-1">{count}</span>
                    <div>
                        <span className="btn btn-black mx-1" onClick={() => increment(id)}>+</span>
                    </div>
                </div>
            </div>
            {/** */}

            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={()=> removeItem(id)}>
                    <i class="material-icons">
                        remove_shopping_cart
                    </i>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong>Item Total: $</strong>
                {total}
            </div>
        </div>
    )

}
