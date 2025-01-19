import Navbar from "./Navbar";
import Projects from "./Projects";
import Footer from "./Footer";
import "./ProjectGallery.css";
import { useNavigate, useParams } from "react-router-dom";

function ProjectGallery() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const projectImages = {
    1: [
      { img: "/projects/pict3.jpg" },
      { img: "/projects/toiletsb.jpg" },
      { img: "/projects/project3.jpg" },
    ],
    2: [
      { img: "/projects/Marketpic1.jpg" },
      { img: "/projects/marketpic2.jpg" },
    ],
    3: [
      { img: "/projects/culvert1.jpg" },
      { img: "/projects/culvert2.jpg" },
      { img: "/projects/culvert3.jpg" },
    ],

    4: [
      { img: "/projects/githunguri3.jpg" },
      { img: "/projects/githunguri2.jpg" },
    ],

    5: [
      { img: "/images/mirror.jpg" },
      { img: "/images/waterfall.jpg" },
      { img: "/images/blackblock.jpg" },
    ],

    6: [{ img: "/projects/Roadpic2.jpg" }, 
      { img: "/projects/Roadpic1.jpg" }],

    7: [{ img: "/projects/fencepic1.jpg" },
       { img: "/projects/fence3.jpg" }],

    8: [
      { img: "/projects/Komothai2.jpg" },
      { img: "/images/IMG-20250104-WA0042.jpg" },
    ],
  };

  const projects = [
    "",
    "Kathwana Market Ablution Block",
    "Ndagani Modern Market",
    "Culvert Projects in Kajiado",
    "Abulution Block in GIthunguri Primary School",
    "Apartment Blocks in Nairobi",
    "Rehabilitated Roads in Chuka",
    "Fence Construction at Chuka Level 5",
    "Abulution Block at Komothai Girls School",
    "Kathwana Ablution Block",
  ];

  const handleImageClick = (index) => {
    navigate(`/portfolio/${projectId}/image/${index}`);
  };

  // Get the first image associated with the projectId
  const image = projectImages[projectId]?.[0]; // Safely access the first image
  const projectTitle = projects[projectId]; // Get the project title

  return (
    <>
      <Navbar />
      <div className="header-container">
        {image && (
          <>
            <img
              src={image.img}
              alt={`Project ${projectId}`}
              className="project-header"
            />
            <div className="project-text">
              <h1>{projectTitle}</h1>
            </div>
          </>
        )}
        {!image && <p>No image available for this project.</p>}
      </div>
      <Projects
        projects={projects}
        projectImages={projectImages}
        projectId={projectId}
        onImageClick={handleImageClick}
      />
      <Footer />
    </>
  );
}

export default ProjectGallery;
