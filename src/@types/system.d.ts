declare module System {
    type Game = {
        id: number;
        title: string;
        description: string;
        gameUrl: string;
        currencyId: string;
        currencyFormat: string;
        price: number;
    };

    type CartItem = {
        game: Game;
        quantity: number;
    }
}