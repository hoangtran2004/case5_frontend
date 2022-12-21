import {Link, useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {useSelector} from "react-redux";
export default function NavBar() {

    const user = useSelector(state => {
        console.log(state)
        return state.user.currentUser.user
    })

    const navigate =useNavigate()
    return (
        <div style={{marginBottom:'100px'}}>
            <div className="row">
                <div className="col-12" style={{position: "fixed", zIndex: 100}}>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top" >

                        <Link to={"/home"}>
                            <img src="https://i.pinimg.com/736x/7c/f5/17/7cf5174188de96c8cacc7ad2bb97943a--elephant-logo-gajah.jpg" alt="logo" className={'logo'}/>
                        </Link>
                        <Link className="navbar-brand" to="/home">Home</Link>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">

                                <li>
                                    <Formik initialValues={{
                                        search: ''
                                    }} onSubmit={(values) => {
                                        console.log(values)
                                    }}>
                                        <Form className="form-inline my-2 my-lg-0" >
                                            <Field className="form-control mr-sm-2" type="search"
                                                    name={"search"}
                                                   placeholder="Search" style={{width:'468px',marginLeft:'325px',borderRadius:'50px',height:'45px'}}></Field>
                                            <button className="btn btn-outline-success my-2 my-sm-0">Tìm kiếm</button>
                                        </Form>
                                    </Formik>
                                </li>
                            </ul>
                            <div className="form-inline my-2 my-lg-0">
                                <img src={user.avatar} alt={user.name} className={'avatar'} style={{margin:'8px 34px'}}/>
                                <button className=" ml-3 btn btn-outline-danger my-2 my-sm-0" type="submit"
                                        onClick={() => {
                                            localStorage.clear('')
                                            navigate('/')
                                        }}>Đăng xuất
                                </button>

                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}