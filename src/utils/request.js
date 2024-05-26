import axios from "axios";
import {ElMessage} from "element-plus";

const baseUrl = "http://localhost:8080";

let instance = axios.create({baseURL: baseUrl});


//响应拦截器
instance.interceptors.response.use(
    response => {
        if (response.data.code === 200) {
            return response.data;
        }
        ElMessage.error(response.data.msg ? response.data.msg : '服务器异常');
        return Promise.reject(response.data);
    },
    error => {
        ElMessage.error('服务器异常');
        return Promise.reject(error);
    }
);

export default instance;