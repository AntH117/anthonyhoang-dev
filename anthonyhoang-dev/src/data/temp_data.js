import pathly from '../images/Pathly_Light.png';
import codeIn from '../images/CodeIn_Light.png';
import flightFinder from '../images/flight-finder.png';
import slider from '../images/Slider.png'
import wordle from '../images/Wordle.png'
import bookFinder from '../images/Book_finder.png'

const tempDb = [
    {
        name: 'CodeIn',
        shortDescription: 'A full-stack developer networking platform inspired by LinkedIn.',
        description: 'CodeIn is a full-stack developer networking platform inspired by LinkedIn, built with React and Firebase. It allows developers to create profiles, share projects, connect with others, and showcase their technical skills. Features include authentication, post feeds, and real-time updates to foster community interaction.',
        tags: ['React', 'Firebase', 'Node.js', 'Express', 'CSS'],
        image: codeIn
    },
    {
        name: 'Pathly',
        shortDescription: 'An interactive trip planner with route optimization and map integration.',
        description: 'Pathly is a personal trip planner that helps users organize and visualize their travel itineraries. Users can add destinations, set travel times, and receive optimized routes with step-by-step directions. The app leverages the Google Maps API to display interactive maps and calculate efficient travel paths between multiple locations.',
        tags: ['JavaScript', 'React', 'CSS', 'Google Maps API'],
        image: pathly
    },
    {
        name: 'Book Finder',
        shortDescription: 'A book search app powered by the Google Books API.',
        description: 'Book Finder is a React-based application that enables users to search for books using the Google Books API. It displays a list of results with detailed information for each book, including authors, ratings, and descriptions. The app uses caching and React hooks to optimize performance when navigating between search results and detailed pages.',
        tags: ['React', 'JavaScript', 'Google Books API', 'CSS'],
        image: bookFinder
    },
    {
        name: 'Wordle',
        shortDescription: 'A React remake of the viral word puzzle game Wordle.',
        description: 'A React recreation of the popular Wordle game where players guess a hidden five-letter word within six attempts. The app dynamically provides feedback on each guess through color-coded tiles, tracks player progress, and includes responsive design for mobile and desktop users.',
        tags: ['React', 'JavaScript', 'HTML', 'CSS'],
        image: wordle
    },
    {
        name: 'Flight Finder',
        shortDescription: 'A real-time flight tracking and filtering web app.',
        description: 'Flight Finder is a real-time flight tracking web application that retrieves and visualizes flight data using an external API. Users can filter flights by airline, status, and delay, and view detailed information such as origin, destination, and live updates. It also includes a “More Info” page for individual flights and delay indicators for user convenience.',
        tags: ['React', 'JavaScript', 'REST API', 'CSS'],
        image: flightFinder
    },
    {
        name: 'Slider Website',
        shortDescription: 'A visually engaging website featuring animated content sliders.',
        description: 'A creative and interactive website showcasing image and content sliders built with React. Each slide transitions smoothly using CSS animations, demonstrating front-end interactivity and responsive design. The project emphasizes component reusability and dynamic rendering for a visually engaging experience.',
        tags: ['React', 'JavaScript', 'HTML', 'CSS'],
        image: slider
    },
];


export default tempDb