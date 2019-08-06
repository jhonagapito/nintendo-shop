import React from 'react';
import { Card, CardImg, CardText, CardBody,
      CardSubtitle, Button } from 'reactstrap';

    type Props = {
      item: System.Game;
      onAddToCart: (item: System.CartItem) => void;
}

const GameItem: React.FC<Props> = props => {
    return (
        <div>
          <Card>
            <CardImg top width="100%" src={`/images/${props.item.id}.png`} alt="Card image cap" />
            <CardBody>
              <a href={`${props.item.gameUrl}`}>{props.item.title}</a>
              <CardSubtitle>Released {props.item.description}</CardSubtitle>
              <CardText>{props.item.currencyFormat +' '+ props.item.price}</CardText>
              <Button className="btn-success" 
                      onClick={() => { props.onAddToCart && props.onAddToCart({ quantity: 1, game: props.item})}}>Add to Cart</Button>
            </CardBody>
          </Card>
        </div>
    );
}

export default GameItem;