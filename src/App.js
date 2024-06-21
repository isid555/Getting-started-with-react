// import logo from './logo.svg';
import './App.css';
import Products from "./components/Product";
import Effect from "./Effect";
// import {findAllByDisplayValue} from "@testing-library/react";
// import Category from "./category";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           {/*Edit <code>src/App.js</code> and save to reload.*/}
//           Hello World with React Native
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//
//     </div>
//   );
// }

function App(){
  return(
      <div className="App">
        <Products></Products>

         
      </div>


  )
}
export default App;
