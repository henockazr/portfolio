import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import jobs from './data/experiencesData';

export default function Experiences() {
    const { ref: containerRef, inView: containerInView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: {
                staggerChildren: 0.7,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const titleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className='container mx-5'>
            <div className="lg:flex justify-center">
                <motion.div 
                    className='text-center lg:text-left w-auto lg:w-4/12 mt-2'
                    ref={containerRef}
                    variants={containerVariants}
                    initial="hidden"
                    animate={containerInView ? "visible" : "hidden"}
                >
                    <motion.p 
                        id="title-experiences" 
                        className="text-neutral-100 text-5xl mb-10 font-light"
                        variants={titleVariants}
                    >
                        Experiences
                    </motion.p>
                </motion.div>
                <motion.div 
                    id="experiences" 
                    className='lg:text-left w-auto lg:w-2/5 mt-2'
                    ref={containerRef}
                    variants={containerVariants}
                    initial="hidden"
                    animate={containerInView ? "visible" : "hidden"}
                >
                    {jobs.map((job, index) => (
                        <motion.div key={index} className="mb-12" variants={itemVariants}>
                            <p className="text-neutral-300 text italic">({job.duration})</p>
                            <p className="text-neutral-200 text-2xl font-semibold">{job.title}</p>
                            <p className="text-neutral-300 text-lg">{job.instance}</p>
                            <p className='text-neutral-400 text-xl mb-6 mt-3'>{job.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}
