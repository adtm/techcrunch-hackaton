import axios from 'axios';

export async function queryFakeList(params: { count: number }) {
  const userId = JSON.parse(localStorage.getItem('userId'));
  const response = await axios.get(`http://localhost:1001/user/tickets?userId=${userId.userId}`);
  return response.data;
}

export async function queryUserName() {
  const userId = JSON.parse(localStorage.getItem('userId'));
  const url = `http://localhost:1001/user?userId=${userId.userId}`;
  const response = await axios.get(url);
  return response.data;
}
