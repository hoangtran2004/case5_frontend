import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getBlogs} from "../../services/blogService";
import {login} from "../../services/userService";


export default function ListBlog(){
    const dispatch = useDispatch();
    const blogs = useSelector(state =>{
        console.log(state)
        return state.blogs.blogs
    })
    useEffect(()=>{
        dispatch(getBlogs())
    },[])
    useEffect(()=>{
        dispatch(login({
           name: "ha3",
            password:"2"
        }))
    },[])
    return (
        <div className={'row'}>
            <div className={'col-12'}>
                {/*{*/}
                {/*    blogs.map((item)=>(*/}
                {/*        <h1>{item.title}</h1>*/}

                {/*    ))*/}
                {/*}*/}
            </div>
        </div>
    )
}