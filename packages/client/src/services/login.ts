import request from '@/utils/request';
import axios from 'axios'
export interface LoginParamsType {
  userName: string;
  password: string;
  mobile: string;
  captcha: string;
}

export async function fakeAccountLogin(params: LoginParamsType) {
  const response = await axios.put('http://ticket-chain.herokuapp.com/ticket', {
    ...params
  })
  return response.data
}

export async function getFakeCaptcha(mobile: string) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}
