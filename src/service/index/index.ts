import type { AxiosInstance } from "axios";
import axiosIntance from "../../utils/axios";
import type { Index, RequestIndex } from "./type";
import type { Response } from "../../types/response";

class IndexService {
  axiosIntance: AxiosInstance;

  constructor() {
    this.axiosIntance = axiosIntance;
  }

  public async index(param: RequestIndex): Promise<Response<Index>> {
    const response = await this.axiosIntance.put("/index", param);
    return response.data;
  }
}

export default IndexService;
