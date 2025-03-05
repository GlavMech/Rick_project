export const fetchEpisodes = async () => {
  let episodes = [];
  let url = "https://rickandmortyapi.com/api/episode"; 

  while (url) {
    const response = await fetch(url);
    const data = await response.json();
    episodes = [...episodes, ...data.results];
    url = data.info.next; 
  }
  return episodes; 
};

export const fetchCharacters = async (ids) => {
  await sleep(1000);
  return fetch(
    `https://rickandmortyapi.com/api/character/${ids.join(",")}`
  ).then((response) => response.json());
};

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const fetchLocations = () => {
  return fetch("https://rickandmortyapi.com/api/location")
    .then((response) => response.json())
    .then((data) => data.results);
};
