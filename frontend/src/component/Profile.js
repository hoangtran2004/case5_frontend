import '../style/profile.css'
import ListBlog from "../pages/home/blog/ListBlog";
import {useState} from "react";
export default function Profile() {
    let item = JSON.parse(localStorage.getItem('user'));
    const [user, setUser] = useState(item.data.user)
    return(
        <>
            <div className="col">
                <div className="row-12" style={{marginTop:'-36px'}}>
                    <div className="col-8 offset-2">
                        <div className="container-profile">
                            <div className="card">
                                <div className="card--header" />
                                <img
                                    className="avatar-profile"
                                    src={user.avatar}
                                    alt="avatar"
                                />
                                <button className="btn-profile"></button>
                                <div className="card--body">
                                    <div>
                                        <p className="text-header">{user.name}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3"></div>

                </div>

            </div>

                <ListBlog></ListBlog>
        </>
    )
}