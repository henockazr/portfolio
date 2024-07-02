/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Backdrop, Box, Modal as MModal, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useSpring, animated } from '@react-spring/web';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import jobs from './data/projectsData';

const Fade = React.forwardRef(function Fade(props, ref) {
    const {
        children,
        in: open,
        onEnter,
        onExited,
        ...other
    } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter(null, true);
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited(null, true);
            }
        },
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
            {children}
        </animated.div>
    );
});

Fade.propTypes = {
    children: PropTypes.element.isRequired,
    in: PropTypes.bool,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
};

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: '800px',
    maxHeight: '90vh',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflowY: 'auto'
};

const modalImageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '20px'
};

const modalContentStyle = {
    textAlign: 'left',
    padding: '10px'
};

export default function Projects() {
    const [open, setOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', link: { github: '', visit: '' }, subtitle: '', category: [], tech: [], description: '', image: '' });

    const handleOpenModal = (job) => {
        setModalContent(job);
        setOpen(true);
    };

    const handleCloseModal = () => {
        setOpen(false);
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
        threshold: 0.5,
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
                                    src={job.image.thumbnail}
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
            <MModal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                open={open}
                onClose={handleCloseModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    TransitionComponent: Fade,
                }}
            >
                <Fade in={open}>
                    <Box sx={modalStyle}>
                        <IconButton
                            aria-label="close"
                            onClick={handleCloseModal}
                            sx={{
                                position: 'absolute',
                                right: 8,
                                top: 8,
                                color: (theme) => theme.palette.grey[500],
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <img className='border-2 border-stone-500' src={modalContent.image.header} alt={modalContent.title} style={modalImageStyle} />
                        <div className='lg:flex'>
                            <div style={modalContentStyle} className='w-5/6'>
                                <Typography id="spring-modal-title" variant="h6" component="h2">
                                    {modalContent.title}
                                </Typography>
                                <Typography id="spring-modal-description" sx={{ mt: 2 }}>
                                    {modalContent.description}
                                </Typography>
                            </div>
                            <div id='tech-stack' style={modalContentStyle} className='w-1/6'>
                                <p className='text-lg my-2'>Tech Stack</p>
                                {modalContent.tech.map((cat, index) => (
                                    <p key={index} className="rounded-3xl text-stone-600">{cat}</p>
                                ))}
                            </div>
                        </div>
                        {modalContent.link ?
                            <div className='flex gap-2 px-2 py-3'>
                                {modalContent.link.github ? 
                                <a className='rounded-3xl bg-stone-500 text-stone-100 px-4 py-2 text transition duration-500 lg:hover:scale-105' href={modalContent.link.github} target='_blank'>GitHub <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right inline-block" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                                </svg></a>
                                : ''}
                                {modalContent.link.visit ? 
                                <a className='rounded-3xl bg-stone-500 text-stone-100 px-4 py-2 text transition duration-500 lg:hover:scale-105' href={modalContent.link.visit} target='_blank'>Visit <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right inline-block" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                                </svg></a>
                                : ''}
                            </div>
                            : ''}
                    </Box>
                </Fade>
            </MModal>
        </div>
    )
}
