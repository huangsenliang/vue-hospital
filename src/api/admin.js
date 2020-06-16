import service from "@/utils/request";


/**
 ************************* 诊所设置接口**********************
 * */

/**
* 获取诊所列表
* */
export function getClinic(data) {
    console.log('参数是：', data);
    return service.request({
        method: "get",
        url: `/clinic/getClinic/${data.id}`,
        data
    })
}

/**
 * 获取科目列表
 * */
export function getListSubjects(data) {
    console.log('参数是：', data);
    return service.request({
        method: "get",
        url: `/medicalSubjects/listMedicalSubjects/${data.clinicId}`,
        data
    })
}

/**
 * 添加诊所接口
 * */
export function updateClinic(data) {
    console.log('参数是：', data);
    return service.request({
        method: "post",
        url: "/clinic/updateClinic",
        data
    })
}


/********************诊室接口***************/
/**
 * 获取诊所列表
 * */
export function getListRoom(data) {
    console.log('参数是：', data);
    return service.request({
        method: "get",
        url: `/consultationRoom/listRoom/${data.clinicId}`,
        data
    })
}


/**
 * 修改诊室
 * */
export function updateRoom(data) {
    console.log('参数是：', data);
    return service.request({
        method: "put",
        url: `/consultationRoom/updateRoom`,
        data
    })
}

/**
 * 修改诊室
 * */
export function addRoom(data) {
    console.log('参数是：', data);
    return service.request({
        method: "post",
        url: `/consultationRoom/saveRoom`,
        data
    })
}