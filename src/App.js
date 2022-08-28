
import './App.css';
import image from './one.webp';
import imageTwo from './down.webp';
import {ToDoList} from './ToDoList';

function App() {
  return (
    
    <div className="app">
      <div className="container">
     <img src={image} className="up" width="300px" alt="list"/>
     </div>
     <div className="container">
     <h1>TO-DO LIST</h1>
     </div>
    <ToDoList/>
    <div className="container">
     <img src={imageTwo} width="300px" alt="plan"/>
    </div>
    </div>
  );
}

export default App;
