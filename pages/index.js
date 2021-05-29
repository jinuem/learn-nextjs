import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First Meetup",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tripsavvy.com%2Fthmb%2FGKyG-p3qSCWFgl9d-YBF6sLRIrY%3D%2F5760x3840%2Ffilters%3Afill(auto%2C1)%2FGettyImages-559699279-58f4f3cb5f9b582c4dfb1b29.jpg&f=1&nofb=1",
    address: "paris, 5, 12343 paris city",
    description: "this is my first meetup",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tripsavvy.com%2Fthmb%2FGKyG-p3qSCWFgl9d-YBF6sLRIrY%3D%2F5760x3840%2Ffilters%3Afill(auto%2C1)%2FGettyImages-559699279-58f4f3cb5f9b582c4dfb1b29.jpg&f=1&nofb=1",
    address: "Second, 5, 12343 paris city",
    description: "this is my Second meetup",
  },
];
function HomePage(props) {
  //set State using React
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    //send http request and fetch data
    setTimeout(() => {
      setLoadedMeetups(DUMMY_MEETUPS);
    }, 1000);
  }, []);
  //loadedMeetups= state. Props.meetups is from props.
  return <MeetupList meetups={props.meetups}></MeetupList>;
}

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}
export default HomePage;
