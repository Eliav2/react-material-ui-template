import { Route, Routes } from "react-router-dom";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

// App.js
function Home() {
  return (
    <>
      this is home page
      <Button href="/about">About</Button>
    </>
  );
}

function About() {
  return (
    <>
      this is about page
      <Button href={"/"}>Home</Button>
    </>
  );
}

function App() {
  return (
    <Container
      sx={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h2">React-Material-ui-template</Typography>
      <TextField placeholder={"תמיכה בעברית"} />
      <Box>
        this template include some basic required initialization for popular
        libraries
      </Box>
      <ul>
        <li>Material-UI v5</li>
        <li>React-Router v6</li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Container>
  );
}

export default App;
