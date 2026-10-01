export type Project = {
  slug: string;
  title: string;
  description: string;
  gradient: string;
  live?: string;
  github?: string;          
  githubOnDetail?: string;  
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
  // {
  //   slug: "portfolio-website",
  //   title: "Portfolio Website",
  //   description:
  //     "I built this site from scratch as both a personal portfolio and a playground to experiment with modern full-stack technologies like Next.js, PostgreSQL, Prisma, etc.",
  //   gradient: "from-blue-500 to-purple-600",
  //   github: "https://github.com/dboatengg/portfolio-site",
  // },
{
  slug: "capstone",
  title: "Capstone",
  description:
    "A full-stack real estate platform that connects clients with property agents. Built with Next.js, Express, PostgreSQL, Prisma, etc.",
  gradient: "from-emerald-500 to-teal-700",
  live: "https://capstone-frontend-rust.vercel.app/",
  githubOnDetail: "https://github.com/dboatengg/capstone",
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
    "A full website for an auto electrical repair shop in Kumasi, with an online shop where customers can buy parts, and an admin panel the owner uses to manage everything.",
  gradient: "from-[#C81E1E] to-[#F2A900]",
  live: "https://spark-and-drive-auto.vercel.app/",
  githubPrivate: true,
  learnMore: true,
  detail: {
    tagline: "A website and online shop for an auto electrical repair shop in Kumasi.",
    overview: [
      "Spark & Drive is an auto electrical repair shop in Kumasi. The client needed a proper website: somewhere customers could learn about his services, reach him easily, and also buy spare parts online. Plus a simple way for him to manage all of that himself without needing to touch any code.",
      "I built a customer-facing site with a shop, cart, and secure online payments (card and mobile money), along with a private admin panel where he logs in to add products, track orders, and read messages from customers, all from his phone.",
    ],
    features: [
      "Online shop with product photos, pricing, and stock levels",
      "Shopping cart and secure checkout, accepting cards and mobile money",
      "A contact form that emails him the moment someone reaches out",
      "A direct WhatsApp button so customers can message the shop instantly",
      "A private admin panel to add and edit products, view orders, and read messages",
      "Built to load reasonably well on slow mobile connections",
    ],
    tech: ["Next.js", "Express", "PostgreSQL", "Prisma", "Paystack API", "Tailwind CSS"],
    screenshots: [
      // Customer-facing
      {
        src: "/projects/spark-and-drive/home.png",
        alt: "Spark & Drive homepage",
        caption: "Homepage introducing the shop and its services",
        section: "Customer-facing",
      },
      {
        src: "/projects/spark-and-drive/shop.png",
        alt: "Product catalog",
        caption: "Shop page where customers browse products",
        section: "Customer-facing",
      },
      {
        src: "/projects/spark-and-drive/product.png",
        alt: "Product detail page",
        caption: "Product page with an add-to-cart button",
        section: "Customer-facing",
      },
      {
        src: "/projects/spark-and-drive/cart.png",
        alt: "Shopping cart",
        caption: "Review selected products before checkout",
        section: "Customer-facing",
      },
      {
        src: "/projects/spark-and-drive/checkout.png",
        alt: "Checkout page",
        caption: "Checkout with secure payment via Paystack",
        section: "Customer-facing",
      },
      {
        src: "/projects/spark-and-drive/contact.png",
        alt: "Contact page",
        caption: "Contact form and shop information",
        section: "Customer-facing",
      },

      // Admin
      {
        src: "/projects/spark-and-drive/admin-login.webp",
        alt: "Admin login",
        caption: "Private login for the shop owner",
        section: "Admin",
      },
      {
        src: "/projects/spark-and-drive/admin-dashboard.webp",
        alt: "Admin dashboard",
        caption: "Store overview with orders, products, and customer messages",
        section: "Admin",
      },
      {
        src: "/projects/spark-and-drive/admin-products.webp",
        alt: "Admin products",
        caption: "Adding and editing products and stock levels",
        section: "Admin",
      },
      {
        src: "/projects/spark-and-drive/admin-logout.webp",
        alt: "Admin logout confirmation",
        caption: "Confirmation shown before signing out of the admin panel",
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
      "iCenter Ghana is an Apple phone shop in Madina, Accra. They sell iPhones and iPads, and also buy, swap, or offer installment plans for customers. They needed a site where people could browse their iPhones and start a swap, sale, or installment plan without calling.",
      "I built a full-stack site with a shop, a swap request form, a sell request form, and an installment plan application. There's also an admin dashboard where staff can add, edit, and delete products, review and update the status of every request, and also manage customer video testimonials.",
    ],
    features: [
      "Browse iPhones and iPads with live stock and pricing",
      "Swap request form",
      "Sell your old phone form",
      "Installment plan application with ID upload",
      "Admin dashboard to manage products, swaps, video testimonials, etc.",
      "Live notification badge for admin dashboard when a new request comes in",
    ],
    tech: ["Next.js", "Express", "PostgreSQL", "Prisma", "Tailwind CSS"],
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
        src: "/projects/icenter-ghana/product-detail.png",
        alt: "iPhone product detail",
        caption: "Product details with WhatsApp and installment options",
        section: "Customer-facing",
      },
      {
        src: "/projects/icenter-ghana/swap.png",
        alt: "Phone swap request",
        caption: "Swap request form",
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
      {
        src: "/projects/icenter-ghana/testimonials.png",
        alt: "Customer stories",
        caption: "Customer video testimonials on the public site",
        section: "Customer-facing",
      },

      // Admin
      {
        src: "/projects/icenter-ghana/admin-login.webp",
        alt: "Admin login",
        caption: "Admin login",
        section: "Admin",
      },
      {
        src: "/projects/icenter-ghana/admin-dashboard.webp",
        alt: "Admin dashboard",
        caption: "Dashboard with pending requests counter",
        section: "Admin",
      },
      {
        src: "/projects/icenter-ghana/admin-inventory.webp",
        alt: "Admin inventory",
        caption: "Manage products",
        section: "Admin",
      },
      {
        src: "/projects/icenter-ghana/admin-requests.webp",
        alt: "Admin requests",
        caption: "Review swap, sell, and installment requests",
        section: "Admin",
      },
            {
        src: "/projects/icenter-ghana/stories.webp",
              alt: "Admin testimonials",
        caption: "Manage customer video testimonials",
        section: "Admin",
      },
            {
              src: "/projects/icenter-ghana/admin-logout.webp?v=2",
              alt: "Admin logout confirmation",
              caption: "Confirmation shown before signing out of the admin panel",
              section: "Admin",
            },
    ],
  },
},
];