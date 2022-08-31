import React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { GlobalStyle } from "./styles/global.ts";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Footer />
    </>
  )
}
