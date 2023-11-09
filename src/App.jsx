import React from "react"
import { CssBaseline, Grid, Typography, Box, Button, TextField, Stack } from "@mui/material"
import { createTheme, ThemeProvider } from "@mui/material"
import bgDesktop from "./assets/images/illustration-sign-up-desktop.svg"
import ListItem from "./components/ListItem"

const theme = createTheme({
	palette: {
		background: { default: "rgba(54,56,77,255)" },
	},
})

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Grid container direction="row" justifyContent="center" sx={{ marginTop: "150px" }}>
				<Grid item container maxWidth="850px" height="100%" borderRadius={4} sx={{ padding: "20px", background: "white" }}>
					<Grid item container sm={12} md={6} direction="row" justifyContent="end" rowSpacing={1} alignItems={"center"} sx={{ padding: "40px" }}>
						<Stack direction="column" spacing={2}>
							<Typography variant="h3">Stay updated!</Typography>
							<Typography variant="body2">Join 60,000+ product managers receiving monthly updates on:</Typography>
							<Box>
								<ListItem>Product discovery and building what matters</ListItem>
								<ListItem>Measuring to ensure updates are a success</ListItem>
								<ListItem>And much more!</ListItem>
							</Box>
							<Box>
								<Typography variant="body2" sx={{ fontWeight: "bold", fontSize: "12px", marginBottom: "5px" }}>
									Email address
								</Typography>
								<TextField fullWidth variant="outlined" defaultValue="email@company.com" size="small" />
							</Box>
							<Button variant="contained" sx={{ fontSize: "12px", padding: "10px", textTransform: "none", background: "rgba(35,39,66,255)", "&:hover": { background: "rgba(255,104,64,255)" } }}>
								Subscribe to monthly newsletter
							</Button>
						</Stack>
					</Grid>
					<Grid item sm={12} md={6}>
						<Box component="img" src={bgDesktop} />
					</Grid>
				</Grid>
			</Grid>
		</ThemeProvider>
	)
}

export default App
