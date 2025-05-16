const Program_loop = (props) => {
  return (
    <div className="col-lg-3 col-md-6 col-12">
                    <div>
                        <div className="">
                            <img src={props.img} alt="" width="100%" />
                            <p className="text-center py-3 color fw-medium text-white">
                                {props.info}
                            </p>
                        </div>
                    </div>
                </div>
  )
}

export default Program_loop;