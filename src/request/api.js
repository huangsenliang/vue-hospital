import api_login from './moudules/api_login';
import api_index from "./moudules/api_index";
import api_goods from "./moudules/api_goods";
// 默认导出
export default {
    ...api_login,
    ...api_index,
    ...api_goods  // 库存接口
}
