import { useState } from "react";
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useMediaQuery,
} from "@mui/material";
import { Message, Notifications, Help, Menu, Close } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../state/index";
import FlexBetween from "../../components/FlexBetween";

const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const Name = `${user.name}`;

  return (
    <FlexBetween padding="1rem 6%" backgroundColor="transparent" boxShadow={3}>
      <FlexBetween gap="1.75rem">
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color="white"
          sx={{
            textShadow: "1px 2px gray",
            "&:hover": {
              color: "#e1ffff80",
              cursor: "pointer",
            },
          }}
        >
          Task Manager
        </Typography>
      </FlexBetween>
      {isNonMobileScreens ? (
        <FlexBetween gap="2rem">
          <Message sx={{ fontSize: "25px", color: "white" }} />
          <Notifications sx={{ fontSize: "25px", color: "white" }} />
          <Help sx={{ fontSize: "25px", color: "white" }} />
          <FormControl variant="standard" value={Name} sx={{ boxShadow: 5 }}>
            <Select
              value={Name}
              sx={{
                backgroundColor: "white",
                width: "150px",
                borderRadius: "0.25rem",
                p: "0.25rem 1rem",
                "& .MuiSvgIcon-root": {
                  pr: "0.25rem",
                  width: "3rem",
                },
                "& .MuiSelect-select:focus": {
                  backgroundColor: "white",
                },
              }}
              input={<InputBase />}
            >
              <MenuItem value={Name}>
                <Typography>{Name}</Typography>
              </MenuItem>
              <MenuItem onClick={() => dispatch(setLogout())}>Log Out</MenuItem>
            </Select>
          </FormControl>
        </FlexBetween>
      ) : (
        <IconButton
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
          sx={{ color: "white" }}
        >
          <Menu />
        </IconButton>
      )}

      {/* MOBILE NAV */}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="500px"
          minWidth="300px"
          boxShadow={5}
          sx={{
            background: "linear-gradient(to bottom, #742744 10%, #111C30 100%)",
          }}
        >
          {/* CLOSE ICON */}
          <Box
            display="flex"
            justifyContent="flex-end"
            p="1rem"
            sx={{ color: "white" }}
          >
            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
              sx={{ color: "white" }}
            >
              <Close />
            </IconButton>
          </Box>

          {/* MENU ITEMS */}
          <FlexBetween
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="3rem"
          >
            <Message sx={{ fontSize: "25px", color: "white" }} />
            <Notifications sx={{ fontSize: "25px", color: "white" }} />
            <Help sx={{ fontSize: "25px", color: "white" }} />
            <FormControl variant="standard" value={Name}>
              <Select
                value={Name}
                sx={{
                  background: "white",
                  width: "150px",
                  borderRadius: "0.25rem",
                  p: "0.25rem 1rem",
                  "& .MuiSvgIcon-root": {
                    pr: "0.25rem",
                    width: "3rem",
                  },
                  "& .MuiSelect-select:focus": {
                    backgroundColor: "white",
                  },
                }}
                input={<InputBase />}
              >
                <MenuItem value={Name}>
                  <Typography>{Name}</Typography>
                </MenuItem>
                <MenuItem onClick={() => dispatch(setLogout())}>
                  Log Out
                </MenuItem>
              </Select>
            </FormControl>
          </FlexBetween>
        </Box>
      )}
    </FlexBetween>
  );
};
export default Navbar;
