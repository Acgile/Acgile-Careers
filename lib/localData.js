// Header
const domain = "https://acgile.com";

export const mainMenu = [
  {
    name: "Home",
    path: domain,
  },
  {
    name: "About",
    path: `${domain}/about`,
  },
  {
    name: "Services",
    path: `${domain}/services`,
    submenu: [
      { name: "Accounts Receivable",    path: `${domain}/services/accounts-receivable` },
      { name: "Accounts Payable",       path: `${domain}/services/accounts-payable` },
      { name: "Order Management",       path: `${domain}/services/order-management` },
      { name: "Inventory Accounting",   path: `${domain}/services/inventory-management` },
      { name: "Marketplace Sync",       path: `${domain}/services/marketplace-inventory` },
      { name: "Financial Cleanup",      path: `${domain}/services/financial-cleanup` },
      { name: "EDI Maintenance",        path: `${domain}/services/edi-maintenance` },
      { name: "Month-End Close",        path: `${domain}/services/month-end-closures` },
      { name: "KPI Reporting",          path: `${domain}/services/management-reporting` },
      { name: "Compliance",             path: `${domain}/services/financial-reporting` },
      { name: "Data Migration",         path: `${domain}/services/data-migration` },
      { name: "Staff Augmentation",     path: `${domain}/services/staff-augmentation` },
      { name: "Automation & Workflow",  path: `${domain}/services/automation-workflow` },
      // { name: "3PL Billing Audit",      path: `${domain}/services/3pl-billing-audit` },
    ],
  },
  {
    name: "Resources",
    path: `${domain}/blogs`,
    submenu: [
      {
        name: "Blogs",
        path: `${domain}/blogs`,
        // categoryMenu : [],
      },
      {
        name: "Case Studies",
        path: `${domain}/case-studies`,
        // categoryMenu : [],
      },
      // {
      //   name: "Guides",
      //   path: `${domain}/guide`,
      //   // categoryMenu : [],
      // },
      {
        name: "Data Migration Cost Calculator",
        path: `${domain}/resources/data-migration-cost-calculator`,
        // categoryMenu : [],
      }
      
    ],
  },
  {
    name: "Industries",
    path: `${domain}/industries`,
    submenu: [
      {
        name: "Manufacturing",
        path: `${domain}/industries/manufacturing`,
      },
      {
        name: "Automotive",
        path: `${domain}/industries/automotive`,
      },
      {
        name: "SaaS Products",
        path: `${domain}/industries/saas`,
      },
      {
        name: "eCommerce",
        path: `${domain}/industries/ecommerce`,
      },
    ],
  },
  {
    name: "Careers",
    path: "/",
  },
];


export const benefits = [
  {
    title: "Innovation Work Culture",
    description:
      "Embrace a culture of innovation, creativity, and continuous learning. We encourage out-of-the-box thinking and provide opportunities for professional development with ongoing training and development programs.",
    image: "/employee-benefits/innovation-work-culture.svg",
  },
  {
    title: "Cutting-edge Technology",
    description:
      "Work with the latest technologies in accounting, automation, and technology. Acgile is committed to staying ahead in the industry, allowing you to continuously enhance your skills and knowledge.",
    image: "/employee-benefits/cutting-edge-technology.svg",
  },
  {
    title: "Career Growth & Recognition",
    description:
      "We offer numerous opportunities for career advancement and focus on continuous learning. Your hard work and dedication are recognized through our employee recognition programs and annual increment policy.",
    image: "/employee-benefits/career-growth.svg",
  },
  {
    title: "Health & Wellness Benefits",
    description:
      "Access quality healthcare with our comprehensive health insurance plans, including maternity and paternity funds. Stay active with our fitness allowance and enjoy generous annual leave to relax and rejuvenate.",
    image: "/employee-benefits/health-insurance.svg",
  },
  {
    title: "Employee Engagement Hub",
    description:
      "Enjoy delicious and nutritious meals at our in-house cafeteria, and unwind with fun activities in our indoor gaming area. We provide these amenities to keep you energized and engaged.",
    image: "/employee-benefits/employee-engagement-hub.svg",
  },
  {
    title: "Support Programs & Retirement Plans",
    description:
      "Our Employee Support Programs include Child Education Assistance to help with your children's educational needs and Employee Old Age Benefits & Retirement Plans to secure your future.",
    image: "/employee-benefits/employee-support-programs.svg",
  },
  {
    title: "Diverse & Inclusive Culture",
    description:
      "Acgile values diversity and inclusion. We believe that a diverse workforce brings unique perspectives and fosters innovation, creating a welcoming environment for everyone.",
    image: "/employee-benefits/diverse-inclusive-culture.svg",
  },
  {
    title: "Persistent Performance Increment",
    description:
      "We believe in recognizing your hard work and dedication. Our annual increment policy ensures that your salary grows in alignment with your contributions and adjusts for inflation.",
    image: "/employee-benefits/persistent-performance-increment.svg",
  },
];

// Footer
export const footerMenuLinks = [
  {
    name: "About Us",
    path: `${domain}/about`,
  },
  {
    name: "Services",
    path: `${domain}/services`,
  },
  {
    name: "Careers",
    path: "/",
  },
  {
    name: "Blogs",
    path: `${domain}/blogs`,
  },
  {
    name: "Guide",
    path: `${domain}/guide`,
  },
  {
    name: "Industries",
    path: `${domain}/industries`,
  },
  {
    name: "Contact Us",
    path: `/contact`,
  },
  {
    name: "Referral Program",
    path: `${domain}/referral-program`,
  },
];
export const footerServicesLinks = [
  { name: "Accounts Receivable",    path: `${domain}/services/accounts-receivable` },
  { name: "Accounts Payable",       path: `${domain}/services/accounts-payable` },
  { name: "Order Management",       path: `${domain}/services/order-management` },
  { name: "Inventory Accounting",   path: `${domain}/services/inventory-management` },
  { name: "Marketplace Sync",       path: `${domain}/services/marketplace-inventory` },
  { name: "Financial Cleanup",      path: `${domain}/services/financial-cleanup` },
  { name: "EDI Maintenance",        path: `${domain}/services/edi-maintenance` },
  { name: "Month-End Close",        path: `${domain}/services/month-end-closures` },
  { name: "KPI Reporting",          path: `${domain}/services/management-reporting` },
  { name: "Compliance",             path: `${domain}/services/financial-reporting` },
  { name: "Data Migration",         path: `${domain}/services/data-migration` },
  { name: "Staff Augmentation",     path: `${domain}/services/staff-augmentation` },
  { name: "Automation & Workflow",  path: `${domain}/services/automation-workflow` },
  { name: "3PL Billing Audit",      path: `${domain}/services/3pl-billing-audit` },
];


export const footerSocialLinks = [
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/company/acgile/",
    iconKey: "linkedin", 
    style: "w-[30px] h-[30px]",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/acgile/",
    iconKey: "instagram",
    style: "w-[20px] h-[20px] ",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/AcgileServices",
    iconKey: "twitter",
    style: "w-[25px] h-[30px]",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/acgileaccountants",
    iconKey: "facebook",
    style: "w-[35px] h-[30px]",
  },
  {
    name: "Youtube",
    link: "https://www.youtube.com/@acgile",
    iconKey: "youtube",
    style: "w-[23px] h-[19px]",
  },
];
export const employeeTestimonials = [
  {
    name: "Saqib Awan",
    comment:
      "On my very first day at Acgile I realized it was not only different but better. Extremely friendly professionals who like to get the job done! The kind of working environment everyone should have! Such an empowering and uplifting atmosphere that makes you wanna give you your best!",
    rating: 5,
    date: "September 8, 2021",
  },
  {
    name: "Muhammad Abrar",
    comment:
      "I have been working in Acgile for past six months now and I find Acgile motivating, innovative and rewarding. Environment is friendly; I feel as if each and every member of the team is like family. Seniors are supportive and kind. Acgile is always willing to invest time and money into training their employees in order to keep up with ever-changing industry requirements. Acgile adopts a more collaborative approach rather than just giving instructions; your opinions and contributions are valued at Acgile. Your high performance is always recognized and rewarded.",
    rating: 5,
    date: "September 9, 2021",
  },
  {
    name: "Rashid Ali",
    comment:
      "I have been working in Acgile for one and half year now and I find Acgile motivating, innovative and rewarding. Environment is friendly; I feel as if each and every member of the team is like family. Seniors are supportive and kind.",
    rating: 5,
    date: "September 9, 2021",
  },
  {
    name: "Bilal Ahmed Khan",
    comment:
      'From 2018 till date, a change that a vision caused, a man became a company. "From the time when we couldn\'t fill in the frame, to the time needing bigger and bigger one to fit in...". Wishing Acgile family decades of success!',
    rating: 5,
    date: "April 5, 2022",
  },
  {
    name: "Shehab",
    comment:
      "Worked at ACGILE for 5 months. Projects in Data Science were complex and helped me grow a lot. HR policies are fantastic, they will really look after you. CEO has tremendous all-round knowledge to learn from.",
    rating: 5,
    date: "November 16, 2023",
  },
  {
    name: "Muhammad Salman Waqar",
    comment:
      "Working at Acgile has been an absolute pleasure. The team is not just colleagues; they're more like a supportive family. Management is approachable, and there's a genuine commitment to employee growth. The work culture encourages creativity and innovation, making every day exciting. I'm proud to be a part of Acgile, where my contributions are acknowledged, and my efforts are valued. It's not just a job; it's a place where you can thrive both personally and professionally.",
    rating: 5,
    date: "January 10, 2024",
  },
  {
    name: "Abdullah Ilyas",
    comment:
      "I have been working here since 2021. I joined as an intern and am now working as a senior accountant. In other words, this company has made me what I am today. It has taught me countless lessons about the way the work should have been done. If you get a chance to work with them as an employee or as a contractor, you will see why I love them. I am committed to them, and I want to spend years and years with them. I pray for Almighty blessings upon them and me. Mark my words, all visitors. This company, ACGILE, will be everywhere very soon. Our (ACGILE FAMILY) hard work and commitment to growing as quickly as possible will allow us to achieve our vision in a very short period of time. ",
    rating: 5,
    date: "January 19, 2024",
  },
  {
    name: "Zain Haider",
    comment:
      "I have been working for Acgile as a Lead Data Analyst for more than a year. The team is young and energetic, always ready to take on new challenges and learn new skills. The tasks are complex but rewarding, as we help our clients in the drop shipping business to optimize their operations and increase their profits. We also have some value added automations that made the client business more productive and efficient. One of the best aspects of working for Acgile is the opportunity to work with foreigner clients from different countries and cultures, and to learn from their perspectives and experiences. Acgile is a great place to work if you are looking for a dynamic and stimulating environment where you can grow and excel.",
    rating: 5,
    date: "February 15, 2024",
  },
  {
    name: "Monem Zaheer Qazi",
    comment:
      "Incredible workplace culture! Acgile boasts an exceptional team where collaboration thrives. The leadership is supportive, and the environment encourages both personal and professional growth. If you're seeking a company that values its employees and fosters a positive atmosphere, it is the place to be!",
    rating: 5,
    date: "February 22, 2024",
  },
  {
    name: "Samee Zia",
    comment:
      "I have been working for Acgile as an Accounts Manager for almost a year. One of the best aspects of working for Acgile is the opportunity to work with US based clients and experience cultural diversity, and to learn from their perspectives and experiences. Acgile is a great place to work if you are looking for a dynamic and stimulating environment where you can grow and excel. I would highly recommend to join Acgile and become a part of our family and thrive professionally!",
    rating: 5,
    date: "February 22, 2024",
  },
  {
    name: "Usman Hafeez",
    comment:
      "Working as an Ecommerce Specialist at Acgile has been a game-changer for me. The innovative strategies implemented to streamline workflows on Amazon, eBay, and Walmart have significantly boosted efficiency. The collaborative and forward-thinking environment fosters creativity, making it an ideal workplace for anyone passionate about optimizing online retail operations. With a focus on continuous improvement, Acgile truly stands out in the e-commerce landscape. Grateful to be part of a team dedicated to driving success in the ever-evolving digital marketplace.",
    rating: 5,
    date: "March 1, 2024",
  },
  {
    name: "Sadain Mehmood",
    comment:
      "I have been an employee of Acgile for past 6 months. Acgile provides a neat and clean office working space with all the necessary resources for a professional and comfortable workspace. As for working Opportunities, they are end less. I have been learning new skills and exceling at my profession. I would say that working here is a boost to your CV but you won't need a CV anymore as Acgile will give you no reason to change companies. It keep it's individual and collective employees in mind while making decisions. My colleagues are really friendly and always ready to help. At Acgile you won't get the environment of an office but the environment of a family. Everyone always has one another's back.",
    rating: 5,
    date: "March 12, 2024",
  },
  {
    name: "Usama Khalil",
    comment:
      "Truly remarkable witnessing the transformation of Acgile from a dedicated accounting firm to a comprehensive automation specialist and technology hub. Had the pleasure of working with the creative department where we successfully met the digital marketing and design requirements of US-based healthcare clients. The review would be incomplete without acknowledging the amazing food they serve their employees now from the in-house cafe!",
    rating: 5,
    date: "March 13, 2024",
  },
  {
    name: "Hamza Baber",
    comment:
      "Splendid place, quite decently design eye catching interior, totally a worth the visit ☺️💯",
    rating: 5,
    date: "March 23, 2024",
  },
  {
    name: "Raja Ahsan Farooq",
    comment:
      "Great workplace environment. Employees and management are really cooperative.",
    rating: 5,
    date: "March 1, 2024",
  },
];
