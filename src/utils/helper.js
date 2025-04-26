import ShareIcon from '../assets/images/svg/sharing.svg';
import InfoIcon from '../assets/images/svg/info.svg';
import HelpIcon from '../assets/images/svg/help.svg';
import Participants from '../assets/images/svg/participants.svg';
import Topics from '../assets/images/svg/topics.svg';
import Headphone from '../assets/images/svg/headphone.svg';
import Trophy from '../assets/images/svg/trophy.svg';
import concert from '../assets/images/png/concert.png';
import celebration from '../assets/images/png/celebration.png';
import img1 from '../assets/images/png/img1.png';
import img2 from '../assets/images/png/img2.png';
import img3 from '../assets/images/png/img3.png';
import img4 from '../assets/images/png/img4.png';
import img5 from '../assets/images/png/img5.png';


export const cards = [
    {
        title: "Sharing",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in ",
        icon: ShareIcon,
    },
    {
        title: "Info",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in ",
        icon: InfoIcon,
    },
    {
        title: "Help",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in ",
        icon: HelpIcon,
    },
];
export const statsData = [
    {
        icon: Participants,
        value: "8800",
        label: "Participants"
    },
    {
        icon: Topics,
        value: "300",
        label: "Topics"
    },
    {
        icon: Headphone,
        value: "50",
        label: "Speakers"
    },
    {
        icon: Trophy,
        value: "30",
        label: "Awards"
    },
];

export const eventCards = [
    {
        img: concert,
        alt: 'concert',
        date: '09/23/2021',
        title: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in ',
    },
    {
        img: celebration,
        alt: 'celebration',
        date: '09/23/2021',
        title: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in ',
    },
];

export const services = [
    { name: 'About' },
    { name: 'News' },
    { name: 'ullamcorper' },
    { name: 'Contact' }
];

export const events = [
    { name: 'ullamcorper' },
    { name: 'ullamcorper' },
    { name: 'ullamcorper' },
    { name: 'ullamcorper' }
];

export const galleryImages = [
    { src: img1, alt: 'selfie' },
    { src: img2, alt: 'img2' },
    { src: img3, alt: 'crowd' },
    { src: img4, alt: 'lighting' },
    { src: img5, alt: 'funImage' }
];

export const inputGroups = [
    [
        { type: "text", placeholder: "First Name" },
        { type: "text", placeholder: "Last Name" }
    ],
    [
        { type: "email", placeholder: "Email Address" }
    ],
    [
        { type: "password", placeholder: "Password" },
        { type: "password", placeholder: "Confirm Password" }
    ]
];