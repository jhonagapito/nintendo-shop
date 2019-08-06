import React from 'react';
import GameItem from './GameItem';
import { Container, Row, Col } from 'reactstrap';

type Props = {
    games: System.Game[];
    onAddToCart: (item: System.CartItem) => void;
}

const GameList: React.FC<Props> = props => {
    return (
        <div>
            <h5>Game List</h5>
            <Container>
                <Row>
                    {
                        props.games &&
                        props.games.map(game => (
                            <Col xs="4" className="my-1" key={game.id}>
                                <GameItem item={game} onAddToCart={props.onAddToCart}/>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    );
}

export default GameList;