import Footer from "../Components/Footer";
import "../Styles/Home.css";
import Navigation_bar from "../Components/Navbar";
import React, { useEffect, useState } from "react";
import Side_tab from "../Components/Side_tab";
import Card_home from "../Components/Cards";
import getUsers from "../Services/getUsers";

export const Home = () => {

  const [users,setUsers]=useState([]);

  useEffect(()=>{
    const fetchUsers= async()=>{
      try {
        const response=await getUsers();
        setUsers(response)
      } catch (error) {
        console.error("Error fetching users",error)
      }
    }
    fetchUsers()
  },[])

  let loadCards =() => {
    
    if (users!=[]) {
      return users.map((user, index) => <Card_home name={user.name} email={user.email} key={index} />);
    }
  };

  return (
    <>
      <div id="home_body">
        <div id="nav">
          <Navigation_bar />
        </div>
        <div id="sideTab">
          <Side_tab />
        </div>
        <div id="products_card">{loadCards()}</div>
        <div id="Footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
