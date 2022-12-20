
import {getDownloadURL, listAll, ref, uploadBytes} from "firebase/storage";
import {storage} from "../../../firebase";
import {v4} from "uuid";
import {useEffect, useState} from "react";

export default function AddBlog(){
    //firebase
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);

    const imagesListRef = ref(storage, "images/");
    const uploadFile = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageUrls((prev) => [...prev, url]);
            });
        });
        imageUrls.map((url)=>{
            console.log(url)
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
    //====end===
    return (
        <>
            <div className={'row'}>
                <div className={'col-12'}>
                    <input
                        type="file"
                        onChange={(event) => {
                            setImageUpload(event.target.files[0]);
                        }}
                    />
                    <button onClick={uploadFile}> Upload Image</button>
                    Add Blog
                </div>
            </div>
        </>

    )
}