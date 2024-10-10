import * as React from "react";
import Box from "@mui/material/Box";
import { Form } from "../style";
import { useForm } from "react-hook-form";
import CircleProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import axios from "axios";
import { Input, InputWrapper } from "../../../components/Contact/styles";
import { Delete02Icon, Upload04Icon } from "hugeicons-react";
import { ButtonGroup } from "@mui/material";

export const Projects = () => {
  const [projects] = React.useState([
    {
      title: "Doland",
      description: "",
      photoUrl: "",
    },
    {
      title: "Eth-Bomb",
      description: "",
      photoUrl: "",
    },
    {
      title: "Eth-Bomb",
      description: "",
      photoUrl: "",
    },
  ]);

  // const [newProject, setNewProject] = React.useState("");
  const [loading] = React.useState(false);

  const { register, handleSubmit } = useForm({});
  const handler = (project) => console.log(project);

  // const fetchProjects = async () => {
  // setLoading(true);
  // const res = await axios.get("http://localhost:5000/api/items");
  // setProjects(res.project);
  // setLoading(false);
  // };

  // const addItem = async () => {
  //   const res = await axios.post("http://localhost:5000/api/items", {
  //     name: newProject,
  //   });
  //   setProject([...project, res.project]);
  //   setNewProject("");
  // };

  // const deleteItem = async (id) => {
  //   await axios.delete(`http://localhost:5000/api/items/${id}`);
  //   setProject(project.filter((item) => item.id !== id));
  // };

  React.useEffect(() => {
    //fetch project
    // fetchProjects();
  }, [projects]);

  if (true) {
    return (
      <div>
        {projects?.map((project, index) => {
          return (
            <Box
              key={index}
              component={Form}
              noValidate
              onSubmit={handleSubmit(handler)}
              sx={{
                width: { xs: "100", sm: "600px" },
                marginTop: 5,
                borderBottom: "1px solid #ccc",
                paddingBottom: 4,
              }}
            >
              <Typography variant="h5" color="#5a5a5a">
                <i>
                  #{index + 1} - {project.title}
                </i>
              </Typography>
              <InputWrapper>
                <Input
                  type="text"
                  {...register("title")}
                  defaultValue={project.title}
                />
              </InputWrapper>

              <InputWrapper>
                <Input
                  type="text"
                  {...register("description")}
                  defaultValue={project.description}
                />
              </InputWrapper>

              <InputWrapper>
                <label htmlFor="photo">
                  {project.photoUrl ? (
                    <img src={project.photoUrl} alt={project.photoUrl} />
                  ) : (
                    <Typography>
                      <Upload04Icon color="#fff" /> - Change Image
                    </Typography>
                  )}
                  <Input
                    id="photo"
                    {...register("photoUrl")}
                    type="file"
                    hidden
                  />
                </label>
              </InputWrapper>
              <ButtonGroup sx={{ gap: 2 }}>
                <Button
                  variant="contained"
                  disabled={loading}
                  sx={{
                    minWidth: "100px",
                    textTransform: "lowercase",
                    "&:disabled": {
                      backgroundColor: "primary.main",
                    },
                  }}
                >
                  {loading ? (
                    <CircleProgress size={25} sx={{ color: "#1c1c1c" }} />
                  ) : (
                    <Typography
                      sx={{
                        color: "#1c1c1c",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Upload04Icon />
                      Save
                    </Typography>
                  )}
                </Button>
                <Button
                  variant="contained"
                  disabled={loading}
                  sx={{
                    minWidth: "100px",
                    textTransform: "lowercase",
                    "&:disabled": {
                      backgroundColor: "primary.main",
                    },
                  }}
                >
                  {loading ? (
                    <CircleProgress size={25} sx={{ color: "#1c1c1c" }} />
                  ) : (
                    <Typography
                      sx={{
                        color: "#1c1c1c",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Delete02Icon />
                      Delete
                    </Typography>
                  )}
                </Button>
              </ButtonGroup>
            </Box>
          );
        })}
      </div>
    );
  } else {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <CircleProgress size={25} />
        <Typography variant="body2">Loading...</Typography>
      </div>
    );
  }
};
