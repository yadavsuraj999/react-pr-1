import Accordion from 'react-bootstrap/Accordion';

const Brand = () => {
    return (
        <section className='bg-ai pt-180'>
            <div className="container">
                <div className="">
                    <h1 className="display-3 text-center fw-bold text-white mb-5">
                        Questions & Answers
                    </h1>
                </div>
                <div className=' border  px-4 rounded-5'>
                    <Accordion >
                        <Accordion.Item eventKey="0" >
                            <Accordion.Header>What is retro Ai?</Accordion.Header>
                            <Accordion.Body >
                                It only takes 5 minutes. Set-up is smooth & simple, with fully customisable filter to the right one. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>How do I find different criteria in pricing?</Accordion.Header>
                            <Accordion.Body>
                                It only takes 5 minutes. Set-up is smooth & simple, with fully customisable filter to the right one. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" >
                            <Accordion.Header>How does retro cost?</Accordion.Header>
                            <Accordion.Body >
                                It only takes 5 minutes. Set-up is smooth & simple, with fully customisable filter to the right one. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>I have running plan, How can I change it?</Accordion.Header>
                            <Accordion.Body>
                                It only takes 5 minutes. Set-up is smooth & simple, with fully customisable filter to the right one. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>I have running plan, How can I change it?</Accordion.Header>
                            <Accordion.Body>
                                It only takes 5 minutes. Set-up is smooth & simple, with fully customisable filter to the right one. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export default Brand