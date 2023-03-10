import hyRequest from "..";

export function getHomeGoodPriceDate() {
    return hyRequest.get({
        url:"/home/goodprice"
    })
}
export function getHomeHighScoreDate() {
    return hyRequest.get({
        url:"/home/highscore"
    })
}
export function getHomeDiscountDate() {
    return hyRequest.get({
        url:"/home/discount",
    })
}
export function getHomeHotRecommendDate() {
    return hyRequest.get({
        url:"/home/hotrecommenddest",
    })
}
export function getHomeLongforDate() {
    return hyRequest.get({
        url:"/home/longfor",
    })
}
export function getHomePlusDate() {
    return hyRequest.get({
        url:"/home/plus",
    })
}