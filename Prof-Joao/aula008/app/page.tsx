import Image from "next/image";
import HomeIntro from "./components/HomeIntro";
import HomeServices from "./components/HomeServices";
import HomeContato from "./components/HomeContato";


export default function Home() {
  {/*
  const estilos = {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "red",
    color: "white"
  }

  estilos.color = "black";*/}

  return (
    <>
      <HomeIntro />
      <HomeServices />
      <HomeContato />
    </>
  );
}
