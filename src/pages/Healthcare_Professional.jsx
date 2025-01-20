import { useState } from "react";
import Layout from "./Layout";

export default function Healthcare_Professional() {
  const [experts, setExperts] = useState([
    {
      name: "Dr. Anita Sharma",
      Expertise: "Oncology",
      Location: "Mumbai",
      Availability: "Mon, Wed, Fri",
    },
    {
      name: "Rajesh Patel",
      Expertise: "Survivorship",
      Location: "Delhi",
      Availability: "Tue, Thu, Sat",
    },
    {
      name: "Dr. Priya Gupta",
      Expertise: "Palliative Care",
      Location: "Bangalore",
      Availability: "Mon-Fri",
    },
  ]);
  return (
    <Layout Member={experts} setMember={setExperts} store={"Professional"} />
  );
}
