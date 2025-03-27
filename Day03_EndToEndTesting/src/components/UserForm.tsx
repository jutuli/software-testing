import { useState } from 'react';

const UserForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username.length < 3 || !email.includes('@') || !email.includes('.')) {
      alert(
        'Invalid input. Your username must be longer than 3 characters and your email must be valid.'
      );
    } else {
      alert('User form was successfully submitted!');
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter username"
          onChange={(e) =>
            e.target.value ? setUsername(e.target.value) : setUsername('')
          }
        />
        <input
          type="email"
          placeholder="Enter email"
          onChange={(e) =>
            e.target.value ? setEmail(e.target.value) : setEmail('')
          }
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
