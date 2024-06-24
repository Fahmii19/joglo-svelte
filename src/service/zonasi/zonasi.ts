import type { AxiosInstance } from "axios";
import axiosIntance from "../../utils/axios";
import type { Response } from "../../types/response";
import type { RequestZonasi, Zonasi } from "./type";

class ZonasiService {
  axiosIntance: AxiosInstance;

  constructor() {
    this.axiosIntance = axiosIntance;
  }

  public async zonasi(param: RequestZonasi): Promise<Response<Zonasi>> {
    const response = await this.axiosIntance.post("/zonasi", param);
    return response.data;
  }
}

export default ZonasiService;
