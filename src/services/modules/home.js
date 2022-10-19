import tsjaRequest from "..";

export function getHomeGoodPriceData(){
  return tsjaRequest.get({
    url: "/home/goodprice"
  })
}