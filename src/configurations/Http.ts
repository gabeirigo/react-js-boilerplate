import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import MockAdapter from "axios-mock-adapter";
import HttpMockMapper from "./HttpMockMapper";

class Http {
  private axios: AxiosInstance;

  constructor(baseURL: string) {
    const configuration: AxiosRequestConfig = {
      baseURL,
      timeout: 300000,
    };
    this.axios = axios.create(configuration);
    // process.env.NODE_ENV === 'development' && this.setMockResponseInDevelopmentEnv();
    this.configurationInterceptor();
  }

  private configurationInterceptor(): void {
    this.axios.interceptors.request.use(this.requestConfiguration as any);
    this.axios.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error: any) => this.responseErrorHandler(error)
    );
  }

  private setMockResponseInDevelopmentEnv() {
    const mock = new MockAdapter(this.axios);
    const mockMapper = Object.keys(HttpMockMapper);

    mockMapper.forEach((endopint: string) => {
      mock.onGet(new RegExp(endopint)).reply(200, HttpMockMapper[endopint]);
    });
  }

  public get<T>(
    resource: string,
    parameters?: any
  ): Promise<AxiosResponse<T, any>> {
    return this.axios.get<T>(resource, { params: parameters });
  }

  public post<T>(
    resource: string,
    parameters?: any
  ): Promise<AxiosResponse<T, any>> {
    return this.axios.post<T>(resource, parameters);
  }

  public put<T>(
    resource: string,
    parameters?: any
  ): Promise<AxiosResponse<T, any>> {
    return this.axios.put<T>(resource, parameters);
  }

  private requestConfiguration(
    configuration: AxiosRequestConfig
  ): AxiosRequestConfig {
    const accessToken = window.localStorage.accessToken;
    if (accessToken) {
      configuration.headers = {
        Authorization: `Bearer ${accessToken}`,
        "Application-Id": process.env.REACT_APP_APPLICATION_ID,
        "Application-Secret": process.env.REACT_APP_SECRET,
        "Content-Type": "application/json",
      };
    }
    return configuration;
  }

  private responseErrorHandler(error: any) {
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      console.log("Não existe um handler para esse caminho.");
      return;
    } else if (!error.response) {
      throw error;
    } else {
      return Promise.reject(error);
    }
  }
}

export default Http;
