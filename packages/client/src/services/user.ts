import request from '@/utils/request';
import axios from 'axios';

export async function query(): Promise<any> {
  return request('/api/users');
}

export async function queryCurrent() {
  const userId = JSON.parse(localStorage.getItem('userId'));
  const response = await axios.get(
    `http://ticket-chain.herokuapp.com/user?userId=${userId.userId}`,
  );
  return response.data;
}

export async function queryNotices(): Promise<any> {
  return request('/api/notices');
}
