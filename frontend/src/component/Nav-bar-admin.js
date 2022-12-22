import {Link, useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";

export default function NavBarAdmin() {
    const navigate =useNavigate()
    return (
        <div style={{marginBottom:'100px'}}>
            <div className="row">
                <div className="col-12" style={{position: "fixed", zIndex: 100}}>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link className="navbar-brand" to="/admin">Home</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/admin/">Người dùng<span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" href="/admin/list-posts">Bài viết<span className="sr-only">(current)</span></a>
                                </li>

                                <li>
                                    <Formik initialValues={{
                                        search: ''
                                    }} onSubmit={(values) => {
                                        console.log(values)
                                    }}>
                                        <Form className="form-inline my-2 my-lg-0"
                                              style={{position: 'relative', left: "186px"}}>
                                            <Field className="form-control mr-sm-2" type="search"
                                                   style={{width:'468px',marginLeft:'30px',borderRadius:'50px',height:'45px'}} name={"search"}
                                                   placeholder="Search" ></Field>
                                            <button className="btn btn-outline-success my-2 my-sm-0">Tìm kiếm</button>
                                        </Form>
                                    </Formik>
                                </li>
                            </ul>
                            <div className="form-inline my-2 my-lg-0">

                                <button className=" ml-3 btn btn-outline-danger my-2 my-sm-0" type="submit"
                                        onClick={() => {
                                            localStorage.clear()
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