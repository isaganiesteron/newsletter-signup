import React from "react"
import { Stack, Box, Typography } from "@mui/material"
import listIcon from "../assets/images/icon-list.svg"

const ListItem = ({ children }) => {
	return (
		<Stack direction="row" sx={{ marginY: "5px" }}>
			<Box component="img" src={listIcon} width="15px;" sx={{ paddingRight: "12px;" }} />
			<Typography variant="body2" fontSize="13px">
				{children}
			</Typography>
		</Stack>
	)
}

export default ListItem
