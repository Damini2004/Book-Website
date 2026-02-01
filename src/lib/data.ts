import { Facebook, Instagram, Linkedin, Twitter, Dribbble, BookHeart, Heart, Paintbrush, Scroll, MapPin, Phone, Mail, type LucideIcon, Leaf, Sprout, Recycle, Dna, FlaskConical, Globe, BookOpen, ShieldCheck, Star } from 'lucide-react';

export type NavLink = {
  label: string;
  href: string;
  children?: NavLink[];
};

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Coming Soon', href: '/coming-soon' },
  { label: 'Top Seller', href: '/books#popular' },
  { label: 'Books', href: '/books' },
  { label: 'Blog', href: '/news' },
  { label: 'Contact', href: '/contact' },
];

type FooterLinkColumn = {
  title: string;
  description?: string;
  links: {
    label: string;
    href: string;
    external?: boolean;
    icon?: LucideIcon;
  }[];
};

export const footerLinks: FooterLinkColumn[] = [
    {
      title: 'Connect',
      description: 'Far far away, behind the word mountains, far from the countries.',
      links: [],
    },
    {
      title: 'Extra Links',
      links: [
        { label: 'Affiliate Program', href: '#' },
        { label: 'Business Services', href: '#' },
        { label: 'Education Services', href: '#' },
        { label: 'Gift Cards', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Join us', href: '#' },
        { label: 'Blog', href: '/news' },
        { label: 'Privacy & Policy', href: '/privacy' },
        { label: 'Term & Conditions', href: '/terms' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Blog', href: '/news' },
        { label: 'Contact', href: '/contact' },
        { label: 'Careers', href: '#' },
      ],
    },
    {
      title: 'Have a Questions?',
      links: [
        { label: '203 Fake St. Mountain View, San Francisco, California, USA', href: '#', icon: MapPin },
        { label: '+2 392 3929 210', href: '#', icon: Phone },
        { label: 'info@yourdomain.com', href: 'mailto:info@yourdomain.com', icon: Mail },
      ],
    },
];

export const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'Dribbble', href: '#', icon: Dribbble },
];

export type Journal = {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  image: string;
};

export const journals: Journal[] = [
  {
    id: 'jaecp',
    title: 'Journal of Agricultural Entomology and Crop Protection',
    shortTitle: 'JAECP',
    description: 'Bridges insect science with crop protection and sustainable agricultural practices.',
    longDescription: 'A journal focused on research that bridges insect science with crop protection and sustainable agricultural practices. Topics include pest management, pollination services, ecosystem health, and climate-resilient systems.',
    icon: Leaf,
    image: 'journal1'
  },
  {
    id: 'jipicp',
    title: 'Journal of Insect-Plant Interactions and Crop Protection',
    shortTitle: 'JIPICP',
    description: 'Deepens understanding of how insects interact with plants within agroecosystems.',
    longDescription: 'An interdisciplinary platform for studies that deepen understanding of how insects interact with plants within agroecosystems, supporting crop productivity and ecological balance.',
    icon: Sprout,
    image: 'journal2'
  },
  {
    id: 'jbces',
    title: 'Journal of Biological Control and Environmental Sustainability',
    shortTitle: 'JBCES',
    description: 'Cutting-edge research on sustainable pest control and eco-friendly technologies.',
    longDescription: 'Publishes cutting-edge research on sustainable pest control, biological conservation, eco-friendly technologies, and reducing chemical dependence in agricultural environments.',
    icon: Recycle,
    image: 'journal3'
  },
  {
    id: 'jabb',
    title: 'Journal of Agricultural Biotechnology and Bioinformatics',
    shortTitle: 'JABB',
    description: 'Research at the confluence of biotechnology, computational science, and agriculture.',
    longDescription: 'Dedicated to research at the confluence of biotechnology, computational science, and agriculture — including genomics, AI applications, bioinformatics, and molecular innovations for crop improvement and food security.',
    icon: Dna,
    image: 'journal4'
  },
  {
    id: 'jer',
    title: 'Journal of Entomological Research',
    shortTitle: 'JER',
    description: 'Comprehensive topics across entomology, from morphology to applied biotechnology.',
    longDescription: 'Covers comprehensive topics across entomology, including insect morphology, systematics, physiology, ecology, pest management, toxicology, and applied biotechnology.',
    icon: FlaskConical,
    image: 'journal5'
  }
];

export const whyPublishWithUs = [
    { title: 'Peer-Reviewed & Ethical', description: 'Rigorous double-blind review ensures research quality.', icon: ShieldCheck },
    { title: 'Global Reach', description: 'Electronic and international indexing for wide dissemination.', icon: Globe },
    { title: 'Open Access Options', description: 'Research freely available to readers worldwide.', icon: BookOpen },
    { title: 'Author Support', description: 'Clear submission guidelines, fast review, and ethical publishing guidance.', icon: Star }
];

export type Book = {
  id: string;
  title: string;
  author: string;
  price: string;
  category: 'new' | 'popular' | 'regular';
  image: string;
};

export const books: Book[] = [
    { id: '1', title: 'Advanced Plant Physiology', author: 'Dr. Anya Sharma', price: '$75.00', category: 'new', image: 'book1' },
    { id: '2', title: 'The World of Insects', author: 'Prof. Kenji Tanaka', price: '$65.00', category: 'popular', image: 'book2' },
    { id: '3', title: 'Sustainable Agriculture Now', author: 'Maria Garcia', price: '$80.00', category: 'new', image: 'book3' },
    { id: '4', title: 'Bioinformatics for Growers', author: 'Dr. Ben Carter', price: '$95.00', category: 'popular', image: 'book4' },
    { id: '5', title: 'Modern Crop Protection', author: 'Dr. Emily White', price: '$70.00', category: 'regular', image: 'book5' },
    { id: '6', title: 'The Ecology of Pests', author: 'Samuel Green', price: '$55.00', category: 'popular', image: 'book6' },
    { id: '7', title: 'Genomic Revolutions in Farming', author: 'Dr. Lena Petrova', price: '$110.00', category: 'new', image: 'book1' },
    { id: '8', title: 'A Guide to Beneficial Insects', author: 'Dr. Chloe Davis', price: '$68.00', category: 'regular', image: 'book2' },
];

export const newReleaseBooks = [
  { id: '1', title: 'You Are Your Only Limit', author: 'By John Nathan Muller', price: '$12.00', image: 'book-new-1' },
  { id: '2', title: '101 Essays That Will Change The Way You Thinks', author: 'By John Nathan Muller', price: '$8.00', image: 'book-new-2' },
  { id: '3', title: 'Your Soul Is A River', author: 'By John Nathan Muller', price: '$12.00', image: 'book-new-3' },
  { id: '4', title: 'All The Letters I Should Have Sent', author: 'By John Nathan Muller', price: '$9.00', image: 'book-new-4' },
  { id: '5', title: 'Happy', author: 'By John Nathan Muller', price: '$20.00', image: 'book-new-5' },
  { id: '6', title: 'Milk & Honey', author: 'By John Nathan Muller', price: '$12.00', image: 'book-new-6' },
];


export const bookCategories = [
  "Agricultural Science",
  "Entomology",
  "Crop Protection & IPM",
  "Biological Control & Ecology",
  "Agricultural Biotechnology & Bioinformatics",
  "Insect–Plant Interactions",
  "Environmental Sustainability",
  "Allied Agricultural Domains",
];

export const bookTypes = [
  "Textbook",
  "Reference Book",
  "Monograph",
  "Edited Volume",
  "Handbook",
  "Lab/Practical Manual",
  "Conference Proceedings",
];

export const bookAudiences = [
  "Undergraduate / Postgraduate Students",
  "Researchers & Scientists",
  "Agricultural Universities",
  "Farmers & Extension Professionals",
  "Industry Practitioners",
  "Government / NGO Bodies",
]

export const services = [
  { title: "Children's Book", description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.", icon: BookHeart },
  { title: "Romance", description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.", icon: Heart },
  { title: "Art & Architecture", description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.", icon: Paintbrush },
  { title: "History", description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.", icon: Scroll },
];

export const counters = [
    { number: '75,678', label: 'Active Readers' },
    { number: '3,040', label: 'Total Pages' },
    { number: '283', label: 'Cup Of Coffee' },
    { number: '14,500', label: 'Facebook Fans' },
];

export const testimonials = [
  { name: 'Roger Scott', position: 'Marketing Manager', text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', image: 'testimonial-person-1' },
  { name: 'Jane Doe', position: 'Product Designer', text: 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.', image: 'testimonial-person-2' },
  { name: 'John Smith', position: 'Developer', text: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.', image: 'testimonial-person-3' },
];

export const blogPosts = [
  { id: 1, title: 'New Friends With Books', excerpt: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.', image: 'blog-1', date: {day: '02', month: 'May', year: '2024'} },
  { id: 2, title: 'The World of Imagination', excerpt: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.', image: 'blog-2', date: {day: '01', month: 'May', year: '2024'} },
  { id: 3, title: 'Reading on a Rainy Day', excerpt: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.', image: 'blog-3', date: {day: '30', month: 'Apr', year: '2024'} },
];

export type ComingSoonBook = {
  id: string;
  title: string;
  author: string;
  price: string;
  description: string;
  image: string;
};

export type ComingSoonSection = {
  date: string;
  books: ComingSoonBook[];
};

export const comingSoonSections: ComingSoonSection[] = [
    {
        date: 'September, 2024',
        books: [
            { id: 'cs1', title: 'You Are Your Only Limit', author: 'By John Nathan Muller', price: '$12.00', description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.', image: 'book-new-1' },
            { id: 'cs2', title: '101 Essays That Will Change The Way You Think', author: 'By John Nathan Muller', price: '$12.00', description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.', image: 'book-new-2' },
            { id: 'cs3', title: 'Your Soul Is A River', author: 'By John Nathan Muller', price: '$12.00', description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.', image: 'book-new-3' },
        ]
    },
    {
        date: 'December, 2024',
        books: [
             { id: 'cs4', title: 'You Are Your Only Limit', author: 'By John Nathan Muller', price: '$12.00', description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.', image: 'book-new-4' },
            { id: 'cs5', title: '101 Essays That Will Change The Way You Think', author: 'By John Nathan Muller', price: '$12.00', description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.', image: 'book-new-5' },
            { id: 'cs6', title: 'Your Soul Is A River', author: 'By John Nathan Muller', price: '$12.00', description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.', image: 'book-new-6' },
        ]
    }
];
