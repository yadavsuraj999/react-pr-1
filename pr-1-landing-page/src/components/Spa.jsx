const Spa = (props) => {
    return (
        <div className="col-md-4 col-12 ">
            <div className="scale">
                <div className="img-zoom">
                    <img src={props.img} alt="" width={'100%'} />
                </div>
                <div className="color">
                    <h6 className="text-center py-3 fw-bold text-white">
                        {props.head}
                    </h6>
                    <p className="text-center px-4 pb-4 text-secondary">
                        {props.para}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Spa