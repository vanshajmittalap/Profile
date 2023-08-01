import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">HIRE ME</h1>
                            <p className="hire__text white">You can write your message below or You can direct contact me via:</p>
                           <p className="hire__text white"><strong>📱 +91 9927502859</strong></p>
                           <p className="hire__text white"><strong>📧 vanshajmittal1204@gmail.com</strong></p>
                        </div>
                        <div className="input__box">
                            <form action="https://formcarry.com/s/6qSnkBIHGqi" method="POST" acceptCharset="UTF-8" >
                            <input type="text" className="contact name" name="name" placeholder="NAME" />
                            <input type="text" className="contact email" name="email" placeholder="EMAIL" />
                            <textarea name="message" id="message" placeholder="WRITE YOUR MESSAGE"></textarea>
                            <button className="btn contact pointer" type="submit">Submit</button>
                           </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
