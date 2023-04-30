import { Typography } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/WidgetWrapper";
import DeleteIcon from "@mui/icons-material/Delete";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { setEvents } from "../../state";

const EventWidget = ({
  userId,
  eventId,
  Title,
  description,
  category,
  Priority,
  Status,
}) => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events);
  const token = useSelector((state) => state.token);

  const getUserEvents = async () => {
    const response = await fetch(
      `https://task-manager-ten-silk.vercel.app/events/${userId}/myevents`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    console.log(data);
    if (Array.isArray(data)) {
      dispatch(setEvents({ events: data }));
    }
  };
  const DeleteEvent = async () => {
    await fetch(
      `https://task-manager-ten-silk.vercel.app/events/${eventId}/delete`,
      {
        method: "DELETE",
      }
    ).then((response) => {
      if (response.ok) {
        getUserEvents();
        window.location.reload();
      } else {
        alert("Failed to delete event");
      }
    });
    console.log(events);
  };
  useEffect(() => {
    console.log(events);
  }, [events]);
  return (
    <WidgetWrapper
      sx={{ border: "2px solid #e1ffff80", boxShadow: 5, margin: "1rem" }}
    >
      <FlexBetween gap="1.5rem">
        <Typography
          color="blue"
          sx={{
            width: "100%",
            background: "transparent",
            borderRadius: "2rem",
            padding: "1rem 2rem",
            boxShadow: "3",
            color: "white",
            margin: "0.5rem 0",
            display: "flex",
          }}
        >
          <Typography sx={{ color: "#e1ffff80", marginRight: "0.5rem" }}>
            Title:{" "}
          </Typography>
          {Title}
        </Typography>
      </FlexBetween>
      <FlexBetween gap="1.5rem">
        <Typography
          color="blue"
          sx={{
            width: "100%",
            background: "transparent",
            borderRadius: "2rem",
            padding: "1rem 2rem",
            boxShadow: "3",
            color: "white",
            margin: "0.5rem 0",
            display: "flex",
          }}
        >
          <Typography sx={{ color: "#e1ffff80", marginRight: "0.5rem" }}>
            Description:{" "}
          </Typography>
          {description}
        </Typography>
      </FlexBetween>
      <FlexBetween gap="1.5rem">
        <Typography
          color="blue"
          sx={{
            width: "100%",
            background: "transparent",
            borderRadius: "2rem",
            padding: "1rem 2rem",
            boxShadow: "3",
            color: "white",
            margin: "0.5rem 0",
            display: "flex",
          }}
        >
          <Typography sx={{ color: "#e1ffff80", marginRight: "0.5rem" }}>
            Category:{" "}
          </Typography>
          {category}
        </Typography>
      </FlexBetween>
      <FlexBetween gap="1.5rem">
        <Typography
          color="blue"
          sx={{
            width: "100%",
            background: "transparent",
            borderRadius: "2rem",
            padding: "1rem 2rem",
            boxShadow: "3",
            color: "white",
            margin: "0.5rem 0",
            display: "flex",
          }}
        >
          <Typography sx={{ color: "#e1ffff80", marginRight: "0.5rem" }}>
            Priority:{" "}
          </Typography>
          {Priority}
        </Typography>
      </FlexBetween>
      <FlexBetween gap="1.5rem">
        <Typography
          color="blue"
          sx={{
            width: "100%",
            background: "transparent",
            borderRadius: "2rem",
            padding: "1rem 2rem",
            boxShadow: "3",
            color: "white",
            margin: "0.5rem 0",
            display: "flex",
          }}
        >
          <Typography sx={{ color: "#e1ffff80", marginRight: "0.5rem" }}>
            Status:
          </Typography>
          {Status}
        </Typography>
        <DeleteIcon
          sx={{ color: "white", Cursor: "pointer" }}
          onClick={DeleteEvent}
        />
      </FlexBetween>
    </WidgetWrapper>
  );
};

export default EventWidget;
