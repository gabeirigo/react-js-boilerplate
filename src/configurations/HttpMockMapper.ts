import ParceiroMock from "@mock/ParceiroMock";

type HttpMockMapperType = { [key: string]: {} };

const HttpMockMapper: HttpMockMapperType = {
  "parceiro": ParceiroMock,
};

export default HttpMockMapper;
