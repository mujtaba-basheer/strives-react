import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToNewsletter } from "../../redux/actions/userActions";

import Alert from "../../components/Alert/Alert";
import { USER_NEWSLETTER_RESET } from "../../redux/constants/userConstants";

const Newsletter = () => {
  const dispatch = useDispatch();

  const { error, success, loading } = useSelector(
    (state) => state.userNewsletter
  );

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addToNewsletter(email));
    setTimeout(() => dispatch({ type: USER_NEWSLETTER_RESET }), 5000);
  };

  return (
    <div>
      <section className="newsletter">
        <div className="newsletter__text">Get 20% off on your next order.</div>
        <div className="newsletter__sub--noti">
          {error && (
            <Alert
              type="error"
              popup
              background="true"
              timer="5000"
              text={error}
            />
          )}

          {success && (
            <Alert
              type="secondary"
              popup
              background="true"
              timer="5000"
              text={success}
            />
          )}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="newsletter__sub">
            <input
              className="newsletter__sub--input"
              required
              type="email"
              placeholder="Your awesome email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
            <button type="submit" className="newsletter__sub--btn" disabled={loading}>
              <i className="newsletter__sub--btn--icon fas fa-angle-right"></i>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Newsletter;
