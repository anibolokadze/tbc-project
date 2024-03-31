import { useState } from "react";
import "../styles/pages/Profile.css";

const Profile = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 2000);
  };

  return (
    <section className="profile">
      <div className="bg">
        <img src="https://via.placeholder.com/200" alt="user profile" />

        <p>ანი ბოლოკაძე</p>
        <p>anibolokadze@gmail.com</p>

        <form onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="password">ახალი პაროლი</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handlePasswordChange}
              required
            />

            <label htmlFor="confirm_password">გაიმეორეთ პაროლი</label>
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              onChange={handleConfirmPasswordChange}
              required
            />
            <div>
              <button type="submit">შენახვა</button>
            </div>
          </fieldset>
        </form>
      </div>

      {submitted && <p>DONE</p>}
    </section>
  );
};

export default Profile;
