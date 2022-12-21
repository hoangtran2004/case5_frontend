import {Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/home/Home";
import AddBlog from "./pages/home/blog/AddBlog";
import EditBlog from "./pages/home/blog/EditBlog";
import PostStatus from "./component/Post-status";
import TinyEditor from "./component/TinyEditor";
import Main from "./component/Main";
import Admin from "./pages/admin/Admin";
import MListPost from "./pages/admin/manage/M-ListPost";
import MListUser from "./pages/admin/manage/M-ListUser";
import Profile from "./component/Profile";
function App() {

    return (
        <>
            <div className="container-fluid">
                <Routes>

                    <Route path={''} element={<Login/>}/>
                    <Route path={'register'} element={<Register/>}/>
                    <Route path={'profile'} element={<Profile/>}/>

                    <Route path={'home'} element={<Home/>}>
                        <Route path={''} element={<Main/>}/>
                        <Route path={'tiny'} element={<TinyEditor/>}/>
                    </Route>
                    <Route path={'admin'} element={<Admin/>}>
                        <Route path={''} element={<MListUser/>}/>
                        <Route path={'listBlogs'} element={<MListPost/>}/>

                    </Route>
                    <Route path={'*'} element={<Login/>}/>
                </Routes>
            </div>
        </>
    );
}

export default App;
