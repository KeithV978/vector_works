import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Wrapper } from "./styles";
import { ArrowRight01Icon } from "hugeicons-react";
// import faqs from "../../assets/images/faqs/faqs.png";
import Stack from "@mui/material/Stack";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={2} square {...props} />
))(({ theme }) => ({
  maxWidth: "700px",
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowRight01Icon style={{ fontSize: "0.9rem", color: "#46d6ec" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(255, 255, 255, .5)",
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(1),
  borderTop: "1px solid rgba(225, 225, 225, .125)",
}));

export const FAQs = () => {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <Wrapper>
      {/* <Titletext> */}
      <Typography
        variant="h4"
        fontWeight={600}
        sx={{ marginBottom: { sm: "4px", xs: "2px" } }}
      >
        Frequently Asked Questions
      </Typography>
      {/* </Titletext> */}
      <Stack direction="row" sx={{ marginRight: "2rem" }}>
        {/* <img
          src={faqs}
          alt="faqs"
          style={{ maxWidth: "300px", marginRight: "2rem" }}
        /> */}
        <Box>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography variant="h6" sx={{ color: "#fff" }}>
                How long does it take to launch a web3 project?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6" sx={{ color: "#fff" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography variant="h6" sx={{ color: "#fff" }}>
                Are there any customer support available?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6" sx={{ color: "#fff" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography variant="h6" sx={{ color: "#fff" }}>
                How much does a web3 landing page cost?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6" sx={{ color: "#fff" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Stack>
    </Wrapper>
  );
};
