import {Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/home/Home";
import ListBlog from "./pages/home/blogs/ListBlog";
import Footer from "./component/Footer";
import Main from "./component/Main";
import AddBlog from "./pages/home/blogs/AddBlog";


function App() {

    return (
        <>
            <div className="container-fluid">
                <Routes>
                    <Route path={''} element={<Login/>}/>
                    <Route path={'register'} element={<Register/>}/>
                    <Route path='/home' element={<Home/>}>
                        <Route path='list-blog' element={<ListBlog/>}></Route>
                        <Route path='add-blog' element={<AddBlog/>}></Route>
                    </Route>
                    <Route path={'footer'} element={<Footer/>}/>
                    <Route path={'main'} element={<Main/>}/>
                </Routes>
            </div>
        </>

    );
}

export default App;
