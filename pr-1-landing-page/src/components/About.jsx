import React from 'react'
import Progarm from './Progarm';

let progarms={
        heading:"OUR FITNESS PROGRAMS",
        para:" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type scrambled it to make a type specimen book."
}
const About = () => {
  return (
    <section className=''>
        <div className="about-section">
            <div className='container'>
              <div className='row align-items-center p-130'>
                    <div className="col-lg-6 col-12" >
                      <div>
                        <h1 className="display-5 main-heading fw-bold">
                          ABOUT THE GYM <br /> AND FITNESS
                        </h1>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12" >
                        <div className=' border-bottom pb-4'>
                          <h5 className='color-1'>
                            The place to get in shape.
                          </h5>
                          <p className=' text-secondary'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting. <br /> Lorem Ipsum has been he standard dummy.
                          </p>
                        </div>
                        <div className='mt-5'>
                          <h5 className='color-1'>
                            The place to get in shape.
                          </h5>
                          <p className=' text-secondary'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting. <br /> Lorem Ipsum has been he standard dummy.
                          </p>
                        </div>
                    </div>
                    
              </div>
            </div>
        </div>
        <Progarm heading ={progarms.heading} head={progarms.para}/>
    </section>
  )
}

export default About;