import MListUser from "./manage/M-ListUser";
import {Outlet} from "react-router-dom";
import NavBarAdmin from "../../component/Nav-bar-admin";
export default function Admin() {

    return(
        <>
            <NavBarAdmin></NavBarAdmin>
            <Outlet></Outlet>
        </>
    )
}