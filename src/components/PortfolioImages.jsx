
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
      img: "projects/toilets.jpg",
      title: "Kathwana Market Ablution Block",
    },
    {
      id: 2,
      img: "projects/Market1.jpg",
      title: "Ndagani Modern Market",
    },
    {
      id: 3,
      img: "projects/CulvertM.jpg",
      title: "Culvert Projects in Kajiado",
    },
    {
      id: 4,
      img: "projects/githunguriM.jpg",
      title: "Abulution Block in GIthunguri Primary School",
    },
    {
      id: 5,
      img: "images/pic1.jpg",
      title: "Apartment Blocks in Nairobi",
    },
    {
      id: 6,
      img: "projects/RoadM.jpg",
      title: "Rehabilitated Roads in Chuka",
    },
    {
      id: 7,
      img: "projects/fence.jpg",
      title: "Fence Construction at Chuka Level 5",
    },
    {
      id: 8,
      img: "projects/KomothaiM.jpg",
      title: "Abulution Block at Komothai Girls School",
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
