import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const registerUser = async (walletAddress: string, password: string) => {
  try {
    const response = await api.post('/users/register', {
      wallet_address: walletAddress,
      password: password,
    });
    return response.data;
  } catch (error: any) {
    console.error('Error registering user:', error.response?.data || error.message);
    throw error;
  }
}

export const signInUser = async (walletAddress: string, password: string) => {
  try {
    const response = await api.post('/users/sign-in', {
      wallet_address: walletAddress,
      password: password,
    });
    return response.data;
  } catch (error: any) {
    console.error('Signin error:', error.response?.data || error.message);
    throw error;
  }
}

export const fetchUserByWalletAddress = async (wallet_address: string) => {
  const response = await api.get(`/users/${wallet_address}`);
  return response;
}
