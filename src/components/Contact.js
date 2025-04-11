import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => (
  <motion.section
    id="contact"
    className="section alt-section"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h2 style={{ color: '#003196' }}>Contacto</h2>
    <form>
      <input type="text" placeholder="Tu nombre" required />
      <input type="email" placeholder="Tu email" required />
      <textarea placeholder="Escribe tu mensaje" required></textarea>
      <motion.button
        whileHover={{ scale: 1.05, backgroundColor: '#CD4D00' }}
        transition={{ duration: 0.3 }}
        style={{
          background: '#CE6627',
          padding: '10px 20px',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '1rem'
        }}
      >
        Enviar
      </motion.button>
    </form>
  </motion.section>
);

export default Contact;


