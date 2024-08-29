import React from "react";
import { Form, Input, InputWrapper, Textarea, Wrapper } from "./styles";
import {
  Mail02Icon,
  Message01Icon,
  // MessageUser02Icon,
  UserIcon,
} from "hugeicons-react";
import { Button } from "@mui/material";

export const Contact = () => {
  return (
    <Wrapper>
      <Form component="form" noValidate>
        <InputWrapper>
          <UserIcon
            style={{
              marginRight: ".5rem",
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
            }}
          />
          <Input type="text" id="Email" placeholder="user@mail.com" />
        </InputWrapper>
        <InputWrapper sx={{ alignItems: "start" }}>
          <Message01Icon
            style={{
              marginRight: ".5rem",
            }}
          />
          <Textarea rows={10} id="Message" placeholder="message" />
        </InputWrapper>

        <Button
          variant="contained"
          sx={{
            margin: "1rem auto",
            borderRadius: "20px",
            display: "block",
            width: "50%",
          }}
        >
          Send
          {/* <MessageUser02Icon style={{ marginLeft: "1rem" }} /> */}
        </Button>
      </Form>
    </Wrapper>
  );
};
