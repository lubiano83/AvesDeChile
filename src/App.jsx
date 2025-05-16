import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import BirdsList from "./components/birds/BirdsList";
import BirdsDetail from "./components/birds/BirdsDetail";
import Footer from "./components/footer/Footer";

function App() {

  const email = "lubiano83@gmail.com";
  const year = new Date().getFullYear();
  const derechos = `© ${year} Todos los derechos reservados`;
  const linkedin = "https://www.linkedin.com/in/jos%C3%A9-pablo-lubiano-08559b9a/";

  return (
    <BrowserRouter>
      <div className="min-h-screen grid grid-rows-[auto_1fr_auto] font-serif">
        <Navbar linkedin={linkedin} />
        <div className="w-full h-full p-8">
          <Routes>
            <Route path="/" element={ <BirdsList /> } />
            <Route path="/bird/:uid" element={ <BirdsDetail /> } />
          </Routes>
        </div>
        <Footer derechos={derechos} email={email} />
      </div>
    </BrowserRouter>
  );
}

export default App;