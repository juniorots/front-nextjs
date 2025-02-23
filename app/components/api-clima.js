import axios from 'axios';

const API_KEY = "319939a7cd490ce533a96091268b7b33";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const apiClima = async (cidade) => {
    let URL = `${BASE_URL}?q=${cidade}&appid=${API_KEY}&units=metric&lang=pt`;
    try {
        const response = await axios.get(URL);
        return response.data;
    } catch (error) {
        console.log(`Error: ${error}`);
        throw error;
    }
}

export default apiClima;