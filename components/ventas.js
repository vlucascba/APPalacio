// src/components/Ventas.js
import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import api from '../api';

const Ventas = () => {
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    const fetchVentas = async () => {
      try {
        const response = await api.get('/ventas', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setVentas(response.data);
      } catch (error) {
        console.error('Error al obtener las ventas', error);
      }
    };

    fetchVentas();
  }, []);

  const formik = useFormik({
    initialValues: {
      producto: '',
      cantidad: '',
      precio: ''
    },
    validationSchema: Yup.object({
      producto: Yup.string()
        .required('El producto es obligatorio'),
      cantidad: Yup.number()
        .required('La cantidad es obligatoria')
        .positive('La cantidad debe ser un número positivo')
        .integer('La cantidad debe ser un número entero'),
      precio: Yup.number()
        .required('El precio es obligatorio')
        .positive('El precio debe ser un número positivo')
    }),
    onSubmit: async (values) => {
      try {
        const response = await api.post('/ventas', values, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setVentas([...ventas, response.data]);
        formik.resetForm();
      } catch (error) {
        console.error('Error al crear la venta', error);
      }
    }
  });

  return (
    <div>
      <h2>Ventas</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Producto:</label>
          <input
            type="text"
            name="producto"
            value={formik.values.producto}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.producto && formik.errors.producto ? (
            <div>{formik.errors.producto}</div>
          ) : null}
        </div>
        <div>
          <label>Cantidad:</label>
          <input
            type="number"
            name="cantidad"
            value={formik.values.cantidad}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.cantidad && formik.errors.cantidad ? (
            <div>{formik.errors.cantidad}</div>
          ) : null}
        </div>
        <div>
          <label>Precio:</label>
          <input
            type="number"
            name="precio"
            value={formik.values.precio}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.precio && formik.errors.precio ? (
            <div>{formik.errors.precio}</div>
          ) : null}
        </div>
        <button type="submit">Agregar Venta</button>
      </form>
      <ul>
        {ventas.map((venta) => (
          <li key={venta.id}>{venta.producto} - {venta.cantidad} - ${venta.precio}</li>
        ))}
      </ul>
    </div>
  );
};

export default Ventas;
