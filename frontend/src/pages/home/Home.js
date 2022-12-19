import NavBar from "../../component/Nav-bar";
import Footer from "../../component/Footer";
import Main from "../../component/Main";
export default function Home() {
    return(
        <>
        <div className="row">
            <div className="col-12">
             <NavBar></NavBar>
                <Main></Main>
                <Footer></Footer>
            </div>
        </div>
        </>
    )
}