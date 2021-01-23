import * as axios from "axios";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "9aff8b45-5e6b-4151-bfce-c962b4066e73"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, usersPerPage = 10) {
        return axiosInstance.get(`users?page=${currentPage}&count=${usersPerPage}`)
            .then(response => {
                return response.data;
            });
    },

    unFollowUser(id) {
        return axiosInstance.delete(`follow/${id}`)
            .then(response => {
                return response.data;
            });
    },

    followUser(id) {
        return axiosInstance.post(`follow/${id}`, {})
            .then(response => {
                return response.data;
            });
    }
};