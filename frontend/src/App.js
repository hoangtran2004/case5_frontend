import {Routes,Route} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/home/Home";
import Footer from "./component/Footer";
import Main from "./component/Main";
function App() {
  return (
<>
<div className="container-fluid">
<Routes>
  <Route path={''} element={<Login/>}/>
  <Route path={'register'} element={<Register/>}/>
  <Route path={'home'} element={<Home/>}/>
  <Route path={'footer'} element={<Footer/>}/>
  <Route path={'main'} element={<Main/>}/>
</Routes>
</div>
</>
  );
}

export default App;
