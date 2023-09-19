import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://6506a5313a38daf4803e8f7b.mockapi.io/',
  });

const getCars = async (page) => {
    try {
        const response = await instance.get(`/adverts?page=${page}&limit=8`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

const makeFavorite = async (updateCar) => {
    const {id} = updateCar
    console.log('id' + id)
    try {
        const response = await instance.put(`/adverts/${id}`, updateCar)
        console.log(response)
        return response.data
        
    } catch (error) {
        console.log(error)
    }
}

const getFavoriteCars = async () => {
    try {
        const response = await instance.get(`/adverts?title=favorite`)
        console.log(response.data)
        return response.data
        
    } catch (error) {
        console.log(error)
    }
}

export {getCars, makeFavorite, getFavoriteCars}