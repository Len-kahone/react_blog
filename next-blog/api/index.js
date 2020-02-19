import axios from '../utils/request';

export function getArticleList() {
  return axios.get('/getArticleList').then(res => res.data);
}
export function getArticleById(id) {
  return axios
    .get('/getArticleById', {
      params: {
        id
      }
    })
    .then(res => {
      return res.data.data[0];
    });
}
export function getTypeList(id) {
  return axios.get('/getTypeList').then(res => {
    return res.data;
  });
}
export function getListById(id) {
  return axios.get('/getListById?id=' + id).then(res => {
    return res.data;
  });
}
