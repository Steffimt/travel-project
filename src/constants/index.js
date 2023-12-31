import guide from "../assets/icons/guide.svg";
import shieldTick from '../assets/icons/shield-tick.svg';
import support from '../assets/icons/support.svg';
import customer1 from "../assets/images/customer1.svg";
import customer2 from "../assets/images/customer2.svg";
import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import instagram from "../assets/icons/instagram.svg";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
];

// export const shoes = [
//     {
//         thumbnail: thumbnailShoe1,
//         bigShoe: bigShoe1,
//     },
//     {
//         thumbnail: thumbnailShoe2,
//         bigShoe: bigShoe2,
//     },
//     {
//         thumbnail: thumbnailShoe3,
//         bigShoe: bigShoe3,
//     },
// ];

// export const statistics = [
//     { value: '1k+', label: 'Brands' },
//     { value: '500+', label: 'Shops' },
//     { value: '250k+', label: 'Customers' },
// ];

// export const products = [
//     {
//         imgURL: shoe4,
//         name: "Nike Air Jordan-01",
//         price: "$200.20",
//     },
//     {
//         imgURL: shoe5,
//         name: "Nike Air Jordan-10",
//         price: "$210.20",
//     },
//     {
//         imgURL: shoe6,
//         name: "Nike Air Jordan-100",
//         price: "$220.20",
//     },
//     {
//         imgURL: shoe7,
//         name: "Nike Air Jordan-001",
//         price: "$230.20",
//     },
// ];

export const services = [
    {
        imgURL: guide,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Assistance",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Lora Bennet',
        rating: 4.8,
        feedback: "“From personalized itineraries to top-notch customer service, they truly go the extra mile to create unforgettable travel experiences.”"
    },
    {
        imgURL: customer2,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "“Exceptional travel agency! Their commitment and attention to detail ensured I had an unforgettable adventure.”"
    }
];


export const footerLinks = [
    // {
    //     title: "Products",
    //     links: [
    //         { name: "Air Force 1", link: "/" },
    //         { name: "Air Max 1", link: "/" },
    //         { name: "Air Jordan 1", link: "/" },
    //         { name: "Air Force 2", link: "/" },
    //         { name: "Nike Waffle Racer", link: "/" },
    //         { name: "Nike Cortez", link: "/" },
    //     ],
    // },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@travel.co", link: "mailto:customer@travel.co" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" }
];