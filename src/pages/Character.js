import getHash from "../utils/getHash";
import getData from "../utils/getData";
import Error404 from "./Error404";

const Character = async() => {
    const id = getHash();
    const character = await getData(id);
    
    if (!character) return Error404();

    const view = `
    <div class="Character-inner">
        <article class="Character-card">
            <img src="${character.image}" alt="${character.name}">
        </article>
        <div class="Character-info">
            <h2>${character.name}</h2>
            <h3>Episode: <span>${character.episode.length}</span></h3>
            <h3>Status: <span>${character.status}</span></h3>
            <h3>Species: <span>${character.species}</span></h3>
            <h3>Gender: <span>${character.gender}</span></h3>
            <h3>Origin: <span>${character.origin.name}</span></h3>
            <h3>Last Location: <span>${character.location.name}</span></h3>
        </div>
    </div>
    `;
    return view;
};

export default Character;