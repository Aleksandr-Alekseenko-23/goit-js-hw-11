import axios from 'axios';

export const getFoto = async (input, page, per_page) => {
  console.log(page);
  try {
    const searchParams = new URLSearchParams({
      key: '29205442-de93c714ea8b3e401a30c89a2',
      q: `${input}`,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page,
      page,
    });
    return await axios.get(`https://pixabay.com/api/?${searchParams}`);
  } catch (error) {
    throw new Error(data.statusText);
  }
};
