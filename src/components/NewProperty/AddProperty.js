import { Box, Button, Link, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowBackSharpIcon from "@mui/icons-material/ArrowBackSharp";

export const AddProperty = () => {
  const [properties, setProperties] = useState({
    propertyName: "",
    propertyDescription: "",
    state: "",
    city: "",
    address: "",
    propertyType: "",
    buildingType: "",
    Amenities: "",
  });

  const onSubmit = (e) => {};

  return (
    <Box>
      <Button sx={{ color: "#999" }} startIcon={<ArrowBackSharpIcon />}>
        back
      </Button>
      <Typography color="secondary">Add New Property</Typography>
      <Box sx={{ px: 4 }}>
        <form onSubmit={onSubmit}>
          <TextField
            label="Property Name"
            variant="outlined"
            fullWidth
            type="text"
            sx={{ my: 2 }}
            size="small"
            // value={ }
            onChange={(e) => setProperties({ ...properties })}
          />
          <TextField
            label="Property Description"
            variant="outlined"
            fullWidth
            type="text"
            size="small"
          />
          <Box sx={{ my: 2 }}>
            <TextField
              label="State"
              variant="outlined"
              type="text"
              sx={{ mr: 2 }}
              size="small"
            />
            <TextField
              label="City"
              variant="outlined"
              type="text"
              size="small"
            />
          </Box>
          <TextField
            label="Address"
            variant="outlined"
            fullWidth
            type="text"
            size="small"
          />
          <Box sx={{ my: 2 }}>
            <TextField
              label="Property Type"
              variant="outlined"
              type="text"
              sx={{ mr: 2 }}
              size="small"
            />
            <TextField
              label="Building Type"
              variant="outlined"
              type="text"
              size="small"
            />
          </Box>
          <TextField
            label="Amenities"
            variant="outlined"
            fullWidth
            type="text"
            size="small"
          />
          <Link color="secondary">
            <Typography variant="caption">Upload Property Images?</Typography>
          </Link>
          <Button
            sx={{ my: 2 }}
            fullWidth
            variant="contained"
            color="secondary"
          >
            Save
          </Button>
        </form>
      </Box>
    </Box>
  );
};
