import '../style/main.css'
import {Link} from "react-router-dom";

export default function Main() {
    return (
        <>
            <div className="row" style={{marginTop: '10px'}}>
                <div className="col-12">
                    <div className="col-4 offset-4">
                        <div className="container-main">
                            {/*header*/}
                            <div className="main-header">
                                <div className="row offset-1">
                                    <div>
                                        <Link to={'#'}>
                                            <img
                                                src="https://funkylife.in/wp-content/uploads/2021/06/good-morning-image-492.jpg"
                                                alt="my avatar" className="avatar"/>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to={'#'}>
                                            <p className="nick-name">Nick name </p>
                                        </Link>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="title">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
                                                amet, commodi cupiditate deserunt dolores ducimus est eveniet, explicabo
                                                fuga fugit hic mollitia quidem quod rerum saepe sed ut. Aliquam,
                                                odio!</p>
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
                                                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
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
                                             <p style={{textAlign:'center'}}>like</p>
                                            </div>
                                        </div>
                                        <div className="col-5">
                                           <div className="comment">
                                               <p style={{textAlign:'center'}}>cmt</p>
                                           </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}