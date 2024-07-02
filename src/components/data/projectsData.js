import sman19 from '../../assets/img/data/sman19.png';
import headersman19 from '../../assets/img/data/header_presensi.png';
import toolist from '../../assets/img/data/toolist.png';
import headertoolist from '../../assets/img/data/header_toolist.png';
import royalcars from '../../assets/img/data/royalcars.png';
import headerroyalcars from '../../assets/img/data/header_royalcars.png';
import berita from '../../assets/img/data/berita.png';
import headerberita from '../../assets/img/data/header_berita.png';

const jobs = [
    { title: 'Presensi SMAN 19 Bandung', image: { thumbnail: sman19, header: headersman19 }, tech: ['Laravel', 'MySQL', 'Bootstrap'], category: ['Website', 'Back-end'], link: '', subtitle: 'Record attendance utilizing QR Code by using Laravel.', description: 'During my internship at TADA (PT Aksi Visitama), I served as a Website Developer Intern under the guidance of the CEO and VP of People. In the "Presensi SMAN 19 Bandung Project," I took the lead in creating an attendance recording system using QR codes with Laravel. This project aimed to streamline the attendance process and improve accuracy in record-keeping.' },
    { title: 'TooList', image: { thumbnail: toolist, header: headertoolist }, tech: ['Flutter', 'Etter Cloud'], category: ['Mobile', 'Fullstack'], link: {github: 'https://github.com/henockazr/TooList'}, subtitle: 'Notes app to write your task, also track your expense.', description: 'During my internship at TADA (PT Aksi Visitama), I served as a Website Developer Intern under the guidance of the CEO and VP of People. In the "TooList Project," I created a notes app to write tasks and track expenses. The project was developed using Flutter and aimed to provide a user-friendly experience for managing personal tasks and expenses.' },
    { title: 'Royal Cars', image: { thumbnail: royalcars, header: headerroyalcars }, tech: ['PHP', 'MySQL'], category: ['Website', 'Back-end'], link: '', subtitle: 'Providing service for online car rent booking.', description: 'During my internship at TADA (PT Aksi Visitama), I served as a Website Developer Intern under the guidance of the CEO and VP of People. In the "Royal Cars Project," I developed an online car rental booking service using PHP. This project aimed to provide a seamless and convenient way for customers to book car rentals online.' },
    { title: 'Berita.com', image: { thumbnail: berita, header: headerberita }, tech: ['HTML', 'CSS', 'JavaScript'], category: ['Website', 'Front-end'], link: {github:'https://github.com/revou-fundamental-course/26-jun-23-henockazr', visit:'https://revou-fundamental-course.github.io/26-jun-23-henockazr/'}, subtitle: 'Basic web development showing top rated news anchor.', description: 'During my internship at TADA (PT Aksi Visitama), I served as a Website Developer Intern under the guidance of the CEO and VP of People. In the "Berita.com Project," I developed a basic web platform to showcase top-rated news anchors. This project focused on creating a clean and user-friendly interface for displaying news content.' },
];

export default jobs;
