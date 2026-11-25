import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting ArtVista!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">
      <section className="page-banner">
        <h1>Contact Us</h1>
        <p>We would love to hear from you.</p>
      </section>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({...form, name: e.target.value})}
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={(e) => setForm({...form, email: e.target.value})}
          required
        />

        <textarea
          placeholder="Your Message"
          value={form.message}
          onChange={(e) => setForm({...form, message: e.target.value})}
          required
        />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;