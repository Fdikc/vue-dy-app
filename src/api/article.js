import request from "@/utils/request.js";

export function articleGetAllService() {
    return request({
        url: "/article/getAll",
        method: "get",
    });
}

export function articleSearchService(condition) {
    return request.get("/article/search", {params: condition})
}