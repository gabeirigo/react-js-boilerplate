import Http from "configurations/Http";

class PartnerService {
  http: Http;
  resource = "/parceiro";

  constructor() {
    this.http = new Http(process.env.REACT_APP_API_URL as string);
  }

  // obterParceiro(codparc: number): Promise<AxiosResponse<Partner>> {
  //   return this.http.get(`${this.resource}/${codparc}`);
  // }
}

export default new PartnerService();
