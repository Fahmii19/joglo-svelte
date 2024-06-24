import type { AxiosInstance } from "axios";
import axiosIntance from "../../utils/axios";
import type { AuthUser, RegisterUser, RequestLogin, Token } from "./type";
import type { Response } from "../../types/response";

class AuthService {
  axiosIntance: AxiosInstance;

  constructor() {
    this.axiosIntance = axiosIntance;
  }

  public async login(param: RequestLogin): Promise<Response<Token>> {
    const response = await this.axiosIntance.post("/auth/login", param);
    return response.data;
  }

  public async register(param: RegisterUser): Promise<Response<AuthUser>> {
    const response = await this.axiosIntance.post("/auth/register", param);
    return response.data;
  }

  public async getDetail(): Promise<Response<AuthUser>> {
    const response = await this.axiosIntance.get("/auth/detail", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("active_token")}`,
      },
    });
    return response.data;
  }

  public async updateDetail(param: AuthUser): Promise<Response<AuthUser>> {
    const response = await this.axiosIntance.post("/auth/update", param, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("active_token")}`,
      },
    });

    return response.data;
  }
}

export default AuthService;
