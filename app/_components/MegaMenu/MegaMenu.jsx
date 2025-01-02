"use client";

import React, { useState, useEffect } from "react";
import { RiArrowRightSLine } from "react-icons/ri";

const MegaMenu = ({ data }) => {
  const [subItem, setSubItem] = useState([]);
  const [subIndex, setSubIndex] = useState("");

  const [activeSubcategories, setActiveSubcategories] = useState(null);

  const handleHover = () => {
    setActiveSubcategories(null);
  };

  const handleLeave = () => {
    setActiveSubcategories(null);
  };

  const subHandleHover = (index, subitem, subindex) => {
    setSubItem(subItem);
    setActiveSubcategories(index);
    setSubIndex(subindex);
  };

  const subHandleLeave = () => {
    setActiveSubcategories(null);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      // Reset activeDropdown and activeSubcategories on resize
      setActiveDropdown(null);
      setActiveSubcategories(null);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // console.log(data)

  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: "100%",
          left: `-100px`,
          backgroundColor: "#f9f9f9",
          border: "1px solid #ccc",
          minWidth: "230px",
          height: "400px",
          overflowY: "auto",
          zIndex: "999",
        }}
        onMouseEnter={() => handleHover()}
        onMouseLeave={() => handleLeave()}
      >
        {data && (
          <ul style={{ listStyleType: "none", padding: "0" }}>
            {data.map((subitem, subindex) => (
              <li
                key={`${subindex}si`}
                onMouseEnter={() =>
                  subHandleHover(`${subindex}si`, subitem, subindex)
                }
                className="hover:bg-blue-gray-100 transition duration-300 flex justify-between items-center"
              >
                <a href={subitem.link} className="text-medium p-4 ">
                  {subitem.brand}
                </a>
                {subitem?.AllPerfume && subitem?.AllPerfume.length > 0 && (
                  <RiArrowRightSLine />
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
      {activeSubcategories === `${subIndex}si` &&
        subItem?.AllPerfume &&
        subItem?.AllPerfume.length > 0 && (
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "100%",
              backgroundColor: "#f9f9f9",
              border: "1px solid #ccc",
              minWidth: "230px",
              height: "400px",
              overflowY: "auto",
              zIndex: "999",
            }}
            onMouseEnter={() => subHandleHover(`${subIndex}si`)}
            onMouseLeave={() => subHandleLeave()}
          >
            <ul style={{ listStyleType: "none", padding: "0" }}>
              {subItem.AllPerfume.map((subitem2, subindex2) => (
                <li
                  key={subindex2}
                  className=" hover:bg-blue-gray-100 transition duration-300 flex justify-between"
                >
                  <a href={subitem2._id} className="text-medium p-4">
                    {subitem2.perfume}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
    </div>
  );
};

export default MegaMenu;
