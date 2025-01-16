import Navbar from "../components/Navbar";
import {
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,

} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Portfolio.css"
import Footer from "../components/Footer";

const Portfolio = () => {
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
      <Navbar />

      <Container maxWidth="lg" sx={{ py: 4 }} className="portfolio-container">
        <div className="porfolio-container-content">
          <img src="images/homebg.jpg"  alt="Portfolio-Background" />
          <h1 className="porfolio-title">PORTFOLIO</h1>
        </div>
        <ImageList cols={3} gap={16} className="portfolio-image-container">
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
                style={{ height:"200px", objectFit: "cover" }}
              />
              <ImageListItemBar title={item.title} position="below" />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>

      <Footer />
    </>
  );
};

export default Portfolio;
