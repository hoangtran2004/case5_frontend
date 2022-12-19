import {Field, Form, Formik} from "formik";
import {Link} from "react-router-dom";

export default function Register() {
    return(
        <>
                <div className="container">
                    <div className={'row'}>
                        <div className="col-6">
                            <h1>Register</h1>
                            <Formik initialValues={{user: '', password: ''}} onSubmit={() => {

                            }}>
                                <Form>
                                    <label></label>
                                    <Field name={'user'} id={'user'} type={'text'} placeholder={'Your account'}
                                           class={'form-control'} required/>
                                    <label></label>
                                    <Field name={'password'} id={'password'} type={'password'} placeholder={'Password'}
                                           class={'form-control'} required/>
                                    <label></label>
                                    <Field name={'repeatPassword'} id={'repeatPassword'} type={'password'}
                                           placeholder={'Repeat password'}
                                           class={'form-control'} required/>
                                    <label></label>
                                    <Field name={'phoneNumber'} id={'phoneNumber'} type={'text'}
                                           placeholder={'Phone number'}
                                           class={'form-control'} required/>
                                    <label></label>
                                    <Field name={'address'} id={'address'} type={'text'}
                                           placeholder={'Address'}
                                           class={'form-control'} required/>

                                    <button className={'btn btn-primary'} style={{
                                        width: '200px',
                                        height: '50px',
                                        marginLeft: '160px',
                                        marginTop: '20px',
                                        borderRadius: '8px'
                                    }} type={'button'}>Register
                                    </button>
                                    <hr style={{border: 'solid 0.5px lightgrey', width: '520px'}}/>
                                    <p style={{color: "lightgray"}}>Have account?<Link to={'/'}> Login now.</Link></p>

                                </Form>
                            </Formik>
                        </div>
                    </div>

                </div>

        </>
    )
}