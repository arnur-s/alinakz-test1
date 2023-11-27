import { Grid, Paper, Typography } from "@mui/material";
import { DummySelect } from "./DummySelect";
import { ChartA } from "./charts/ChartA";

export const Dashboard = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        padding: "2.8572rem 2.2858rem",
        borderRadius: "20px",
        height: "100%",
      }}
    >
      <Grid container rowSpacing={4}>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="h2">График курса валют</Typography>
            </Grid>
            <Grid item xs={6}>
              <DummySelect name="Доллар" />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <ChartA />
        </Grid>

        <Grid item xs={12}>
          <Grid
            container
            columns={{ xs: 3, sm: 3, md: 12 }}
            columnSpacing={4}
            rowSpacing={4}
          >
            <Grid item xs={12} md={5}>
              <Grid container>
                <Grid item xs={9}>
                  <Typography variant="h2">Продажи по Казахстану</Typography>
                </Grid>
                <Grid item xs={3}>
                  <DummySelect name="за год" />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={5}>
              <Grid container>
                <Grid item xs={9}>
                  <Typography variant="h2">Статистика заявок</Typography>
                </Grid>
                <Grid item xs={3}>
                  <DummySelect name="за год" />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={2}>
              <Grid container>
                <Grid item xs={9}>
                  <Typography variant="h2">KPI</Typography>
                </Grid>
                <Grid item xs={3}>
                  <DummySelect name="за год" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};
