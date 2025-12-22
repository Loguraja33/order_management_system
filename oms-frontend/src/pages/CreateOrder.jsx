useEffect(() => {
  const token = localStorage.getItem('token'); // if auth enabled
  axios.get('http://localhost:5000/orders', {
    headers: token ? { Authorization: `Bearer ${token}` } : {}
  })
  .then(res => setOrders(res.data.orders))
  .catch(err => console.log(err.response?.data || err));
}, []);
