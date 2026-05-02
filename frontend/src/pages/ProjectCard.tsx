import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  LinearProgress,
  Avatar,
  Stack,
  Tabs,
  Chip,
  Tab,
  InputBase,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import BentoIcon from "@mui/icons-material/Bento";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { styled } from "@mui/material/styles";
interface StatusChipProps {
  status: string;
}
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
interface StatusChipProps {
  status: string;
}

export const StatusChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== "status",
})<StatusChipProps>(({ status }) => {
  let bg = "#f1f1f1";
  let color = "#555";

  if (status === "completed") {
    bg = "#e6f4ea";
    color = "#1e8e3e";
  }

  if (status === "inactive") {
    bg = "#eeeeee";
    color = "#e37400";
  }

  if (status === "ongoing") {
    bg = "#fce8e6";
    color = "#d93025";
  }

  return {
    backgroundColor: bg,
    color,
    borderRadius: "6px",
    fontWeight: 500,
    textTransform: "capitalize",
  };
});
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
    avatars: 2,
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
    avatars: 4,
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
    avatars: 3,
  },
];

const ProjectCard = () => {
  const [tab, setTab] = useState("All");
  const [search, setSearch] = useState("");
  const handleTabChange = (_event: any, newValue: string) => {
    setTab(newValue);
  };
  return (
    <Box sx={{ p: 2 }}>
      {/* ✅ HEADER (PUT HERE) */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h5">Projects ({projects.length})</Typography>
      </Box>
      {/* ✅ TABS + SEARCH + ADD BUTTON (PUT HERE TOO) */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {/* TABS */}
        <Tabs value={tab} onChange={handleTabChange}>
          <Tab label="All (32)" value="All" />
          <Tab label="Ongoing (14)" value="ongoing" />
          <Tab label="Cancelled (2)" value="cancelled" />
          <Tab label="Finished (14)" value="completed" />
          <Tab label="Postponed (2)" value="postponed" />
        </Tabs>
        {/* SEARCH + BUTTON */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#f5f5f5",
              px: 2,
              py: 0.5,
              borderRadius: 2,
              width: 250,
            }}
          >
            <SearchIcon sx={{ color: "gray", mr: 1 }} />
            <InputBase
              placeholder="Search..."
              fullWidth
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Box>
        </Box>
      </Box>
      {/* ✅ THIS WAS MISSING */}
      <Grid container spacing={2}>
        {projects.map((project, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={index}>
            <Card
              sx={{
                position: "relative",
                borderRadius: 3,
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                transition: "0.3s",
                cursor: "pointer",

                "&:hover .hoverIcon": {
                  opacity: 1,
                  transform: "translateX(0px)",
                },
              }}
            >
              <Box
                className="hoverIcon"
                sx={{
                  position: "absolute",
                  top: 12,
                  right: 12,

                  width: 42, // 🔥 bigger
                  height: 42, // 🔥 bigger
                  borderRadius: "50%",
                  backgroundColor: "#d9f7be",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  opacity: 0,
                  transform: "translateX(8px)",
                  transition: "0.25s ease",
                  pointerEvents: "none",

                  "& svg": {
                    color: "#130c0c",
                    fontSize: 26, // 🔥 bigger icon
                  },
                }}
              >
                <KeyboardArrowRightIcon />
              </Box>

              <CardContent>
                {/* Title + Status */}
                <Stack
                  sx={{
                    flexDirection: "column",
                    alignItems: "flex-start",
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 28, // 🔥 was 25
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      width: "100%",
                    }}
                  >
                    {project.title}
                  </Typography>

                  <StatusChip label={project.status} status={project.status} />
                </Stack>

                {/* CLIENT */}
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{
                    mt: 1.5,
                    alignItems: "center",
                  }}
                >
                  <PersonIcon sx={{ fontSize: 20, color: "#7c8181" }} />
                  <Typography sx={{ fontSize: 18, color: "#52c41a" }}>
                    Client : {project.client}
                  </Typography>
                </Stack>

                {/* BUDGET */}
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ mt: 1.5, alignItems: "center" }}
                >
                  <BentoIcon sx={{ fontSize: 20, color: "#7c8181" }} />
                  <Typography sx={{ fontSize: 18 }}>
                    Budget : {project.budget}
                  </Typography>
                </Stack>

                {/* PROGRESS */}
                <Box sx={{ mt: 2 }}>
                  <Stack
                    sx={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography sx={{ fontSize: 18 }}>Progress</Typography>

                    <Typography sx={{ fontSize: 18, fontWeight: 600 }}>
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
                      backgroundColor: "#e8f5e9",
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: "#52c41a",
                      },
                    }}
                  />
                </Box>

                {/* Dates */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    mt: 2,
                    gap: 0.5,
                  }}
                >
                  <Typography sx={{ fontSize: 18 }}>
                    Started : {project.started}
                  </Typography>

                  <Typography sx={{ fontSize: 18 }}>
                    Deadline : {project.deadline}
                  </Typography>
                </Box>

                {/* Bottom row */}
                <Stack
                  sx={{
                    mt: 2,
                    flexDirection: "row",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  {/* LEFT → Avatars */}
                  {project.avatars && (
                    <Stack direction="row">
                      {[...Array(project.avatars)].map((_, i) => (
                        <Avatar
                          key={i}
                          sx={{
                            width: 30, // 🔥 slightly bigger
                            height: 30,
                            fontSize: 15,
                            ml: i === 0 ? 0 : -1,
                            border: "2px solid #fff",
                          }}
                        >
                          +{i}
                        </Avatar>
                      ))}
                    </Stack>
                  )}

                  {/* RIGHT → Tasks */}
                  <Stack
                    direction="row"
                    spacing={0.5}
                    sx={{
                      ml: "auto",
                      alignItems: "center",
                    }}
                  >
                    <ChecklistRtlIcon sx={{ fontSize: 19, color: "#52c41a" }} />
                    <Typography sx={{ fontSize: 15, fontWeight: 600 }}>
                      {project.tasks}
                    </Typography>
                  </Stack>
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
