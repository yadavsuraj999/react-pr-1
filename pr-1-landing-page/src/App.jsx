import About from "./components/About";
import Bodyshap from "./components/Bodyshap";
import Ceo from "./components/Ceo";
import Classes from "./components/Classes";
import Footer from "./components/Footer";
import Get_shap from "./components/Get_shap";
import Header from "./components/Header";
import Mainbanner from "./components/Mainbanner";
import Progarm from "./components/Progarm";
import Program_image from "./components/Program_image";
import Winter from "./components/Winter";

const App = () => {
  return (
    <div>
      <Header/>     
      <Mainbanner />
      <About />
      <Program_image />
      <Get_shap />
      <Classes />
      <Winter />
      <Ceo/>
      <Bodyshap/>
      <Footer/>
    </div>
  )
}

export default App;