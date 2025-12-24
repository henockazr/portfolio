import sman19 from '../../assets/img/data/sman19.png';
import headersman19 from '../../assets/img/data/header_presensi.png';
import toolist from '../../assets/img/data/toolist.png';
import headertoolist from '../../assets/img/data/header_toolist.png';
import royalcars from '../../assets/img/data/royalcars.png';
import headerroyalcars from '../../assets/img/data/header_royalcars.png';
import berita from '../../assets/img/data/berita.png';
import headerberita from '../../assets/img/data/header_berita.png';
import football from '../../assets/img/data/football.png';
import headerfootball from '../../assets/img/data/header_football.png';
import warehouse from '../../assets/img/data/warehouse.png';
import headerwarehouse from '../../assets/img/data/header_warehouse.png';
import fifa from '../../assets/img/data/fifa.png';
import header_fifa from '../../assets/img/data/header_fifa.png';

const projects = [
    {
        title: 'FIFA Player Prediction',
        image: {thumbnail: fifa, header: header_fifa},
        tech: ['Python', 'NumPy', 'Pandas', 'Scikit-Learn'],
        category: ['Machine Learning', 'Regression'],
        link: {},
        subtitle: "AI-Driven Football Player Valuation",
        description: "An in-depth research project analyzing the correlation between in-game player attributes (FIFA 2012-2025) and their real-world market values. I utilized Python to construct comparative prediction models using XGBoost, SVR, and Random Forest algorithms. The primary challenge involved unifying two disparate data sources. To solve this, I implemented Fuzzy Matching techniques to align the game dataset with real-world pricing data from Transfermarkt, ensuring precise data interpretation. The model's performance was rigorously validated using MAE, RMSE, and R-squared metrics to minimize prediction bias.",
    },
    {
        title: 'Dutra Parahyangan Warehouse',
        image: { thumbnail: warehouse, header: headerwarehouse },
        tech: ['Next.js', 'PostgreSQL', 'Drizzle ORM'],
        category: ['Website', 'Backend'],
        link: { visit: 'https://dutra.digitalkultr.com/' },
        subtitle: 'Inventory management system for Dutra Parahyangan.',
        description: 'During my internship at PT Digitalkultr, I worked as a Backend Developer Intern under the guidance of Project Manager. In the "Dutra Parahyangan Warehouse Project", I developed an inventory management system using Next.js and PostgreSQL with Drizzle ORM. This project aimed to streamline warehouse operations and improve inventory tracking for Dutra Parahyangan.'
    },
    {
        title: 'Presensi SMAN 19 Bandung',
        image: { thumbnail: sman19, header: headersman19 },
        tech: ['Laravel', 'MySQL', 'Bootstrap'],
        category: ['Website', 'Fullstack'],
        link: {
            visit: 'https://presensi.smanegeri19bdg.sch.id/'
        },
        subtitle: 'Record attendance utilizing QR Code by using Laravel.',
        description: 'During my field work practice, I served as a Fullstack Developer and Project Manager under the guidance of lecturer. In the "Presensi SMAN 19 Bandung Project," I took the lead in creating an attendance recording system using QR codes with Laravel. This project aimed to streamline the attendance process and improve accuracy in record-keeping.'
    },
    {
        title: 'Information System League',
        image: { thumbnail: football, header: headerfootball },
        tech: ['Laravel', 'MySQL', 'Bootstrap'],
        category: ['Website', 'Fullstack'],
        link: {},
        subtitle: 'Record and display football league information.',
        description: 'This is one of the self-initiated project. It came from the idea of how to track matches in a small FIFA tournament in my department at ITENAS, and also affected by my interest in football and web development. In the "Information System League Project," I developed a web application to manage and display football league information using Laravel. The project focused on providing users with up-to-date league standings, match schedules, and team statistics.'
    },
    {
        title: 'TooList',
        image: { thumbnail: toolist, header: headertoolist },
        tech: ['Flutter', 'Etter Cloud'],
        category: ['Mobile', 'Fullstack'],
        link: { github: 'https://github.com/henockazr/TooList' },
        subtitle: 'Notes app to write your task, also track your expense.',
        description: 'For my final exam project, I served as a Mobile Developer with 2 other friend in a group under the guidance of lecturer. In the "TooList Project," we created a notes app to write to-do-tasks and track expenses. The project was developed using Flutter and aimed to provide a user-friendly experience for managing personal tasks and expenses.'
    },
    {
        title: 'Royal Cars',
        image: { thumbnail: royalcars, header: headerroyalcars },
        tech: ['PHP', 'MySQL'],
        category: ['Website', 'Backend'],
        link: {
            github: 'https://github.com/henockazr/RoyalCars'
        },
        subtitle: 'Providing service for online car rent booking.',
        description: 'In the final exam for "Software Engineering" class, me and 3 other friend worked on this final project. In the "Royal Cars Project" which I contributed as a Backend Developer, I developed an online car rental booking service using PHP. This project aimed to provide a seamless and convenient way for customers to book car rentals online.'
    },
    {
        title: 'Berita.com',
        image: { thumbnail: berita, header: headerberita },
        tech: ['HTML', 'CSS', 'JavaScript'],
        category: ['Website', 'Frontend'],
        link: {
            github: 'https://github.com/revou-fundamental-course/26-jun-23-henockazr',
            visit: 'https://revou-fundamental-course.github.io/26-jun-23-henockazr/'
        },
        subtitle: 'Basic web development showing top rated news anchor.',
        description: 'For the final project in RevoU, I made the "Berita.com Project". I developed a basic web platform to showcase top-rated news anchors. This project focused on creating a clean and user-friendly interface for displaying news content.'
    },
];

export default projects;
