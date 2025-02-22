import Header from "./components/Header/Header";
import Herosection from "./components/HeroSection/Herosection";
import Benefit from "./components/Benefit/Benefit";
import Connect from "./components/Connect/Connect";
import Question from "./components/Question/FAQ";
import Footer from "./components/Footer/Footer";
import Slider from "./components/Slider/Slider";

function App(){
  return(

    <>

      <Header/>
      <Herosection/>
      <h2 style={{ textAlign: "center", color: "white" }}>Features</h2>
      <Slider/>
      <Benefit/>
      <Connect/>
      <Question/>
      <Footer/>
   

    </>

  );
};

export default App;