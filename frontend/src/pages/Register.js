import {Field, Form, Formik} from "formik";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {register} from "./services/userService";

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
            <div className="container">
                <div className={'row'}>
                    <div className="col-6">
                        <h1>Register</h1>
                        <Formik initialValues={
                            {
                                name: '',
                                password: '',
                                img: ''
                            }}
                        onSubmit={(values)=> {
                           handleRegister(values).then()
                        }}
                        >
                            <Form>
                                <label></label>
                                <Field name={'name'} type={'text'} placeholder={'Your account'}
                                       class={'form-control'} required/>
                                <label></label>
                                <Field name={'password'} type={'password'} placeholder={'Password'}
                                       class={'form-control'} required/>
                                {/*<label></label>*/}
                                {/*<Field name={'repeatPassword'} id={'repeatPassword'} type={'password'}*/}
                                {/*       placeholder={'Repeat password'}*/}
                                {/*       class={'form-control'} required/>*/}
                                {/*<label></label>*/}
                                {/*<Field name={'role'} id={'role'} type={'text'}*/}
                                {/*       placeholder={'role'}*/}
                                {/*       class={'form-control'} required/>*/}
                                <label></label>
                                <Field name={'img'} type={'text'}
                                       placeholder={'img'}
                                       class={'form-control'} required/>

                                <button className={'btn btn-primary'} style={{
                                    width: '200px',
                                    height: '50px',
                                    marginLeft: '160px',
                                    marginTop: '20px',
                                    borderRadius: '8px'
                                }}>Register
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