import React from "react";

import { ourTeam } from "../../assets/data/teamManagement";
import { motion } from "framer-motion";

const TeamManagementCard = () => {
  return (
    <div className="container mx-auto grid place-items-center gap-10 lg:grid-cols-2 px-5 lg:px-0">
      {ourTeam.map((member) => (
        <div className="grid place-items-center xl:grid-cols-2 mb-10 max-w-3xl bg-c-primary py-10 rounded-lg">
          <div
            className="member-bg-img bg-img max-w-xs  rounded-full p-[9rem] shadow-md shadow-black"
            style={{
              backgroundImage: `url(${member.img})`,
            }}
          ></div>

          <div className="content">
            <h3 className="font-f-secondary text-[.9rem]  opacity-[.4] text-center xl:text-left">
              {member.role}
            </h3>
            <h2 className="text-4xl text-center xl:text-left mb-3">
              {member.memberName}
            </h2>

            <p className="text-justify mb-5">{member.desc}</p>

            <ul className="grid grid-cols-3 max-w-[6.5rem] place-items-center mx-auto xl:mx-0">
              {member.socials.map((social) => (
                <motion.li key={social.id} whileHover={{ y: "-10%" }}>
                  <a href={social.path} target="_blank">{social.icon}</a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamManagementCard;
