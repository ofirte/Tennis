// UserAvatarPopover.js
import React, { useState } from "react";
import { useAuth } from "./AuthProvider"; // Adjust the path if needed
import Avatar from "@mui/material/Avatar";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

const UserAvatarPopover = () => {
  const { user, logout } = useAuth();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = !!anchorEl;
  const id = open ? "user-popover" : undefined;

  return (
    <Box display="flex" alignItems="center" justifyContent="flex-end">
      <IconButton onClick={handleClick}>
        <Avatar
          alt={user?.displayName || "User"}
          src={user?.photoURL || "/default-avatar.png"}
        />
      </IconButton>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
            padding: 2,
          }}
        >
          <Typography variant="subtitle1">{user?.displayName}</Typography>
          <Typography variant="subtitle1">{user?.email}</Typography>
          <Button variant="contained" onClick={logout} fullWidth>
            Logout
          </Button>
        </Box>
      </Popover>
    </Box>
  );
};

export default UserAvatarPopover;
