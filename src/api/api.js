import axios from "axios";


const productApi = "https://dummyjson.com/products";

export const callApi = async () => {
    try {
        const response = await axios.get(productApi);
        return response.data.products;
    } catch (e) {
        console.log(e.message || e);
    }
}