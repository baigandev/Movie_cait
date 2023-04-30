import React from 'react';
import Card from "../../component/Card";
import Block from "../../component/Block";
import Content from "../../component/Content";
import Hero from "../../component/Hero";


const Home = () => {
    return (
      <div>
          <Hero/>
          <Card/>
          <Block/>
          <Content/>
      </div>
    );
};

export default Home;