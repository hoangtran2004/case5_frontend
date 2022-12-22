import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {adminGetUser} from "../../../services/adminService";
import {adminDeleteUser} from "../../../services/adminService";

export default function MListUser() {
    const dispatch = useDispatch();

    const listUser = useSelector(state => {
        console.log(state)
        return state.admin.admin
    });
    useEffect(() => {
        dispatch(adminGetUser())
    }, []);
    return (
        <>
            <h1>Quản lí người dùng</h1>

            <table className="table table-bordered">
                <thead>
                <tr>
                    <th scope="col">STT</th>
                    <th scope="col">ID</th>
                    <th scope="col">Tên người dùng</th>
                    <th scope="col">Trạng thái</th>
                    <th scope="col">Ảnh đại diện</th>
                    <th scope="col">Thao tác</th>
                </tr>
                </thead>
                {listUser.map((item, index) => (
                    <tbody>
                    <tr>
                        <td>{index + 1}</td>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.status === 1 ? "Hoạt động" : "Bị cấm"}</td>
                        <td><img src={item.avatar} alt="avatar" className={'avatar'} style={{marginTop: '10px'}}/>
                        </td>
                        <td>
                            <button className="btn btn-danger" onClick={() => {
                                dispatch(adminDeleteUser({id: item.id}))
                            }}>Xóa người dùng</button>
                        </td>
                    </tr>
                    </tbody>
                ))}
            </table>


        </>
    )
}