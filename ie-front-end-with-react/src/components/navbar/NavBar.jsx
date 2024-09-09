import { useState } from 'react';
import { useStyles } from './styles'; // Suponiendo que 'styles' es un archivo local
import { Link as LinkBehavior } from 'react-router-dom';

export default function Navbar() {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <div className={classes.drawer}>
      <List>
        {['Home', 'Cursos', 'Usuarios', 'Más Información'].map((text) => (
          <ListItem
            button
            component={LinkBehavior}
            to={`/${normalizeText(text)}`}
            key={text}
          >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <img src={logoSena} alt="SENA Logo" className={classes.logo} />
        <Typography variant="h6" className={classes.title}>
          SERVICIO NACIONAL DE APRENDIZAJE SENA
        </Typography>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleDrawerToggle}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {['Home', 'Cursos', 'Usuarios', 'Más Información'].map((text) => (
            <Button
              color="inherit"
              component={LinkBehavior}
              to={`/${normalizeText(text)}`}
              key={text}
            >
              {text}
            </Button>
          ))}
        </Box>
      </Toolbar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}