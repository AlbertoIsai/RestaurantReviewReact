import axios from "axios"
const API_URL = 'http://localhost:8090'

class RestaurantDataService {

    getAllRestaurants() {
        return axios.get(`${API_URL}/restaurants`)
    }

    getRestaurantById(id) {
        return axios.get(`${API_URL}/restaurants/${id}`)
    }

    updateRestaurant(id, restaurant) {
        return axios.put(`${API_URL}/restaurants/${id}/edit`, restaurant)
    }

    createRestaurant(restaurant) {
        return axios.post(`${API_URL}/restaurants/-1/edit`, restaurant)
    }

}
export default new RestaurantDataService()