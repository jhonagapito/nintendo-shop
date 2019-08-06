import React from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

type Props = {
    cart: System.CartItem[];
    onClearCart: () => void;
}

const Cart: React.FC<Props> = props => {

    const handleCheckout = () => {
        props.onClearCart && props.onClearCart();
        alert('Thank You!');
    }

    return (
        <div>
            <h5>Shopping Cart</h5>
            <strong>Total: $ {props.cart.reduce((sum, i) => ( sum += i.quantity * i.game.price), 0)}

            </strong>
            <ListGroup>
                {
                    props.cart &&
                    props.cart.map(item => (
                        <ListGroupItem key={item.game.id}>
                            <img src={`/images/${item.game.id}.png`} className="w-25" alt="image1" /> 
                            {item.game.title} <br/>
                            {' ' + item.game.currencyFormat + item.game.price} X { item.quantity} <br />
                            {'Total: ' + (item.quantity * item.game.price)}
                        </ListGroupItem>
                    ))
                }
                { (props.cart && props.cart.length === 0) && <ListGroupItem key="1">No items in the cart</ListGroupItem>}
            </ListGroup>
            <Button color="success" onClick={handleCheckout}>Checkout</Button>{' '}
            <Button color="danger" onClick={() => { props.onClearCart && props.onClearCart()}}>Clear</Button>
        </div>
    );
}

export default Cart;