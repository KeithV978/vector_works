import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import { ErrorMessage, FormWrapper, Wrapper } from "./style";
import { Input, InputWrapper } from "../../components/Contact/styles";
import { ManagerIcon } from "hugeicons-react";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import { SIGNIN } from "../../redux/constants";
import { useNavigate } from "react-router-dom";
import { ADMIN } from "../../utils/links";

const Login = () => {
  const user = useSelector((state) => state.auth.auth.user);
  const message = useSelector((state) => state.auth.auth.message);
  const loading = useSelector((state) => state.auth.auth.loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = async (data) => {
    dispatch({ type: SIGNIN, payload: data });
  };

  const { register, handleSubmit } = useForm({});

  // console.log(user);
  // console.log(loading);

  React.useEffect(() => {
    console.log(user);
    if (user) {
      navigate(ADMIN);
    }
  }, [user, navigate]);

  return (
    <Container>
      <Wrapper>
        <FormWrapper>
          <Typography>{message && message}</Typography>
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
                required
              />
              <ErrorMessage></ErrorMessage>
            </InputWrapper>
            <InputWrapper>
              <Input
                type="password"
                {...register("password")}
                placeholder="password"
                required
              />
              <ErrorMessage></ErrorMessage>
            </InputWrapper>

            <Button
              type="submit"
              variant="contained"
              disabled={loading}
              sx={{
                margin: "0 auto",
                display: "block",
                width: "50%",
                fontWeight: 600,
              }}
            >
              Login {loading && <CircularProgress size={20} />}
            </Button>
          </Box>
        </FormWrapper>
      </Wrapper>
    </Container>
  );
};

export default Login;
