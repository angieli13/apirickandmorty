const apiURL = 'https://rickandmortyapi.com/api/character/';
const getData = async (id) => {
  const apiURl = id ? `${apiURL}${id}` : apiURL;
  try {
    const response = await fetch(apiURl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch Error', error);
  }
};
export default getData;

