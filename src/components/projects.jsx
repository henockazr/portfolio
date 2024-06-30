/* eslint-disable react-hooks/rules-of-hooks */
import { Modal } from "flowbite-react";
import { useState } from "react";
import sman19 from '../assets/img/data/sman19.png';
import toolist from '../assets/img/data/toolist.png';
import royalcars from '../assets/img/data/royalcars.png';
import berita from '../assets/img/data/berita.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const jobs = [
    { title: 'Presensi SMAN 19 Bandung', image: sman19, category: ['Laravel', 'Web Development'], subtitle: 'Record attendance utilizing QR Code by using Laravel.', description:'' },
    { title: 'TooList', image: toolist, category: ['Flutter', 'Mobile Development'], subtitle: 'Notes app to write your task, also track your expense.', description:'' },
    { title: 'Royal Cars', image: royalcars, category: ['PHP', 'Web Development'], subtitle: 'Providing service for online car rent booking.', description:'' },
    { title: 'Berita.com', image: berita, category: ['Web Development'], subtitle: 'Basic web development showing top rated news anchor.', description:'' },
]

export default function Projects() {
    const [openModal, setOpenModal] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', subtitle: '', category: [] });

    const handleOpenModal = (job) => {
        setModalContent(job);
        setOpenModal(true);
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 100 }
        },
        hover: {
            scale: 1.05,
            transition: { duration: 0.7 }
        }
    };

    const titleVariants = {
        hidden: { opacity: 0, y: -20, transition: { duration: 0.5 } },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });

    return (
        <div className='container mx-5 mb-12'>
            <div className="lg:flex justify-center">
                <motion.div 
                    className='text-center lg:text-left w-auto lg:w-4/12 mt-2 lg:mt-0'
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    <motion.p 
                        id="title-projects" 
                        className="text-neutral-100 text-5xl mb-8 lg:mb-10 font-light"
                        variants={titleVariants}
                    >
                        Projects
                    </motion.p>
                </motion.div>
                <div className='text-left w-auto lg:w-2/5 mt-2'></div>
            </div>
            <div id="projects" className="lg:flex justify-center">
                <div className="lg:gap-5 lg:grid grid-cols-3 grid-flow-row">
                    {jobs.map((job, index) => {
                        const { ref, inView } = useInView({
                            triggerOnce: false,
                            threshold: 0.1,
                        });

                        return (
                            <motion.div
                                ref={ref}
                                key={index}
                                onClick={() => handleOpenModal(job)}
                                className="styled-card w-auto lg:w-96 rounded-xl mt-6 lg:mt-0 cursor-pointer"
                                id='text-card'
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={containerVariants}
                                whileHover="hover"
                            >
                                <img
                                    src={job.image}
                                    alt="Card Thumbnail"
                                    className="styled-card-thumbnail"
                                />
                                <div className="styled-card-overlay p-6">
                                    <div>
                                        <h2 id='title-projects' className="text-neutral-200 text-2xl">{job.title}</h2>
                                        <p className="text-neutral-200 mb-6 mt-3">{job.subtitle}</p>
                                        <div className="flex items-center gap-2 text-neutral-100">
                                            {job.category.map((cat, index) => (
                                                <span key={index} className="bg-neutral-600 py-1 px-3 rounded-3xl">{cat}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
            <Modal show={openModal} onClose={() => setOpenModal(false)} size='7xl'>
                <Modal.Header>{modalContent.title}</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <p className="text-base leading-relaxed">{modalContent.description}</p>
                        <div className="flex items-center gap-2">
                            {modalContent.category.map((cat, index) => (
                                <span key={index} className="bg-neutral-600 py-1 px-3 rounded-3xl text-neutral-100">{cat}</span>
                            ))}
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}
