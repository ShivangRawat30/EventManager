import { Box, Typography, useMediaQuery } from "@mui/material";
import Form from "./Form";
import { useSelector } from "react-redux";

const LoginPage = () => {
  const { _id } = useSelector((state) => state.user || {});

  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box borderBottom="1px solid black">
      <Box width="100%" p="1rem 6%" textAlign="center">
        <Typography
          fontWeight="bold"
          fontSize="32px"
          color="white"
          textTransform="uppercase"
        >
          Task Manager
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "40%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        background="transparent"
        border="2px solid #e1ffff80"
        boxShadow="10"
        marginTop="10rem"
        position="relative"
        z-index="0"
        filter="blur(4)"
      >
        <Typography
          fontWeight="600"
          variant="h5"
          sx={{ mb: "1.5rem" }}
          color="white"
          textTransform="uppercase"
        >
          logIn or signUp....
        </Typography>
        <Form userId={_id} />
      </Box>
    </Box>
  );
};

export default LoginPage;
