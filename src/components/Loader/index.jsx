import CircleProgress from "@mui/material/CircularProgress";

export const Loader = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        backgroundColor: "#000",
        zIndex: 10000,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          backgroundColor: "#000",
        }}
      >
        <CircleProgress />
      </div>
    </div>
  );
};
