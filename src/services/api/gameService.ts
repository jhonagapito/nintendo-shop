const root = 'http://localhost:59131/api/games';

const routes = {
    ROOT: root,
    GAME: (id: number) => `${root}/${id}`
}

export const get = async() => {
    return fetch(routes.ROOT, { method: 'GET'})
        .then(res => res.json())
        .catch(err => console.log(err));
}