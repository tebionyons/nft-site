import React from "react";
import { Navbar, Header, Section, Main, Card, Metabnb, Footer } from "./components";
import data from "Data";
import "../src/components/card/card.css";

import "./App.css";

function App() {
  const cards = data.map((card) => {
    return (
      <Card
        title={card.title}
        img={card.img}
        distance={card.distance}
        time={card.time}
        availability={card.availability}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <Header />
      <Section />
      <Main />
      <div className="card__list">
      {cards}
      </div>
      <Metabnb />
      <Footer/>
    </div>
  );
}

export default App;
