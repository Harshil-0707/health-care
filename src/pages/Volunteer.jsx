import { useState } from "react";
import Layout from "./Layout";

export default function Volunteer() {
  const [volunteer, setVolunteer] = useState([
    {
      Location: "Mumbai",
      name: "Ananya Sharma",
      Expertise: "Oncology",
      Availability: "Mon, Wed, Fri",
    },
    {
      Location: "Delhi",
      name: "Rohan Verma",
      Expertise: "Survivorship",
      Availability: "Tue, Thu, Sat",
    },
    {
      name: "Priya Nair",
      Location: "Bangalore",
      Availability: "Mon-Fri",
      Expertise: "Palliative Care",
    },
  ]);
  return (
    <Layout Member={volunteer} setMember={setVolunteer} store={"Volunteer"} />
  );
}
