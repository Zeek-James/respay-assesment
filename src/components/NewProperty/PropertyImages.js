import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

export const PropertyImages = () => {
  return (
    <div>
      <Typography>Add New Rent/Leases</Typography>

      <Box>
        <Typography>Upload Property Images</Typography>
        <Grid container>
          <Grid>
            <img src="" alt="" />
          </Grid>
        </Grid>
        <Button fullWidth variant="contained">
          Save
        </Button>
      </Box>
    </div>
  );
};
