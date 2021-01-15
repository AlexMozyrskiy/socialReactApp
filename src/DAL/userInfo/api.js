import * as axios from "axios";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "9aff8b45-5e6b-4151-bfce-c962b4066e73"
    }
});

export const userInfoAPI = {
    getUserInfo(id) {
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
    },

    updateOwnerStatus(status) {
        return axiosInstance.put(`profile/status`, { status: status });
    },

    putOwnerPhoto(imageFile) {
        const formData = new FormData();
        formData.append("image", imageFile);   // первый аргумент, то что ожидает сервер, из API документации взято
        return axiosInstance.put(`/profile/photo`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    }
}