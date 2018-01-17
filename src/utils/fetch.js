/**
   * url: 地址
   * query: 请求参数
   * ex: queryString('localhost:3000',{a:1,b:2}) => localhost:3000?a=1&b=2
   * 
   * @param {string} url 
   * @param {obj} query 
   */
  queryString = (url, query) => (query && Object.keys(query).length > 0 ) ? `${url}?${Object.keys(query).map(param => `${param}=${query[param]}`).join('&')}` : url;

const get = (url, params) => fetch(queryString(url, params))
const post = (url, data) => fetch(url,{
    method: 'POST',
    headers: {'Accept': 'application/json','Content-Type': 'application/json'},
    body: JSON.parse(data)
  })

export default { get, post};