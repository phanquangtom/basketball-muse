import axios from 'axios';
const url = axios.create ({
    baseURL: "http://localhost:8080"
});

const getPlayers = () => url.get("/players");

export { getPlayers };
