import {Field, Form, Formik} from "formik";
import '../style/login-page.css'
import {Link} from "react-router-dom";
export default function Login() {
    return (
        <>
            <div className="container">
                <div className={'row'}>
                    <div className="col-6">
                        <h1>Login</h1>
                        <Formik initialValues={{user: '', password: ''}} onSubmit={() => {
                        }}>
                            <Form>
                                <label></label>
                                <Field name={'user'} id={'user'} type={'text'} placeholder={'Tên tài khoản'}
                                       class={'form-control'} required/>
                                <label></label>
                                <Field name={'password'} id={'password'} type={'password'} placeholder={'Mật khẩu'}
                                       class={'form-control'} required/>
                                <button className={'btn btn-primary'} style={{
                                    width: '200px',
                                    height: '50px',
                                    marginLeft: '160px',
                                    marginTop: '20px',
                                    borderRadius: '8px'
                                }}>Đăng nhập
                                </button>
                                <hr style={{border: 'solid 0.5px lightgrey', width: '520px'}}/>
                                <p style={{color: "lightgray"}}>Chưa có tài khoản? Đăng kí ngay.</p>
                                <button className={'btn btn-success'} style={{
                                    width: '200px',
                                    height: '50px',
                                    marginLeft: '160px',
                                    marginBottom: '20px',
                                    borderRadius: '8px',

                                }} type={'button'}><Link to={'/register'} style={{textDecoration:"none",color:'white'}}>Đăng kí</Link>
                                </button>

                            </Form>
                        </Formik>
                    </div>
                </div>

            </div>

        </>

    )
}