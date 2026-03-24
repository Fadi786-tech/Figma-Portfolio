import Image from "next/image";
import Link from "next/link";

interface ExperienceCard {
  id: number;
  title: string;
  description: string;
  icon: string;
  link: string;
}

const experienceCards: ExperienceCard[] = [
  {
    id: 1,
    title: "Rokumei Coffee",
    description: "A modern coffee brand website designed to reflect warmth, elegance, and premium quality. The layout combines clean typography, earthy tones, and high-quality visuals to create an inviting and user-friendly experience. This project highlights my skills in UI/UX design, visual hierarchy, and responsive web layout.",
    icon: "/cards/card-1.png",
    link: "https://github.com/Fadi786-tech/Rokumei-Coffee",
  },
  {
    id: 2,
    title: "Jazzcash",
    description: "A TypeScript + Express + MongoDB backend that replicates the core functionalities of the Jazzcash mobile wallet system, including authentication, money transfer, bill payments, mobile loads, and auto-payments — all with secure JWT authentication, file upload, and cron-based scheduling.",
    icon: "/cards/card-3.png",
    link: "https://github.com/Fadi786-tech/JazzcashClone",
  },
  {
    id: 3,
    title: "User Management System",
    description: "🔐 A full-stack User Management System built with TypeScript, Express.js, React, and MongoDB. Includes CRUD, JWT authentication, Zod validation, and role-based access for SuperAdmin, Admin, and User. Features secure password hashing, loading/error states, and a modern UI.",
    icon: "/cards/card-4.png",
    link: "https://github.com/Fadi786-tech/User-Management-System",
  },
  {
    id: 4,
    title: "Voice & Video Chat Application",
    description: "Real-time chat application with video calling capabilities, built using the MERN stack (MongoDB, Express, React, Node.js) with WebSocket for real-time communication and WebRTC for peer-to-peer video calls.",
    icon: "/cards/card-4.png",
    link: "https://github.com/Fadi786-tech/ChatApp",
  },
  {
    id: 5,
    title: "How Am I Driving? - Real Time Driver Monitoring System",
    description: "A Flutter-based mobile application designed to monitor and analyze driver behavior in real time. The app continuously tracks speed, location, and sensor readings (accelerometer and gyroscope) to detect driving events such as overspeeding, sharp turns, hard braking, and geofence violations.",
    icon: "/cards/card-2.png",
    link: "https://github.com/Fadi786-tech/How-Am-I-Driving-FrontEnd",
  },
  {
    id: 6,
    title: "AI Gym Trainer Application",
    description: "We propose a Flutter-based AI Gym Trainer app offering personalized workouts, nutrition guidance, fitness tracking, gamified motivation, reminders, schedules, alarms, offers, and subscriptions, ensuring professional quality, engagement, and strong user retention.",
    icon: "/cards/card-1.png",
    link: "https://github.com/Fadi786-tech/AI-Gym-Trainer-Application",
  },
  {
    id: 7,
    title: "Electronic Notice Board - Smart IoT-based Electronic Notice Board",
    description: "A smart IoT-based Electronic Notice Board built with Flutter and ESP-32. It enables users to send, update, and delete messages wirelessly in real time via Wi-Fi. The ESP-32 displays messages on an LED/LCD board, replacing traditional notice boards with a modern, app-controlled solution.",
    icon: "/cards/card-3.png",
    link: "https://github.com/Fadi786-tech/Electronic-Notice-Board-FrontEnd",
  },
];

export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Work Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 [&>*:last-child:nth-child(odd)]:md:col-span-2 [&>*:last-child:nth-child(odd)]:md:max-w-md [&>*:last-child:nth-child(odd)]:md:mx-auto">
          {experienceCards.map((card) => (
            <div
              key={card.id}
              className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950  backdrop-blur-sm rounded-xl p-6 border-t-3 border-purple-700 hover:shadow-2xl hover:shadow-purple-900 flex items-center gap-4"
            >
              <div className="mb-4 ">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
              <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {card.title}
              </h3>
              <p className="text-white/70 text-sm mb-4">
                {card.description}
              </p>
              <Link
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors inline-block"
              >
                LEARN MORE →
              </Link>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

