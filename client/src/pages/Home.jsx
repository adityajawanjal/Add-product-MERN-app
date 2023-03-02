import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    const auth = localStorage.getItem("user");
    if(auth){
      navigate("/products");
    }
  });
  return (
    <div>Home</div>
  )
}

export default Home