// import React, { useState } from 'react';
// import FormField from '../components/Form';
// import Button from '../components/Button';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!formData.email || !formData.password) {
//       setErrors({ form: 'Email and password are required' });
//       return;
//     }

//     alert('Logged in successfully!');
//     navigate('/user-dashboard');
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-xl shadow-lg w-full sm:w-96">
//         <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
//         {errors.form && <p className="text-red-500 text-center mb-4">{errors.form}</p>}
//         <form onSubmit={handleSubmit}>
//           <FormField label="Email Address" type="email" name="email" value={formData.email} onChange={handleChange} />
//           <FormField label="Password" type="password" name="password" value={formData.password} onChange={handleChange} />
//           <Button type="submit">Login</Button>
//           <Button onClick={()=>{    navigate('/create-account');}}>SignUp</Button>
//         </form>
//       </div>

//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormField from '../components/Form';
import Button from '../components/Button';
import { Link } from 'react-router-dom'; 

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setErrors({ form: 'Email and password are required' });
      return;
    }

    alert('Logged in successfully!');
    navigate('/user-dashboard');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full sm:w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        {errors.form && <p className="text-red-500 text-center mb-4">{errors.form}</p>}
        <form onSubmit={handleSubmit}>
          <FormField label="Email Address" type="email" name="email" value={formData.email} onChange={handleChange} />
          <FormField label="Password" type="password" name="password" value={formData.password} onChange={handleChange} />
          <Button type="submit">Login</Button>

      
          <p className="text-center mt-4">
            Don't have an account?{' '}
            <Link to="/create-account" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
