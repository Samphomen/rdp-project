import React from 'react'
import homeSpace from '../Images/homeSpace.jpg'
import {services} from "../Components/ServiceList"

const Home = () => {
  return (
    <div>
        <div className='top'>
            <div className='top-text'>
                <h1>Empowering <br/> Independence : City Care <br/> and Support Ltd.</h1>
                <p>Discover our tailored care and support services in Essex.</p>
                <button>Contact</button>
            </div>
        </div>
        <section className="top-btm-text">
            <p>
                Introducing City Care and Support Limited, a leading provider of supported living services in Essex, Uk. With a strong commitment to enhancing the quality of life for individuals in need. We offer a comprehensive range of personalized support solutions. At City Care and Support Limited, we understand the unique challenges faced by those requiring assistance and our dedicated team of professionals is here  to provide compassionate care and guidance. Whether it's helping individuals with dauly tasks, promoting independent living, or fostering a supportive community, our tailored services ensure that each person receives the care they deserve. Trust us to be your trusted partner in suported living as we strive to make a positive difference in the lives of those we serve.
            </p>
        </section>
        <section className='services'>
            <h1 className='s-header'>Our Services</h1>
            <div className='service-section'>
                {
                    services.map((service) => (
                        <div className='s-service'>
                            <div className='s-imgbox'>
                                <img src={service.image} />
                            </div>
                            <div className='s-words'>
                                <h1>{service.heading}</h1>
                                <p>{service.content}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
        <section className='about'>
            <div className='about-image'>
                <img src={homeSpace} />
            </div>
            <div className='about-desc'>
                <h1>About Us</h1>
                <p>City Care and Support Limited is a leading supported living provider based in the United Kingdom. We are dedicated to offering high-quality care and support services to individuals in need, ensuring they can live fulfilling and independent lives</p>
                <p>With a focus on person-centered care, our team is committed to creating a safe and nurturing environment for our residents. We strive to empower and enable our clients to achieve their personal goals and aspirations, promoting dignity and respect in everything we do</p>
            </div>
        </section>
        <section className='contact'>
            <form className='contact-left'>
                <div className='cl-top'>
                    <div className='cl-t1'>
                        <p>Name</p>
                        <input />
                    </div>
                    <div className='cl-t1'>
                        <p>E-mail</p>
                        <input />
                    </div>
                </div>
                <div className='cl-bottom'>
                    <p>Message</p>
                    <textarea />
                </div>
                <div className='cl-button'>
                    <button>Send</button>
                </div>
            </form>
            <div className='contact-right'>
                <h1>Contact Us Today</h1>
                <p>Fill out form below to get in touch with us.  We are here to help and answer any questions you may have</p>
            </div>
        </section>
        <section className='reviews'>
        </section>
        <footer>

        </footer>
    </div>
  )
}

export default Home