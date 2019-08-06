import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import Redux, { bindActionCreators } from 'redux';

import { fetchGames, filterGames } from '../actions/listActions';
import { addToCart, clearCart } from '../actions/cartActions';

import GameFilter from './GameFilter';
import GameList from './GameList';
import Cart from './Cart';

const mapState = (state: Models.RootState) => ({
    games: state.games,
    cart: state.cart
});

const mapDispatch = (dispatch: Redux.Dispatch) => bindActionCreators({
    fetchGames, 
    filterGames, 
    addToCart, 
    clearCart
}, dispatch);

type Props = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>;

class ShopContainer extends React.Component<Props> {
    componentDidMount() {
        this.props.fetchGames();
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col sm="2" className="my-1">
                        <GameFilter onFilterGames={this.props.filterGames} />
                    </Col>
                    <Col sm="8" className="my-1">
                        <GameList games={this.props.games} onAddToCart={this.props.addToCart} />
                    </Col>
                    <Col sm="2" className="my-1">
                        <Cart cart={this.props.cart} onClearCart={this.props.clearCart} />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default connect(mapState, mapDispatch)(ShopContainer);