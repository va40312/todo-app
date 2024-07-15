import axiosInstance from "./axios-instance";

const userService = {
  login: (data) => {
    return axiosInstance.post("auth/login", data);
  },
  register: (data) => {
    return axiosInstance.post("auth/register", data);
  }
};

export default userService;