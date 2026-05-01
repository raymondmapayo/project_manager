import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  LinearProgress,
  Avatar,
  Stack,
} from "@mui/material";

type Project = {
  title: string;
  status: string;
  client: string;
  budget: string;
  progress: number;
  started: string;
  deadline: string;
  tasks: string;
  avatars?: number;
};

const projects: Project[] = [
  {
    title: "Project Doughnut Dungeon",
    status: "completed",
    client: "Gusteau’s Restaurant",
    budget: "8,742$",
    progress: 100,
    started: "17th Nov. 2020",
    deadline: "21st May 2028",
    tasks: "287 Task",
    avatars: 4,
  },
  {
    title: "Water resistant mosquito killer gun",
    status: "inactive",
    client: "Monsters.Inc",
    budget: "10,500$",
    progress: 76,
    started: "8th Mar. 2021",
    deadline: "15th Sept. 2022",
    tasks: "125 Task",
  },
  {
    title: "Execution of Micky the foul mouse",
    status: "ongoing",
    client: "Dashney Peeps Corp.",
    budget: "18,976$",
    progress: 89,
    started: "17th Nov. 2020",
    deadline: "23rd Sept. 2026",
    tasks: "72 Task",
  },
];

const ProjectCard = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2}>
        {projects.map((project, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={index}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
                },
              }}
            >
              <CardContent>
                {/* Title + Status */}
                <Stack
                  sx={{ flexDirection: "row", justifyContent: "space-between" }}
                >
                  <Typography sx={{ fontSize: 16, fontWeight: 600 }}>
                    {project.title}
                  </Typography>

                  <Typography>{project.status}</Typography>
                </Stack>

                {/* Client */}
                <Typography>Client : {project.client}</Typography>

                {/* Budget */}
                <Typography>Budget : {project.budget}</Typography>

                {/* Progress */}
                <Box sx={{ mt: 2 }}>
                  <Stack
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography sx={{ fontSize: 12 }}>Progress</Typography>
                    <Typography sx={{ fontSize: 12 }}>
                      {project.progress}%
                    </Typography>
                  </Stack>

                  <LinearProgress
                    variant="determinate"
                    value={project.progress}
                    sx={{
                      height: 6,
                      borderRadius: 5,
                      mt: 0.5,
                      backgroundColor: "#eee",
                    }}
                  />
                </Box>

                {/* Dates */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 2,
                  }}
                >
                  <Typography sx={{ fontSize: 12 }}>
                    Started : {project.started}
                  </Typography>
                  <Typography sx={{ fontSize: 12 }}>
                    Deadline : {project.deadline}
                  </Typography>
                </Box>

                {/* Bottom row */}
                <Stack
                  sx={{
                    mt: 2,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography sx={{ fontSize: 12, fontWeight: 600 }}>
                    {project.tasks}
                  </Typography>

                  {/* stacked avatars */}
                  {project.avatars && (
                    <Stack direction="row">
                      {[...Array(project.avatars)].map((_, i) => (
                        <Avatar
                          key={i}
                          sx={{
                            width: 26,
                            height: 26,
                            fontSize: 12,
                            ml: i === 0 ? 0 : -1,
                            border: "2px solid #fff",
                          }}
                        >
                          +{i}
                        </Avatar>
                      ))}
                    </Stack>
                  )}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectCard;
