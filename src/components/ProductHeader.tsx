import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ProductHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -10 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.25 }}
      className="bg-card/80 backdrop-blur-lg border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                CryptoVault Pro
              </h1>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
            <a href="#description" className="text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </nav>

          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="md:hidden mt-4 pb-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col space-y-4 px-4">
              <a href="#features" className="block py-2 text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Features</a>
              <a href="#description" className="block py-2 text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#contact" className="block py-2 text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default ProductHeader;
