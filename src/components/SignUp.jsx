import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { IoEyeSharp } from 'react-icons/io5';
import { FaEyeSlash } from 'react-icons/fa';

const SignUp = () => {
  const { user, setUser, createNewUser, updatedUserProfile } =
    useContext(AuthContext);
  const [passwordErr, setPasswordErr] = useState('');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    const user = { name, email, photo };

    fetch(`https://movie-portal-server-pi.vercel.app/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then(data => {});

    const error = validatedPassword(password);
    if (error) {
      setPasswordErr(error);
      return;
    }
    setPasswordErr;

    createNewUser(email, password)
      .then(result => {
        setUser(result.user);
        updatedUserProfile({
          displayName: name,
          photoURL: photo,
        }).then(() => {
          toast.success(`Registration Successfully`);
          navigate('/');
        });
      })
      .catch(error => {
        toast.error(`Failed to create user: ${error.message}`);
      });
  };

  const validatedPassword = password => {
    let hasUpperCase = false;
    let hasLowerCase = false;

    for (const char of password) {
      if (char === char.toUpperCase() && char !== char.toLowerCase()) {
        hasUpperCase = true;
      }
      if (char === char.toLowerCase() && char !== char.toUpperCase()) {
        hasLowerCase = true;
      }
    }

    if (!hasUpperCase) {
      return 'Password must contain at least one uppercase letter';
    }
    if (!hasLowerCase) {
      return 'Password must contain at least one lowercase letter';
    }
    if (password.length < 6) {
      return 'Password must be at least 6 characters long';
    }

    return '';
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-2">
          <h1 className="text-center font-bold">Sign-up</h1>
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label ">
                <span className="label-text">Password</span>
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-12"
                >
                  {showPassword ? <FaEyeSlash /> : <IoEyeSharp />}
                </button>
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />

              {passwordErr && (
                <p className="text-red-500 text-sm mt-2">{passwordErr}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                placeholder="photo"
                name="photo"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="border-purple-400 text-black hover:bg-purple-400 hover:text-white border-2 px-3 py-1">
                Sign-up
              </button>
              <p className="text-sm">
                Already Have an Account ?
                <Link to={'/signin'}>
                  <span className="text-blue-500 underline ml-2 font-semibold">
                    Sign-in
                  </span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
