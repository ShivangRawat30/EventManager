import { Divider, InputBase, Button, NativeSelect } from "@mui/material";

import FlexBetween from "../../components/FlexBetween";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEvents } from "../../state";
import WidgetWrapper from "../../components/WidgetWrapper";

const AddEventWidget = ({ userId }) => {
  const [priority, setPriority] = useState("imp");
  const [status, setStatus] = useState("pending");

  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [cat, setCat] = useState("");
  const { _id } = useSelector((state) => state.user);

  const token = useSelector((state) => state.token);

  const handleEvent = async () => {
    const formData = new FormData();
    formData.append("userId", _id);
    formData.append("Title", title);
    formData.append("Description", desc);
    formData.append("Category", cat);
    formData.append("Priority", priority);
    formData.append("Status", status);
    const response = await fetch(
      `https://task-manager-ten-silk.vercel.app/events/${userId}/newevent`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: new URLSearchParams(formData),
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
          onChange={(event) => setPriority(event.target.value)}
          value={priority}
        >
          <option value="imp">Important</option>
          <option value="very-imp">V. Important</option>
          <option value="not so important">Not so Important</option>
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
          onChange={(event) => setStatus(event.target.value)}
          value={status}
        >
          <option value="pending">Pending</option>
          <option value="in progress">On progress</option>
          <option value="completed">Completed</option>
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
