import {
  EditOutlined,
  DeleteOutlined,
  AttachFileOutlined,
  GifBoxOutlined,
  ImageOutlined,
  MicOutlined,
  MoreHorizOutlined,
} from "@mui/icons-material";
import DatePicker from "react-datepicker";
import {
  Box,
  Divider,
  Typography,
  InputBase,
  useTheme,
  Button,
  IconButton,
  useMediaQuery,
  MenuItem,
  NativeSelect,
} from "@mui/material";

import FlexBetween from "../../components/FlexBetween";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEvents } from "../../state";
import WidgetWrapper from "../../components/WidgetWrapper";
import { orange } from "@mui/material/colors";

const AddEventWidget = ({ userId }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");

  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [cat, setCat] = useState("");
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const handleEvent = async () => {
    const formData = new FormData();
    formData.append("userId", _id);
    formData.append("Title", title);
    formData.append("Description", desc);
    formData.append("Category", cat);
    formData.append("Priority", priority);
    formData.append("Status", status);
    const response = await fetch(
      `http://localhost:3001/events/${userId}/myevents`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      }
    );
    const events = await response.json();
    dispatch(setEvents({ events }));
    setTitle("");
    setDesc("");
    setCat("");
    setPriority("");
    setStatus("");
  };
  return (
    <WidgetWrapper sx={{ border: "2px solid #e1ffff80", boxShadow: 5 }}>
      <FlexBetween gap="1.5rem">
        <InputBase
          placeholder="Enter the TITLE"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          sx={{
            width: "100%",
            background: "transparent",
            borderRadius: "2rem",
            padding: "1rem 2rem",
            boxShadow: "3",
            color: "white",
            margin: "0.5rem 0",
          }}
        />
      </FlexBetween>
      <FlexBetween gap="1.5rem">
        <InputBase
          placeholder="Enter the description.."
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
          rows={2}
          maxRows={4}
          sx={{
            width: "100%",
            background: "transparent",
            borderRadius: "2rem",
            padding: "1rem 2rem",
            boxShadow: "3",
            color: "white",
            borderBottom: "2px white",
            margin: "0.5rem 0",
          }}
        />
      </FlexBetween>
      <FlexBetween gap="1.5rem">
        <InputBase
          placeholder="Enter the Category.."
          onChange={(e) => setCat(e.target.value)}
          value={cat}
          sx={{
            width: "100%",
            background: "transparent",
            borderRadius: "2rem",
            padding: "1rem 2rem",
            boxShadow: "3",
            color: "white",
            margin: "0.5rem 0",
          }}
        />
      </FlexBetween>
      {/* <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        minDate={new Date()}
        placeholderText="Select a date"
        style={{
          backgroundColor: "#F0F0F0",
          borderRadius: "8px",
          padding: "8px",
        }}
      /> */}
      <FlexBetween>
        <NativeSelect
          sx={{
            width: "100%",
            background: "transparent",
            borderRadius: "2rem",
            padding: "1rem 2rem",
            boxShadow: "3",
            color: "white",
            margin: "0.5rem 0",
          }}
          value={priority}
          onChange={(event) => setPriority(event.target.value)}
        >
          <option value="">Important</option>
          <option value="option1">V. Important</option>
          <option value="option2">Not so Important</option>
        </NativeSelect>
      </FlexBetween>
      <FlexBetween>
        <NativeSelect
          sx={{
            width: "100%",
            background: "transparent",
            borderRadius: "2rem",
            padding: "1rem 2rem",
            boxShadow: "3",
            color: "white",
            margin: "0.5rem 0",
          }}
          value={status}
          onChange={(event) => setStatus(event.target.value)}
        >
          <option value="">Pending</option>
          <option value="option1">On progress</option>
          <option value="option2">Completed</option>
        </NativeSelect>
      </FlexBetween>

      <Divider sx={{ margin: "1.25rem 0" }} />

      <FlexBetween>
        <Button
          // disabled={}
          onClick={handleEvent}
          sx={{
            width: "100%",
            color: "white",
            borderRadius: "3rem",
            border: "2px solid white",
            margin: "0.5rem 0",
          }}
        >
          POST
        </Button>
      </FlexBetween>
    </WidgetWrapper>
  );
};

export default AddEventWidget;
