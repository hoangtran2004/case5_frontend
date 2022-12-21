import '../style/post-status.css'
import {Field, Form, Formik} from "formik";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
export default function PostStatus() {
    const user = useSelector(state => {
        console.log(state)
        return state.user.currentUser.user
    })
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
                                    <img src={user.avatar} alt={user.name} className={'avatar-post'}/>
                                    <div className={"row offset-1"}>
                                        <Link to={'tiny'} style={{textDecoration:'none'}}>
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