import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {adminDeletePost, adminGetBlog} from "../../../services/adminService";

export default function MListUser() {
    const dispatch = useDispatch();
    const listUser = useSelector(state => {
        console.log(state)
        return state.admin.admin
    });
    useEffect(() => {
        dispatch(adminGetBlog())
    }, []);
    return (
        <>
            <h1>Quản lí bài viết </h1>
            <table className="table table-bordered">

                <thead>
                <tr>
                    <th scope="col">STT</th>
                    <th scope="col">ID</th>
                    <th scope="col">ID người dùng</th>
                    <th scope="col">Trạng thái</th>
                    <th scope="col">Lượt thích</th>
                    <th scope="col">Thời gian</th>
                    <th scope="col">Tên người dùng</th>
                    <th scope="col">Tiêu đề</th>
                    <th scope="col">Nội dung</th>
                    <th scope="col">Thao tác</th>
                </tr>
                </thead>
                {listUser.map((item, index) => (
                    <tbody>
                    <tr>
                        <td>{index + 1}</td>
                        <td>{item.id}</td>
                        <td>{item.idU}</td>
                        <td>{item.status === 1 ? "Công khai" : "Chỉ mình tôi"}</td>
                        <td>{item.like}</td>
                        <td>{item.time.split("", 10)}</td>
                        <td>{item.name}</td>
                        <td>{item.title}</td>
                        <td>{item.content}</td>
                        <td>
                            <button className="btn btn-danger" onClick={()=>{
                             dispatch(adminDeletePost({id:item.id}))
                            }}>Xóa bài </button>
                        </td>
                    </tr>
                    </tbody>
                ))}
            </table>


        </>
    )
}