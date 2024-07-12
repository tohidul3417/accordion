import React, { useState, useEffect } from "react";
import AccordionItem from "./AccordionItem";

function Accordion() {
  const [items, setItems] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="container">
      {items.map((item, index) => (
        <div key={index}>
          <AccordionItem
            item={item}
            isOpen={openIndex === index}
            onClick={() => toggleItem(index)}
          />
        </div>
      ))}
    </div>
  );
}

export default Accordion;
