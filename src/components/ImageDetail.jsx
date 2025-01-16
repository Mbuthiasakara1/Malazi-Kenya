import { Box, IconButton } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useEffect, useState } from "react";

const ImageDetail = () => {
  const { projectId, imageIndex } = useParams();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(Number(imageIndex));

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

  const images = projectImages[projectId] || [];

  useEffect(() => {
    if (currentIndex < 0 || currentIndex >= images.length) {
      navigate(`/portfolio/${projectId}`);
    }
  }, [currentIndex, images.length, navigate, projectId]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };
//   prev is the current index image you are looking at
// subtract one from prev but if we are index0 we don't go below 0

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, images.length - 1));
  };
 

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        position: "relative",
        bgcolor: "black",
      }}
    >

     
      <IconButton
        onClick={handlePrev}
        sx={{ position: "absolute",
             left: 16,
             color: "white" }}
        disabled={currentIndex === 0}
      >
        <ArrowBackIcon />
      </IconButton>

      <img
        src={images[currentIndex].img}
        alt={`Image ${currentIndex + 1}`}
        style={{ maxHeight: "90%", maxWidth: "90%" }}
      />

      <IconButton
        onClick={handleNext}
        sx={{ position: "absolute", right: 16, color: "white" }}
        disabled={currentIndex === images.length - 1}
      >
        <ArrowForwardIcon />
      </IconButton>
    </Box>
  );
};

export default ImageDetail;

