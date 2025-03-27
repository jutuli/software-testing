import { useState } from 'react';
import { set } from 'react-hook-form';

const NewsletterForm = () => {
  const [signedUp, setSignedUp] = useState(false);
  const [email, setEmail] = useState('');
  const [agreeNewsletter, setAgreeNewsletter] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (agreeNewsletter && email) {
      setSignedUp(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your email"
          onChange={(e) =>
            e.target.value ? setEmail(e.target.value) : setEmail('')
          }
        />
        <label htmlFor="agree-newsletter">
          I agree to receive the newsletter
        </label>
        <input
          type="checkbox"
          name="agree-newsletter"
          id="agree-newsletter"
          onChange={(e) =>
            e.target.checked
              ? setAgreeNewsletter(true)
              : setAgreeNewsletter(false)
          }
        />
        <button type="submit">Subscribe</button>
      </form>
      {signedUp && (
        <p data-testid="subscription-confirmation">
          Thank you! You are now subscribed.
        </p>
      )}
    </div>
  );
};

export default NewsletterForm;
