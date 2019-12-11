import axios from 'axios';

export async function queryFakeList(params: { count: number }) {
  axios.get('http://localhost:1001/user/tickets');
}
