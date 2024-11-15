import React from "react";
import Privacy from "../components/Privacy";
import JoinUs from "../components/JoinUs";
import ServiceSchedule from "../components/ServiceSchedule";
import Churchapp from "../components/Churchapp";

const PrivacyPage = () => (
  <div className="min-h-screen bg-white">
    <JoinUs />
    <Privacy />
    <ServiceSchedule />
    <Churchapp />
  </div>
);

export default PrivacyPage;
