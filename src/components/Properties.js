import {
  Backdrop,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Fade,
  Grid,
  Modal,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { NewPropertyForm } from "./NewProperty/NewPropertyForm";
import { useSelector } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // maxWidth: 600,
  maxHeight: 600,
  minWidth: 400,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const Properties = () => {
  const properties = useSelector((state) => state.properties);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClick = (prop) => {
    localStorage.setItem("prop", JSON.stringify(prop));
  };

  return (
    <Box sx={{ width: "100%" }}>
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
          startIcon={<AddIcon />}
          sx={{ py: 2, px: 4 }}
          onClick={handleOpen}
        >
          Add New Property
        </Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
        >
          <Fade in={open}>
            <Box sx={style}>
              <NewPropertyForm />
            </Box>
          </Fade>
        </Modal>
      </Box>
      <Grid container spacing={5} sx={{ mb: 15 }}>
        {properties.map((p) => (
          <Grid key={p.propertyId} item lg={4} xs={12} md={6}>
            <Card>
              <CardActionArea>
                <Link to="/residential">
                  <CardMedia
                    component="img"
                    height="300"
                    width="200"
                    image={p.image}
                    alt={p.propertyName}
                    onClick={() => handleClick(p)}
                  />
                </Link>

                <CardContent>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography
                      sx={{ mb: 1, fontWeight: 700 }}
                      color="text.secondary"
                    >
                      {p.propertyName}
                    </Typography>
                    <Typography
                      color="text.success"
                      sx={{ color: "#4c9f43", fontWeight: 700 }}
                    >
                      {" "}
                      {p.totalUnit} unit(s)
                    </Typography>
                  </Box>
                  <Typography sx={{ mb: 1 }} color="text.secondary">
                    {p.strPropType}
                  </Typography>
                  <Typography variant="body2">
                    {p.city}, {p.trState}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Properties;
