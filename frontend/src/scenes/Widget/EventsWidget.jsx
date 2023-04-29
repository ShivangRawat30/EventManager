import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEvent } from "../../state/index";
import EventWidget from "./EventWidget";

const EventsWidget = ({ userId }) => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events);
  const token = useSelector((state) => state.token);

  const getUserEvents = async () => {
    const response = await fetch(
      `http://localhost:3001/events/${userId}/myevents`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    dispatch(setEvent({ events: data }));
  };

  useEffect(() => {
    getUserEvents();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {events.map(({ Title, Description, Category, Priority, Status }) => (
        <EventWidget
          eventUserId={userId}
          Title={Title}
          description={Description}
          category={Category}
          Priority={Priority}
          Status={Status}
        />
      ))}
    </>
  );
};

export default EventsWidget;
