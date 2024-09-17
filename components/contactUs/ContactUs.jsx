function ContactUs() {
    return ( <>
     <div className="container my-5">
        <h2 className="text-center mb-4">Contact Us</h2>

        <form>
            <div className="mb-3">
                <label  className="form-label">Full Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your full name"/>
            </div>

            <div className="mb-3">
                <label  className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
            </div>

            <div className="mb-3">
                <label  className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
            </div>

            <div >
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
    
    </> );
}

export default ContactUs;