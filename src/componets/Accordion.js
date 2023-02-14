import React, { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    //logic for don't open in render
    setExpandedIndex((currentExpnadedIndex) => {
      if (currentExpnadedIndex === nextIndex) {
        setExpandedIndex(-1);
      } else {
        setExpandedIndex(nextIndex);
      }
    });
  };
  //dispaly in dynamic
  const renderitem = items.map((item, index) => {
    //givig in index value
    const isExpanded = index === expandedIndex;
    //icon display
    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });
  return <div className="border-x border-t">{renderitem}</div>;
};

export default Accordion;
