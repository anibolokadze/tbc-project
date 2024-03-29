import "../styles/pages/Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <div>
        <h3>კონტაქტი</h3>
        <ul>
          <li>example@example.com</li>
          <li>+1234567890</li>
          <li>#129ა ნუცუბიძის ქუჩა; თბილისი</li>
        </ul>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <fieldset>
          <legend>დაგვიტოვეთ შეტყობინება</legend>
          <label htmlFor="name">სახელი:</label>
          <div>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="შეიყვანეთ სახელი"
              autoComplete="off"
              required
            />
          </div>

          <label htmlFor="email">მეილი:</label>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="შეიყვანეთ მეილი"
              autoComplete="off"
              required
            />
          </div>

          <label htmlFor="message">შეტყობინება</label>
          <div>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="შეიყვანეთ თქვენი შეტყობინება..."
              autoComplete="off"
              required
            />
          </div>

          <button type="submit">გაგზავნა</button>
        </fieldset>
      </form>
    </section>
  );
};

export default Contact;
