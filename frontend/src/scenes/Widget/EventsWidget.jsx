import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEvent, setEvents } from "../../state/index";
import EventWidget from "./EventWidget";

const EventsWidget = ({ userId }) => {
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

  useEffect(() => {
    getUserEvents();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {events ? (
        events.map(
          ({ _id, Title, Description, Category, Priority, Status }) => (
            <EventWidget
              key={_id}
              useId={userId}
              eventId={_id}
              Title={Title}
              description={Description}
              category={Category}
              Priority={Priority}
              Status={Status}
            />
          )
        )
      ) : (
        <p>No events found.</p>
      )}
    </>
  );
};

export default EventsWidget;
