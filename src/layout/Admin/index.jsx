import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";

import { Body, Header } from "./style";
import {
  ArrowRight01Icon,
  CatalogueIcon,
  Menu01Icon,
  UserCircle02Icon,
} from "hugeicons-react";
import { useTheme } from "@mui/material";
import { Editor } from "./Editor";
import * as React from "react";
import { useSelector } from "react-redux";

const Admin = () => {
  const user = useSelector((state) => state.auth.auth.user);

  const [selection, setSelection] = React.useState("hero");
  let sections = ["hero", "about", "projects", "faqs"];
  const theme = useTheme();

  console.log(user);
  return (
    <div>
      <Header>
        <Container>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" fontWeight={600}>
              Welcome To The Backend, {user?.username}
            </Typography>

            <div>
              <IconButton>
                <UserCircle02Icon color="#ccc" />
              </IconButton>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#ccc",
                  color: "#1c1c1c",
                  borderRadius: "25px",
                }}
              >
                Logout
              </Button>
            </div>
          </div>
        </Container>
      </Header>

      <Body>
        <Container>
          <Box
            sx={{
              display: { sm: "none", xs: "flex" },
              position: "sticky",
            }}
          >
            <select>
              <option>sections</option>
            </select>
            <IconButton>
              <Menu01Icon />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 5,
              // position: "relative",
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", sm: "300px" },
                top: "1rem",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  backgroundColor: "#ccc",
                  color: "#1c1c1c",
                  fontWeight: 600,
                  paddingLeft: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <CatalogueIcon />
                Sections
              </Typography>
              <List
                sx={{
                  transition: "all ease .4s",
                }}
              >
                {sections.map((section, index) => {
                  return (
                    <ListItem
                      key={index}
                      onClick={() => setSelection(section)}
                      sx={{
                        "&:hover": {
                          background: `linear-gradient(205deg, ${[
                            theme.palette.primary.main,
                          ]}, ${[theme.palette.secondary.main]})`,
                          color: "#1c1c1c",
                          cursor: "pointer",
                        },
                        // "&:focus": {
                        //   background: `linear-gradient(205deg, ${[
                        //     theme.palette.primary.main,
                        //   ]}, ${[theme.palette.secondary.main]})`,
                        //   color: "#1c1c1c",
                        //   cursor: "pointer",
                        // },
                      }}
                    >
                      <ListItemIcon>
                        <ArrowRight01Icon
                          color={`${[theme.palette.primary.main]}`}
                        />
                      </ListItemIcon>
                      <Typography
                        variant="body1"
                        sx={{ textTransform: "capitalize" }}
                      >
                        {section}
                      </Typography>
                    </ListItem>
                  );
                })}
              </List>
            </Box>

            <Editor selection={selection} />
          </Box>
        </Container>
      </Body>
    </div>
  );
};

export default Admin;
