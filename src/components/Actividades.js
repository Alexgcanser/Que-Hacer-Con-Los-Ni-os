import React from 'react';
import { motion } from 'framer-motion';

const actividades = [
  {
    nombre: 'Ocio',
    imagen: 'https://img.icons8.com/color/96/theatre-mask.png' // Máscara de teatro
  },
  {
    nombre: 'Viajes',
    imagen: 'https://img.icons8.com/color/96/airport.png' // Avión despegando
  },
  {
    nombre: 'Shopping',
    imagen: 'https://img.icons8.com/color/96/shopping-bag.png' // Bolsa de compras
  },
  {
    nombre: 'Educación',
    imagen: 'https://img.icons8.com/color/96/open-book.png' // Libro abierto
  },
  {
    nombre: 'Salud',
    imagen: 'https://img.icons8.com/color/96/heart-health.png' // Corazón con electrocardiograma
  },
  {
    nombre: 'Estilo de vida',
    imagen: 'https://img.icons8.com/color/96/home.png' // Casa con árbol
  }
];




const Actividades = () => (
  <section id="actividades" className="section alt-section">
    <h2 style={{ color: '#003196' }}>Nuestras Actividades</h2>
    <div className="actividades-grid">
      {actividades.map((act, index) => (
        <motion.div
          key={index}
          className="actividad"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index, duration: 0.5 }}
        >
          <h3>{act.nombre}</h3>
          <img src={act.imagen} alt={act.nombre} />
        </motion.div>
      ))}
    </div>
  </section>
);

export default Actividades;




