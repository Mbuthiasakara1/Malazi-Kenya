import Navbar from "./Navbar";
import {
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./PortfolioImages.css"

const PortfolioImages = () => {
  const navigate = useNavigate();

  const portfolioItems = [
    {
      id: 1,
      img: "images/real.jpg",
      title: "E-commerce Project",
      description: "React & Node.js",
    },
    {
      id: 2,
      img: "images/dam.jpg",
      title: "Social Media Dashboard",
      description: "React & Firebase",
    },
    {
      id: 3,
      img: "images/real.jpg",
      title: "Weather App",
      description: "React & Weather API",
    },
    {
      id: 4,
      img: "images/real.jpg",
      title: "Task Management",
      description: "React & Redux",
    },
    {
      id: 5,
      img: "images/real.jpg",
      title: "Task Management",
      description: "React & Redux",
    },
    {
      id: 6,
      img: "images/real.jpg",
      title: "Task Management",
      description: "React & Redux",
    },
    {
      id: 7,
      img: "images/real.jpg",
      title: "Task Management",
      description: "React & Redux",
    },
    {
      id: 8,
      img: "images/real.jpg",
      title: "Task Management",
      description: "React & Redux",
    },
    {
      id: 9,
      img: "images/real.jpg",
      title: "Task Management",
      description: "React & Redux",
    },
  ];

  return (
    <>
      <Container maxWidth="lg" sx={{ py: 4 }} className="portfolio-container">
        <Typography variant="h2">
          Our Projects
        </Typography>
        <ImageList cols={3} gap={16}>
          {portfolioItems.map((item) => (
            <ImageListItem
              key={item.id}
              onClick={() => navigate(`/portfolio/${item.id}`)}
              sx={{ cursor: "pointer" }}
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <ImageListItemBar title={item.title} position="below" />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </>
  );
};

export default PortfolioImages;
