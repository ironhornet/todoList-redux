import axios from "axios";
import { AxiosRequestConfig } from "axios";

const client = axios.create({ baseURL: "http://localhost:3004" });

export const request = <T extends unknown>(
  { ...options }: AxiosRequestConfig,
  onSucces: any,
  onError: any
) => {
  return client(options)
    .then((response: any) => {
      onSucces(response);
    })
    .catch((error: string) => {
      onError(error);
    });
};
