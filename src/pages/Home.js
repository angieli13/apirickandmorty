import getData from "../utils/getData";
import Error404 from "./Error404";

const Home = async () => {
  const characters = await getData();

  if (!characters || !characters.results) return Error404();

  const arrData = characters.results.map(character => `
    <article class="Character-item" data-name="${character.name.toLowerCase()}">
      <a href="#/${character.id}/">
        <img src="${character.image}" alt="${character.name}">
        <h2>${character.name}</h2>
      </a>
    </article>
  `);

  const view = `
    <div class="Search">
      <input type="text" id="searchInput" class="Search-input" placeholder="Buscar personajes...">
    </div>
    <div class="Characters" id="charactersList">
      ${arrData.join('')}
    </div>
  `;
  return view;
}

const initSearch = () => {
  const input = document.getElementById('searchInput');
  if (!input) return;

  input.addEventListener('input', (e) => {
    const search = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.Character-item');

    cards.forEach(card => {
      const name = card.dataset.name;
      card.style.display = name.includes(search) ? 'block' : 'none';
    });
  });
};

export { initSearch };
export default Home;