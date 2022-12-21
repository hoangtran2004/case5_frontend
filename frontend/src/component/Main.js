import '../style/main.css'
import {Link, Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getBlogs} from "../services/blogsService";
import PostStatus from "./Post-status";
export default function Main() {
    const dispatch = useDispatch();
    const blogs = useSelector(state => {
        console.log(state.blogs.blogs)
        return state.blogs.blogs;
    });
    useEffect(() => {
        dispatch(getBlogs())
    }, []);
    return (
        <>
            <PostStatus></PostStatus>
            {
                blogs.map((item) => (
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
                                                    {item.time.split("",10)}
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
                        <Outlet></Outlet>
                    </div>
                ))}

        </>
    )
}