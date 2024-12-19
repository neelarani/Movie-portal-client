import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';
import { sendPasswordResetEmail, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import { FaEyeSlash } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';

const SignIn = () => {
  const { setUser, signInUser, googleProvider } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    const { email, password } = data;

    signInUser(email, password)
      .then(result => {
        setUser(result.user);
        toast.success('Sign-in Successful');
        navigate('/');
      })
      .catch(error => {
        toast.error(error.message);
      });
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then(() => {
        toast.success('Login Successful');
        navigate('/');
      })
      .catch(error => {
        toast.error(`Failed login please try again`);
      });
  };

  const handleForgotPassword = () => {
    const email = emailRef.current?.value;
    if (!email) {
      toast.error('Please provide a valid email');
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success('Password reset email sent. Please check your email!');
      })
      .catch(error => {
        toast.error('Failed reset password sent, please try again!');
      });
  };

  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-center font-bold">Sign-in</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /@/,
                    message: 'Invalid email format',
                  },
                })}
                className="input input-bordered"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* Password Input */}
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
                <p
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-12"
                >
                  {showPassword ? <FaEyeSlash /> : <IoEyeSharp />}
                </p>
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
                  },
                })}
                className="input input-bordered"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
              <label onClick={handleForgotPassword} className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            {/* Buttons */}
            <div className="form-control">
              <button
                type="submit"
                className="w-full mt-4 px-3 py-1 bg-purple-400 text-white font-semibold hover:bg-purple-500 text-sm"
              >
                Sign-in
              </button>
            </div>
            <p
              type="button"
              onClick={signInWithGoogle}
              className="px-3 py-1 border-[1px] hover:text-white text-black border-purple-400 w-full mt-3 hover:bg-purple-500 text-sm text-center"
            >
              Login with Google
            </p>

            <p className="text-xs text-center">
              Don't have an account?
              <Link
                to={'/signup'}
                className="text-blue-500 underline ml-2 font-semibold"
              >
                Sign-up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
