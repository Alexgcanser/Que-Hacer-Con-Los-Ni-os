import React from 'react';
import { motion } from 'framer-motion';

const Encabezado = () => (
  <motion.header
    className="nav-bar"
    initial={{ y: -80, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
  >
    <motion.div
      className="logo"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.3, duration: 0.4 }}
    >
      <img src="/Logo.png" alt="Logo" style={{ height: "60px" }} />
    </motion.div>
    <nav>
      <motion.a
        whileHover={{ scale: 1.1, color: "#cd4d00" }}
        transition={{ type: "spring", stiffness: 300 }}
        href="#about"
      >
        Sobre Nosotros
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1, color: "#cd4d00" }}
        transition={{ type: "spring", stiffness: 300 }}
        href="#gallery"
      >
        Galería
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1, color: "#cd4d00" }}
        transition={{ type: "spring", stiffness: 300 }}
        href="#features"
      >
        Características
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1, color: "#cd4d00" }}
        transition={{ type: "spring", stiffness: 300 }}
        href="#contact"
      >
        Contacto
      </motion.a>
    </nav>
  </motion.header>
);

export default Encabezado;


