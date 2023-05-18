import React from "react";
import Layout from "@/src/Components/Layout/Layout";
import { Box, Grid, Stack } from "@mui/material";
import Lines from "../public/BackgroundImages/lines.png";
import ContentBoxAbout from "@/src/Components/ContentBox/ContentBoxAbout";

function about() {
  return (
    <Layout>
      <Stack
        sx={{
          direction: "column",
          alignItems: "center",
          justifyContent: "center",
          m: "3rem",
        }}
      >
        <Grid container sx={{}} spacing={4}>
          <Grid item xs={12} md={6}>
            <Stack
              sx={{
                border: "1px solid transparent",
                borderRadius: "15px",
                background: "rgb(56 55 64 / 30%)",
                p: "1rem",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <h4
                style={{ borderLeft: "2px solid #e277ae", padding: "0.5rem" }}
              >
                Exclusive discounts for Web3 education courses{" "}
              </h4>
              <p style={{ padding: "0.2rem", marginTop: "0.3rem" }}>
                Stay relevant. Bring your A-game. Change the world.{" "}
              </p>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6} sx={{}}>
            <Stack
              sx={{
                border: "1px solid transparent",
                borderRadius: "15px",
                background: "rgb(56 55 64 / 30%)",
                p: "1rem",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <h4
                style={{ borderLeft: "2px solid #2567ff", padding: "0.5rem" }}
              >
                Mentoring & matchmaking schemes
              </h4>
              <p style={{ padding: "0.2rem", marginTop: "0.3rem" }}>
                Land your dream job. Meet your future co-founder. Get alpha from
                the best.
              </p>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6} sx={{}}>
            <Stack
              sx={{
                border: "1px solid transparent",
                borderRadius: "15px",
                background: "rgb(56 55 64 / 30%)",
                p: "1rem",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <h4
                style={{ borderLeft: "2px solid #0ba2ac", padding: "0.5rem" }}
              >
                We’re one of Europe’s biggest Web3 communities{" "}
              </h4>
              <p style={{ padding: "0.2rem", marginTop: "0.3rem" }}>
                Member events in Europe and beyond. Share your wins. Join the
                family.
              </p>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6} sx={{}}>
            <Stack
              sx={{
                border: "1px solid transparent",
                borderRadius: "15px",
                background: "rgb(56 55 64 / 30%)",
                p: "1rem",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <h4
                style={{ borderLeft: "2px solid #a8319c", padding: "0.5rem" }}
              >
                Keeping you connected IRL & URL
              </h4>
              <p style={{ padding: "0.2rem", marginTop: "0.3rem" }}>
                Access to coworking spaces. IRL meetups. Extremely online - with
                immaculate vibes. So go on, grab your membership card and claim
                your exclusive benefits. Because you deserve them.
              </p>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Layout>
  );
}

export default about;
