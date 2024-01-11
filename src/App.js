//import logo from './logo.svg';
import './App.css';
import SearchPage from './SearchPage.js';
import { mockdata } from "./constants/products.js"
import CONFIG from './config/config.js';
import { useState, useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import Producto from './Producto.js';
import NotFound from './NotFound.js';

import Loading from './Loading.js';


function App() {
 
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // const [error, setError] = useState(null);
  // const [exception, setException] = useState(null);

  useEffect(() => {

    async function fetchData() {

      if (CONFIG.use_server) {

        let queryParams = "?limit=" + CONFIG.num_items;

        try {

          setLoading(true);

          const response = await fetch(`${CONFIG.server_url}${queryParams}`);
          const data = await response.json();

          if (response.status === 200) {
            setResultado(data);
            setLoading(false);

          } else {
            setResultado(null);
            // setProductos(null);
            // setError({ 'cod': data.cod, 'message': data.message });
          }
        }
        catch (e) {
          console.log(e);
          setResultado(null);
          setLoading(false);
          // setError(null);
          // setException({ description: e.message });
        }

      }
      else {
        setLoading(true);
        
        setResultado(mockdata);
        // setProductos(mockdata.products);
        // setFilteredProducts(mockdata.products)
        // setLoading(false);
        handleLoad(false);
        // console.log(mock1);
      }

    }
    fetchData();


  }, []);

  function handleLoad(value) {
    if(!value){
      setTimeout(() => {
        setLoading(false);
      }, 1000); 
    }else{
      setLoading(value);
    }
  }

  return (
    <div className="App">

      {loading ? (
        <Loading />
        ) : (
          <Routes>
            <Route path='/' element={<SearchPage theproducts={resultado.products} />} />
            <Route path="/products/:productId" element={<Producto products={resultado.products} handleLoad={handleLoad}/>} />
            <Route path="*" element={<NotFound handleLoad={handleLoad}/>} />
          </Routes>
        )
      }

    </div>
   

  );
}

export default App;
