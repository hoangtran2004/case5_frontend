import {Field, Form, Formik} from "formik";
import '../style/login-page.css'
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {login} from "./services/userService";


export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = async (values) => {
        let res = await dispatch(login(values));
        console.log("res",res)
        if (res.payload.data.token) {
            const {role, status} = res.payload.data.user
            console.log("st",typeof status)
            if (role === 2) {
                console.log("admin")
            } else if (role === 1) {
                if (status === 1){
                    navigate('/home')
                }else if (status===2){
                    alert("tài khoản đã bị khóa")
                }
            }
        } else {
            alert('nhập lại')
        }
    }

    return (
        <>
            <div className="container">
                <div className={'row'}>
                    <div className="col-6">
                        <h1>Login</h1>
                        <Formik
                            initialValues={{name: '', password: ''}}
                            onSubmit={(values,{resetForm}) => {
                                handleLogin(values).then();
                                resetForm()
                            }}>
                            <Form>
                                <label></label>
                                <Field name={'name'} type={'text'} placeholder={'Your account'}
                                       class={'form-control'} required/>
                                <label></label>
                                <Field name={'password'} type={'password'} placeholder={'Password'}
                                       class={'form-control'} required/>
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