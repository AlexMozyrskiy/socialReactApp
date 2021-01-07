import * as axios from "axios";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "9aff8b45-5e6b-4151-bfce-c962b4066e73"
    }
});

export const userInfoAPI = {
    getUserInfoForProfilePage(id) {
        return axiosInstance.get(`profile/${id}`)
            .then(response => {
                return response.data;
            });
    },

    getUserStatus(id) {
        return axiosInstance.get(`profile/status/${id}`)
            .then(response => {
                return response.data;
            });
    }
}