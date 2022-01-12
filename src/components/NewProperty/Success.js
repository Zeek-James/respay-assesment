import { Box, Button, Typography } from "@mui/material";
import React from "react";

export const Success = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItmes: "center",
      }}
    >
      <Typography>Property Added Successfully</Typography>
      <Typography>Your new property was successfullt added</Typography>

      <Box>
        <Button variant="contained">Add Units</Button>
        <Button variant="outlined">Add Units</Button>
      </Box>
    </Box>
  );
};
