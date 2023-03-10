import '../style/post-status.css'
import { Form, Formik} from "formik";
import {Link} from "react-router-dom";
import {useState} from "react";

export default function PostStatus() {
    let item = JSON.parse(localStorage.getItem('user'));
    const [user, setUser] = useState(item.data.user)
    return(
        <>
        <div className="row">
            <div className="col-12">
                <div className="col-4 offset-4">
                    <Formik initialValues={{title:'',content:'',time:new Date().toLocaleDateString(),status:'public'}} onSubmit={()=>{

                    }}>
                        <Form>
                            <div className="contain-create-post">
                                <div className="row offset-1">
                                    <Link to={'me'}>
                                        <img src={user.avatar} alt={user.name} className={'avatar-post'}/>

                                    </Link>
                                    <div className={"row offset-1"}>
                                        <Link to={'create-blog'} style={{textDecoration:'none'}}>
                                            <div className="up-status" data-toggle="modal" data-target="#exampleModal" >
                                                <p>Chia sẻ câu chuyện của bạn.</p>
                                            </div>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
        </>
    )
}