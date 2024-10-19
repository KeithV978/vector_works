import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Header from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Hero } from "./Hero";
import { CardContainer, Wrapper } from "./styles";
import { Cards } from "./Cards";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import hbg from "../../assets/images/projects/b.jpg";
import dapp from "../../assets/icons/dapps.png";
import { Pagination } from "@mui/material";
import axios from "axios";

const Projects = () => {
  const [projects, setItems] = React.useState([{}, {}, {}, {}, {}, {}]);
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(10);

  const fetchItems = async (page) => {
    try {
      const response = await axios.get(`/api/projects?pages=${page}&limit=10`);
      setItems(response.data.items);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      // use hot toast here
      console.error("Error Fetching items", error);
    }
  };

  React.useEffect(() => {
    fetchItems(page);
  }, [page]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Wrapper>
      <Header />
      <Hero
        hbg={hbg}
        mainText={
          <Typography variant="h2" fontWeight={700}>
            Our Portfolio
          </Typography>
        }
        subText={
          <div>
            <Typography variant="h6">
              We have built a ton of web3 solutions that have earned us the
              right to the confidence we have as a solutions provider in the
              web3 space.
            </Typography>
            <div
              style={{ display: "flex", flexWrap: "wrap", margin: "1rem 0" }}
            >
              <Stack gap={1} direction="row" flexWrap="wrap">
                {[
                  { label: "DApps", icon: dapp },
                  { label: "Smart Contracts", icon: dapp },
                  { label: "Telegram Bots", icon: dapp },
                  { label: "Graphics", icon: dapp },
                  { label: "Web apps", icon: dapp },
                  { label: "Landing pages", icon: dapp },
                ].map((item, index) => {
                  return (
                    <Chip
                      key={index}
                      // sx={{ backgroundColor: "#ccc", color: "#1c1c1c" }}
                      color="secondary"
                      label={item.label}
                      icon={item.icon}
                    />
                  );
                })}
              </Stack>
            </div>
          </div>
        }
      />
      <br />
      <br />
      <Container>
        <CardContainer>
          {projects.map((item, index) => (
            <Cards key={index} item={item} />
          ))}
        </CardContainer>

        <br />
        <Divider />
        <br />
        <Box
          sx={{
            backgroundColor: "#ccc",
            width: "fit-content",
            padding: ".5rem",
            margin: "0 auto",
            borderRadius: "25px",
          }}
        >
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            color="secondary"
            // sx={{ float: "right" }}
          />
        </Box>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default Projects;
