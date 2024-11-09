"use client"
import logo from "../../../_assets/Images/Plogo.webp";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import FollowUs from "./FollowUs";
const Footer = () => {



  return (
    <footer className="text-[#CFD3D7] pt-4">
      <FollowUs />
    </footer>
  )
}


export default Footer;
