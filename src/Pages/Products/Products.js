import React, { Fragment } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import Box from "../../Components/Box/Box";
import Card from "../../Components/Card/Card";
import './Products.css';
export default function Products() {
  return (
    <div className="body">
      <div>
        <Navbar />
      </div>
      <div className="another">
        <Header name="Products"/>
        <div class="container">
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
        </div>
      </div>
    </div>
  );
}
