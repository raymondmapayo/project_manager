import {
  Box,
  Typography,
  Tabs,
  Tab,
  Avatar,
  Chip,
  LinearProgress,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
  TablePagination,
  Button,
  InputBase,
  AvatarGroup,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { styled } from "@mui/material/styles";
import { useState } from "react";

interface Project {
  name: string;
  assignees: string[];
  start: string;
  deadline: string;
  task: number;
  progress: string;
  percent: number;
  status: string;
}
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

  if (status === "ongoing") {
    bg = "#e8f0fe";
    color = "#1a73e8";
  }

  if (status === "cancelled") {
    bg = "#fce8e6";
    color = "#d93025";
  }

  if (status === "critical") {
    bg = "#fff4e5";
    color = "#e37400";
  }

  if (status === "inactive") {
    bg = "#eeeeee";
    color = "#666";
  }

  return {
    backgroundColor: bg,
    color,
    borderRadius: "6px",
    fontWeight: 500,
    textTransform: "capitalize",
  };
});
const rows: Project[] = [
  {
    name: "Project Doughnut Dungeon",
    assignees: ["A", "B"],
    start: "Nov 17, 2020",
    deadline: "May 21, 2028",
    task: 287,
    progress: "145 / 145",
    percent: 100,
    status: "completed",
  },
  {
    name: "Water resistant mosquito killer gun",
    assignees: ["R", "S", "T", "U"],
    start: "Mar 08, 2021",
    deadline: "Sep 15, 2022",
    task: 125,
    progress: "148 / 223",
    percent: 60,
    status: "inactive",
  },
  {
    name: "Execution of Micky the foul mouse",
    assignees: ["R"],
    start: "Nov 17, 2020",
    deadline: "Sep 23, 2026",
    task: 72,
    progress: "277 / 539",
    percent: 50,
    status: "ongoing",
  },
  {
    name: "Harnessing stupidity from Jerry",
    assignees: [],
    start: "Jan 01, 2016",
    deadline: "Apr 04, 2022",
    task: 91,
    progress: "169 / 394",
    percent: 40,
    status: "critical",
  },
  {
    name: "Making the Butterflies shoot each other dead",
    assignees: ["A", "B", "C"],
    start: "Dec 24, 2019",
    deadline: "Jan 15, 2024",
    task: 134,
    progress: "600 / 600",
    percent: 100,
    status: "ongoing",
  },
  {
    name: "The chewing gum attack",
    assignees: ["R", "S", "T"],
    start: "Aug 4, 2018",
    deadline: "Oct 22, 2023",
    task: 24,
    progress: "600 / 600",
    percent: 100,
    status: "cancelled",
  },
];

const ProjectList = () => {
  const [tab, setTab] = useState("All");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);

  const handleTabChange = (_: any, value: string) => {
    setTab(value);
  };

  const filtered = rows.filter((row) => {
    const matchTab =
      tab === "All" || row.status.toLowerCase() === tab.toLowerCase();

    const matchSearch = row.name.toLowerCase().includes(search.toLowerCase());

    return matchTab && matchSearch;
  });

  const paginated = filtered.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage,
  );

  <Box sx={{ display: "flex", justifyContent: "space-between" }}></Box>;
  return (
    <Box sx={{ p: 3 }}>
      {/* HEADER */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h5">Projects (32)</Typography>
      </Box>

      {/* TABS + SEARCH + ADD BUTTON */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
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

        {/* RIGHT SIDE: SEARCH + ADD BUTTON */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {/* SEARCH */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#f5f5f5",
              px: 2,
              py: 0.5,
              borderRadius: 2,
              width: 250,
              minWidth: 180,
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

          {/* ADD BUTTON */}
          <Button variant="contained">Add new project</Button>
        </Box>
      </Box>

      {/* TABLE */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>PROJECT NAME</TableCell>
              <TableCell>ASSIGNEES</TableCell>
              <TableCell>START DATE</TableCell>
              <TableCell>DEADLINE</TableCell>
              <TableCell>TASK</TableCell>
              <TableCell>PROGRESS</TableCell>
              <TableCell>STATUS</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {paginated.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.name}</TableCell>
                <TableCell sx={{ pl: 1 }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <AvatarGroup
                      max={3}
                      sx={{
                        "& .MuiAvatar-root": {
                          width: 28,
                          height: 28,
                          fontSize: 12,
                        },

                        // 🎯 TARGET ONLY THE "+2 / +3"
                        "& .MuiAvatarGroup-avatar": {
                          backgroundColor: "#bbf7d0", // light green
                          color: "#166534", // dark green text
                          fontWeight: 600,
                        },
                      }}
                    >
                      {row.assignees.map((_, i) => (
                        <Avatar
                          key={i}
                          src={`https://i.pravatar.cc/150?img=${i + 10}`}
                        />
                      ))}
                    </AvatarGroup>
                  </Box>
                </TableCell>

                <TableCell>{row.start}</TableCell>
                <TableCell>{row.deadline}</TableCell>
                <TableCell>{row.task}</TableCell>

                <TableCell>
                  <Typography variant="body2">{row.progress}</Typography>
                  <LinearProgress
                    variant="determinate"
                    value={row.percent}
                    sx={{ mt: 1 }}
                  />
                </TableCell>

                <TableCell>
                  <StatusChip
                    label={row.status}
                    size="small"
                    status={row.status}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* PAGINATION */}
        <TablePagination
          component="div"
          count={filtered.length}
          page={page}
          onPageChange={(_, newPage) => setPage(newPage)}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={(e) =>
            setRowsPerPage(parseInt(e.target.value, 10))
          }
        />
      </TableContainer>
    </Box>
  );
};

export default ProjectList;
