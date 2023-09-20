import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://6506a5313a38daf4803e8f7b.mockapi.io/',
});

const getCars = async page => {
  try {
    const response = await instance.get(`/adverts?page=${page}&limit=8`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getFavoriteCars = async () => {
  try {
    const response = await instance.get('/adverts?favorite=true');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const updateFavorite = async ({ update }) => {
  const { id, ...rest } = update;
  try {
    const response = await instance.put(`/adverts/${id}`, { ...rest });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { getCars, getFavoriteCars, updateFavorite };
