import Program_loop from "./Program_loop"

let images = [
    {
        image:"./images/team-01.jpg",
        info:"WEIGHT LIFTING"
},
    {
        image:"./images/team-02.jpg",
        info:"INDOOR CYCLING"
},
    {
        image:"./images/team-03.jpg",
        info:"BODY BUILDING"
},
    {
        image:"./images/team-04.jpg",
        info:"FITNESS CLASSES"
},
]




const Program_image = () => {
  return (
    <section className="pb-110 bg-black">
        <div className="container">
            <div className="row">
                {images.map((item)=>{
                    return <Program_loop img={item.image} info={item.info} />
                })}
            </div>
        </div>
    </section>
  )
}

export default Program_image;