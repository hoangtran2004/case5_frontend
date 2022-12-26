import '../style/footer.css'
export default  function Footer() {
    return(
        <>
        <div className="row" style={{marginTop:'10px'}}>
            <div className="col-12">
                <footer>
                    <div className="container-fluid padding">
                        <div className="row text-center">
                            <div className="col-md-4">
                                <img src="" alt={''}/>
                                    <hr className="light"/>
                                        <p>111-222-3333</p>
                                        <p>mymail@gmail.com</p>
                                        <p>Thanh Xuan,Ha Noi,Viet Nam</p>
                            </div>
                            <div className="col-md-4">
                                <hr className="light"/>
                                    <h5>Working hours</h5>
                                    <hr className="light"/>
                                        <p>Monday-Friday: 8am - 5pm</p>
                                        <p>Weekend: 8am - 12am</p>
                            </div>
                            <div className="col-md-4">
                                <hr className="light"/>
                                    <h5>Services</h5>
                                    <hr className="light"/>
                                        <p>Outsourcing</p>
                                        <p>Website development</p>
                                        <p>Mobile applications</p>
                            </div>
                            <div className="col-12">
                                <hr className="light-100"/>
                                    <h5>&copy; Fones</h5>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
        </>
    )
}