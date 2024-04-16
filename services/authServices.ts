import axios from "axios";
const BASE_URL = "https://api.ana.tokenminds.co";
const SOCIAL_REGISTER_URL = BASE_URL + "/users/social-register";

export interface AuthData {
  email: string;
  password: string;
}

export interface SocialLoginData {
  provider: "GOOGLE" | "FACEBOOK" | "APPLE";
  appId: string;
}

export interface SocialRegisterData {
  provider: "GOOGLE" | "FACEBOOK" | "APPLE";
  name: string;
  appId: string;
  email?: string;
}

export const socialRegister = async (
  data: SocialRegisterData
): Promise<any> => {
  try {
    const response = await axios.post(SOCIAL_REGISTER_URL, data);
    const responseOk = response.status === 200 || response.status === 201;
    const responseJSON = await response.data;

    return { responseOk, responseJSON };
  } catch (error: any) {
    const responseJSON = error.response.data;
    const responseOk = false;
    return { responseOk, responseJSON };
  }
};
