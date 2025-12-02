import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import jobs from './data/experiencesData';

export default function Experiences() {
    // State: Default tampil 3 item
    const [visibleItems, setVisibleItems] = useState(3);

    const { ref: containerRef, inView: containerInView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    // EFFECT: Update Locomotive Scroll layout setiap kali item berubah
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 100);

        return () => clearTimeout(timeoutId);
    }, [visibleItems]);

    // Handler: Tampilkan Semua
    const handleSeeMore = () => {
        setVisibleItems(jobs.length);
    };

    // Handler: Tampilkan Sedikit (Reset ke 3)
    const handleSeeLess = () => {
        setVisibleItems(3);
        
        // Opsional: Scroll balik ke judul 'Experiences' saat di-collapse
        // Supaya user tidak 'tertinggal' di bagian bawah yang kosong
        const titleElement = document.getElementById('title-experiences');
        if (titleElement) {
            titleElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 }
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
        <div className='container mx-5 mb-20'>
            <div className="lg:flex justify-center">
                {/* Bagian Judul (Kiri) */}
                <motion.div
                    className='text-center lg:text-left w-auto lg:w-4/12 mt-2'
                    ref={containerRef}
                    variants={containerVariants}
                    initial="hidden"
                    animate={containerInView ? "visible" : "hidden"}
                >
                    <motion.p
                        id="title-experiences" // ID ini dipakai untuk target scroll back
                        className="text-neutral-100 text-5xl mb-10 font-light sticky top-20"
                        variants={titleVariants}
                    >
                        Experiences
                    </motion.p>
                </motion.div>

                {/* Bagian List Job (Kanan) */}
                <motion.div
                    id="experiences"
                    className='lg:text-left w-auto lg:w-2/5 mt-2'
                    ref={containerRef}
                    variants={containerVariants}
                    initial="hidden"
                    animate={containerInView ? "visible" : "hidden"}
                >
                    {/* List Items (Slice) */}
                    {jobs.slice(0, visibleItems).map((job, index) => (
                        <motion.div key={index} className="mb-12" variants={itemVariants}>
                            <p className="text-neutral-300 text italic">({job.duration})</p>
                            <p className="text-neutral-200 text-2xl font-semibold">{job.title}</p>
                            <p className="text-neutral-300 text-lg">{job.instance}</p>
                            <p className='text-neutral-400 text-xl mb-6 mt-3 leading-relaxed'>
                                {job.description}
                            </p>
                        </motion.div>
                    ))}

                    {/* Logic Tombol Toggle */}
                    {/* Jika total data lebih dari 3, baru tampilkan tombolnya */}
                    {jobs.length > 3 && (
                        <motion.div 
                            variants={itemVariants} 
                            className="mt-8 flex justify-start"
                        >
                            {visibleItems < jobs.length ? (
                                // Tombol SEE MORE
                                <button
                                    onClick={handleSeeMore}
                                    className="px-6 py-2 border border-neutral-500 text-neutral-300 rounded-full hover:bg-neutral-200 hover:text-black hover:border-transparent transition-all duration-300"
                                >
                                    See More
                                </button>
                            ) : (
                                // Tombol SEE LESS
                                <button
                                    onClick={handleSeeLess}
                                    className="px-6 py-2 border border-red-500 text-red-400 rounded-full hover:bg-red-500 hover:text-white hover:border-transparent transition-all duration-300"
                                >
                                    See Less
                                </button>
                            )}
                        </motion.div>
                    )}

                </motion.div>
            </div>
        </div>
    );
}