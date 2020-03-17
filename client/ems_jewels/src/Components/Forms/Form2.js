import React from 'react';
import { useFormik } from 'formik';

const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName, first}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <label for="state">State</label>
			<select id="state" name="state">
                <option value="---">---</option>
                <option value={state}>Alabama</option>
                <option value={state}>Alaska</option>
                <option value={state}>Arizona</option>
                <option value={state}>Arkansas</option>
                <option value={state}>California</option>
                <option value={state}>Colorado</option>
                <option value={state}>Connecticut</option>
                <option value={state}>Delaware</option>
                <option value={state}>District of Columbia</option>
                <option value={state}>Florida</option>
                <option value={state}>Georgia</option>
                <option value={state}>Guam</option>
                <option value={state}>Hawaii</option>
                <option value={state}>Idaho</option>
                <option value={state}>Illinois</option>
                <option value={state}>Indiana</option>
                <option value={state}>Iowa</option>
                <option value={state}>Kansas</option>
                <option value={state}>Kentucky</option>
                <option value={state}>Louisiana</option>
                <option value={state}>Maine</option>
                <option value={state}>Maryland</option>
                <option value={state}>Massachusetts</option>
                <option value={state}>Michigan</option>
                <option value={state}>Minnesota</option>
                <option value={state}>Mississippi</option>
                <option value={state}>Missouri</option>
                <option value={state}>Montana</option>
                <option value={state}>Nebraska</option>
                <option value={state}>Nevada</option>
                <option value={state}>New Hampshire</option>
                <option value={state}>New Jersey</option>
                <option value={state}>New Mexico</option>
                <option value={state}>New York</option>
                <option value={state}>North Carolina</option>
                <option value={state}>North Dakota</option>
                <option value={state}>Northern Marianas Islands</option>
                <option value={state}>Ohio</option>
                <option value={state}>Oklahoma</option>
                <option value={state}>Oregon</option>
                <option value={state}>Pennsylvania</option>
                <option value={state}>Puerto Rico</option>
                <option value={state}>Rhode Island</option>
                <option value={state}>South Carolina</option>
                <option value={state}>South Dakota</option>
                <option value={state}>Tennessee</option>
                <option value={state}>Texas</option>
                <option value={state}>Utah</option>
                <option value={state}>Vermont</option>
                <option value={state}>Virginia</option>
                <option value={state}>Virgin Islands</option>
                <option value={state}>Washington</option>
                <option value={state}>West Virginia</option>
                <option value={state}>Wisconsin</option>
                <option value={state}>Wyoming</option>
            </select>
      <button type="submit">Submit</button>
    </form>
  );
};