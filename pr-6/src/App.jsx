import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Mainbanner from './components/Mainbanner';
import AIintro from './components/AIintro';
import Chatbot from './components/Chatbot';
import Notification from './components/Notification';
import Swipper from './components/Swipper';

const App = () => {
  return (
    <div>
      <Header/>
      <Mainbanner/>
      <AIintro/>
      <Chatbot/>
      <Notification/>
      <Swipper/>
    </div>
  )
}

export default App