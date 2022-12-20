import {Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/home/Home";
import ListBlog from "./pages/home/blogs/ListBlog";
import AddBlog from "./pages/home/blogs/AddBlog";
import {useSelector} from "react-redux";
import NotFound from "./component/NotFound";


function App() {

    const user = useSelector(state => {
        return state.user.currentUser
    })
    console.log(user)
    return (
        <>
            <div className="container-fluid">
                <Routes>
                    <Route path={''} element={<Login/>}/>
                    <Route path={'register'} element={<Register/>}/>
                    {
                        user != {} ?
                            <Route path='/home' element={<Home/>}>
                                <Route path='list-blog' element={<ListBlog/>}></Route>
                                <Route path='add-blog' element={<AddBlog/>}></Route>
                            </Route>
                            : ''
                    }
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'*'} element={<NotFound></NotFound>}/>
                </Routes>
            </div>
        </>

    );
}

export default App;
