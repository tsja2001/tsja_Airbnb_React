import { pageSize } from "@/config";
import tsjaRequest from "..";

export function getEntireRoomList(offset = 0, size = pageSize) {
  return tsjaRequest.get({
    url: 'entire/list',
    params: {
      offset,
      size
    }
  })
}

