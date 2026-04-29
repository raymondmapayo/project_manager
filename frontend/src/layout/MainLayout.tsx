import { Box } from "@mui/material";
import React, { useState } from "react";

import ProjectSidebar from "../components/ProjectSidebar";
import ProjectNavbar from "../components/ProjectNavbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(true);

  return (
    <Box sx={{ display: "flex" }}>
      <ProjectSidebar open={open} onToggle={() => setOpen((p) => !p)} />

      <Box sx={{ flex: 1 }}>
        <ProjectNavbar open={open} /> {/* 👈 pass open */}
        <Box component="main" sx={{ p: 3, mt: 8 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
