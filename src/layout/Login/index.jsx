import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import { ErrorMessage, FormWrapper, Wrapper } from "./style";
import { Input, InputWrapper } from "../../components/Contact/styles";
import { ManagerIcon } from "hugeicons-react";

const Login = () => {
  const submitHandler = (data) => {
    console.log(data);
  };

  const { register, handleSubmit } = useForm({});
  return (
    <Container>
      <Wrapper>
        <FormWrapper>
          <ManagerIcon />
          <Typography variant="h5">Content Manager Login</Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(submitHandler)}
          >
            <InputWrapper>
              <Input
                type="text"
                {...register("username")}
                placeholder="username"
              />
              <ErrorMessage></ErrorMessage>
            </InputWrapper>
            <InputWrapper>
              <Input
                type="password"
                {...register("password")}
                placeholder="password"
              />
              <ErrorMessage></ErrorMessage>
            </InputWrapper>

            <Button
              type="submit"
              variant="contained"
              sx={{
                margin: "0 auto",
                display: "block",
                width: "50%",
                fontWeight: 600,
              }}
            >
              Login
            </Button>
          </Box>
        </FormWrapper>
      </Wrapper>
    </Container>
  );
};

export default Login;
