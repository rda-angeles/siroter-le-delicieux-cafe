import React from "react";
import SectionTitle from "../UI/SectionTitle";
import TeamManagementCard from "../UI/TeamManagementCard";

export const TeamManagement = () => {
  return (
    <div className="py-[7rem]">
      <SectionTitle tagline={"meet our team"} titleText={"Team Management"} />

      <TeamManagementCard />
    </div>
  );
};
