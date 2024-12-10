/*import '/src/styles/Contact.css';

function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;*/


////////////////////////////////////////////////////

import '/src/styles/Contact.css';

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="Your Name" required />

        <label htmlFor="email">Email address:</label>
        <input type="email" id="email" placeholder="Your Email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" placeholder="Your Message" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;

