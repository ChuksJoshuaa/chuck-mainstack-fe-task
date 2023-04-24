import { FcGoogle } from "react-icons/fc";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

export const timeData = [
  "1 Day",
  "3 Days",
  "7 Days",
  "30 Days",
  "All Time",
  "Custom Date",
];

export const colorBg = (country) => {
  let color = "bg-[#599EEA]";

  if (country === "Germany") {
    color = "bg-[#844FF6]";
  }
  if (country === "Ghana") {
    color = "bg-[#0FB77A]";
  }
  if (country === "Finland") {
    color = "bg-[#FAB70A]";
  }
  if (country === "United Kingdom") {
    color = "bg-orange-300";
  }
  return color;
};

export const flagIcon = (country) => {
  let flag = "🇳🇬";

  if (country === "Germany") {
    flag = "🇩🇪";
  }
  if (country === "Ghana") {
    flag = "🇬🇭";
  }
  if (country === "Finland") {
    flag = "🇫🇮";
  }
  if (country === "United Kingdom") {
    flag = "🇬🇧";
  }
  return flag;
};

export const colorSourceBg = (source) => {
  let color = "bg-[#599EEA]";

  if (source === "instagram") {
    color = "bg-[#844FF6]";
  }
  if (source === "facebook") {
    color = "bg-[#0FB77A]";
  }
  if (source === "lindekin") {
    color = "bg-[#FAB70A]";
  }

  return color;
};

export const flagSourceIcon = (source) => {
  let flag = <FcGoogle />;

  if (source === "instagram") {
    flag = <BsInstagram />;
  }
  if (source === "facebook") {
    flag = <FaFacebookF />;
  }
  if (source === "linkedin") {
    flag = <BsLinkedin />;
  }
  return flag;
};
