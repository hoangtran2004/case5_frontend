import NavBar from "../../component/Nav-bar";
import Footer from "../../component/Footer";
import Main from "../../component/Main";
import {Outlet} from "react-router-dom";
export default function Home() {
    return(
        <>
        <div className="row">
            <div className="col-12">
             <NavBar></NavBar>
                <Main></Main>
                <Footer></Footer>
                <Outlet></Outlet>
            </div>
        </div>
        </>
    )
}