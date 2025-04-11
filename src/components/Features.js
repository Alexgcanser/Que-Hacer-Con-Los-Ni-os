import React from 'react';
import { motion } from 'framer-motion';

const Features = () => (
  <motion.section
    id="features"
    className="section"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h2 style={{ color: '#003196' }}>Características Destacadas</h2>
    <ul style={{ listStyle: 'none', padding: 0 }}>
      <li style={{ margin: '0.5rem 0' }}>🎮 Contenido interactivo</li>
      <li style={{ margin: '0.5rem 0' }}>🧩 Diseño amigable para niños</li>
      <li style={{ margin: '0.5rem 0' }}>🚀 Fácil de navegar</li>
    </ul>
  </motion.section>
);

export default Features;


