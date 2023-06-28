import { AppBar, Button, Container, Toolbar, Typography, Box } from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb';

const MyMenu = () => {
    return (
        <AppBar position="static">
            <Container>
                <Toolbar
                    sx={{
                        display: {xs:"none", md:"flex", mr:1},
                    }}
                >
                    <AdbIcon sx={{ display:"flex", mr:1 }} />
                    <Typography
                        variant="h5"
                        component="a"
                        href="/"
                        sx={{
                            textDecoration: "none",
                            color: "white",
                            fontFamily: "monospace",
                            letterSpacing: ".2rem",
                            fontWeight: "bold",

                        }}
                    >
                        CRUD - MUI - V0
                    </Typography>
                    
                    <Box
                        sx={{
                            display: "flex",
                            marginLeft: "auto",
                            justifyContent: "flex-end",
                        }}
                    >
                        <Button sx={{ color: "white", my: 2,}}>
                            Professores
                        </Button>
                        <Button sx={{ color: "white", my: 2,}}>
                            Alunos
                        </Button>
                        <Button sx={{ color: "white", my: 2,}}>
                            Sobre
                        </Button>
                    
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default MyMenu