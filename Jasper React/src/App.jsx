import './App.css'
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Lesson from './components/Lesson.jsx';
function App() {

  const yourName = "jasper";

  const currentYear = 2026;


  return ( 

    <div>

      <Header/>

      <h2>My name is {yourName}</h2>

      <p>I’m learning React in {currentYear}.</p>

      <p>This is my first React component!</p>
      <Lesson/>
      <img src="mask.jpg" alt="Mask"></img>
<Footer/>
    </div>

  );

}


export default App;
