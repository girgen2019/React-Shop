/** @format */
import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';

export const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function getGoots() {
    fetch(API_URL, {
      headers: {
        "Authorization": 'dfedcc26-0616c6f0-db869017-bc0b5b12',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
        setLoading(false);
      });
  }, []);

  return (
    <main className="container content">
    { loading 
    ? 
    <Preloader /> : <GoodsList goods={goods}/>}
    
    
    </main>

  )
  
};
