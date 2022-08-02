import React from "react";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import ParaglidingIcon from "@mui/icons-material/Paragliding";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import PanoramaPhotosphereIcon from "@mui/icons-material/PanoramaPhotosphere";
import { Grid, Typography } from "@mui/material";
const data = [
  {
    src: "https://images.unsplash.com/photo-1502657877623-f66bf489d236",
    title: "Night view",
  },
  {
    src: "https://images.unsplash.com/photo-1527549993586-dff825b37782",
    title: "Lake view",
  },
  {
    src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
    title: "Mountain view",
  },
];

const CategoriesList = () => {
  return (
    <Grid container spacing={2} mb={3}>
      <Grid container item xs={6} md={4} direction="row">
        <MilitaryTechIcon />
        <Typography ml={2} variant="body1">
          Acción
        </Typography>
      </Grid>
      <Grid container direction="row" item xs={6} md={4}>
        <ParaglidingIcon />
        <Typography ml={2} variant="body1">
          Aventura
        </Typography>
      </Grid>
      <Grid container direction="row" item xs={6} md={4}>
        <InsertEmoticonIcon />
        <Typography ml={2} variant="body1">
          Comedia
        </Typography>
      </Grid>
      <Grid container direction="row" item xs={6} md={4}>
        <FavoriteBorderIcon />
        <Typography ml={2} variant="body1">
          Romance
        </Typography>
      </Grid>
      <Grid container direction="row" item xs={6} md={4}>
        <MusicNoteIcon />
        <Typography ml={2} variant="body1">
          Musical
        </Typography>
      </Grid>
      <Grid container direction="row" item xs={6} md={4}>
        <PanoramaPhotosphereIcon />
        <Typography ml={2} variant="body1">
          Drama
        </Typography>
      </Grid>
    </Grid>
  );
};

export { CategoriesList };
