import {Field, Form, Formik} from "formik";
import '../style/login-page.css'
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {login} from "../services/userService";

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = async (values) => {
        let res = await dispatch(login(values));
        console.log("res", res)
        if (res.payload.data.token) {
            const {role, status} = res.payload.data.user
            console.log("st", typeof status)
            if (role === 2) {
                navigate('/admin')
            } else if (role === 1) {
                if (status === 1) {
                    navigate('/home')
                } else if (status === 2) {
                    alert("tài khoản đã bị khóa")
                }
            }
        } else {
            alert('nhập lại')
        }
    }
    return (
        <>
            <div style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1483199095378-ce6e77cd1c0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=948&q=80')`,
                minHeight: "100vh",
                backgroundSize: "cover"
            }}>
                <div className="RegisterFormWrapper" style={{position:"absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)"}}>
                    <div className="RegisterForm" style={{ display:"inline-block", padding: "20px 30px", borderRadius: "8px"}}>
                        <h1 className={"text-center"} style={{color:"white"}} >Login</h1>
                        <Formik
                            initialValues={{name: '', password: ''}}
                            onSubmit={(values, {resetForm}) => {
                                handleLogin(values).then();
                                resetForm()
                            }}>
                            <Form>
                                <label></label>
                                <Field name={'name'} type={'text'} placeholder={'Your account'}
                                       class={'form-control'} required  style={{marginLeft:'25px'}}/>
                                <label></label>
                                <Field name={'password'} type={'password'} placeholder={'Password'}
                                       class={'form-control'} required style={{marginLeft:'25px'}}/>
                                <button className={'btn btn-primary'} style={{
                                    width: '200px',
                                    height: '50px',
                                    marginLeft: '160px',
                                    marginTop: '20px',
                                    borderRadius: '8px'
                                }}>Login
                                </button>
                                <hr style={{border: 'solid 0.5px lightgrey', width: '520px'}}/>
                                <p style={{color: "lightgray"}}>Don't have account? Register now.</p>
                            </Form>
                        </Formik>
                        <button className={'btn btn-success'} style={{
                            width: '200px',
                            height: '50px',
                            marginLeft: '160px',
                            marginBottom: '20px',
                            borderRadius: '8px',
                        }}><Link to={'/register'} style={{textDecoration: "none", color: 'white'}}>Register</Link>
                        </button>
                    </div>

                </div>
            </div>


        </>

    )
}