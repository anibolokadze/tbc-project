"use client";

import Image from "next/image";
import { ChangeEvent, useState } from "react";
import Layout from "../../../components/layout";

const Profile = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitted(true);
    setPassword("");
    setConfirmPassword("");

    setTimeout(() => {
      setSubmitted(false);
    }, 2000);
  };

  return (
    <Layout>
      <section className="profile">
        <div className="bg">
          <Image
            src="/profile.png"
            width={100}
            height={100}
            alt="user profile"
            priority={true}
          />
          <p>ანი ბოლოკაძე</p>
          <p>anibolokadze@gmail.com</p>

          <form onSubmit={handleSubmit}>
            <fieldset>
              <label htmlFor="password">ახალი პაროლი</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />

              <label htmlFor="confirm_password">გაიმეორეთ პაროლი</label>
              <input
                type="password"
                id="confirm_password"
                name="confirm_password"
                value={confirmPassword}
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
    </Layout>
  );
};

export default Profile;
