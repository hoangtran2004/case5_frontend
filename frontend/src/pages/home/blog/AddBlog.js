import React, {useEffect, useState} from 'react';
import {Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addBlogs} from "../../../services/blogsService";
import {storage} from "../../../firebase";
import {getDownloadURL, listAll, ref, uploadBytes} from "firebase/storage";
import {v4} from "uuid";

function AddBlog() {

    let item = JSON.parse(localStorage.getItem('user'));
    const [user, setUser] = useState(item.data.user)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [submitting, setSubmitting] = useState(false)
    console.log('user',user)
    const handleAdd = (values) => {
        let data = {
            ...values,
            idU: user.id,
            img: img
        }
        console.log(data);
        dispatch(addBlogs(data))
        navigate('/home')
    }

    const [imageUrls, setImageUrls] = useState([]);
    const [img, setImg] = useState("");

    const imagesListRef = ref(storage, "images/");
    const uploadFile = (imageUpload) => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImg(url)
                setSubmitting(false)
            });
        })

    };
    useEffect(() => {
        listAll(imagesListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageUrls((prev) => [...prev, url]);
                });
            });
        });
    }, []);
    return (
        <div>
            <h1 style={{textAlign: "center"}}>Tạo bài viết</h1>
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6 offset-1">
                    <Formik initialValues={{
                        title: '',
                        content: '',
                        img: '',
                        time: (new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear() + ' ' + (new Date().getHours()) + ':' + (new Date().getMinutes())),
                        url: imageUrls
                    }} onSubmit={(values) => {
                        handleAdd(values);
                    }}>
                        <Form>
                            <div className="group">
                                <label htmlFor="exampleInputEmail1">Tiêu đề</label>
                                <Field type={'text'} name={'title'} className={'form-control'}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Nội dung</label>
                                <Field type={'text'} name={'content'} className={'form-control'}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Ảnh</label>
                                <input
                                    type="file" onChange={(event) => {
                                    setSubmitting(true)
                                    uploadFile(event.target.files[0])
                                }}/>
                            </div>
                            <button type="submit" disabled={submitting}>Đăng</button>
                        </Form>
                    </Formik>
                </div>
                <div className="col-3"></div>
            </div>

        </div>
    );
}

export default AddBlog;
