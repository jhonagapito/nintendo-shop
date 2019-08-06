import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

type Props = {
    onFilterGames: (filter: string) => void;
}

const GameFilter: React.FC<Partial<Props>> = props => {
    return (
        <div>
            <h5>Filter options</h5>
            <ListGroup>
                <ListGroupItem key="1"><input type="radio"  name="filterPrice" value="all" onChange={() => { props.onFilterGames && props.onFilterGames("all")}}/> Show All</ListGroupItem>
                <ListGroupItem key="2"><input type="radio"  name="filterPrice" value="morethan40" onChange={() => { props.onFilterGames && props.onFilterGames("morethan40")}}/> More than $40</ListGroupItem>
                <ListGroupItem key="3"><input type="radio"  name="filterPrice" value="lessthan40" onChange={() => { props.onFilterGames && props.onFilterGames("lessthan40")}}/> Less than $40</ListGroupItem>
            </ListGroup>
        </div>
    );
}

export default GameFilter;