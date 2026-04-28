import Box from "@mui/material/Box";
import { TextField, Button } from "@mui/material";

const CreateProject = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 400,
      }}
    >
      <TextField label="Project Name" />
      <TextField label="Description" multiline rows={3} />
      <Button variant="contained">Create</Button>
    </Box>
  );
};

export default CreateProject;
