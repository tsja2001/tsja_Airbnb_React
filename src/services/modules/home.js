import tsjaRequest from "..";

export function getHomeGoodPriceData(){
  return tsjaRequest.get({
    url: "/home/highscore"
  })
}

export function getHomeHighSocreData(){
  return tsjaRequest.get({
    url: "/home/goodprice"
  })
}

export function getHomeDiscountData(){
  return tsjaRequest.get({
    url: "/home/discount"
  })
}

export function getHomeHotRecommendData(){
  return tsjaRequest.get({
    url: "/home/hotrecommenddest"
  })
}