import {Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/home/Home";
import TinyEditor from "./component/TinyEditor";
import Main from "./component/Main";
import Admin from "./pages/admin/Admin";
import MListPost from "./pages/admin/manage/M-ListPost";
import MListUser from "./pages/admin/manage/M-ListUser";
import Profile from "./component/Profile";
import {useSelector} from "react-redux";

function App() {

    let user = useSelector(state => {
        console.log(state)
        return state.user.currentUser
    })
    return (

        <>
            <div className="container-fluid">
                <Routes>

                    <Route path={''} element={<Login/>}/>
                    <Route path={'register'} element={<Register/>}/>
                    {user !== {} ?
                        <Route path={'home'} element={<Home/>}>
                            <Route path={''} element={<Main/>}/>
                            <Route path={'tiny'} element={<TinyEditor/>}/>
                        </Route> :
                        <Route path={'*'} element={<Login/>}/>
                    }

                    {/*<Route path={'admin'} element={<Admin/>}>*/}
                    {/*    <Route path={''} element={<MListUser/>}/>*/}
                    {/*    <Route path={'listBlogs'} element={<MListPost/>}/>*/}

                    {/*</Route>*/}
                </Routes>

            </div>
        </>
    );
}

export default App;
