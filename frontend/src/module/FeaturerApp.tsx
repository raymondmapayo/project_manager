import { Box, Typography, Card, CardContent } from "@mui/material";
import { featured } from "../utils/featured";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const FeaturerApp = () => {
  const truncateWords = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + ".....";
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "stretch",
        flexGrow: 1,
      }}
    >
      <Box
        sx={{
          width: "100%",
          flexGrow: 1,
          maxWidth: {
            xs: "100%",
            sm: 400,
            md: 450,
            lg: 500,
          },
          height: 340,
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
          background: "linear-gradient(145deg, #111, #1c1c1c)",
          border: "1px solid rgba(255,255,255,0.08)",
          transition: "all 0.35s ease",

          // 🔥 IMPORTANT: anchor for sticky overlay
          position: "relative",
        }}
      >
        {/* 🔥 STICKY OVERLAY (NEVER DISAPPEARS) */}
        <Box
          sx={{
            position: "absolute",
            top: 10,
            left: 10,
            right: 10,
            zIndex: 999,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pointerEvents: "none", // allow swipe under it
          }}
        >
          {/* LEFT: PAGINATION (STICKY) */}
          <Box
            className="custom-pagination"
            sx={{
              display: "flex",
              gap: "6px",
              pointerEvents: "auto",

              "& .swiper-pagination-bullet": {
                backgroundColor: "rgba(255,255,255,0.5)",
                opacity: 1,
              },
              "& .swiper-pagination-bullet-active": {
                backgroundColor: "#90ee90",
              },
            }}
          />

          {/* RIGHT: ARROWS < > */}
          <Box
            sx={{
              display: "flex",
              gap: 1,
              pointerEvents: "auto",
            }}
          >
            <Box
              className="custom-prev"
              sx={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",

                // 🔥 MORE VISIBLE LIGHT STYLE
                backgroundColor: "rgba(169, 166, 166, 0.85)",
                color: "#111",

                boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
                backdropFilter: "blur(4px)",

                transition: "0.25s ease",

                "&:hover": {
                  backgroundColor: "#ffffff",
                  transform: "scale(1.1)",
                },
              }}
            >
              <KeyboardArrowLeftIcon fontSize="small" />
            </Box>

            <Box
              className="custom-next"
              sx={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",

                // 🔥 SAME LIGHT STYLE
                backgroundColor: "rgba(169, 166, 166, 0.85)",
                color: "#111",

                boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
                backdropFilter: "blur(4px)",

                transition: "0.25s ease",

                "&:hover": {
                  backgroundColor: "#ffffff",
                  transform: "scale(1.1)",
                },
              }}
            >
              <KeyboardArrowRightIcon fontSize="small" />
            </Box>
          </Box>
        </Box>

        {/* SWIPER */}
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          style={{ height: "100%" }}
        >
          {featured.map((item) => (
            <SwiperSlide
              key={item.id}
              style={{
                height: "100%",
                display: "flex",
              }}
            >
              <Card
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  borderRadius: "16px",
                  overflow: "hidden",
                  color: "#fff",
                }}
              >
                {/* IMAGE */}
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    filter: "brightness(0.65)",
                  }}
                />

                {/* GRADIENT */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "70%",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
                    zIndex: 1,
                  }}
                />

                {/* CONTENT */}
                <CardContent
                  sx={{
                    position: "relative",
                    zIndex: 2,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    pb: 20,
                    px: 2,
                    transform: "translateY(-40px)",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      mb: 1,
                      color: "#90ee90",
                    }}
                  >
                    {truncateWords(item.title, 8)}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "0.8rem",
                      opacity: 0.85,
                      lineHeight: 1.5,
                    }}
                  >
                    {truncateWords(item.description, 15)}
                  </Typography>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default FeaturerApp;
