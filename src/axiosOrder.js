import axios from "axios";

const axiosOrder = axios.create({
    baseURL: "https://pizza-8995e.firebaseio.com/"
});

export default axiosOrder;