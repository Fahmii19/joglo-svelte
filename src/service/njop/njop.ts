import type { AxiosInstance } from "axios";
import axiosIntance from "../../utils/axios";
import type { Response } from "../../types/response";
import type { NJOP, RequestNJOP } from "./type";

class NjopService {
  axiosIntance: AxiosInstance;

  constructor() {
    this.axiosIntance = axiosIntance;
  }

  public async GetNJOP(param: RequestNJOP): Promise<Response<NJOP>> {
    const response = await this.axiosIntance.post("/njop", param);
    return response.data;
  }
}

export default NjopService;
