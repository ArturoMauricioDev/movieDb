import React from "react";
import { Stack, Typography } from "@mui/material";
import { CarouselRatio } from "../CarouselRatio";

const TrendingPreview = () => {
  return (
    <section>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mt={3}
      >
        <Typography variant="h6" component="h4">
          Tendencias
        </Typography>
        <Typography variant="button text">Ver más</Typography>
      </Stack>
      <CarouselRatio />
    </section>
  );
};

export { TrendingPreview };
