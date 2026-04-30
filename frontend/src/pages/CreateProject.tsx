import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  MenuItem,
  Stack,
} from "@mui/material";

const CreateProject = () => {
  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 3,
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
        Create a Project
      </Typography>

      <Grid container spacing={2}>
        {/* FULL WIDTH */}
        <Grid size={{ xs: 4 }}>
          <TextField fullWidth label="Project Title" />
        </Grid>

        {/* 2 COLUMN */}
        <Grid size={{ xs: 4 }}>
          <TextField select fullWidth label="Select Task View">
            <MenuItem value="default">Default Task View</MenuItem>
            <MenuItem value="list">List View</MenuItem>
            <MenuItem value="board">Board View</MenuItem>
          </TextField>
        </Grid>

        <Grid size={{ xs: 4 }}>
          <TextField select fullWidth label="Select Privacy">
            <MenuItem value="public">Public</MenuItem>
            <MenuItem value="private">Private</MenuItem>
          </TextField>
        </Grid>

        {/* 2 COLUMN */}
        <Grid size={{ xs: 4 }}>
          <TextField fullWidth label="Select Team" />
        </Grid>

        <Grid size={{ xs: 4 }}>
          <TextField fullWidth label="Select Assignees" />
        </Grid>

        {/* 2 COLUMN */}
        <Grid size={{ xs: 4 }}>
          <TextField fullWidth label="Project Lead (Admin)" />
        </Grid>

        <Grid size={{ xs: 4 }}>
          <TextField fullWidth label="Select Client" />
        </Grid>

        {/* 🔥 PERFECT 3 COLUMN ROW */}
        <Grid size={{ xs: 4 }}>
          <TextField
            fullWidth
            type="date"
            label="Start Date"
            slotProps={{ inputLabel: { shrink: true } }}
          />
        </Grid>

        <Grid size={{ xs: 4 }}>
          <TextField
            fullWidth
            type="date"
            label="End Date"
            slotProps={{ inputLabel: { shrink: true } }}
          />
        </Grid>

        <Grid size={{ xs: 4 }}>
          <TextField
            fullWidth
            type="date"
            label="Deadline"
            slotProps={{ inputLabel: { shrink: true } }}
          />
        </Grid>

        {/* 2 COLUMN */}
        <Grid size={{ xs: 4 }}>
          <TextField fullWidth label="Budget" type="number" />
        </Grid>

        <Grid size={{ xs: 4 }}>
          <TextField fullWidth label="Add Tags" />
        </Grid>

        {/* FULL WIDTH */}
        <Grid size={{ xs: 6 }}>
          <TextField fullWidth label="Project Overview" multiline rows={3} />
        </Grid>

        <Grid size={{ xs: 6 }}>
          <TextField fullWidth label="Leave a Comment" multiline rows={3} />
        </Grid>

        {/* BUTTONS */}
        <Grid size={{ xs: 12 }}>
          <Stack
            direction="row"
            spacing={3}
            sx={{
              mt: 1,
              flexWrap: "wrap",
              justifyContent: "flex-end",
              spacing: { xs: 1, sm: 2, md: 3 },
            }}
          >
            <Button variant="outlined" color="error">
              Remove
            </Button>
            <Button variant="contained">Create Project</Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CreateProject;
