import { AppBar, Card, CardContent, CardMedia, Container, CssBaseline, Divider, Grid, Link, Toolbar, Typography } from "@mui/material"

function App() {

  return (
    <>
      <CssBaseline />

      <AppBar position={'sticky'}>
        <Toolbar sx={{gap: '1em'}}>
          <Typography component="h1" variant="h6">
            Dashboard
          </Typography>
          <Link color="inherit">Main page</Link>
          <Link color="inherit">Second page</Link>
        </Toolbar>
      </AppBar>

      <Container sx={{pt: '1em'}}>
        <Typography element="h2" variant="h3">Diipa daapa</Typography>
        <Typography element="p" variant="body1" mb="1em">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut sequi cum aperiam natus nostrum saepe. Est eveniet fuga ratione numquam neque aperiam beatae debitis minima? Rem minus ea odio commodi adipisci assumenda esse praesentium sit quam reprehenderit neque, fuga quos, ratione cum, vel iure perspiciatis provident? Enim, ex? Nihil, dignissimos.
        </Typography>
        <Divider />

        <Grid container gap={'1em'} mt="2em" mb="2em" justifyContent={"space-between"}>
          <Grid item>
            <Card sx={{width: '15em'}}>
              <CardMedia
                sx={{ height: '7em' }}
                image="https://placekitten.com/300/200" />
              <CardContent>
                <Typography element="h4" variant="h4">Lorem ipsum</Typography>
                <Typography element="p" variant="body1" mb="1em">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ut ullam.
                </Typography>
                <Typography element="p" variant="body2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit beatae ea ab dicta saepe magni, vitae voluptatem maxime eius cupiditate.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{width: '15em'}}>
              <CardMedia
                sx={{ height: '7em' }}
                image="https://placekitten.com/400/200" />
              <CardContent>
                <Typography element="h4" variant="h4">Lorem ipsum</Typography>
                <Typography element="p" variant="body1" mb="1em">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ipsum reiciendis aperiam!
                </Typography>
                <Typography element="p" variant="body2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit beatae ea ab dicta saepe magni, vitae voluptatem maxime eius cupiditate.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{width: '15em'}}>
              <CardMedia
                sx={{ height: '7em' }}
                image="https://placekitten.com/500/200" />
              <CardContent>
                <Typography element="h4" variant="h4">Lorem ipsum</Typography>
                <Typography element="p" variant="body1" mb="1em">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ut ullam. Minima ipsum reiciendis aperiam!
                </Typography>
                <Typography element="p" variant="body2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit beatae ea ab dicta saepe magni, vitae voluptatem maxime eius cupiditate.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default App
