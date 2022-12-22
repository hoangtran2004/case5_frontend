import {Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/home/Home";
import Main from "./component/Main";
import Admin from "./pages/admin/Admin";
import MListPost from "./pages/admin/manage/M-ListPost";
import MListUser from "./pages/admin/manage/M-ListUser";
import AddBlog from "./pages/home/blog/AddBlog";
import Profile from "./component/Profile";
import {useState} from "react";
function App() {

    let item = JSON.parse(localStorage.getItem('user'));
    const [user, setUser] = useState(item?.data?.user)
    return (

        <>
            <div className="container-fluid">
                <Routes>
                    <Route path={''} element={<Login/>}/>
                    <Route path={'register'} element={<Register/>}/>
                    {user !== null ?
                        <Route path={'home'} element={<Home/>}>
                            <Route path={''} element={<Main/>}></Route>
                            <Route path={'create-blog'} element={<AddBlog/>}></Route>
                            <Route path={'me'} element={<Profile/>}></Route>
                        </Route>
                        :
                        <Route path={'*'} element={<Login/>}></Route>
                    }
                    <Route path={'admin'} element={<Admin/>}>
                        <Route path={''} element={<MListUser/>}></Route>
                        <Route path={'list-posts'} element={<MListPost/>}></Route>
                    </Route>

                </Routes>

            </div>
        </>
    );
}

export default App;
