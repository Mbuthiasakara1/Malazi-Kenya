import React from "react";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Footer from "./Footer";
import './ProjectGallery.css'
import { useNavigate, useParams } from "react-router-dom";

function ProjectGallery() {
  const { projectId } = useParams();
  const navigate = useNavigate()

  const projectImages = {
    1: [
      { img: "/images/tractor.jpg" },
      { img: "/images/tractor.jpg" },
      { img: "/images/tractor.jpg" },
    ],
    2: [
      { img: "/images/waterfall.jpg" },
      { img: "/images/development.jpg" },
      { img: "/images/waterfall.jpg" },
    ],
    3: [
      { img: "/images/sunset.jpg" },
      { img: "/images/sunset.jpg" },
      { img: "/images/sunset.jpg" },
    ],
  };

  const projects = [
    "",
    "Apartment Blocks in Nairobi",
    "Ndagani Modern Market",
    "Kathwana Ablution Block",
    "Kathwana Ablution Block",
  ];

  const galleryImages = projectImages[projectId] || [];

  const handleImageClick = (index) => {
    navigate(`/portfolio/${projectId}/image/${index}`);
  };

  // Get the first image associated with the projectId
  const image = projectImages[projectId]?.[0]; // Safely access the first image
  const projectTitle = projects[projectId]; // Get the project title

  return (
    <>
      <Navbar />
      <div className='header-container'>
        {image && (
          <>
            <img
              src={image.img}
              alt={`Project ${projectId}`}
              className="project-header"
            />
            <div className="project-text">
              <h1>
                {projectTitle}
              </h1>
            </div>
          </>
        )}
        {!image && <p>No image available for this project.</p>}
      </div>
      <Projects
        projects={projects}
        projectImages={projectImages}
        projectId={projectId}
        onImageClick = {handleImageClick}
      />
      <Footer />
    </>
  );
}

export default ProjectGallery;
