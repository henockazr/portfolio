/* eslint-disable react/prop-types */
import { cubicBezier, motion } from 'framer-motion';

const Transition = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3, delay: 0.25, ease: cubicBezier(0.4, 0, 0.2, 1) }}
        >
            {children}
        </motion.div>
    );
};

export default Transition;
