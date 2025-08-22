import React from "react";

const projects = [
  {
    title: "TherapEasy",
    description: " In this web application, Users can have Role based access to their dashboards. All appointments would be displayed so that therapist can \"ACCEPT\"/\"RESCHEDULE\"/\"CANCEL\" the requested appointment. Patients patients can View the plans assigned by the therapist on their dashboard, They can request for appointments based on therapist Id. Patients can access the Demo Videos which ae common for all patients. Patients can test their performance by reading the sentences displayed (Increases engagement) They can send feedbackA supervisor They can assign the patients to the therapists. Automatic assignment can be done based on supervisor's approval. Reviews the therapists reports.",
    link: "https://github.com/Srichandanak/TherapEasy.git",
  },
  {
    title: "Event Management",
    description: "A small web application that allows users to create and manage events. Users can register for events, view event details, and manage their registrations.",
    link: "hhttps://github.com/Srichandanak/EventManagement.git",
  },
  {
    title: "Rice crop detection",
    description: "Designed an ML mode which can detect whether the rice crop is healthy or not from the given image. The model is trained on a dataset of rice crop images and can classify them into different categories based on their features.",
    link: "https://colab.research.google.com/drive/1-PPwBTjo92lR6jINewzwpUczYfjxzZ0_?usp=sharing",
  },
  {
    title: "Simple Movie Recommendation System",
    description: "This Repository Contains my Projects based on Data Science and Machine Learning. I have done a Simple movie recommendation System based my learning about data pre processing and training using the sci-kit Learn library in python. This project is a Bollywood Movie Recommendation System that suggests movies based on the user's preferred genres and the number of years since the movie's release (the \"age of cinema\"). The system uses a Random Forest Classifier model to predict age groups and then recommends Bollywood movies accordingly.",
    link: "https://github.com/Srichandanak/My_Projects.git",
  },
  {
    title: "Tollywod News Agent",
    description: "A simple project about tollywod news",
    link: "https://colab.research.google.com/drive/1BIPYYxrGdSnxXPxMh_wpKZqHeco-y_il?usp=sharing",
  },
];

export default function Projects() {
  return (
    <div className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
