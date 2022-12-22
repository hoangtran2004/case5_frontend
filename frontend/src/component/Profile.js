import ListBlog from "../pages/home/blog/ListBlog";
import {useState} from "react";
export default function Profile() {
    let item = JSON.parse(localStorage.getItem('user'));
    const [user, setUser] = useState(item.data.user)
    return(
        <>
            <div>
                <div className="row" style={{marginTop: '90px'}}>
                    <div className="container emp-profile">
                        <form method="post">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="profile-img">
                                        <img
                                            src={user.avatar}
                                            alt=""/>
                                        <div className="file btn btn-lg btn-primary">
                                           Đổi ảnh
                                            <input type="file" name="file"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="profile-head">
                                        <h5>
                                            Tên người dùng : {user.username}
                                        </h5>
                                    </div>
                                    <div className="profile-head">
                                        <h6 style={{marginTop: '55px'}}>
                                            Trạng thái : {user.status === 1 ? "Đang hoạt động" : "Bị khóa"}
                                        </h6>
                                    </div>

                                </div>

                                <div className="col-md-2">
                                    <input type="submit" className="profile-edit-btn" name="btnAddMore"
                                           value="Edit Profile"/>
                                </div>
                                <div style={{width: "100%", height: "1px", background: "black"}}></div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            <ListBlog></ListBlog>
        </>
    )
}