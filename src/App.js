import './App.css';
import Animation from './Animation';
import NewAnimation from './NewAnimation';
import TextAnimation from './TextAnimation';
import Mario from './Mario';
import { Slides } from './Slides';
import Cat from './Cat';
import Fish from './Fish';
import Fork from './Fork';
import Quizz from './Quizz';
import Gym from './Gym';
import ImageSVG from './ImageSVG';
import AiPhotostock from './AiPhotostock';


function App() {
  return (
    <div className="App">
      <div className="container-3d">
        <div className="card-3d"><Fork /></div>
        <div className="card-3d"><Fish /></div>
        <div className="card-3d"><Quizz /></div>
      </div>
      <div className="container-3d">
        <div className="card-3d"><Cat /></div>
        <div className="card-3d"><Gym /></div>
        <div className="card-3d"><AiPhotostock /></div>
        {/* <div className="card-3d"><ImageSVG /></div> */}
      </div>
      

     
      {/* <Animation /> */}
       {/* <Mario /> */}
      {/* <NewAnimation /> */}
      {/* <Slides /> */}
      
      {/* <TextAnimation /> */}
    </div>
  );
}

export default App;
