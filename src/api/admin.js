import service from "@/utils/request";


/**
 ************************* 诊所设置接口**********************
 * */


/**
 * 添加诊所接口
 * */
export function addClinic(data) {
    return service.request({
        method: "put",
        url: "/clinic/updateClinic",
        data
    })
}

/**
 * 获取诊所列表
 * */
export function getClinic(data) {
    return service.request({
        method: "get",
        url: `/clinic/getClinic/${data.id}`,
    })
}

