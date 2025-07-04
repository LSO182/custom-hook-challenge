export const getGifs = async (category) => {
  const apiKey = import.meta.env.VITE_GIPHY_API_KEY;
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=20`;
  const res = await fetch(apiUrl);
  const { data } = await res.json();

  const gifs = data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url,
  }));

  return gifs;
};
