import React from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import Content from "./components/Content";
import Map from "./components/Map";
import Footer from "./components/Footer";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import { useAuth0 } from '@auth0/auth0-react'

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>
  return (
    <Container>
      {/* <Header />
      <Content />
      <Map /> */}
      <LoginButton />
      <LogoutButton />
      <Profile />
      {/* <Footer /> */}
    </Container>
  );
}

export default App;
