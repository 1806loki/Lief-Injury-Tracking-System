/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";

import male_front from "../../assets/male-front.png";
import male_back from "../../assets/male-back.png";

import "./Body.css";

const Body = ({ onBodyPartSelect }) => {
  const [color, setColor] = useState({
    Head: false,
    neck: false,
    chest: false,
    Abdomen: false,
    pelvis: false,
    Rt_Shoulder: false,
    Lt_Shoulder: false,
    Rt_Arm: false,
    Lt_arm: false,
    Rt_Elbow: false,
    Lt_Elbow: false,
    Rt_Forearm: false,
    Lt_Forearm: false,
    Rt_Wrist: false,
    Lt_Wrist: false,
    Rt_Hand: false,
    Lt_hand: false,
    Rt_Thigh: false,
    Lt_Thigh: false,
    Rt_Knee: false,
    Lt_Knee: false,
    Rt_Leg: false,
    Lt_Leg: false,
    Rt_Ankle: false,
    Lt_Ankle: false,
    Rt_Foot: false,
    Left_Foot: false,
    Bck_Head: false,
    Bck_Neck: false,
    Back: false,
    Loin: false,
    Buttocks: false,
    Bck_Rt_Shoulder: false,
    Bck_Lt_Shoulder: false,
    Bck_Rt_Arm: false,
    Bck_Lt_Arm: false,
    Bck_Rt_Elbow: false,
    Bck_Lt_Elbow: false,
    Bck_Rt_Forearm: false,
    Bck_Lt_Forearm: false,
    Bck_Rt_Wrist: false,
    Bck_Lt_Wrist: false,
    Back_Rt_Hand: false,
    Back_Lt_Hand: false,
    Bck_Rt_Hamstring: false,
    Bck_Lt_Hamstring: false,
    Bck_Rt_Knee: false,
    Bck_Lt_Knee: false,
    Bck_Lt_Calf: false,
    Bck_Rt_Calf: false,
    Bck_Rt_Ankle: false,
    Bck_Lt_Ankle: false,
  });

  const [selectedBodyParts, setSelectedBodyParts] = useState([]);
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    onBodyPartSelect(selectedBodyParts);
  }, [selectedBodyParts]);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const toggleBodyPartVisibility = (bodyPartId) => {
    setColor((prevState) => ({
      ...prevState,
      [bodyPartId]: !prevState[bodyPartId],
    }));

    if (!color[bodyPartId]) {
      setSelectedBodyParts((prevSelectedParts) => [
        ...prevSelectedParts,
        bodyPartId,
      ]);
    } else {
      setSelectedBodyParts((prevSelectedParts) =>
        prevSelectedParts.filter((partId) => partId !== bodyPartId)
      );
    }
  };

  return (
    <div className="body-report">
      <h2 style={{ textAlign: "center", fontSize: "20px" }}>
        Select The Injured parts
      </h2>

      <div className="container">
        <div className={`front ${toggle ? "Bodyhide" : ""}`}>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="800px"
            height="1360"
            viewBox="0 0 800 1360"
            xmlSpace="preserve"
            className="front"
          >
            <image
              overflow="visible"
              width="800"
              height="1360"
              xlinkHref={male_front}
            ></image>
            <path
              className={`body_parts ${color.Head ? "body_fill" : "null"}`}
              id="Head"
              stroke="#ff8080"
              vectorEffect="non-scaling-stroke"
              d="M456.334,107.667c-1.001,4.667-6.417,27.583-5.709,32.708c0.25,3.375-2.125,13-4.75,18.625c-9.208,14.333-24.041,23-45.708,23C378.5,182,359,162.667,356,158.667c-2.167-6.334-2.666-13.667-3.333-18.834c0-10-4.627-25.305-6.667-33c0.333-3.834-0.333-11.5-0.667-16.167s0.585-19.872,2.5-28.167c3-13,22.333-44.5,53.167-44.5c19,0,53.668,19,55.334,51C458,101,457.001,100.334,456.334,107.667z M337.833,105c-4,4-1.833,17-0.833,20.667s5.833,14.666,7.167,15.833c1.333,1.167,5.167,4.833,8.5-1.667c0-10-4.627-25.305-6.667-33C345,105.001,341.833,101,337.833,105z M450.625,140.375c3.75,6.375,8.875,3.25,10-1.75s7.625-7.875,6.75-23.625s-8.041-11.666-11.041-7.333C455.333,112.334,449.917,135.25,450.625,140.375z"
              fillOpacity="0"
              strokeOpacity="1"
              onClick={() => toggleBodyPartVisibility("Head")}
            ></path>
            <path
              className={`body_parts ${color.neck ? "body_fill" : ""}`}
              id="neck"
              stroke="#ff8080"
              vectorEffect="non-scaling-stroke"
              d="M345.667,243.167c15.667-0.833,41.167-2.166,45.333,3.667c4.167,5.833,15.834,6,19.667,0c3.833-6,38.028-6.245,50.833-4.333c4.95,0.739,9.833,0.81,14.438,0.363c10.976-1.066,20.373-5.078,25.342-10.017c-8.889,0.081-18.524-5.195-31.03-10.721C454.125,215,445.625,206.25,445,203.5s0.125-34.5,0.875-44.5c-9.208,14.333-24.041,23-45.708,23C378.5,182,359,162.667,356,158.667c2.167,6.333,1.5,29.833,0.75,45.333c-8.5,15.25-40,24-48,27.5c2.042,1.655,10.695,6.598,20.857,9.508C334.793,242.493,340.373,243.448,345.667,243.167z"
              fillOpacity="0"
              strokeOpacity="1"
              onClick={() => toggleBodyPartVisibility("neck")}
            ></path>
            <path
              className={`body_parts ${color.chest ? "body_fill" : ""}`}
              id="chest"
              vectorEffect="non-scaling-stroke"
              d="M524.5,294c-2.018-20.749-37.75-48.25-48.562-51.137c-4.605,0.447-9.488,0.376-14.438-0.363c-12.805-1.911-47-1.667-50.833,4.333c-3.833,6-15.5,5.833-19.667,0c-4.167-5.833-29.667-4.5-45.333-3.667c-5.294,0.281-10.873-0.674-16.059-2.159c-8.004,3.48-46.033,26.426-52.127,58.308c-0.46,2.402-0.744,4.852-0.814,7.351c-1,35.667,0.003,72.11-0.165,85.722c0.383-0.096,9.665,25.111,12.165,30.778c2.5,5.667,5.083,17.833,8.583,24.583C305.5,455.5,344,473,370.5,466s36.5-6.244,65,0.128c28.5,6.372,52.668-2.794,73.084-27.211c1.25-3.25,4.75-11.75,5.333-15s2.667-6.999,4.084-9.749c1.417-2.75,7.455-21.675,8.005-21.176C526.678,379.65,525.667,306.001,524.5,294z"
              fillOpacity="0"
              strokeOpacity="1"
              onClick={() => toggleBodyPartVisibility("chest")}
            ></path>
            <path
              className={`body_parts ${color.Abdomen ? "body_fill" : ""}`}
              id="Abdomen"
              stroke="#ff8080"
              vectorEffect="non-scaling-stroke"
              d="M435.5,466.128C407,459.756,397,459,370.5,466s-65-10.5-73.25-18.25c3.5,6.75,2,12,3.75,17.75s5,21.334,0.5,41.501c-4.5,20.167-1.667,35.666-0.5,40.166c0.785,3.029,2.326,5.001,1.419,8.814C314,567.5,332.834,590.5,402.917,590.5s86.417-20.498,98.75-33.499c-1.666-4.5-0.501-12,2.499-21.167s-3.499-44.667-3.833-52.833c-0.334-8.166,2.501-21.5,2.751-27.584c0.25-6.084,4.25-13.25,5.5-16.5C488.168,463.334,464,472.5,435.5,466.128z"
              fillOpacity="0"
              strokeOpacity="1"
              onClick={() => toggleBodyPartVisibility("Abdomen")}
            ></path>
            <path
              className={`body_parts ${color.pelvis ? "body_fill" : ""}`}
              id="pelvis"
              stroke="#ff8080"
              vectorEffect="non-scaling-stroke"
              d="M501.667,557.001C489.334,570.002,473,590.5,402.917,590.5s-88.917-23-100.498-34.52c-0.44,1.852-1.458,4.137-3.419,7.188c-2.708,4.214-5.009,15.491-6.673,27.332c10.34,9.027,56.211,47.94,84.084,82.636c7.636,9.505,13.921,18.693,17.755,26.864c1-2.167,2.75-2.833,6.833-3.167c4.083-0.334,5.75,0.834,6.917,1.584c3.8-7.69,10.229-16.519,18.101-25.734c28.214-33.03,74.964-71.046,85.649-79.515C510.667,579.502,503.333,561.501,501.667,557.001z"
              fillOpacity="0"
              strokeOpacity="1"
              onClick={() => toggleBodyPartVisibility("pelvis")}
            ></path>
            <path
              className={`body_parts ${color.Rt_Shoulder ? "body_fill" : ""}`}
              id="Rt_Shoulder"
              stroke="#ff8080"
              vectorEffect="non-scaling-stroke"
              d="M277.48,299.316c6.094-31.882,44.122-54.828,52.127-58.308c-10.162-2.91-18.816-7.852-20.857-9.508c-8,3.5-15.5,2-26.75,4.25S240.5,249,228.5,273.5s-9.5,57-9.25,65.75c0.034,1.202,0.012,2.258-0.058,3.222C232.058,327.083,262.9,323.345,277.48,299.316z"
              fillOpacity="0"
              strokeOpacity="1"
              onClick={() => toggleBodyPartVisibility("Rt_Shoulder")}
            ></path>
            <path
              className={`body_parts ${color.Lt_Shoulder ? "body_fill" : ""}`}
              id="Lt_Shoulder"
              stroke="#ff8080"
              vectorEffect="non-scaling-stroke"
              d="M524.5,294c13.5,30.001,46.022,30.211,58.595,48.44c-0.768-3.438-1.004-7.947-0.345-14.44c1.931-19.007-4.875-52.125-17.875-68.5s-53.125-26.75-63.595-26.654c-4.969,4.939-14.366,8.951-25.342,10.017C486.75,245.75,522.482,273.251,524.5,294z"
              fillOpacity="0"
              strokeOpacity="1"
              onClick={() => toggleBodyPartVisibility("Lt_Shoulder")}
            ></path>
            <path
              className={`body_parts ${color.Rt_Arm ? "body_fill" : ""}`}
              id="Rt_Arm"
              stroke="#ff8080"
              vectorEffect="non-scaling-stroke"
              d="M276.667,306.667c0.07-2.499,0.354-4.949,0.814-7.351c-14.58,24.029-45.423,27.768-58.288,43.156c-0.437,6.049-2.914,8.093-7.442,14.778C206.5,365,196.5,396.5,193,408.5c-0.507,1.738-0.896,3.229-1.221,4.551c-1.413,17.735,10.718,25.876,24.421,31.618c11.394,4.774,24.501,8.306,33.45,1.543c0.711-1.544,1.634-3.368,2.85-5.712c3.5-6.75,23.363-47.953,24.001-48.111C276.669,378.777,275.667,342.334,276.667,306.667z"
              fillOpacity="0"
              strokeOpacity="1"
              onClick={() => toggleBodyPartVisibility("Rt_Arm")}
            ></path>
            <path
              className={`body_parts ${color.Lt_arm ? "body_fill" : ""}`}
              id="Lt_arm"
              stroke="#ff8080"
              vectorEffect="non-scaling-stroke"
              d="M587.573,444.669c14.284-5.985,25.869-14.57,23.177-33.919c-1.625-11.25-17.875-51.25-22-57.25c-2.265-3.294-4.53-6.027-5.655-11.06C570.522,324.211,538,324.001,524.5,294c1.167,12.001,2.178,85.65,1.506,98.992c0.108,0.098,20.827,42.675,23.494,48.175C558.012,454.281,574.009,450.353,587.573,444.669z"
              fillOpacity="0"
              strokeOpacity="1"
              onClick={() => toggleBodyPartVisibility("Lt_arm")}
            ></path>
            <path
              className={`body_parts ${color.Rt_Elbow ? "body_fill" : ""}`}
              id="Rt_Elbow"
              stroke="#ff8080"
              vectorEffect="non-scaling-stroke"
              d="M216.2,444.669c-13.704-5.742-25.834-13.883-24.421-31.618c-1.917,7.803-1.51,9.506-8.779,18.699c-5.907,7.47-15.794,29.063-22.538,48.927c15.882-28.244,68.495,4.695,75.547,19.871c6.154-16.332,11.13-43.69,11.49-47.172c0.245-2.366,0.814-4.26,2.15-7.163C240.702,452.975,227.594,449.443,216.2,444.669z"
              fillOpacity="0"
              strokeOpacity="1"
              onClick={() => toggleBodyPartVisibility("Rt_Elbow")}
            ></path>
            <path
              className={`body_parts ${color.Lt_Elbow ? "body_fill" : ""}`}
              id="Lt_Elbow"
              stroke="#ff8080"
              vectorEffect="non-scaling-stroke"
              d="M644,484.25c-2.028-7.858-4.954-16.439-9.03-24.074c-4.97-9.31-16.414-30.066-17.72-32.176c-3.25-5.25-5.336-9.194-6.5-17.25c2.692,19.349-8.893,27.934-23.177,33.919c-13.564,5.684-29.562,9.612-38.073-3.502c2.667,5.5,7,11.333,7,17.333c0,1.363,1.692,13.781,4.385,25.353c2.187,9.397,5.372,18.235,6.115,20.147C565.5,491,629.5,447,644,484.25z"
              fillOpacity="0"
              strokeOpacity="1"
              onClick={() => toggleBodyPartVisibility("Lt_Elbow")}
            ></path>
            <path
              className={`body_parts ${color.Rt_Forearm ? "body_fill" : ""}`}
              id="Rt_Forearm"
              stroke="#ff8080"
              vectorEffect="non-scaling-stroke"
              d="M160.462,480.677c-2.96,8.722-5.318,17.111-6.462,23.823c-2.028,11.896-8.779,39.212-16.707,62.487c-1.735,5.094-3.563,9.992-5.337,14.495c1.722,9.015,32.508,23.476,42.632,18.606c1.457-2.714,2.764-5.01,3.745-6.587c4.667-7.5,11.917-19.251,24.917-35.251s25.5-39.75,32-55.75c0.255-0.629,0.508-1.285,0.76-1.953C228.957,485.372,176.345,452.433,160.462,480.677z"
              fillOpacity="0"
              strokeOpacity="1"
              onClick={() => toggleBodyPartVisibility("Rt_Forearm")}
            ></path>
            <path
              className={`body_parts ${color.Lt_Forearm ? "body_fill" : ""}`}
              id="Lt_Forearm"
              stroke="#ff8080"
              vectorEffect="non-scaling-stroke"
              d="M670.833,580.06c-2.89-7.643-5.898-16.096-8.083-21.56c-4-10-12.75-51-18.75-74.25C629.5,447,565.5,491,567,504c7,18,35.75,60.25,40.375,65.875s16.49,23.007,19.5,28.25C633.414,608.279,672.667,589.667,670.833,580.06z"
              fillOpacity="0"
              strokeOpacity="1"
              onClick={() => toggleBodyPartVisibility("Lt_Forearm")}
            ></path>
            <path
              className={`body_parts ${color.Rt_Wrist ? "body_fill" : ""}`}
              id="Rt_Wrist"
              stroke="#ff8080"
              vectorEffect="non-scaling-stroke"
              d="M131.956,581.482c-5.112,12.975-9.775,22.651-10.456,24.143c-0.886,1.939-1.456,3.337-2.977,4.62c9.057,0.416,28.988,8.686,43.015,19.44c2.127-7.809,8.37-20.88,13.05-29.598C164.464,604.958,133.678,590.497,131.956,581.482z"
              fillOpacity="0"
              strokeOpacity="1"
              onClick={() => toggleBodyPartVisibility("Rt_Wrist")}
            ></path>
            <path
              className={`body_parts ${color.Lt_Wrist ? "body_fill" : ""}`}
              id="Lt_Wrist"
              stroke="#ff8080"
              vectorEffect="non-scaling-stroke"
              d="M686.75,610.25c-8.5-4-5.75-8.25-9.5-15c-1.7-3.061-4.019-8.847-6.417-15.19c1.834,9.607-37.419,28.219-43.958,18.065c1.544,2.69,5.188,10.481,8.506,17.668c3.15,6.824,6.007,13.104,6.494,13.957C656.75,617.834,678.333,609.666,686.75,610.25z"
              fillOpacity="0"
              strokeOpacity="1"
              onClick={() => toggleBodyPartVisibility("Lt_Wrist")}
            ></path>
            <path
              className={`body_parts ${color.Rt_Hand ? "body_fill" : ""}`}
              id="Rt_Hand"
              stroke="#ff8080"
              vectorEffect="non-scaling-stroke"
              d="M160.833,633.167c0.096-0.975,0.344-2.156,0.705-3.482c-14.027-10.755-33.958-19.024-43.015-19.44c-1.911,1.612-5.326,3.042-12.773,5.13c-1.854,0.519-3.833,1.291-5.874,2.231c-12.688,5.84-27.892,18.435-31.876,21.019c-4.625,3-7.75,8.375-11.875,10.5s-4.125,8.625,0,10.5s9.625,0.125,13-1.5s9.042-8.457,15.5-10.5c3.788-1.198,7.625-1.5,7.625,0.125s-8.5,22.375-9.125,25.5s-3.875,13.875-5.875,21.125s-5.5,21.25-6.75,29.25s0.875,11.75,5.125,12.625s7.875-7.625,8.646-10.625c0.771-3,2.854-12.75,3.979-15.5s6.625-18.75,8-22s2.375-8.625,4.375-7.75s-0.375,5.875-1.75,9.75S91.75,714.875,91,718.75s-5,19.75-5.25,22.5s-1.875,8.75,2.75,10.5s7.75-1.875,9.5-5.625s5.375-17.625,7.375-26.125s5.75-19.5,7.125-24s2.125-8,3.875-7.875s1.5,2.5,0.75,4.75S111,713.5,110,718.5s-4.25,16.125-5.375,20.375s-1.75,9.25,2.5,10.75s6.875-1.5,8.75-4.75s7.875-21.5,9.369-27.125c1.494-5.625,4.756-18.5,6.131-22.375s2.5-5.625,3.625-5.5s0.25,2.625-1.125,7s-5.375,18.5-7.125,25s-2.25,9.625,0,12s7.083-0.541,8.25-2.541s3-11,5.667-16.333c1.676-3.352,3.669-11.246,6.53-19.381c1.691-4.808,4.336-9.699,5.636-13.786c0.352-1.106,0.67-2.172,0.973-3.219c2.707-9.367,3.628-16.586,6.027-25.281C162.5,643.667,160,641.667,160.833,633.167z"
              fillOpacity="0"
              strokeOpacity="1"
              onClick={() => toggleBodyPartVisibility("Rt_Hand")}
            ></path>
            <path
              className={`body_parts ${color.Lt_hand ? "body_fill" : ""}`}
              id="Lt_hand"
              stroke="#ff8080"
              vectorEffect="non-scaling-stroke"
              d="M740.25,640.25c-2.75-3.75-17.5-11.5-21.75-14.5c-2.125-1.5-7.938-4.375-14.281-7.375c-6.344-3-13.219-6.125-17.469-8.125c-8.417-0.584-30,7.584-44.875,19.5c1,1.75-0.875,7.125,0.125,16.25s4.125,23.25,6.375,32.125s7,18.375,8.5,22.875s9.403,29.364,12.625,32c2.75,2.25,7.5,0.75,8.25-2.75s-1.625-10.875-2.5-14.125s-5.625-19.25-6.5-21.75s-2-5.125-0.25-5.125s2.125,2.75,3.25,5.625s5.875,19.5,6.875,24.125s4.5,17,6.25,21.75s5,10,9,9.75s4.875-4.75,5.125-8.375s-5.875-23.5-6.375-27.625s-5.375-19.25-6.125-21.25s-1.375-5,0.625-5.125s2.875,5.625,3.75,8.625s9.75,31.875,10.25,35.5s2.625,14.5,6,17.75c2.744,2.643,5.625,3.875,8.625,0.875s2.25-10,0.875-15.25s-4.625-21.125-5.5-25s-6.375-20.875-7.25-24s-2.125-5.375-1.125-5.75s2.25,1.125,3.5,5.25s6.625,20.5,8.375,25.5s1.5,11.625,4.125,17.375s7,7.625,10.625,7.125s4.277-7.391,4.375-10.125c0.098-2.734-4.75-20.5-6.25-27.375s-5.25-16.625-6.5-23s-7.375-23.375-8.625-26s-0.625-4.75,2.5-3.875s9.25,2.625,13,7.625s10.875,6.75,13.375,7s8.5,0.375,9.25-6.375S743,644,740.25,640.25z"
              fillOpacity="0"
              strokeOpacity="1"
              onClick={() => toggleBodyPartVisibility("Lt_hand")}
            ></path>
            <path
              className={`body_parts ${color.Rt_Thigh ? "body_fill" : ""}`}
              id="Rt_Thigh  "
              stroke="#ff8080"
              vectorEffect="non-scaling-stroke"
              d="M292.327,590.5c-2.021,14.389-3.102,29.611-2.827,34c0.5,8-6.5,46-11.5,70c-3.981,19.107-12.131,56.915-14.376,92.477c-0.575,9.106,0.172,18.064,0.376,26.523c0.845,35.062,9.541,55.489,16.139,69.427c35.654,13.2,53.799,56.767,88.484,34.358c2.478-11.204,8.03-39.965,9.627-52.285c1.75-13.5,10.083-66.333,11.815-88.167c1.732-21.834,1.269-38.833,0.435-43.166s-0.167-12.667-0.417-21.334s3.083-10.166,4.083-12.333c-3.835-8.171-10.12-17.359-17.755-26.864C348.538,638.44,302.667,599.527,292.327,590.5z"
              fillOpacity="0"
              strokeOpacity="1"
              onClick={() => toggleBodyPartVisibility("Rt_Thigh")}
            ></path>
            <path
              className={`body_parts ${color.Lt_Thigh ? "body_fill" : ""}`}
              id="Lt_Thigh"
              stroke="#ff8080"
              vectorEffect="non-scaling-stroke"
              d="M426.018,672.683c-7.872,9.216-14.301,18.044-18.101,25.734c1.167,0.75,3.083,5.083,4.333,8.083s1,20.75-0.25,31.5s1.5,59.75,3.75,71s8.417,55.334,10.084,67.001c1.667,11.667,5.166,31.5,7.166,39.833c36.334,25.833,52.478-20.023,89.334-33.168c5.667-10,13.999-27.333,15.999-52.333c0.874-10.926,1.602-27.168,0.824-43.078c-1.002-20.493-3.844-40.436-5.157-47.754c-2.333-13-14.834-82.834-17-92.667s-4.333-40-5.333-53.666C500.981,601.637,454.231,639.652,426.018,672.683z"
              fillOpacity="0"
              strokeOpacity="1"
              onClick={() => toggleBodyPartVisibility("Lt_Thigh")}
            ></path>
            <path
              className={`body_parts ${color.Rt_Knee ? "body_fill" : ""}`}
              id="Rt_Knee"
              stroke="#ff8080"
              vectorEffect="non-scaling-stroke"
              d="M280.139,882.927c1.212,2.56,2.353,4.901,3.361,7.073c6.5,14,6,37.5,6.5,61c0.078,3.657,0.262,7.679,0.348,11.921c10.591,44.449,51.024,21.223,68.904,3.938c0.325-1.35,0.929-2.658,1.373-3.483c0.875-1.625,2.125-10.625,3.375-16.625s2-18.5,4-26.75c0.175-0.721,0.386-1.643,0.623-2.715C333.938,939.693,315.793,896.127,280.139,882.927z"
              fillOpacity="0"
              strokeOpacity="1"
              onClick={() => toggleBodyPartVisibility("Rt_Knee")}
            ></path>
            <path
              className={`body_parts ${color.Lt_Knee ? "body_fill" : ""}`}
              id="Lt_Knee"
              stroke="#ff8080"
              vectorEffect="non-scaling-stroke"
              d="M433,915.834c2,8.333,4.333,14.167,4.333,24s4,22.167,5.167,25c17.417,18.167,61,46.833,69.25-8.834c0-11.5,3.25-39.334,3.584-50.334c0.334-11,1.333-13,7-23C485.478,895.81,469.334,941.667,433,915.834z"
              fillOpacity="0"
              strokeOpacity="1"
              onClick={() => toggleBodyPartVisibility("Lt_Knee")}
            ></path>
            <path
              className={`body_parts ${color.Rt_Leg ? "body_fill" : ""}`}
              id="Rt_Leg"
              stroke="#ff8080"
              vectorEffect="non-scaling-stroke"
              d="M290.348,962.921c0.085,4.202,0.072,8.622-0.239,13.122c-1.393,20.15-4.799,41.913-4.109,52.957c1,16,4.5,62,7.5,83s6.875,83,7.125,87.5c0.06,1.082,0.008,2.26-0.107,3.478c6.992-11.484,36.463-9.869,44.754-6.101c-1.079-3.858-2.297-10.522-2.439-15.043c-0.167-5.333,7.5-47.167,8.333-58.333c0.833-11.166,3.667-29.5,4.333-33.333s5.75-17.168,9.5-25.918s3.5-20,2.5-27.25s-3.75-45.75-4.5-51.375s-2.25-13.125-3.5-15.125c-0.615-0.984-0.563-2.333-0.248-3.642C341.372,984.144,300.939,1007.37,290.348,962.921z"
              fillOpacity="0"
              strokeOpacity="1"
              onClick={() => toggleBodyPartVisibility("Rt_Leg")}
            ></path>
            <path
              className={`body_parts ${color.Lt_Leg ? "body_fill" : ""}`}
              id="Lt_Leg"
              stroke="#ff8080"
              vectorEffect="non-scaling-stroke"
              d="M442.5,964.834c1.167,2.833-1.25,16.416-4.25,33.916s-4.083,48.751-3.083,56.751s9.667,28.833,11.833,35s0.667,8.833,2,20.833s7.167,47.334,9,59s1.5,21-0.667,27.167C464,1193,500,1190.5,503.5,1206c-0.75-4.25-1.75-10-1-22.25s5-60.25,8.25-87.75s6.75-82,4.5-96.5s-3.5-32-3.5-43.5C503.5,1011.667,459.917,983.001,442.5,964.834z"
              fillOpacity="0"
              strokeOpacity="1"
              onClick={() => toggleBodyPartVisibility("Lt_Leg")}
            ></path>
            <path
              className={`body_parts ${color.Rt_Ankle ? "body_fill" : ""}`}
              id="Rt_Ankle"
              stroke="#ff8080"
              vectorEffect="non-scaling-stroke"
              d="M300.518,1202.978c-0.363,3.847-1.388,8.108-1.768,11.147c-0.5,4,2.125,8.625,1.375,15.875c-0.034,0.332-0.091,0.67-0.146,1.008c12.665-4.423,40.242,8.668,48.998,21.075c1.177-7.814,1.064-15.23-0.477-19.082c-1.667-4.166-2.167-7.167-0.833-12.5s-0.667-18.667-1.833-21.834c-0.178-0.482-0.368-1.097-0.561-1.79C336.981,1193.108,307.51,1191.493,300.518,1202.978z"
              fillOpacity="0"
              strokeOpacity="1"
              onClick={() => toggleBodyPartVisibility("Rt_Ankle")}
            ></path>
            <path
              className={`body_parts ${color.Lt_Ankle ? "body_fill" : ""}`}
              id="Lt_Ankle"
              stroke="#ff8080"
              vectorEffect="non-scaling-stroke"
              d="M457.333,1197.501c-2.167,6.167-3.166,21-2.666,22.667s0.833,9.333-1,13.499c-1.833,4.166-1.667,13.334-0.667,21.5c6-13.583,37-29.917,50-23.667c-2-5.5-2.25-5.75-1-9.25s2.25-12,1.5-16.25C500,1190.5,464,1193,457.333,1197.501z"
              fillOpacity="0"
              strokeOpacity="1"
              onClick={() => toggleBodyPartVisibility("Lt_Ankle")}
            ></path>
            <path
              className={`body_parts ${color.Rt_Foot ? "body_fill" : ""}`}
              id="Rt_Foot"
              stroke="#ff8080"
              vectorEffect="non-scaling-stroke"
              d="M299.979,1231.008c-1.15,7.047-6.68,15.393-10.854,23.742c-4.375,8.75-13,19.375-21,28.25c-2.286,2.536-4.111,5.777-5.548,9.185c-3.593,8.519-4.755,18.083-4.577,20.315c0.25,3.125,3.125,5.875,6.125,5.5c0,1.125,1,2.875,4.25,2.5c0.25,2,0,6.25,8.25,5c4,4.875,7.875,4.625,10.75,1.75c5.292,6.314,10.383,6.492,15.75,5.809c4.375-0.558,11.125-7.809,12.25-10.559s2.25-3.875,5.875-6.75c1.972-1.563,3.795-4.086,5.156-8.824c0.683-2.376,1.247-5.519,1.657-8.232c0.275-1.824,0.481-3.456,0.604-4.525c0.667-5.833,0.667-10.834,4.5-21.334c8.667-3.667,14-10.333,15.5-18.833c0.113-0.642,0.215-1.28,0.311-1.918C340.221,1239.676,312.645,1226.585,299.979,1231.008z"
              fillOpacity="0"
              strokeOpacity="1"
              onClick={() => toggleBodyPartVisibility("Rt_Foot")}
            ></path>
            <path
              className={`body_parts ${color.Left_Foot ? "body_fill" : ""}`}
              id="Left_Foot"
              stroke="#ff8080"
              vectorEffect="non-scaling-stroke"
              d="M541.166,1292.167c-1.167-4.167-9.666-14.833-16.333-21.833s-7.833-11.333-12.5-18.667C507.666,1244.333,505,1237,503,1231.5c-13-6.25-44,10.084-50,23.667c1,8.166,12,15,15,16.5s3,4.167,3.833,7c0.833,2.833,2.834,10.667,3.834,21s6.25,15.749,8.666,17.666c2.416,1.917,2.834,3,3.667,4.667s3.417,6.083,11.167,9.75s14.999-1.167,16.749-4.75c4.5,4.5,11.084,0.416,12.25-2.084c4.916,1.416,7.834-3.25,7.917-5.166c1.583,0.334,3.584-1.082,4.25-2.582c0.833,0.334,2.5,0.666,5-3.334S542.333,1296.334,541.166,1292.167z"
              fillOpacity="0"
              strokeOpacity="1"
              onClick={() => toggleBodyPartVisibility("Left_Foot")}
            ></path>
            <path
              className="go_bck go_bck_frontback"
              vectorEffect="non-scaling-stroke"
              fill="transparent"
              d="M779,1329H599v-270h180V1329z"
              onClick={handleToggle}
            ></path>
          </svg>
        </div>
        <div className={`back ${!toggle ? "Bodyhide" : "null"}`}>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="800px"
            height="1360"
            viewBox="0 0 800 1360"
            xmlSpace="preserve"
          >
            <image
              overflow="visible"
              width="800"
              height="1360"
              xlinkHref={male_back}
            ></image>
            <path
              id="Bck_Head"
              fill="red"
              stroke="#ff8080"
              vectorEffect="non-scaling-stroke"
              d="M450.806,154.076c3.058-18.988,9.442-66.107,10.527-83.743C462.666,48.667,432.333,15,400,15c-27.334,0-58.5,32-58,52.667c0.19,7.875,2,33,2.333,36.333c0.239,2.389,4.332,32.016,7.459,49.645C362,174.667,440.611,174.486,450.806,154.076z"
              fillOpacity="0"
              strokeOpacity="1"
              cursor="pointer"
              className={`body_parts ${color.Bck_Head ? "body_fill" : "null"}`}
              onClick={() => toggleBodyPartVisibility("Bck_Head")}
            ></path>
            <path
              id="Bck_Neck"
              fill="#FF0000"
              stroke="#ff8080"
              vectorEffect="non-scaling-stroke"
              d="M497.833,226c-28-9.5-48.999-27.333-49.999-29.5s0.166-30.667,1.5-34.5c0.248-0.713,0.773-3.584,1.472-7.924c-10.194,20.41-88.806,20.59-99.013-0.432c1.235,6.962,2.32,12.053,2.957,12.855c1.555,1.958,2.93,28.364,0.5,31.5c-7.805,10.073-31.475,20.792-49.208,27.5C327.75,219.5,479.908,222.22,497.833,226z"
              fillOpacity="0"
              strokeOpacity="1"
              cursor="pointer"
              className={`body_parts ${color.Bck_Neck ? "body_fill" : "null"}`}
              onClick={() => toggleBodyPartVisibility("Bck_Neck")}
            ></path>
            <path
              id="Back"
              fill="#FF0000"
              stroke="#ff8080"
              vectorEffect="non-scaling-stroke"
              d="M539,351c2.836-16.7,6.265-36.969,4.098-48.71c-0.126-0.68-0.267-1.336-0.431-1.956c-3-11.333-7.667-52-44.834-74.333c-17.925-3.78-170.083-6.5-191.792-0.5c-39.458,21.5-44.542,68.75-45.542,74.5s0.5,26.25,2.25,36.75s8.25,29.583,4.625,66.375c1.125,0,1.5,3.5,1.875,6.125s4.25,16.75,9.25,23s9.25,25,13.25,32.5c4.468,5.507,41.373,10.639,83.746,11.485c9.657,0.193,19.599-1.733,29.504-1.776c9.978-0.044,19.919,1.793,29.499,1.512c39.579-1.163,72.98-6.345,77.196-11.47c2.613-5.708,6.414-14.637,7.473-18.167c1.5-5,2.666-9.167,4.833-12.667s7.833-18.083,8.666-21.083s2.167-9.417,3.334-9.5C535,387.667,536,368.667,539,351z"
              fillOpacity="0"
              strokeOpacity="1"
              cursor="pointer"
              className={`body_parts ${color.Back ? "body_fill" : "null"}`}
              onClick={() => toggleBodyPartVisibility("Back")}
            ></path>
            <path
              id="Loin"
              fill="#FF0000"
              stroke="#ff8080"
              vectorEffect="non-scaling-stroke"
              d="M434.499,475.97c-9.58,0.281-19.521-1.556-29.499-1.512c-9.906,0.043-19.847,1.969-29.504,1.776c-42.373-0.846-79.277-5.978-83.746-11.485c4,7.5,6.5,19,8.5,37.75s-2.25,32-3.25,37.75s-0.227,23.88,1.25,28c1.412,3.939,3.607,9.041-0.422,15.812c6.278-9.18,30.556-16.657,56.643-16.657c29.53,0,31.03,10.279,51.53,10.279c19,0,26-10.042,51.526-10.166c25.239-0.123,43.853,7.19,48.38,16.593c-0.532-1.279-0.915-2.17-1.072-2.61c-0.834-2.333-1.166-6.167-0.333-8.167s2.667-12.833,2.833-19s-3.667-30-4.667-34.833s1.667-28.5,2.334-33.333s3-14.667,4.333-16.833c0.392-0.637,1.273-2.456,2.361-4.833C507.479,469.625,474.078,474.807,434.499,475.97z"
              fillOpacity="0"
              strokeOpacity="1"
              cursor="pointer"
              className={`body_parts ${color.Loin ? "body_fill" : "null"}`}
              onClick={() => toggleBodyPartVisibility("Loin")}
            ></path>
            <path
              id="Buttocks"
              fill="#FF0000"
              stroke="#ff8080"
              vectorEffect="non-scaling-stroke"
              d="M457.526,567.518C432,567.642,425,577.684,406,577.684c-20.5,0-22-10.279-51.53-10.279c-26.087,0-50.365,7.477-56.643,16.657c-0.185,0.311-0.366,0.62-0.578,0.938c-6,9-12,51.75-11.5,64s-2.5,24-4,32.5c0,19,7.324,25.063,15.316,37.142C317.76,749.914,355.235,772.904,389.5,739c2.75-2.875,6.75-8.875,7.75-11.625s2-3.25,4.375-3.25s3.75,1.125,4.25,2.875s3.792,8.5,7.292,11.334c37.774,39.903,74.878,12.96,94.414-18.404c8.533-13.701,14.134-14.93,14.134-38.43c-1.558-8.437-3.389-18.087-4.048-21.667c-1.167-6.333-0.5-24.333-2.666-42.667c-1.622-13.732-6.051-25.594-8.521-31.664c-0.206-0.505-0.397-0.97-0.573-1.393C501.379,574.708,482.766,567.395,457.526,567.518z"
              fillOpacity="0"
              strokeOpacity="1"
              cursor="pointer"
              className={`body_parts ${color.Buttocks ? "body_fill" : "null"}`}
              onClick={() => toggleBodyPartVisibility("Buttocks")}
            ></path>
            <path
              id="Bck_Rt_Shoulder"
              fill="#FF0000"
              stroke="#ff8080"
              vectorEffect="non-scaling-stroke"
              d="M542.667,300.333c0.164,0.62,0.305,1.276,0.431,1.956c16.05,17.076,38.94,31.042,53.412,43.878c-0.086-0.138-0.175-0.282-0.26-0.417C596.5,325.5,601,295,584,267.25S525.833,235.5,497.833,226C535,248.333,539.667,289,542.667,300.333z"
              fillOpacity="0"
              strokeOpacity="1"
              cursor="pointer"
              className={`body_parts ${
                color.Bck_Rt_Shoulder ? "body_fill" : "null"
              }`}
              onClick={() => toggleBodyPartVisibility("Bck_Rt_Shoulder")}
            ></path>
            <path
              id="Bck_Lt_Shoulder"
              fill="#FF0000"
              stroke="#ff8080"
              vectorEffect="non-scaling-stroke"
              d="M260.5,300c1-5.75,6.083-52.999,45.542-74.5c-8.126,3.074-15.006,5.307-18.542,6.25c-8.263,2.203-41.894,9.408-53.5,19.5c-17.25,15-26,35-27.5,62.75c-0.721,13.331,0,25.833,0,34.5C216.333,324.25,240.667,322.333,260.5,300z"
              fillOpacity="0"
              strokeOpacity="1"
              cursor="pointer"
              className={`body_parts ${
                color.Bck_Lt_Shoulder ? "body_fill" : "null"
              }`}
              onClick={() => toggleBodyPartVisibility("Bck_Lt_Shoulder")}
            ></path>
            <path
              id="Bck_Rt_Arm"
              fill="#FF0000"
              stroke="#ff8080"
              vectorEffect="non-scaling-stroke"
              d="M598.107,466.68c14.466-5.319,29.127-11.117,27.667-40.179c-2.005-7.583-4.833-13.009-8.024-28.751c-3.706-18.282-14.002-39.975-21.24-51.583c-14.472-12.836-37.362-26.802-53.412-43.878c2.167,11.742-1.262,32.011-4.098,48.71c-3,17.667-4,36.667-2.999,52.083C537.168,403,538.75,406,540,408.75c1.086,2.39,15.768,34.99,21.069,46.274C570.186,468.092,582.849,472.29,598.107,466.68z"
              fillOpacity="0"
              strokeOpacity="1"
              cursor="pointer"
              className={`body_parts ${
                color.Bck_Rt_Arm ? "body_fill" : "null"
              }`}
              onClick={() => toggleBodyPartVisibility("Bck_Rt_Arm")}
            ></path>
            <path
              id="Bck_Lt_Arm"
              fill="#FF0000"
              stroke="#ff8080"
              vectorEffect="non-scaling-stroke"
              d="M262.75,336.75c-1.75-10.5-3.25-31-2.25-36.75c-19.833,22.333-44.167,24.25-54,48.5c-6.833,10.667-18.25,33.75-20,44s-4.5,20-7.25,27.75c-3.98,34.526,10.693,40.75,26.143,46.43c16.538,6.08,29.232,0.639,38.288-15.131c1.1-2.171,2.2-4.311,3.152-6.215c3.5-7,16.417-34.458,17.292-37.333s2.125-4.875,3.25-4.875C271,366.333,264.5,347.25,262.75,336.75z"
              fillOpacity="0"
              strokeOpacity="1"
              cursor="pointer"
              className={`body_parts ${
                color.Bck_Lt_Arm ? "body_fill" : "null"
              }`}
              onClick={() => toggleBodyPartVisibility("Bck_Lt_Arm")}
            ></path>
            <path
              id="Bck_Rt_Elbow"
              fill="#FF0000"
              stroke="#ff8080"
              vectorEffect="non-scaling-stroke"
              d="M606.824,502.292c39.135-10.364,46.681,1.813,50.268,8.767c-0.215-1.377-0.413-2.655-0.592-3.809c-2.75-17.75-17.75-47-19.5-49.75s-8.25-16.5-10.25-26.75c-0.298-1.528-0.625-2.92-0.976-4.249c1.46,29.062-13.201,34.86-27.667,40.179c-15.259,5.61-27.922,1.412-37.038-11.656c0.798,1.699,1.386,2.92,1.681,3.476c2.25,4.25,2.25,4.75,2.177,7.75s2.823,14.25,4.073,19.5c1.179,4.95,0.139,15.905,7.558,38.93C579.114,512.447,597.768,504.69,606.824,502.292z"
              fillOpacity="0"
              strokeOpacity="1"
              cursor="pointer"
              className={`body_parts ${
                color.Bck_Rt_Elbow ? "body_fill" : "null"
              }`}
              onClick={() => toggleBodyPartVisibility("Bck_Rt_Elbow")}
            ></path>
            <path
              id="Bck_Lt_Elbow"
              fill="#FF0000"
              stroke="#ff8080"
              vectorEffect="non-scaling-stroke"
              d="M205.393,466.68c-15.45-5.68-30.124-11.904-26.143-46.43c-2.75,7.75-1.75,15.25-6.5,23.5s-0.75,6.5-9.75,20c-4.221,6.332-8.992,20.141-13.178,35.472c-1.258,4.606-2.463,9.351-3.584,14.07c3.399-5.935,6.601-22.609,50.438-11c10.714,2.837,31.865,11.173,26.897,27.549c2.671-7.794,4.745-15.229,6.308-21.617c2.547-10.41,3.739-18.036,3.953-19.891c0.5-4.333,0.833-7.333,1.5-9.333s2.167-9.833,2.333-13.167c0.122-2.427,3.069-8.474,6.014-14.285C234.625,467.319,221.931,472.76,205.393,466.68z"
              fillOpacity="0"
              strokeOpacity="1"
              cursor="pointer"
              className={`body_parts ${
                color.Bck_Lt_Elbow ? "body_fill" : "null"
              }`}
              onClick={() => toggleBodyPartVisibility("Bck_Lt_Elbow")}
            ></path>
            <path
              id="Bck_Rt_Forearm"
              fill="#FF0000"
              stroke="#ff8080"
              vectorEffect="non-scaling-stroke"
              d="M658.191,619.035c8.857-3.745,15.074-6.784,16.994-10.783c-1.959-5.819-4.01-12.795-5.436-20.252c-3.039-15.895-9.573-57.137-12.658-76.941c-3.587-6.955-11.133-19.131-50.268-8.767c-9.057,2.398-27.71,10.155-30.267,22.388c0.45,1.397,0.928,2.833,1.442,4.32c9,26,30,55.25,45.5,79.5c2.965,4.638,5.481,8.858,7.626,12.689C637.134,623.104,649.446,622.732,658.191,619.035z"
              fillOpacity="0"
              strokeOpacity="1"
              cursor="pointer"
              className={`body_parts ${
                color.Bck_Rt_Forearm ? "body_fill" : "null"
              }`}
              onClick={() => toggleBodyPartVisibility("Bck_Rt_Forearm")}
            ></path>
            <path
              id="Bck_Lt_Forearm"
              fill="#FF0000"
              stroke="#ff8080"
              vectorEffect="non-scaling-stroke"
              d="M196.676,502.292c-43.837-11.609-47.038,5.065-50.438,11c-3.104,13.064-5.568,25.943-6.738,35.208c-2.207,17.467-8.379,42.596-11.756,56.062c-0.875,6.021,6.182,9.66,17.564,14.473c11.004,4.653,23.67,4.044,26.295,0.232c10.117-17.065,26.772-37.525,39.896-61.517c4.95-9.049,8.926-18.728,12.073-27.909C228.541,513.465,207.39,505.129,196.676,502.292z"
              fillOpacity="0"
              strokeOpacity="1"
              cursor="pointer"
              className={`body_parts ${
                color.Bck_Lt_Forearm ? "body_fill" : "null"
              }`}
              onClick={() => toggleBodyPartVisibility("Bck_Lt_Forearm")}
            ></path>
            <path
              id="Bck_Rt_Wrist"
              fill="#FF0000"
              stroke="#ff8080"
              vectorEffect="non-scaling-stroke"
              d="M686,635.75c-3.5-0.5-4-8.25-5.25-12.25c-0.701-2.246-3.058-7.8-5.564-15.248c-1.92,3.999-8.137,7.038-16.994,10.783c-8.745,3.698-21.058,4.07-27.065,2.155c9.067,16.197,11.432,25.37,12.375,29.144c0.527,2.109,0.644,3.571,0.461,4.91c8.146-4.652,34.231-16.276,43.573-19.125C686.977,635.944,686.459,635.815,686,635.75z"
              fillOpacity="0"
              strokeOpacity="1"
              cursor="pointer"
              className={`body_parts ${
                color.Bck_Rt_Wrist ? "body_fill" : "null"
              }`}
              onClick={() => toggleBodyPartVisibility("Bck_Rt_Wrist")}
            ></path>
            <path
              id="Bck_Lt_Wrist"
              fill="#FF0000"
              stroke="#ff8080"
              vectorEffect="non-scaling-stroke"
              d="M145.309,619.035c-11.382-4.813-18.439-8.452-17.564-14.473c-1.215,4.844-2.068,8.179-2.244,9.105c-0.667,3.5-4.164,10.214-6.167,18.333c-0.375,1.692-2.811,3.547-5.5,4.5c3.667-0.75,44.577,18.365,45.167,20.5c-1-4-1.25-8,7-27c1.483-3.416,3.387-6.993,5.604-10.733C168.979,623.079,156.313,623.688,145.309,619.035z"
              fillOpacity="0"
              strokeOpacity="1"
              cursor="pointer"
              className={`body_parts ${
                color.Bck_Lt_Wrist ? "body_fill" : "null"
              }`}
              onClick={() => toggleBodyPartVisibility("Bck_Lt_Wrist")}
            ></path>
            <path
              id="Back_Rt_Hand"
              fill="#FF0000"
              stroke="#ff8080"
              vectorEffect="non-scaling-stroke"
              d="M724.001,661c-1.445-3.854-8-7.667-10.333-8.667S705.75,644.25,701,642.25c-4.127-1.738-9.761-4.982-13.465-6.132c-9.342,2.85-35.428,14.474-43.573,19.125c-0.222,1.623-0.882,3.065-1.795,5.257c-1.667,4-0.666,16.167,0.334,19.5c1,3.334,4.166,22.334,5.833,26s3,8.167,3.667,10.5s7.667,32,10.167,34.333s5.666,1.834,7-0.5s0.5-7.5,0-10.833s-1.667-9.833-2-12.5s-2.334-10.5-3.334-14.166c-1-3.667,1.334-3.668,3-1.5c1.666,2.166,3.334,8.666,4.167,11.833s3.5,16.166,4.333,20.666s2.834,17.667,5.834,20.834s5.666,3.333,8.166,1s1.167-7.333,0.834-10.167s-2.5-19.166-2.834-23s-3.833-14.334-4.666-20.5s2.666-1.834,3-0.5s4.166,14.833,4.666,18.333s3,15.667,3.5,22.667s3.667,13,4.834,14.5s6,2.167,7.5,0s1.166-5.667,1-9.333s-1.5-22.167-1.5-25.667s-4.5-19.834-5-23.5s1.333-1.834,2-0.166c0.667,1.666,4.999,19.166,5.833,22.833s1.166,7.333,1.833,12s3.833,9,6.333,10.333s5.5-1.166,6.5-3.833s-1.5-15.167-1.833-23.333s-1.5-11.334-2.167-14c-0.667-2.667-3-18.167-3.833-22.5c-0.833-4.334-6.666-19-7.666-21.834s4.166,0.5,5.666,2.833s7.5,5.5,10.5,5.333s5.667-1.667,6-5.333S726.001,666.333,724.001,661z"
              fillOpacity="0"
              strokeOpacity="1"
              cursor="pointer"
              className={`body_parts ${
                color.Back_Rt_Hand ? "body_fill" : "null"
              }`}
              onClick={() => toggleBodyPartVisibility("Back_Rt_Hand")}
            ></path>
            <path
              id="Back_Lt_Hand"
              fill="#FF0000"
              stroke="#ff8080"
              vectorEffect="non-scaling-stroke"
              d="M113.833,636.5c-3.168,1.123-14.167,7-17.833,8.5s-5.833,6.5-10.167,9s-8.333,6-9,8.833s-5.5,4.333-5.5,7.333s2,5.333,6.879,6s12.621-8,14.121-9.5s2.5,0.5,1.833,2.333s-5.667,15-6.833,19.834c-1.167,4.833-3.833,17-4.5,21s-3,20.999-3.333,23.999s-3.333,15,1.167,18.334s7.833-2.334,9.833-7.667s1.5-11.833,2.667-14.5s4.333-19,6.333-22.5s2.833,1.166,1.667,4.166S97.333,727.833,97.333,730s-1.833,14-2.5,18s-1.333,14,0,18.167s7.167,1.666,9-0.5s3.667-11.167,4.5-16.5s1-14.167,2.531-20s3.636-16.333,5.469-19.167s3.833,0.334,3.333,2.5s-2.333,9.5-4,16.333s-1.5,14.5-3,21.334s-3.167,12.333,0,15.833s6.5,0.833,8.5-1.667S125.5,751,126.833,742.5s4.667-21.166,5.833-25.166c1.167-4.001,3.5-7.834,5.333-7.5c1.833,0.333-0.167,6-1,9.166s-5,20.667-5.167,26.334s2.5,7.833,5.667,6.5s4.333-6,5-8.834s2.667-8.666,3.167-12s4.167-16.166,6.167-20.334c2-4.166,2.833-9.332,6.673-27.332C162.346,665.333,160,661,159,657C158.411,654.865,117.5,635.75,113.833,636.5z"
              fillOpacity="0"
              strokeOpacity="1"
              cursor="pointer"
              className={`body_parts ${
                color.Back_Lt_Hand ? "body_fill" : "null"
              }`}
              onClick={() => toggleBodyPartVisibility("Back_Lt_Hand")}
            ></path>
            <path
              id="Bck_Rt_Hamstring"
              fill="#FF0000"
              stroke="#ff8080"
              vectorEffect="non-scaling-stroke"
              d="M413.167,738.334C414,744.168,413.25,748.5,412,767s3.25,73.25,6.5,86.75s7,38,8.75,56.25c1.093,11.397,3.355,23.087,5.571,32.39c8.43,9.247,24.089,12.271,39.665,11.319c15.283-0.934,32.867-4.996,46.76-24.891c0.889-5.953,1.705-9.622,2.004-10.818c0.75-3,10.75-28,13.5-41.25s4.25-43.083,5.25-58.083s-4.499-54.001-5.833-61.667s-3.833-29.666-5.166-35.833s-4.334-21.667-4.834-25.667c-0.218-1.739-1.254-7.511-2.452-14c0,23.5-5.601,24.729-14.134,38.43C488.045,751.294,450.941,778.237,413.167,738.334z"
              fillOpacity="0"
              strokeOpacity="1"
              cursor="pointer"
              className={`body_parts ${
                color.Bck_Rt_Hamstring ? "body_fill" : "null"
              }`}
              onClick={() => toggleBodyPartVisibility("Bck_Rt_Hamstring")}
            ></path>
            <path
              id="Bck_Lt_Hamstring"
              fill="#FF0000"
              stroke="#ff8080"
              vectorEffect="non-scaling-stroke"
              d="M297.066,718.642c-7.993-12.078-15.316-18.142-15.316-37.142c-1.5,8.5-8.25,43-9.75,54s-3,14.5-7.25,46.75s-1.25,76,2.75,93.5S280.25,912,282.75,925c14.239,23.213,32.047,27.719,48.263,28.709c17.666,1.079,33.441-2.949,40.654-15.376c1.667-5.833,6-44.5,8.167-58s9.5-61.333,10.5-78.667s1-34.999,0.167-40.999s-1.625-16.292-1-21.667C355.235,772.904,317.76,749.914,297.066,718.642z"
              fillOpacity="0"
              strokeOpacity="1"
              cursor="pointer"
              className={`body_parts ${
                color.Bck_Lt_Hamstring ? "body_fill" : "null"
              }`}
              onClick={() => toggleBodyPartVisibility("Bck_Lt_Hamstring")}
            ></path>
            <path
              id="Bck_Rt_Knee"
              fill="#FF0000"
              stroke="#ff8080"
              vectorEffect="non-scaling-stroke"
              d="M472.486,953.709c-15.576,0.951-31.235-2.072-39.665-11.319c1.331,5.594,2.646,10.325,3.679,13.61c2.75,8.75,2.25,34.25,5.5,40.5c2.566,4.935,3.724,9.253,3.484,15.155c6.028-4.677,22.368-6.785,36.539-8.198c13.658-1.361,29.354,1.297,35.854,14.047c-1.023-13.899-1.763-29.888-1.628-46.754c0.15-18.787,1.655-32.959,2.996-41.932C505.354,948.713,487.77,952.775,472.486,953.709z"
              fillOpacity="0"
              strokeOpacity="1"
              cursor="pointer"
              className={`body_parts ${
                color.Bck_Rt_Knee ? "body_fill" : "null"
              }`}
              onClick={() => toggleBodyPartVisibility("Bck_Rt_Knee")}
            ></path>
            <path
              id="Bck_Lt_Knee"
              fill="#FF0000"
              stroke="#ff8080"
              vectorEffect="non-scaling-stroke"
              d="M331.013,953.709c-16.216-0.99-34.024-5.496-48.263-28.709c2.5,13,3.25,32.25,4.25,53.5c0.655,13.917-0.084,29.658-1.164,42.445c2.574-20.91,19.106-19.136,35.64-17.488c16.633,1.658,33.267,3.272,35.69,9.876c-1.167-5.5,0.667-11.167,3-16s3.167-17.833,4-28.833s5.833-24.334,7.5-30.167C364.455,950.76,348.679,954.788,331.013,953.709z"
              fillOpacity="0"
              strokeOpacity="1"
              cursor="pointer"
              className={`body_parts ${
                color.Bck_Lt_Knee ? "body_fill" : "null"
              }`}
              onClick={() => toggleBodyPartVisibility("Bck_Lt_Knee")}
            ></path>
            <path
              id="Bck_Lt_Calf"
              fill="#FF0000"
              stroke="#ff8080"
              vectorEffect="non-scaling-stroke"
              d="M482.023,1003.457c-14.171,1.413-30.511,3.521-36.539,8.198c-0.064,1.573-0.222,3.253-0.484,5.095c-1.25,8.75-7,65.25-7.5,84.75s7.5,36,10.5,40s3.75,15.5,4,21.75c0.127,3.173,1.801,16.722,3.811,30.928c5.639,7.736,15.869,11.903,25.566,11.521c11.76-0.464,25.933-3.604,30.46-12.624c0.124-3.28,0.258-6.378,0.413-9.074c0.75-13,4.75-46.75,7.5-74s3-44.75,1-62.25c-0.921-8.055-1.999-18.392-2.872-30.246C511.377,1004.754,495.682,1002.096,482.023,1003.457z"
              fillOpacity="0"
              strokeOpacity="1"
              cursor="pointer"
              className={`body_parts ${
                color.Bck_Lt_Calf ? "body_fill" : "null"
              }`}
              onClick={() => toggleBodyPartVisibility("Bck_Lt_Calf")}
            ></path>
            <path
              id="Bck_Rt_Calf"
              fill="#FF0000"
              stroke="#ff8080"
              vectorEffect="non-scaling-stroke"
              d="M321.476,1003.457c-16.533-1.647-33.065-3.422-35.64,17.488c-0.569,6.737-1.232,12.655-1.836,17.055c-1.75,12.75-5,46-2.5,60s8.75,70.5,9,91.75c2.411,11.598,18.52,15.432,31.624,15.948c13.165,0.52,23.325-2.338,25.624-16.146c1.52-12.183,2.896-25.104,3.086-31.552c0.333-11.333,8.333-24,12.833-37.334s0.5-46.666-1.167-65.5s-4.167-36.333-5.333-41.833C354.743,1006.729,338.109,1005.115,321.476,1003.457z"
              fillOpacity="0"
              strokeOpacity="1"
              cursor="pointer"
              className={`body_parts ${
                color.Bck_Rt_Calf ? "body_fill" : "null"
              }`}
              onClick={() => toggleBodyPartVisibility("Bck_Rt_Calf")}
            ></path>
            <path
              id="Bck_Rt_Ankle"
              fill="#FF0000"
              stroke="#ff8080"
              vectorEffect="non-scaling-stroke"
              d="M481.377,1205.698c-9.697,0.383-19.928-3.784-25.566-11.521c1.949,13.775,4.214,28.17,5.69,34.323c3,12.5,1,17.833-1.833,26.667s-2.334,14.333-1.334,21.999s0.667,17.5,0.5,24.5c-0.098,4.075-2.111,11.312-2.63,18.029c5.397-8.651,37.767-2.677,48.526,9.038c0.54-0.488,1.031-0.948,1.459-1.357c0.771-4.053,1.113-8.488,0.792-12.721c-0.999-13.15-1.991-21.145,2.987-33.769c-0.096-0.073-0.193-0.146-0.302-0.221C507.5,1279.167,508,1268,508,1259s1.25-24.25,2.25-32c0.793-6.143,1.114-21.391,1.587-33.926C507.31,1202.095,493.137,1205.234,481.377,1205.698z"
              fillOpacity="0"
              strokeOpacity="1"
              cursor="pointer"
              className={`body_parts ${
                color.Bck_Rt_Ankle ? "body_fill" : "null"
              }`}
              onClick={() => toggleBodyPartVisibility("Bck_Rt_Ankle")}
            ></path>
            <path
              id="Bck_Lt_Ankle"
              fill="#FF0000"
              stroke="#ff8080"
              vectorEffect="non-scaling-stroke"
              d="M322.124,1205.698c-13.104-0.517-29.212-4.351-31.624-15.948c0.25,21.25,4.125,51.5,4.25,58.125s-1.25,26.75-1,28.625s0.25,3.75-0.875,3.75c6.082,14.415,4.342,25.212,3.644,34.406c-0.388,5.104,0.181,9.513,1.315,14.177c10.5-13.499,47.957-20.15,48.229-7.491c-0.177-6.154-1.244-13.505-2.062-20.509c-1.5-12.834,1.833-27.333,2.167-31.167s-4.5-18.5-5.833-25.5s2.167-19.166,4.167-31.333c0.862-5.245,2.096-14.051,3.247-23.281C345.448,1203.36,335.289,1206.218,322.124,1205.698z"
              fillOpacity="0"
              strokeOpacity="1"
              cursor="pointer"
              className={`body_parts ${
                color.Bck_Lt_Ankle ? "body_fill" : "null"
              }`}
              onClick={() => toggleBodyPartVisibility("Bck_Lt_Ankle")}
            ></path>
            <path
              className="go_frt go_frt_frontback"
              fill="transparent"
              vectorEffect="non-scaling-stroke"
              d="M779,1329H599v-270h180V1329z"
              onClick={handleToggle}
            >
              <title>This is a blue triangle</title>
            </path>
          </svg>{" "}
        </div>
      </div>

      <p style={{ textAlign: "center", fontSize: "10px" }}>
        {!toggle ? "Click on the little Guy to see BackView" : "Click on the little Guy to see FrontView"  }
      </p>
    </div>
  );
};

export default Body;
