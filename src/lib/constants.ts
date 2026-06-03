import IconGurantee from "../assets/icons/icon-guarantee.svg";
import IconClock from "../assets/icons/icon-clock.svg";
import IconMap from "../assets/icons/icon-map-pin.svg";
import IconCalendar from "../assets/icons/icon-calendar.svg";
import IconPlumbing from "../assets/icons/icon-plumbing-filled.svg";
import IconRoof from "../assets/icons/icon-roof-filled.svg";
import IconWall from "../assets/icons/icon-wall-filled.svg";
import IconWoodTree from "../assets/icons/icon-wood-tree-filled.svg";
import IconRepair from "../assets/icons/icon-repair-filled.svg";
import IconBathroom from "../assets/icons/icon-bathroom-filled.svg";
import IconDoor from "../assets/icons/icon-door-filled.svg";
import IconGuranteeFilled from "../assets/icons/icon-guarantee-filled.svg";
import IconLocal from "../assets/icons/icon-local-filled.svg";
import IconCalendarFilled from "../assets/icons/icon-calendar-filled.svg";
import IconQuotes from "../assets/icons/icon-quotes-filled.svg";
import Icon24H from "../assets/icons/icon-24h-Filled.svg";
import IconCommitment from "../assets/icons/icon-commitment-filled.svg";

import IconYoutube from "../assets/icons/icon-youtube.svg";
import IconInstagram from "../assets/icons/icon-instagram.svg";
import IconFacebook from "../assets/icons/icon-facebook.svg";
import IconTwiiter from "../assets/icons/icon-twitter.svg";
import IconMail from "../assets/icons/icon-mail.svg";

import Worker from "../assets/images/how-works-worker.png";
import Avatar from "../assets/images/avatar.png";
import ReviewLogo from "../assets/images/review-logo.png";
import Thumbnail_01 from "../assets/images/blog-thumbnail-01.png";
import Thumbnail_02 from "../assets/images/blog-thumbnail-02.png";
import Thumbnail_03 from "../assets/images/blog-thumbnail-03.png";
import Banner from "../assets/images/banner.png";
import FooterLogo from "../assets/images/footer-logo.png";
import ServiceWorkers from "../assets/images/service-workers.jpg";

const NAV_LINKS = [
  {
    label: "About Us",
    href: "#about-us",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Our Blog",
    href: "#our-blog",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const HERO = {
  title: "Need improvement\n or repair your home? \n we can help!",
  highlights: [
    {
      icon: IconGurantee,
      title: "Satisfaction\n Guarantee",
    },
    {
      icon: IconClock,
      title: "24H\n Availability",
    },
    {
      icon: IconMap,
      title: "Local US\n Professionals",
    },
    {
      icon: IconCalendar,
      title: "Flexible\n Appointments",
    },
  ],
};

const PROFESIONAL_SERVICES = {
  title: "Professional for your home services",
  description:
    "You need help for home care? We are home care professionals focused in the US region. We provide several services that support home services",
  image: ServiceWorkers,
  content: [
    "Repair and Installation",
    "Plumbing",
    "Maintenance",
    "Budget-friendly",
    "Home Security Services",
    "Eco-friendly Solutions",
  ],
};

const OUR_SERVICES = {
  title: "Our Services",
  description:
    "You have problems with leaking pipes, broken tiles, lost keys or want to tidy up the trees around you, of course you need our help!",
  content: [
    {
      icon: IconPlumbing,
      title: "Plumbing services",
      description: "Drain pipe leaking, pipe clogged, replace the pipe line",
    },
    {
      icon: IconRoof,
      title: "Roofing repair",
      description:
        "Roof leaks, tile replacement, roof cleaning and maintenance",
    },
    {
      icon: IconWall,
      title: "Mold Removal",
      description: "Removing and cleaning mildew, Restoration and Prevention",
    },
    {
      icon: IconWoodTree,
      title: "Tree Trimming",
      description: "Trimming and cleaning, Deadwood removal, Tree shaping",
    },
    {
      icon: IconRepair,
      title: "Appliance Repair",
      description:
        "Repair of washing machines, refrigerators, Air conditioner, etc",
    },
    {
      icon: IconBathroom,
      title: "Bathroom Remodeling",
      description:
        "Design and Consulting, installation, Repairing, tile repair",
    },
    {
      icon: IconDoor,
      title: "Locksmith",
      description: "Lock Installation and Repair, Duplication, Lock Rekeying",
    },
  ],
};

const FEATURES = {
  title: "Fast, Friendly, and Satisfaction Guaranteed",
  description:
    "No matter how big or small your work is, whether it's for the interior or exterior of your home, we are ready to serve and help you solve your home problems.",
  content: [
    {
      icon: IconGuranteeFilled,
      title: "Satisfaction Guarantee",
      description:
        "You don't need to worry about scams or our performance results. our company has been verified and strives for optimal results",
    },
    {
      icon: IconQuotes,
      title: "Free Quotes",
      description:
        "Get personalized cost estimates without any obligation. Experience transparency and peace of mind as you explore our service.",
    },
    {
      icon: IconLocal,
      title: "Local Professionals",
      description:
        "Our services cover the Nationwide, US area, including urban, suburban, and rural locations for both long and short term maintenance",
    },
    {
      icon: Icon24H,
      title: "Fast 24-Hour Service",
      description:
        "Need fast handling for repairs to drains, leaks or something else? Our experts are available anytime to help you solve the problem",
    },
    {
      icon: IconCalendarFilled,
      title: "Flexible Appointments",
      description:
        "We offer convenient appointment times that can accommodate your busy schedule, day or night, 7 days a week.",
    },
    {
      icon: IconCommitment,
      title: "100% Commitment-Free",
      description:
        "You are free to ask us about the problems you are facing. We offer a no-commitment approach to put your mind at ease",
    },
  ],
};

const HOW_WORKS = {
  title: "How HomePro \nworks?",
  image: Worker,
  content: [
    {
      title: "Call us anytime 24/7",
      description:
        "You can contact us directly, we will quickly put you in touch with our home care professionals who are ready anytime",
    },
    {
      title: "Schedule Service",
      description:
        "After connecting your call, our home care experts will answer your questions and provide flexible appointment times",
    },
    {
      title: "Your request is completed",
      description:
        "Once your technician arrives, he will diagnose the problem and provide an estimate. If you decide to continue, the technician will get to work",
    },
  ],
};

const REVIEWS = {
  title: "Here our original reviews from trusted platforms",
  logo: ReviewLogo,
  content: [
    {
      name: "Mohammad Hajeer",
      text: "I had a great experience with HomePro. They were quick to respond and the technician was very professional. He fixed my leaking pipe in no time. Highly recommend!",
      rating: 5,
      picture: Avatar,
    },
    {
      name: "Sarah Johnson",
      text: "HomePro provided excellent service. The technician was knowledgeable and friendly. He repaired my roof efficiently and the price was reasonable. I will definitely use their services again.",
      rating: 4.3,
      picture: Avatar,
    },
    {
      name: "David Smith",
      text: "I had a positive experience with HomePro. The technician was punctual and skilled. He removed the mold from my walls effectively. I am satisfied with the results and would recommend HomePro to others.",
      rating: 4.8,
      picture: Avatar,
    },
  ],
};

const BLOGS = {
  title: "Explore Insights in Our Blog",
  description:
    "Find lots of insights and information on our blog. Explore, learn, and get inspired today.",
  content: [
    {
      thumbnail: Thumbnail_01,
      date: "19 Jan 2023",
      title: "Understanding Smart Home Systems & Maintenance",
      description:
        "Discover the ultimate guide to troubleshooting common smart home issues in our latest blog post. From connectivity problems to device malfunctions, we provide step-by-step solutions to help you restore the seamless functionality of your smart home system. Gain expert insights, practical tips, and insider advice to keep your home automation running smoothly. Don't let technical glitches hinder your smart home experience - empower yourself with the knowledge to resolve issues and enjoy the convenience of your connected home. Visit our blog now and become a troubleshooting pro!",
      badges: ["Plumbing", "Architecture", "Maintenance"],
    },
    {
      thumbnail: Thumbnail_02,
      date: "19 Jan 2023",
      title: "The Ultimate Guide to Home Repairs and Renovations",
      description:
        "Discover the ultimate guide to troubleshooting common smart home issues in our latest blog post. From connectivity problems to device malfunctions, we provide step-by-step solutions to help you restore the seamless functionality of your smart home system. Gain expert insights, practical tips, and insider advice to keep your home automation running smoothly. Don't let technical glitches hinder your smart home experience - empower yourself with the knowledge to resolve issues and enjoy the convenience of your connected home. Visit our blog now and become a troubleshooting pro!",
      badges: ["Plumbing", "Architecture", "Maintenance"],
    },
    {
      thumbnail: Thumbnail_03,
      date: "19 Jan 2023",
      title: "Painting Techniques for a Kitchen Refresh",
      description:
        "Discover the ultimate guide to troubleshooting common smart home issues in our latest blog post. From connectivity problems to device malfunctions, we provide step-by-step solutions to help you restore the seamless functionality of your smart home system. Gain expert insights, practical tips, and insider advice to keep your home automation running smoothly. Don't let technical glitches hinder your smart home experience - empower yourself with the knowledge to resolve issues and enjoy the convenience of your connected home. Visit our blog now and become a troubleshooting pro!",
      badges: ["Plumbing", "Architecture", "Maintenance"],
    },
  ],
};

const FAQ = {
  title: "Frequently Asked \nQuestions",
  content: [
    {
      question: "What is HomePro?",
      answer:
        "HomePro is a home care platform that connects homeowners with professional service providers offering a wide range of home services, including repairs, maintenance, cleaning, and more.",
    },
    {
      question: "Are the service providers on HomePro reliable and qualified?",
      answer:
        "Yes, all service providers on HomePro are thoroughly vetted and qualified to ensure you receive the highest quality of service.",
    },
    {
      question:
        "What if I have an issue or complaint about a service provider?",
      answer:
        "If you have any concerns or complaints about a service provider, please contact our customer support team immediately. We are committed to resolving any issues and ensuring your satisfaction.",
    },
    {
      question: "How are payments handled on HomePro?",
      answer:
        "Payments on HomePro are handled securely through our platform. You can choose to pay online using a credit card or debit card, or opt for other payment methods as available.",
    },
    {
      question: "How do I leave a review for a service provider?",
      answer:
        "You can leave a review for a service provider after completing a job with them. Simply navigate to the provider's profile and click on the 'Leave a Review' button.",
    },
  ],
};

const BANNER = {
  title: "Already to improve\n or repair your home?\n Let’s Talk!",
  image: Banner,
};

const FOOTER = {
  logo: FooterLogo,
  description:
    "Home Pro is your premier destination for top-notch smart home service and repair.",
  socials: [
    {
      icon: IconYoutube,
      href: "https://www.youtube.com",
    },
    {
      icon: IconInstagram,
      href: "https://www.instagram.com",
    },
    {
      icon: IconFacebook,
      href: "https://www.facebook.com",
    },
    {
      icon: IconTwiiter,
      href: "https://www.twitter.com",
    },
    {
      icon: IconMail,
      href: "mailto:info@homepro.com",
    },
  ],
  menus: [
    {
      title: "Company",
      links: NAV_LINKS,
    },
    {
      title: "Legal",
      links: [
        {
          label: "Terms",
          href: "#terms",
        },
        {
          label: "Privacy",
          href: "#privacy",
        },
        {
          label: "Cookies",
          href: "#cookies",
        },
        {
          label: "License",
          href: "#license",
        },
      ],
    },
  ],
  copyright: `©${new Date().getFullYear()} HomePro. All rights reserved.`,
};

export {
  NAV_LINKS,
  HERO,
  PROFESIONAL_SERVICES,
  OUR_SERVICES,
  FEATURES,
  HOW_WORKS,
  REVIEWS,
  BLOGS,
  FAQ,
  BANNER,
  FOOTER,
};
