import type { AxiosInstance } from "axios";
import axiosIntance from "../../utils/axios";
import type { AuthUser } from "../auth/type";
import type { Response } from "../../types/response";

class UserService {
  axiosIntance: AxiosInstance;

  constructor() {
    this.axiosIntance = axiosIntance;
  }

  public async getUsers(id: number): Promise<Response<AuthUser>> {
    const response = await this.axiosIntance.get("/user/detail/" + id);
    return response.data;
  }

  public async getListAgent(): Promise<Response<AuthUser[]>> {
    const response = await this.axiosIntance.get("/user/agent");

    return response.data;
  }

  public async getListAgentByLetter(
    letter: string
  ): Promise<Response<AuthUser[]>> {
    const response = await this.axiosIntance.get("/user/agent/" + letter);

    return response.data;
  }
}

export default UserService;
