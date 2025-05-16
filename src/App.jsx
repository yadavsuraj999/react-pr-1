import About from "./components/About";
import Classes from "./components/Classes";
import Get_shap from "./components/Get_shap";
import Mainbanner from "./components/Mainbanner";
import Progarm from "./components/Progarm";
import Program_image from "./components/Program_image";

const App = () => {
  return (
    <div>
      <Mainbanner/>
      <About/>
      <Program_image/>
      <Get_shap/>
      <Classes/>
    </div>
  )
}

export default App;