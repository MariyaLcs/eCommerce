import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Container>
        <main className="py-3">
          <h1>Welcome to my Shop</h1>
        </main>
      </Container>

      <Footer />
    </div>
  );
};

export default App;
