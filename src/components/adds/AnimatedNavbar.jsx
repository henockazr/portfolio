import { motion } from 'framer-motion';
import Navbar from '../navbar.jsx';

const AnimatedNavbar = () => {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
        >
            <Navbar />
        </motion.nav>
    );
};

export default AnimatedNavbar;
