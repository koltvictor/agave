import Header from './Header';
import emailjs from "emailjs-com";

export default function Contact () {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm("service_1cl1egj", "template_u54d3xr", e.target, "user_Jhf473QBsymPnicTrMVk1")
            .then(
                (data) => {window.location.reload()},
                error => console.log(error.text)
            );
        e.target.reset();
        alert("Message Sent!");
    }
    return(
        <div>
            <Header />  
            <h1 className="navHeader">Contact Form</h1>
            <div className="contactBack">
            <form className="contactForm" onSubmit={sendEmail}>
                <p className="contactP">Email us to schedule a time to view our gardens, or with any questions or inquiries & we will be happy to answer your questions and get back to you ASAP.</p><br/>
                <input className="contactInput" type="hidden" name="contact_number" /><br/>
                <input className="contactInput" type="text" name="from_name" placeholder="Your name" required/><br/>   
                <input className="contactInput" type="email" name="from_email" placeholder="Email address" required/><br/>
                <input className="contactInput" type="text" name="subject" placeholder="Subject" required/><br/><br/>
                <textarea  className="contactInput" name="html_message"placeholder="Message" required/><br/><br/><br/><br/><br/><br/>
                <input type="submit" value="Send" className="contactButton"/>
            </form>
            {/* <img src="https://knowyourbenefits.dfa.ms.gov/media/3540/contact-us.jpg" alt="contact" className="contactImg"/> */}
        </div>
        </div>
    )
}