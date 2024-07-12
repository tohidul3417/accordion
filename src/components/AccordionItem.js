import React, { useState } from "react";

function AccordionItem({ item, isOpen, onClick }) {
  const [subItemOpen, setSubItemOpen] = useState(null);

  const toggleSubItem = (index) => {
    setSubItemOpen(subItemOpen === null ? index : null);
  };

  return (
    <div>
      <div onClick={onClick}>
        <h2>{item.title}</h2>
        {isOpen && (
          <div>
            <p>{item.content}</p>
            {item.subItems &&
              item.subItems.length > 0 &&
              item.subItems.map((subItem, index) => (
                <div onClick={() => toggleSubItem(index)}>
                  <h3>{subItem.title}</h3>
                  {subItemOpen && <p>{subItem.content}</p>}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AccordionItem;
