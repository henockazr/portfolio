/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedLines = ({ text, className }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const lines = text.split('\n');

    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const lineVariants = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            variants={containerVariants}
            className={className}
        >
            {lines.map((line, index) => (
                <motion.p key={index} variants={lineVariants} className="mb-4">
                    {line}
                </motion.p>
            ))}
        </motion.div>
    );
};

export default AnimatedLines;
