import {Link, Outlet} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getBlogs} from "../../../services/blogsService";


export default function ListBlog() {
    const blogs = useSelector(({blogs}) => {
        return blogs.blogs
    })

    let item = JSON.parse(localStorage.getItem('user'));
    const [user, setUser] = useState(item.data.user)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBlogs())
    }, []);

    return (
        <>
            {blogs.map((item)=>{
                if (user.name===item.name){
                    return(
                            <div className="row" style={{marginTop: '10px'}}>
                                <div className="col-12">
                                    <div className="col-6 offset-3">
                                        <div className="container-main">
                                            {/*header*/}
                                            <div className="main-header">
                                                <div className="row offset-1">
                                                    <div>
                                                        <Link to={'#'}>
                                                            <img
                                                                src={item.avatar}
                                                                alt="my avatar" className="avatar"/>
                                                        </Link>
                                                    </div>

                                                    <div>
                                                        <Link to={'#'}>
                                                            <p className="nick-name">{item.name} </p>
                                                        </Link>
                                                        <div className={'time-post'}>
                                                            {item.time}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="title">
                                                            <p>{item.title}</p>
                                                        </div>
                                                        <div className="content">
                                                            <p>{item.content}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*mid*/}
                                            <div className="main-middle">
                                                <div>
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <img
                                                                src={item.img}
                                                                alt="" className="main-image"/>
                                                            <hr className={'main-line'}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*bottom*/}
                                            <div className="main-bottom">
                                                <div className="row">
                                                    <div className="col-5 offset-1">
                                                        <div className="emotion">
                                                            <p style={{textAlign: 'center'}}>Thích</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-5">
                                                        <div className="comment">
                                                            <p style={{textAlign: 'center'}}>Bình luận</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    )
                }
            })}
        </>
    )

}