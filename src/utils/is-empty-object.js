export function isEmptyObject(obj) {
    // !!转为boolean类型
    return !!Object.keys(obj).length
}