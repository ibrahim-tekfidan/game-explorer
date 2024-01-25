import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '23c04f385a524de09a778b762ce1c462',
  },
});
