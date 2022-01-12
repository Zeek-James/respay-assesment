import ArrowBackSharpIcon from "@mui/icons-material/ArrowBackSharp";
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export const Residential = () => {
  const prop = localStorage.getItem("prop");
  const property = JSON.parse(prop);
  console.log(property);

  useEffect(() => {}, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Link to="/">
        <Button
          startIcon={<ArrowBackSharpIcon />}
          sx={{ color: "#999", textDecoration: "none" }}
        >
          back
        </Button>
      </Link>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Typography sx={{ color: "#4c9f43" }} variant="h6">
          Properties
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ py: 2, px: 4 }}
        >
          Action
        </Button>
      </Box>
      <Card sx={{ mb: 2, p: 2 }}>
        <Grid container>
          <Grid item xs={12} md={6}>
            {/* <img src="" alt="" /> */}
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h6" sx={{ my: 2 }}>
                Top Court Garden
              </Typography>
              <Typography variant="caption" sx={{ color: grey[500] }}>
                24, Roland Road, Challenge, Ibadan, Oyo, NG
              </Typography>

              <Typography variant="caption" sx={{ my: 1 }}>
                Property Type: <span>Residential</span>
              </Typography>
              <Typography variant="caption">
                Property Sub-Type: <span>Semi-Detached</span>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src="" alt="" />
            <img src="" alt="" />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h6" sx={{ mb: 3 }}>
                Amenities
              </Typography>
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    mr: 3,
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      color: grey[500],

                      mb: 2,
                    }}
                  >
                    Fence
                  </Typography>

                  <Typography variant="caption" sx={{ color: grey[500] }}>
                    Facility Building
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", mr: 3 }}>
                  <Typography
                    variant="caption"
                    sx={{ color: grey[500], mb: 2 }}
                  >
                    Swimming Pool
                  </Typography>

                  <Typography variant="caption" sx={{ color: grey[500] }}>
                    Garden
                  </Typography>
                </Box>
                <Typography variant="caption" sx={{ color: grey[500] }}>
                  Gym
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Card>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3, borderRadius: 4 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 3,
              }}
            >
              <Typography variant="h6">Transaction Details</Typography>
              <Button color="secondary">See more</Button>
            </Box>

            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
            >
              <Typography variant="caption" sx={{ color: grey[500] }}>
                Total Rentals-20
              </Typography>
              <Typography variant="body2">NGN500,000,000,.00</Typography>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
            >
              <Typography variant="caption" sx={{ color: grey[500] }}>
                Total PM Fees-20
              </Typography>
              <Typography variant="body2">NGN50,000,000,.00</Typography>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
            >
              <Typography variant="caption" sx={{ color: grey[500] }}>
                Total Expenses-6
              </Typography>
              <Typography variant="body2">NGN100,000,000,.00</Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <Box>
              <Typography>Unit Details</Typography>
              <Button>See more</Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
