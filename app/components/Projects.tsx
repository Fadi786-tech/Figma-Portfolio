import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: string;
}

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "ROKUMEI COFFEE – Japanese Specialty Coffee E-Commerce",
    description: "A sophisticated e-commerce website for ROKUMEI COFFEE, a specialty coffee shop established in Nara, Japan since 1974. The site features an elegant Japanese aesthetic with smooth animations, showcasing premium coffee products, craft coffee selections, and bakery items. Built with modern web technologies, it delivers a seamless shopping experience with product rankings, campaigns, and rich editorial content about coffee culture.",
    link: "https://rokumei-coffee.vercel.app/",
    image: "/projects/project-1 (2).png",
  },
  {
    id: 2, 
    title: "Voice & Video Chat Application",
    description: "A real-time chat application with video calling capabilities, built using the MERN stack (MongoDB, Express, React, Node.js) with WebSocket for real-time communication and WebRTC for peer-to-peer video calls.",
   link: "https://chat-app-frontend-ten-mu.vercel.app",
    image: "/projects/project-2.png",
  },
  {
    id: 3, 
    title: "Jazzcash Application",
    description: "A TypeScript + Express + MongoDB backend that replicates the core functionalities of the Jazzcash mobile wallet system, including authentication, money transfer, bill payments, mobile loads, and auto-payments — all with secure JWT authentication, file upload, and cron-based scheduling.",
   link: "https://jazzcash-clone-frontend.vercel.app",
    image: "/projects/project-3.png",
  },
  {
    id: 4, 
    title: "User Management System",
    description: "🔐 A full-stack User Management System built with TypeScript, Express.js, React, and MongoDB. Includes CRUD, JWT authentication, Zod validation, and role-based access for SuperAdmin, Admin, and User. Features secure password hashing, loading/error states, and a modern UI.",
   link: "https://user-management-system-lake-rho.vercel.app/",
    image: "/projects/project-4.png",
  }
];

export default function Projects(): React.JSX.Element {
  return (
    <section id="lab" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 1;
          
          return (
            <div key={project.id} className="mb-20 last:mb-0">
              <div className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                isEven ? "lg:grid-flow-dense" : ""
              }`}>
                {/* Text Content */}
                <div className={`${isEven ? "lg:col-start-2" : ""}`}>
                  <p className="text-purple-400 text-lg lg:text-xl mb-2 font-medium">
                    Featured Project
                  </p>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                    {project.title}
                  </h3>
                  {/* Description Card - extends over image */}
                  <div className="relative z-10 mb-6">
                    <div className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/10 shadow-lg ${
                      isEven ? "lg:ml-[-20%]" : "lg:w-[calc(100%+20%)]"
                    }`}>
                      <p className="text-white/90 text-base lg:text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  {/* Website link */}
                  {project.link && (
                    <div className="flex gap-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-purple-400 transition-colors duration-200"
                        aria-label="Visit project website"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-6 h-6"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="2" y1="12" x2="22" y2="12" />
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>

                {/* Image Content */}
                <div className={`${isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-slate-950 p-2 lg:p-3 shadow-2xl">
                    <div className="relative w-full h-full rounded-lg overflow-hidden">
                      <Image
                        src={`${project.image}?v=${Date.now()}`}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-top"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

