import axios from 'axios'
const configPath = '/api';

export const utils = {
  get(url, data = {}){
    url = configPath + url;
    return new Promise((resolve, reject) => {
      axios.get(url, data).then((response) => {
        resolve(response.data)
      })
    })
  }
};


