import React from "react";
import { Stack, Typography } from "@mui/material";
import { CategoriesList } from "../CategoriesList";

const CategoriesContainer = () => {
  return (
    <section>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mt={3}
      >
        <Typography variant="h6" component="h4">
          Categorias
        </Typography>
      </Stack>
      <CategoriesList />
    </section>
  );
};

export { CategoriesContainer };
