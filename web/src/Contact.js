import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <h1>Contact</h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;