import Navbar from "./Navbar";
import Footer from "./Footer";
import "./ProjectGallery.css"
import {
  Box,
  ImageList,
  ImageListItem,
  Button,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const PortfolioGallery = () => {
  const navigate = useNavigate();
  const { projectId } = useParams();

  const projectImages = {
    1: [
      { img: "/images/tractor.jpg" },
      { img: "/images/tractor.jpg" },
      { img: "/images/tractor.jpg" },
    ],
    2: [
      { img: "/images/waterfall.jpg" },
      { img: "/images/waterfall.jpg" },
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
    "Kathwana ablution block",
  ];

  const galleryImages = projectImages[projectId] || [];
  return (
    <>
      <Navbar />
      <Box sx={{ p: 4 }} className="gallery-container">
        <Button onClick={() => navigate("/portfolio")} sx={{ mb: 3 }}>
          Back to Portfolio
        </Button>

        <Typography variant="h4" sx={{ mb: 4 }}>
          {projects[projectId]}
        </Typography>

        <ImageList cols={3} gap={16}>
          {galleryImages.map((item, index) => (
            <ImageListItem
              key={index}
              sx={{
                cursor: "pointer",
                "& img": {
                  transition: "opacity 0.3s",
                  ":hover": {
                    opacity: 0.6,
                  },
                },
              }}
              onClick={() => console.log(`Clicked on image ${index + 1}`)}
            >
              <img
                src={item.img}
                alt={`Gallery image ${index + 1}`}
                loading="lazy"
                style={{ height: "200px", objectFit: "cover" }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <Footer />
    </>
  );
};

export default PortfolioGallery;
