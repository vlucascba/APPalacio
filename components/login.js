// src/components/Login.js
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import api from '../api';

const Login = ({ onLogin }) => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required('El nombre de usuario es obligatorio'),
      password: Yup.string()
        .required('La contraseña es obligatoria')
    }),
    onSubmit: async (values) => {
      try {
        const response = await api.post('/auth/login', values);
        localStorage.setItem('token', response.data.token);
        onLogin();
      } catch (error) {
        console.error('Error al iniciar sesión', error);
      }
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label>Usuario:</label>
        <input
          type="text"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.username && formik.errors.username ? (
          <div>{formik.errors.username}</div>
        ) : null}
      </div>
      <div>
        <label>Contraseña:</label>
        <input
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
      </div>
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
};

export default Login;
