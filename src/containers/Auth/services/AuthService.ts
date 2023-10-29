import { User } from "@shared/models/User";
import { Auth } from "aws-amplify";
import { AxiosResponse } from "axios";
import Http from "configurations/Http";

class AuthService {
  http: Http;
  resource = "/user";

  constructor() {
    this.http = new Http(process.env.REACT_APP_API_URL as string);
  }

  async signIn(
    user: User & { password: string }
  ): Promise<AxiosResponse<User> | any> {
    const { password, email } = user;

    try {
      const signInResult = await Auth.signIn({
        username: email,
        password,
      });

      return signInResult;
    } catch (error) {
      console.log("error signing up:", error);
    }
  }

  async signUp(
    user: User & { password: string }
  ): Promise<AxiosResponse<User> | any> {
    const { nickname, password, email } = user;

    try {
      const signUpResult = await Auth.signUp({
        username: email,
        password,
        attributes: {
          email,
          nickname,
        },
        autoSignIn: {
          enabled: true,
        },
      });

      const params = {
        awsId: signUpResult.userSub,
        nickname,
        email,
        role: "ADMIN",
      };

      return await this.http.post(this.resource, { ...params });
    } catch (error) {
      console.log("error signing up:", error);
    }
  }

  async confirmSignUp(username: string, code: string) {
    try {
      return await Auth.confirmSignUp(username, code);
    } catch (error) {
      console.log("error confirming sign up", error);
    }
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AuthService();
