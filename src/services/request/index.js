import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config"

class HYRequest {
    constructor(baseURL, timeout) {
        this.instance = axios.create({
            baseURL,
            timeout
        })
        // 请求拦截器
        this.instance.interceptors.response.use((res) => {
            return res.data
        }, err => {
            return err
        })
    }
    request(config) {
        return this.instance.request(config)
    }

    get(config) {
        return this.request({ ...config, method: "get" })
    }

    post(config) {
        return this.request({ ...config, method: "post" })
    }
}
// esling报错：Assign instance to a variable before exporting as module default  import/no-anonymous-default-export
// export default new HYRequest(BASE_URL, TIMEOUT)
const hyrequest = new HYRequest(BASE_URL, TIMEOUT)
export default hyrequest