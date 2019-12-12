import request from '@/utils/request';
import axios from 'axios'
export interface LoginParamsType {
  userName: string;
  password: string;
  mobile: string;
  captcha: string;
}

export async function fakeAccountLogin(params: LoginParamsType) {
  const response = await axios.get(`http://ticket-chain.herokuapp.com/login?userName=${params.userName}&password=${params.password}`)
  return response.data
}

export async function getFakeCaptcha(mobile: string) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}
