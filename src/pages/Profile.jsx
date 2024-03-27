import "../styles/pages/Profile.css";

const Profile = () => {
  return (
    <section className="profile">
      <div className="bg">
        <img src="https://via.placeholder.com/200" alt="user profile" />

        <p>ანი ბოლოკაძე</p>
        <p>anibolokadze@gmail.com</p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <fieldset>
            <label htmlFor="password">ახალი პაროლი</label>
            <input type="password" id="password" name="password" required />

            <label htmlFor="confirm_password">გაიმეორეთ პაროლი</label>
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              required
            />
            <div>
              <button type="submit">შენახვა</button>
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default Profile;
