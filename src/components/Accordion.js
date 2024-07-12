import React, { useState, useEffect } from "react";
import AccordionItem from "./AccordionItem";

function Accordion({ items }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(null);
  const onItemClick = (index) => {
    setIsOpen(isOpen === null ? index : null);
  };

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div>
      {items.map((item, index) => (
        <div>
          <Accordion
            item={item}
            isOpen={isOpen}
            onClick={() => onItemClick(index)}
          />
        </div>
      ))}
    </div>
  );
}

export default Accordion;