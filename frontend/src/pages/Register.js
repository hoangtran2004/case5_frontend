import {Field, Form, Formik} from "formik";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {register} from "../services/userService";

export default function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleRegister = async (values) => {
        let res = await dispatch(register(values));
        console.log(res)
        if (res.payload.checkR === true){

            await navigate('/');
        }else {
            alert("tài khoản đã tồn tại")
        }
    }
    return (
        <>
            <div style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1483199095378-ce6e77cd1c0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=948&q=80')`,
                minHeight: "100vh",
                backgroundSize: "cover"
            }}>
                <div className="LoginFormWrapper" style={{position:"absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)"}}>
                    <div className="LoginForm" style={{ display:"inline-block", padding: "20px 30px", borderRadius: "8px"}}>
                        <h1 className={"text-center"} style={{color:"white"}} >Register</h1>
                        <Formik initialValues={
                            {
                                name: '',
                                password: ''
                            }}
                                onSubmit={(values)=> {
                                    handleRegister(values).then()
                                }}
                        >
                            <Form>
                                <label></label>
                                <Field name={'name'} type={'text'} placeholder={'Your account'}
                                       class={'form-control'} required style={{marginLeft:'25px'}}/>
                                <label></label>
                                <Field name={'password'} type={'password'} placeholder={'Password'}
                                       class={'form-control'} required style={{marginLeft:'25px'}}/>
                                <label></label>
                                {/*<Field name={'repeatPassword'} id={'repeatPassword'} type={'password'}*/}
                                {/*       placeholder={'Repeat password'}*/}
                                {/*       class={'form-control'} required/>*/}

                                <button className={'btn btn-primary'} style={{
                                    width: '200px',
                                    height: '50px',
                                    marginLeft: '160px',
                                    marginTop: '20px',
                                    borderRadius: '8px'
                                }}>Register
                                </button>
                                <hr style={{border: 'solid 0.5px lightgrey', width: '520px'}}/>
                                <p style={{color: "white"}}>Have account?<Link to={'/'}> Login now.</Link></p>

                            </Form>
                        </Formik>
                    </div>
                </div>

            </div>

        </>
    )
}