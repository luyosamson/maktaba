import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);

  // ✅ Auto-login: Check localStorage on mount
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      navigate('/dashboard'); // Redirect if already logged in
    }
  }, [navigate]);

  // ✅ Update form data as user types
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  // ✅ Client-side validation
  const validate = () => {
    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!isLogin) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Confirm your password';
      } else if (formData.confirmPassword !== formData.password) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    return newErrors;
  };

  // ✅ Login/Register handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      const endpoint = isLogin
        ? 'https://mockapi.io/login'
        : 'https://mockapi.io/register';

      const payload = isLogin
        ? { email: formData.email, password: formData.password }
        : {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password,
          };

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      const receivedToken = data.token || 'mock-token-12345';

      // ✅ Save token to local state & localStorage
      setToken(receivedToken);
      localStorage.setItem('token', receivedToken);

      alert(`${isLogin ? 'Login' : 'Registration'} successful!`);

      // ✅ Redirect to dashboard
      navigate('/dashboard');
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // ✅ Logout handler
  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('token');
    navigate('/'); // redirect to home or login
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4 py-12">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        {/* ✅ Logout button if user is already logged in */}
        {token && (
          <div className="mb-4 text-center">
            <p className="text-green-600 font-medium mb-2">You're already logged in.</p>
            <button
              onClick={handleLogout}
              className="text-sm text-red-500 hover:underline"
            >
              Logout
            </button>
          </div>
        )}

        {/* ✅ Form shown only if not logged in */}
        {!token && (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
              {isLogin ? 'Login to Maktaba' : 'Create An Account'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name fields (register only) */}
              {!isLogin && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded ${errors.firstName ? 'border-red-500' : ''}`}
                      placeholder="Enter First Name"
                    />
                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded ${errors.lastName ? 'border-red-500' : ''}`}
                      placeholder="Enter Last Name"
                    />
                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                  </div>
                </div>
              )}

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded ${errors.email ? 'border-red-500' : ''}`}
                  placeholder="Enter Email Address"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded ${errors.password ? 'border-red-500' : ''}`}
                  placeholder="Enter Password"
                />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              </div>

              {/* Confirm password (register only) */}
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded ${errors.confirmPassword ? 'border-red-500' : ''}`}
                    placeholder="Confirm Password"
                  />
                  {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                {loading ? 'Processing...' : isLogin ? 'Login' : 'Register'}
              </button>
            </form>

            {/* Toggle login/register */}
            <p className="mt-6 text-center text-sm">
              {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
              <button
                className="text-blue-600 font-medium hover:underline"
                onClick={() => {
                  setIsLogin(!isLogin);
                  setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                  });
                  setErrors({});
                }}
              >
                {isLogin ? 'Register' : 'Login'}
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Auth;
