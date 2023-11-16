/* eslint-disable react/prop-types */
// GraphContextProvider.js
import { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const GraphContext = createContext();

export const useGraphContext = () => {
  return useContext(GraphContext);
};

const GraphContextProvider = ({ children }) => {
  const [categoryCounts, setCategoryCounts] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/injuryReport"
        );
        const incidents = response.data;
        const counts = categorizeInjuredParts(incidents);
        setCategoryCounts(counts);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const categorizeInjuredParts = (incidents) => {
     
    const categories = {
      Head: ["Head", "Bck_Head", "neck"],
      Chest: ["chest"],
      Back: [
        "Back",
        "Bck_Neck",
        "Bck_Rt_Shoulder",
        "Bck_Lt_Shoulder",
        "Bck_Rt_Arm",
        "Bck_Lt_Arm",
        "Bck_Rt_Elbow",
        "Bck_Lt_Elbow",
        "Bck_Rt_Forearm",
        "Bck_Lt_Forearm",
        "Bck_Rt_Wrist",
        "Bck_Lt_Wrist",
        "Back_Rt_Hand",
        "Back_Lt_Hand",
        "Bck_Rt_Hamstring",
        "Bck_Lt_Hamstring",
        "Bck_Rt_Knee",
        "Bck_Lt_Knee",
        "Bck_Lt_Calf",
        "Bck_Rt_Calf",
        "Bck_Rt_Ankle",
        "Bck_Lt_Ankle",
      ],
      Hands: [
        "Rt_Shoulder",
        "Lt_Shoulder",
        "Rt_Arm",
        "Lt_arm",
        "Rt_Elbow",
        "Lt_Elbow",
        "Rt_Forearm",
        "Lt_Forearm",
        "Rt_Wrist",
        "Lt_Wrist",
        "Rt_Hand",
        "Lt_hand",
        "Back_Rt_Hand",
        "Back_Lt_Hand",
      ],
      Legs: [
        "Rt_Thigh",
        "Lt_Thigh",
        "Rt_Knee",
        "Lt_Knee",
        "Rt_Leg",
        "Lt_Leg",
        "Rt_Ankle",
        "Lt_Ankle",
        "Rt_Foot",
        "Left_Foot",
      ],
      Abdomen: ["Abdomen"],
      Pelvis: ["pelvis","Buttocks"],
    };

    const counts = {};

    incidents.forEach((incident) => {
      incident.injuredParts.forEach((part) => {
        const category = Object.keys(categories).find((key) =>
          categories[key].includes(part)
        );
        if (category) {
          counts[category] = (counts[category] || 0) + 1;
        } else {
          console.log(`Unexpected body part: ${part}`);
        }
      });
    });

    return counts;
  };
 
  return (
    <GraphContext.Provider value={{ categoryCounts }}>
      {children}
    </GraphContext.Provider>
  );
};

export default GraphContextProvider;
