import * as React from "react";
import { HeroWrapper } from "../style";
import { Textarea } from "../../../sections/Contact/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useForm } from "react-hook-form";

export const About = () => {
  const { register, handleSubmit } = useForm({});
  const handler = (data) => console.log(data);

  return (
    <Box component="form" noValidate onSubmit={handleSubmit(handler)}>
      <HeroWrapper>
        <Textarea rows={10} {...register("about")} />
        <Button
          type="submit"
          variant="contained"
          sx={{ width: { xs: "100%", sm: "200px" } }}
        >
          Update
        </Button>
      </HeroWrapper>
    </Box>
  );
};
