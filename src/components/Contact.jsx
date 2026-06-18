import "../styles/contact.css";

function Contact() {
  return (
    <section id="contact">

      <h2>Contact Me</h2>

      <div className="contact-container">

        <form
          action="https://formsubmit.co/dharshana.manthiriyappan@gmail.com"
          method="POST"
          className="contact-form"
        >

          <input
            type="hidden"
            name="_subject"
            value="New Portfolio Contact Message"
          />

          <input
            type="hidden"
            name="_captcha"
            value="false"
          />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;