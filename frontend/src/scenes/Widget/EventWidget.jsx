import {
  ChatBubbleOutlineOutlined,
  Description,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const EventWidget = ({ Title, description, category, Priority, Status }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const loggedInUserId = useSelector((state) => state.user._id);

  return (
    <WidgetWrapper>
      <Typography color="blue" sx={{ mt: "1rem" }}>
        {Title}
      </Typography>
      <Typography color="blue" sx={{ mt: "1rem" }}>
        {description}
      </Typography>
      <Typography color="blue" sx={{ mt: "1rem" }}>
        {category}
      </Typography>
      <Typography color="blue" sx={{ mt: "1rem" }}>
        {Priority}
      </Typography>
      <Typography color="blue" sx={{ mt: "1rem" }}>
        {Status}
      </Typography>
    </WidgetWrapper>
  );
};

export default EventWidget;
