import {useState} from 'react'
import "./Components.css";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({...prevData, [name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <div style={{width: "40%", border: "1px solid white", padding: "1em", fontFamily: "'DM Sans', sans-serif"}} className='mt-5'>
            <h2 className='text-white text-center' style={{}}>Ask us a question</h2>
            <form onSubmit={handleSubmit} className='text-white contact-form'>
                <div className='mb-3'>
                    <label htmlFor="firstName" className='mb-1' style={{fontSize: "1.2em", padding:"0.2em 1em"}}>First Name:</label><br />
                    <input type="text" id="firstName" name="firstName" className="form-control bg-secondary text-light border-0"
                    value={formData.firstName} onChange={handleChange} required />
                </div>

                <div className='mb-3'>
                    <label htmlFor="lastName" className='mb-1' style={{fontSize: "1.2em",padding:"0.2em 1em"}}>Last Name:</label><br />
                    <input type="text" id="lastName" name="lastName"  className="form-control bg-secondary text-light border-0" 
                    value={formData.lastName} onChange={handleChange} required />
                </div>

                <div className='mb-3'>
                    <label htmlFor="email" className='mb-1' style={{fontSize: "1.2em",padding:"0.2em 1em"}}>Email:</label><br />
                    <input type="email" id="email" name="email" className="form-control bg-secondary   text-light border-0"
                    value={formData.email} onChange={handleChange} required />
                </div>

                <div className='mb-3'>
                    <label htmlFor="phone" className='mb-1' style={{fontSize: "1.2em", padding:"0.2em 1em"}}>Phone Number:</label><br />
                    <input type="tel" id="phone" name="phone" className="form-control bg-secondary text-light border-0" 
                    value={formData.phone} onChange={handleChange} required />
                </div>

                <div>
                    <label htmlFor="message" className='mb-1' style={{fontSize: "1.2em", padding:"0.2em 1em"}}>Message:</label><br />
                    <textarea id="message" name="message" className="form-control bg-secondary text-light border-0" 
                    value={formData.message} onChange={handleChange} rows="4" required/>
                </div>

                <button type="submit" className="text-white border ms-4 mt-3" style={{padding:"0.2em 1em"}}>Submit</button>
            </form>
        </div>
    );
}

export default ContactForm;