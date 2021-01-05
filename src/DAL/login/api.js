import * as axios from "axios";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "9aff8b45-5e6b-4151-bfce-c962b4066e73"
    }
});

export const loginAPI = {
    login(email, password, rememberMe = false, captcha = false) {
        return axiosInstance.post(`auth/login`, { email: email, password: password, rememberMe: rememberMe, captcha: captcha })
            .then(response => {
                return response.data;
            });
    },

    logout() {
        return axiosInstance.delete(`auth/login`)
            .then(response => {
                return response.data;
            });
    },

    getCaptcha() {
        return axiosInstance.get("security/get-captcha-url")
            .then(response => {
                return response.data.url;
            });
    },

    isAuth() {                              // залогинен ли пользователь
        return axiosInstance.get("auth/me")
            .then(response => {
                return response.data;
            });
    }
}