import { useState, useEffect,useCallback } from 'react';

// WE CANNOT HAVE THE NAME OF THE FUNCCTION AS FETCH because We cannot use hooks inside the normal function*******

export const useFetch = (url) => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
  
    const getProducts = useCallback(async () => {
      const response = await fetch(url);
      const products = await response.json();
      setProducts(products);
      setLoading(false);
    }, [url]);
  
    useEffect(() => {
      getProducts();
    }, [url, getProducts]);
    return { loading, products };
  };
