// import React, { useState } from "react";

// const Tabs = ({ tabBtns, tabInitialActive }) => {
//   const [tabActive, setTabActive] = useState(tabBtns[0].btnName);

//   const activeTab = (tabActive) => {
//     setTabActive(tabActive);
//   };

//   return (
//     <div className="container mx-auto text-center mb-12 flex gap-5 flex-wrap justify-center">
//       {tabBtns.map((button) => (
//         <button
//           className={
//             tabActive === button.btnName
//               ? "tab-button tab-active"
//               : "tab-button"
//           }
//           key={button.id}
//           onClick={() => {
//             activeTab(button.btnName);
//           }}
//         >
//           <h3 className=""> {button.btnName}</h3>
//         </button>
//       ))}
//     </div>
//   );
// };

// export default Tabs;
