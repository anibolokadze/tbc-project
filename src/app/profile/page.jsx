"use client";
import Layout from "@/components/layout";
import data from "@/data";
import Image from "next/image";
import { useState } from "react";

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
    setPassword("");
    setConfirmPassword("");

    setTimeout(() => {
      setSubmitted(false);
    }, 2000);
  };

  return (
    <Layout header={data.header} footer={data.footer}>
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
