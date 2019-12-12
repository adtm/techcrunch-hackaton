import axios from 'axios';

export async function queryFakeList(params: { count: number }) {
  const response = await axios.get('https://ticket-chain.herokuapp.com/user/tickets?userId=1');
  return response.data;
}
