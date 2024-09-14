import React from "react";
import { Form, Input, InputWrapper, Textarea, Wrapper } from "./styles";
import {
  Mail02Icon,
  Message01Icon,
  // MessageUser02Icon,
  UserIcon,
} from "hugeicons-react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Links } from "./Links";

export const Contact = () => {
  return (
    <Wrapper>
      <Links />
      <Form component="form" noValidate>
        <Typography
          variant="h4"
          textAlign="center"
          sx={{ color: "tertiary.main" }}
        >
          {" "}
          Get In Touch
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
              width: "50%",
              color: "#fff",
            }}
          >
            Send
            {/* <MessageUser02Icon style={{ marginLeft: "1rem" }} /> */}
          </Button>
        </Box>
      </Form>
    </Wrapper>
  );
};
