import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID K0yCtrg_SpKtbkrsic0y7mOtdXZ6GBLS4ty4gYtvdAc',
  },
});
