export type Project = {
  slug: string;
  title: string;
  description: string;
  gradient: string;
  live?: string;
  github?: string;
  githubPrivate?: boolean;
  learnMore?: boolean;
  detail?: {
    tagline: string;
    overview: string[];
    features: string[];
    tech: string[];
    screenshots: {
    src: string;
    alt: string;
    caption?: string;
    section?: string;
    }[];
  };
};

export const projects: Project[] = [
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    description:
      "I built this site from scratch as both a personal portfolio and a playground to experiment with modern full-stack technologies like Next.js, PostgreSQL, Prisma, etc.",
    gradient: "from-blue-500 to-purple-600",
    github: "https://github.com/dboatengg/portfolio-site",
  },
  {
  slug: "capstone",
  title: "Capstone",
  description:
    "A full-stack real estate platform that connects clients with property agents. Built with Next.js, Express, PostgreSQL, Prisma, etc.",
  gradient: "from-emerald-500 to-teal-700",
  live: "https://capstone-frontend-rust.vercel.app/",
  learnMore: true,
  detail: {
    tagline: "Connecting clients with property agents in one place.",
    overview: [
      "Capstone is a full-stack real estate platform designed to make property discovery and agent communication easier.",
      "Clients can browse listings, filter by location and price, and reach out to agents directly. Agents get a dashboard to manage listings, and admins can moderate the platform.",
    ],
    features: [
      "Property listings with location and price filters",
      "Agent profiles with contact and messaging",
      "Saved properties and search history",
      "Agent dashboard for managing listings",
      "Admin moderation panel",
    ],
    tech: ["Next.js", "Express", "PostgreSQL", "Prisma", "Tailwind CSS"],
    screenshots: [
  // Customer-facing
  {
    src: "/projects/capstone/home.png",
    alt: "Capstone homepage",
    caption: "Landing page with featured listings",
    section: "Customer-facing",
  },
  {
    src: "/projects/capstone/listings.png",
    alt: "Property listings page",
    caption: "Browse and filter properties by location and price",
    section: "Customer-facing",
  },
  {
    src: "/projects/capstone/detail.png",
    alt: "Property detail page",
    caption: "Property detail with agent contact",
    section: "Customer-facing",
  },
  {
    src: "/projects/capstone/saved.png",
    alt: "Saved properties",
    caption: "Saved properties and search history",
    section: "Customer-facing",
  },

  // Auth
  {
    src: "/projects/capstone/login.png",
    alt: "Login page",
    caption: "Sign in for agents and clients",
    section: "Auth",
  },
  {
    src: "/projects/capstone/signup.png",
    alt: "Signup page",
    caption: "Create an account as a client or agent",
    section: "Auth",
  },

  // Admin
  {
    src: "/projects/capstone/admin-login.png",
    alt: "Admin login",
    caption: "Separate admin login",
    section: "Admin",
  },
  {
    src: "/projects/capstone/admin-dashboard.png",
    alt: "Admin dashboard",
    caption: "Overview of listings, users, and activity",
    section: "Admin",
  },
  {
    src: "/projects/capstone/admin-listings.png",
    alt: "Admin listings",
    caption: "Manage and moderate property listings",
    section: "Admin",
  },
],
  },
},
  {
    slug: "spark-and-drive",
    title: "Spark & Drive",
    description:
      "A full-stack website for an auto electrical repair shop in Kumasi. Includes a customer-facing site with a Paystack-integrated checkout, and an admin panel for managing products, orders, etc.",
    gradient: "from-[#C81E1E] to-[#F2A900]",
    live: "https://spark-and-drive-auto.vercel.app/",
    githubPrivate: true,
    learnMore: true,
    detail: {
      tagline: "An online storefront for an auto electrical shop in Kumasi.",
      overview: [
        "Spark & Drive needed a way to sell auto electrical parts online and manage orders without hiring extra staff.",
        "I built a customer-facing shop with Paystack-integrated checkout, and an admin panel where the owner manages products, stock, and orders from their phone.",
      ],
      features: [
        "Product catalog with categories",
        "Paystack checkout integration",
        "Admin panel for products, orders, and stock",
        "Order notifications via WhatsApp",
      ],
      tech: ["Next.js", "PostgreSQL", "Prisma", "Paystack API", "Tailwind CSS"],
      screenshots: [
  // Customer-facing
  {
    src: "/projects/spark-and-drive/home.png",
    alt: "Spark & Drive homepage",
    caption: "Homepage with featured products",
    section: "Customer-facing",
  },
  {
    src: "/projects/spark-and-drive/shop.png",
    alt: "Product catalog",
    caption: "Browse products by category",
    section: "Customer-facing",
  },
  {
    src: "/projects/spark-and-drive/product.png",
    alt: "Product detail page",
    caption: "Product detail with add to cart",
    section: "Customer-facing",
  },
  {
    src: "/projects/spark-and-drive/checkout.png",
    alt: "Checkout page",
    caption: "Paystack-integrated checkout",
    section: "Customer-facing",
  },

  // Admin
  {
    src: "/projects/spark-and-drive/admin-login.png",
    alt: "Admin login",
    caption: "Admin login",
    section: "Admin",
  },
  {
    src: "/projects/spark-and-drive/admin-dashboard.png",
    alt: "Admin dashboard",
    caption: "Dashboard with sales and order stats",
    section: "Admin",
  },
  {
    src: "/projects/spark-and-drive/admin-products.png",
    alt: "Admin products",
    caption: "Manage products and stock",
    section: "Admin",
  },
  {
    src: "/projects/spark-and-drive/admin-orders.png",
    alt: "Admin orders",
    caption: "View and fulfill orders",
    section: "Admin",
  },
],
    },
  },
  {
    slug: "icenter-ghana",
    title: "iCenter Ghana",
    description:
      "A full-stack website for an Apple phone shop in Madina, Accra. Customers can browse iPhones, request a swap, sell their old phone, or apply for an installment plan.",
    gradient: "from-[#d81159] to-[#2451c4]",
    live: "https://icenter-ghana.vercel.app/",
    githubPrivate: true,
    learnMore: true,
    detail: {
      tagline: "The online home for an Apple reseller in Accra.",
      overview: [
        "iCenter Ghana is an Apple phone shop in Madina, Accra. They needed a site that made it easy for customers to browse stock, request swaps, and apply for installment plans.",
        "I built a full-stack site with a customer-facing flow for all four actions, plus an admin dashboard where staff manage inventory and applications.",
      ],
      features: [
        "Product catalog with stock status",
        "Swap requests and phone buyback",
        "Installment plan applications",
        "Admin dashboard with pending requests counter",
      ],
      tech: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS", "WhatsApp API"],
      screenshots: [
  // Customer-facing
  {
    src: "/projects/icenter-ghana/home.png",
    alt: "iCenter Ghana homepage",
    caption: "Homepage with featured iPhones",
    section: "Customer-facing",
  },
  {
    src: "/projects/icenter-ghana/shop.png",
    alt: "Product catalog",
    caption: "Browse available iPhones",
    section: "Customer-facing",
  },
  {
    src: "/projects/icenter-ghana/swap.png",
    alt: "Phone swap request",
    caption: "Swap request flow",
    section: "Customer-facing",
  },
  {
    src: "/projects/icenter-ghana/sell.png",
    alt: "Sell your phone",
    caption: "Sell old phone form",
    section: "Customer-facing",
  },
  {
    src: "/projects/icenter-ghana/installment.png",
    alt: "Installment application",
    caption: "Installment plan application",
    section: "Customer-facing",
  },

  // Admin
  {
    src: "/projects/icenter-ghana/admin-login.png",
    alt: "Admin login",
    caption: "Admin login",
    section: "Admin",
  },
  {
    src: "/projects/icenter-ghana/admin-dashboard.png",
    alt: "Admin dashboard",
    caption: "Dashboard with pending requests counter",
    section: "Admin",
  },
  {
    src: "/projects/icenter-ghana/admin-inventory.png",
    alt: "Admin inventory",
    caption: "Manage inventory",
    section: "Admin",
  },
  {
    src: "/projects/icenter-ghana/admin-requests.png",
    alt: "Admin requests",
    caption: "Review swap, sell, and installment requests",
    section: "Admin",
  },
],
    },
  },
];