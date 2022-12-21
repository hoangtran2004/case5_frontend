import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getBlogs} from "../../../services/blogsService";


export default function ListBlog() {

    const dispatch = useDispatch();
    const blog = useSelector(state => {
        return state.blogs.blogs
    });
    useEffect(() => {
        dispatch(getBlogs())
    }, []);
    return(
       <>
           {blog.map((item)=>(
               <h1>{item.title}</h1>

           ))}
       </>
    )

}