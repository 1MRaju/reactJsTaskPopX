import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/features/userSlice';
import FormField from '../components/Form';  
import Button from '../components/Button';
import {Link, useNavigate } from 'react-router-dom';

const CreateAccount = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phoneNumber: '',
    companyName: '',
    isAgency: '', 
  });

  const [errors, setErrors] = useState({});

    const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // For radio and checkbox inputs
    if (type === 'radio' || type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: checked ? value : '', 
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,  
      });
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!formData.fullName) formErrors.fullName = 'Full name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.password) formErrors.password = 'Password is required';
    if (!formData.phoneNumber) formErrors.phoneNumber = 'Phone number is required';
    if (!formData.companyName) formErrors.companyName = 'Company name is required';
    if (!formData.isAgency) formErrors.isAgency = 'Please select if you are an agency';

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Dispatch the user data to Redux store
    const userData = { email: formData.email, fullName: formData.fullName };
    // console.log(userData);
    dispatch(login(userData));

    alert('PopX Account Created Successfully!');
    navigate('/login');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full sm:w-96 max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Create your PopX account</h2>
        <form onSubmit={handleSubmit}>
          <FormField 
            label="Full Name" 
            type="text" 
            name="fullName" 
            value={formData.fullName} 
            onChange={handleChange} 
            error={errors.fullName} 
            required 
          />
          <FormField 
            label="Phone Number" 
            type="text" 
            name="phoneNumber" 
            value={formData.phoneNumber} 
            onChange={handleChange} 
            error={errors.phoneNumber} 
            required 
          />
          <FormField 
            label="Email Address" 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            error={errors.email} 
            required 
          />
          <FormField 
            label="Password" 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            error={errors.password} 
            required 
          />
          <FormField 
            label="Company Name" 
            type="text" 
            name="companyName" 
            value={formData.companyName} 
            onChange={handleChange} 
            error={errors.companyName} 
          />

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Are you an agency?</label>
            <div className="flex items-center space-x-6 mt-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="isAgencyYes"
                  name="isAgency"
                  value="Yes"
                  checked={formData.isAgency === 'Yes'}
                  onChange={handleChange}
                  className="form-checkbox h-4 w-4 text-[var(--col1)] bg-[var(--col1)] border-gray-300 rounded-full focus:ring-2 focus:ring-[var(--col1)]"
                />
                <label htmlFor="isAgencyYes" className="ml-2">Yes</label>
              </div>

              <div className="flex items-center">
                <input
                  type="radio"
                  id="isAgencyNo"
                  name="isAgency"
                  value="No"
                  checked={formData.isAgency === 'No'}
                  onChange={handleChange}
                  className="form-checkbox h-4 w-4 text-[var(--col1)] bg-[var(--col1)] border-gray-300 rounded-full focus:ring-2 focus:ring-[var(--col1)]"
                />
                <label htmlFor="isAgencyNo" className="ml-2">No</label>
              </div>
            </div>
            {errors.isAgency && <p className="text-red-500 text-xs">{errors.isAgency}</p>}
          </div>

          <Button className="bg-[#6C25FF]!" type="submit">Create Account</Button>

          <p className="text-center mt-4 text-sm">
            <Link to="/" className="text-[var(--col1)] hover:underline">
               Go to Home page!
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;

