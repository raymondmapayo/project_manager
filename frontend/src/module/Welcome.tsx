import { Box, Typography, Button } from "@mui/material";
import cardImg from "../assets/cards.png";
import cardImge from "../assets/f1.jpeg";
const Welcome = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flexGrow: 1, // 🔥 KEY
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "100%", // 🔥 FIXED
          flexGrow: 1, // 🔥 IMPORTANT

          transition: "all 0.35s ease",

          minHeight: 100,
          borderRadius: "16px",
          p: 4,

          background: "linear-gradient(145deg, #0a0a0a, #1a1a1a)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 12px 30px rgba(0,0,0,0.6)",

          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* LEFT */}
        <Box
          sx={{
            maxWidth: "45%",
            zIndex: 2,
            transform: "translateY(-20px)",
            transition: "all 0.35s ease",
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: "2rem", color: "#fff" }}>
            Welcome back 👋
          </Typography>

          <Typography
            sx={{ fontWeight: 600, fontSize: "1.4rem", mb: 1, color: "#fff" }}
          >
            Jaydon Frankie
          </Typography>

          <Typography
            sx={{
              fontSize: "0.9rem",
              color: "rgba(255,255,255,0.75)",
              mb: 2,
              lineHeight: 1.5,
            }}
          >
            If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isn't anything.
          </Typography>
          <Button
            size="medium"
            variant="contained"
            sx={{
              backgroundColor: "#b7f7c5", // light green
              color: "#0a5a1f",
              fontWeight: 700,
              fontSize: "0.9rem",
              px: 3,
              py: 1.2, // ⬅ makes it taller/bigger
              mt: 3, // ⬇ more spacing downward
              borderRadius: "10px",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#a3f2b3",
                boxShadow: "none",
              },
            }}
          >
            Go Now
          </Button>
        </Box>

        {/* RIGHT */}
        <Box
          sx={{
            position: "relative",
            width: 380,
            height: 280,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",

            transform: "translate(60px, -45px)",
            transition: "all 0.35s ease",
          }}
        >
          <Box
            component="img"
            src={cardImge}
            sx={{
              position: "absolute",
              left: -600,
              bottom: -80,
              width: 450,
              opacity: 0.1,
              transform: "rotate(10deg)",
            }}
          />

          <Box
            component="img"
            src={cardImg}
            sx={{
              position: "absolute",
              width: 320,
              opacity: 0.9,
              transform: "rotate(-14deg)",
              left: -55,
              bottom: -10,
            }}
          />

          <Box
            component="img"
            src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/illustrations/characters/character-present.webp"
            sx={{
              position: "relative",
              height: 160,
              transform: "translateX(40px)",
              transition: "all 0.35s ease",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
