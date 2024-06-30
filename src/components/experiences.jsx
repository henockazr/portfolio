import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const jobs = [
    { title: '"Presensi SMAN 19 Bandung" Team Lead', instance: "Institut Teknologi Nasional Bandung", duration: 'March - Present', description: '"Presensi SMAN 19 Bandung" is a website for recording the attendance of each student in each class in each subject. This whole project is about recording and data. By using a QR code, we have succeeded in creating a QR-based attendance recorder.' },
    { title: 'Software Engineering Laboratory Assistant', instance: "Institut Teknologi Nasional Bandung", duration: 'February - June 2024', description: 'Guiding students through learning material about the basic concept of programming, in this case, Web Development. By knowing HTML, CSS, PHP, students are expected to understand the basic concept of website programming.' },
    { title: 'Object Oriented Programming Laboratory Assistant', instance: "Institut Teknologi Nasional Bandung", duration: 'September 2023 - January 2024', description: 'Inside a team of 3 people, as a laboratory assistant, we provide learning material about Object Oriented Programming. For example, inheritance, abstraction, override concept, etc.' },
    { title: 'Animator P3D Sistem Informasi', instance: "Institut Teknologi Nasional Bandung", duration: 'July - August 2023', description: "Becoming part of 'Pengembangan dan Penyelenggaraan Pembelajaran Digital' in Sistem Informasi Itenas as an animator. Created learning material inform of animation video about the basic concept of programming." },
]

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
