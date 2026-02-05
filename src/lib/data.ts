
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
  { label: 'Top Seller', href: '/top-seller' },
  { label: 'Books', href: '/books' },
  { label: 'Author', href: '/author' },
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
      title: 'Malhotra Publishing House',
      links: [
        { label: 'About MPH', href: '/about' },
        { label: 'Our Publishing Focus', href: '/about' },
        { label: 'Leadership & Office', href: '/author' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Journals',
      links: [
        { label: 'Journals Portfolio', href: '/journals' },
        { label: 'Journal Websites', href: '/journals#journal-links' },
        { label: 'Call for Papers', href: '/journals#cfp' },
      ],
    },
    {
      title: 'Books Store',
      links: [
        { label: 'Shop All Books', href: '/books' },
        { label: 'Categories', href: '/book-categories' },
        { label: 'New Releases', href: '/coming-soon' },
        { label: 'Best Sellers', href: '/top-seller' },
        { label: 'Bulk Orders', href: '/orders' },
        { label: 'Track Order', href: '/track-order' },
      ],
    },
    {
      title: 'Support & Legal',
      links: [
        { label: 'FAQs', href: '/faq' },
        { label: 'Shipping & Delivery', href: '/shipping' },
        { label: 'Returns & Refunds', href: '/returns' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms & Conditions', href: '/terms' },
      ],
    },
];

export const footerContact = {
    title: "Have a Question?",
    contacts: [
        { icon: Globe, text: "your-mph-domain.com", href: "#" },
        { icon: Mail, text: "info@mph.net.in", href: "mailto:info@mph.net.in" },
        { icon: Phone, text: "+1 234 5678 90", href: "tel:+1234567890" },
        { icon: MapPin, text: "India", href: "#" }
    ]
}

export const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'X', href: '#', icon: Twitter },
];

export type Author = {
  id: string;
  name: string;
  bio: string;
  image: string;
  socials: {
    name: string;
    href: string;
    icon: LucideIcon;
  }[];
};

export const authors: Author[] = [
  {
    id: '1',
    name: 'Lloyd Wilson',
    bio: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
    image: 'author-1',
    socials: [
      { name: 'Twitter', href: '#', icon: Twitter },
      { name: 'Facebook', href: '#', icon: Facebook },
      { name: 'Instagram', href: '#', icon: Instagram },
    ],
  },
  {
    id: '2',
    name: 'Rachel Parker',
    bio: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
    image: 'author-2',
    socials: [
      { name: 'Twitter', href: '#', icon: Twitter },
      { name: 'Facebook', href: '#', icon: Facebook },
      { name: 'Instagram', href: '#', icon: Instagram },
    ],
  },
  {
    id: '3',
    name: 'Ian Smith',
    bio: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
    image: 'author-3',
    socials: [
      { name: 'Twitter', href: '#', icon: Twitter },
      { name: 'Facebook', href: '#', icon: Facebook },
      { name: 'Instagram', href: '#', icon: Instagram },
    ],
  },
  {
    id: '4',
    name: 'Alicia Henderson',
    bio: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
    image: 'author-4',
    socials: [
      { name: 'Twitter', href: '#', icon: Twitter },
      { name: 'Facebook', href: '#', icon: Facebook },
      { name: 'Instagram', href: '#', icon: Instagram },
    ],
  },
    {
    id: '5',
    name: 'Lloyd Wilson',
    bio: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
    image: 'author-5',
    socials: [
      { name: 'Twitter', href: '#', icon: Twitter },
      { name: 'Facebook', href: '#', icon: Facebook },
      { name: 'Instagram', href: '#', icon: Instagram },
    ],
  },
  {
    id: '6',
    name: 'Rachel Parker',
    bio: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
    image: 'author-6',
    socials: [
      { name: 'Twitter', href: '#', icon: Twitter },
      { name: 'Facebook', href: '#', icon: Facebook },
      { name: 'Instagram', href: '#', icon: Instagram },
    ],
  },
  {
    id: '7',
    name: 'Ian Smith',
    bio: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
    image: 'author-7',
    socials: [
      { name: 'Twitter', href: '#', icon: Twitter },
      { name: 'Facebook', href: '#', icon: Facebook },
      { name: 'Instagram', href: '#', icon: Instagram },
    ],
  },
  {
    id: '8',
    name: 'Fred Henderson',
    bio: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
    image: 'author-8',
    socials: [
      { name: 'Twitter', href: '#', icon: Twitter },
      { name: 'Facebook', href: '#', icon: Facebook },
      { name: 'Instagram', href: '#', icon: Instagram },
    ],
  },
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

export const sidebarGenres = [
    "Fantasy",
    "Adventure",
    "Romance",
    "Contemporary",
    "Dystopian",
    "Mystery",
    "Horror",
    "Thriller",
];

export const topAuthors = [
    "John Nathan Muller",
    "Sandra Park",
    "Laura Preston",
    "John Doe",
    "Mc Gregor Douglas",
    "Atom Night",
    "Danny Green",
    "Sonya Lopez",
    "Archie Bochs",
    "Jelian Coward",
    "Mark Hatton",
    "Madison Mc Collen",
];
