import React from "react";
import { FaGithub } from "react-icons/fa";

const ExperiencePage = () => {
  return (
    <div id="experience" className="bg-gray-100 w-full min-h-screen py-12">
      <h1 className="text-4xl font-bold text-indigo-600 text-center mb-12">
        My Experience
      </h1>

      {/* Projects Section */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Project 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-700">Attendence Management System</h3>
            <p className="text-gray-600 mt-2">
            The Attendance Management System is a Java-based console application designed to manage student attendance efficiently. It uses linked lists to store student records and their attendance details. Key features include adding, deleting, and displaying students, taking attendance, viewing the last attendance list, maintaining a class register, and searching a student's attendance percentage. The system provides an interactive menu for easy navigation and ensures accurate attendance tracking. This project demonstrates proficiency in Java, data structures, and object-oriented programming.
            </p>
            <div className="mt-4 flex justify-between items-center">
              <a
                href="https://github.com/charith079/AttendenceManagementSystem"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-indigo-500 hover:text-indigo-700"
              >
                <FaGithub className="mr-2" />
                View Project
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-700">Library Management System</h3>
            <p className="text-gray-600 mt-2">
            The Library Management System is a full-stack web application built using the MERN stack (MongoDB, Express, React, Node.js) to streamline book management in libraries. It features a Home Page for showcasing popular books, a Search Page to find books by title, author, or category, and a Favourites Page for users to save their favorite books. Users can also request unavailable books, while administrators can manage the library's catalog through a dedicated admin panel. The application is responsive, user-friendly, and leverages Tailwind CSS for a modern UI design. This project highlights proficiency in full-stack development, RESTful APIs, and database integration.
            </p>
            <div className="mt-4 flex justify-between items-center">
              <a
                href="https://github.com/charith079/LibraryManagementSystem.git"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-indigo-500 hover:text-indigo-700"
              >
                <FaGithub className="mr-2" />
                View GitHub
              </a>
              <a
                href="https://library-management-system-fronte-git-f64ced-charith07s-projects.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-indigo-500 hover:text-indigo-700"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Internships Section */}
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Internships</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Internship 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-700">MCEME CSE Internship (OnSite)</h3>
            <p className="text-gray-600 mt-2">
            The Digital Fund Management System for MCEME is a modern solution designed to digitize and streamline the financial operations of the Military College of Electronics and Mechanical Engineering. This project replaces traditional paper-based processes with a secure, efficient, and user-friendly digital platform. Key features include automated receipt and payment management, real-time financial reporting, and bank reconciliation. The system supports multiple payment methods and ensures compliance with financial year formats. Built using React.js for the frontend and Node.js with MongoDB for the backend, it offers remote access, role-based security, and centralized data management, significantly improving operational efficiency and reducing environmental impact.
            </p>
            <div className="mt-4 flex justify-between items-center">
              <a
                href="https://github.com/charith079/Internship"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:text-indigo-700"
              >
                View Internship Details
              </a>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-700">AWS Virtual Integership AIML</h3>
            <p className="text-gray-600 mt-2">
            The AWS Virtual Internship on AI/ML is a program offered by Amazon Web Services (AWS) designed to provide hands-on experience and learning in the fields of Artificial Intelligence (AI) and Machine Learning (ML). The internship offers participants the opportunity to work with real-world scenarios and gain a deeper understanding of how AI and ML technologies are implemented on the AWS cloud platform.
            </p>
            <div className="mt-4 flex justify-between items-center">
              <a
                href="https://drive.google.com/file/d/1JLpK91pPJR14YkbDst8aNrojqjgJe1sa/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:text-indigo-700"
              >
                View Internship Details
              </a>
            </div>
          </div>

          {/* Internship 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-700">Fortinet Cybersecurity Virtual Internship</h3>
            <p className="text-gray-600 mt-2">
            The Fortinet Cybersecurity Certification is a professional certification program offered by Fortinet, aimed at equipping individuals with the skills and knowledge required to work with Fortinet's security solutions. These certifications validate expertise in cybersecurity, network security, and the deployment and management of Fortinet's products.
            </p>
            <div className="mt-4 flex justify-between items-center">
              <a
                href="https://drive.google.com/file/d/10DG8Ly0DFvi_heCWke7yhenkJTk6fMEr/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:text-indigo-700"
              >
                View Internship Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
