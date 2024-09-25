import React from "react";
import { Form, Input, InputWrapper, Textarea, Wrapper } from "./styles";
import {
  Contact02Icon,
  Mail02Icon,
  Message01Icon,
  // MessageUser02Icon,
  UserIcon,
} from "hugeicons-react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { PlaneSection } from "./PlaneSection";
// import { useTheme } from "@mui/material";

export const Contact = () => {
  // const theme = useTheme();

  return (
    <Wrapper>
      <Form component="form" noValidate>
        <Typography
          variant="h4"
          fontWeight={600}
          sx={{
            marginBottom: "1rem",
            // textAlign: "center",
            display: "flex",
          }}
        >
          <span
            style={
              {
                // backgroundColor: `${[theme.palette.tertiary.main]}`,
                // display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
                // borderRadius: "50%",
                // width: "35px",
                // height: "35px",
              }
            }
          >
            <Contact02Icon />{" "}
          </span>
          <span
            style={{
              marginLeft: ".5rem",
            }}
          >
            Contact Us
          </span>
        </Typography>
        <InputWrapper>
          <UserIcon
            style={{
              marginRight: ".5rem",
              width: "2rem",
              color: "tertiary.main",
            }}
          />
          <Input
            type="text"
            id="Full Name"
            placeholder="full name or company name"
          />
        </InputWrapper>
        <InputWrapper>
          <Mail02Icon
            style={{
              marginRight: ".5rem",
              width: "2rem",
            }}
          />
          <Input type="text" id="Email" placeholder="user@mail.com" />
        </InputWrapper>
        <InputWrapper sx={{ alignItems: "start" }}>
          <Message01Icon
            style={{
              marginRight: ".5rem",
              width: "2rem",
            }}
          />
          <Textarea rows={10} id="Message" />
        </InputWrapper>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            sx={{
              backgroundColor: "tertiary.main",
              borderRadius: "15px",
              width: { xs: "100%", sm: "80%" },
              color: "#fff",
            }}
          >
            Send
            {/* <MessageUser02Icon style={{ marginLeft: "1rem" }} /> */}
          </Button>
        </Box>
      </Form>
      <PlaneSection />
    </Wrapper>
  );
};
