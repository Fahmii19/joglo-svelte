import type { AxiosInstance } from "axios";
import axiosIntance from "../../utils/axios";
import type { GeoJSON, Property, PropertyLiked } from "./type";
import type { Response } from "../../types/response";

class ListPropertyService {
  axiosIntance: AxiosInstance;

  constructor() {
    this.axiosIntance = axiosIntance;
  }

  public async listPropertyGeoJSON(param: any): Promise<GeoJSON> {
    const response = await this.axiosIntance.post("/property/geojson", param);
    return response.data;
  }

  public async setLikeProperty(list_id: Number): Promise<Response<any>> {
    const response = await this.axiosIntance.post(
      `/property/likes/${list_id}`,
      null,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("active_token")}`,
        },
      }
    );
    return response.data;
  }

  public async getLikeProperty(): Promise<Response<PropertyLiked[]>> {
    const response = await this.axiosIntance.get("/property/likes", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("active_token")}`,
      },
    });
    return response.data;
  }

  public async insertProperty(property: Property): Promise<Response<Property>> {
    // Axios FormData
    const formData = new FormData();
    formData.append("data", JSON.stringify(property));

    const response = await this.axiosIntance.post("/property", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("active_token")}`,
      },
    });

    return response.data;
  }
}

export default ListPropertyService;
