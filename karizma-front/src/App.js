import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Recette/UserPages/login';
import Recettes from './Recette/RecettePages/ListRecette';
import UpdateRecette from './Recette/RecettePages/UpdateRecette';



function App() {
  
  return (
    <div className="App">
      <BrowserRouter>

      <Routes>
          <Route
            exact
            path="/login"
            element={<Login/>}
          ></Route>

          <Route
            exact
            path="/recettes"
            element={<Recettes/>}
          ></Route>

          

          <Route
            exact
            path="/update"
            element={<UpdateRecette/>}
          ></Route>



      </Routes>

      </BrowserRouter>
    </div>



  );
}

export default App;
