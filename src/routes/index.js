import Header from "../templates/Header";
import Home, { initSearch } from "../pages/Home";
import Character from "../pages/character";
import Error404 from "../pages/Error404";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoute";

const routes = {
    '/': Home,
    '/:id': Character,
};

const router = async () => {
    const header = document.getElementById('Header');
    const content = document.getElementById('Content');
    header.innerHTML = Header();
    let hash = getHash();
    let route = resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render();
    initSearch();
};

export default router;