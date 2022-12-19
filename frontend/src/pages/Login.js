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
                                <Field name={'user'} id={'user'} type={'text'} placeholder={'Your account'}
                                       class={'form-control'} required/>
                                <label></label>
                                <Field name={'password'} id={'password'} type={'password'} placeholder={'Password'}
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

                        }} type={'button'}><Link to={'/register'} style={{textDecoration:"none",color:'white'}}>Register</Link>
                        </button>
                    </div>
                </div>

            </div>

        </>

    )
}