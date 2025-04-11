import React from 'react';
import { motion } from 'framer-motion';

const About = () => (
  <motion.section
    id="about"
    className="section"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h2 style={{ color: '#003196' }}>Sobre Nosotros</h2>
    <p>
      Somos una compañía creativa enfocada en la creación de contenido educativo y entretenido para niños y familias.
    </p>
  </motion.section>
);

export default About;





