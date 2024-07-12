import React, { useState } from "react";

function AccordionItem({ item, isOpen, onClick }) {
  const [openSubItem, setOpenSubItem] = useState(null);

  const toggleSubItem = (index) => {
    setOpenSubItem(openSubItem === index ? null : index);
  };

  return (
    <div>
      <div onClick={onClick}>
        <h2>
          <button>{item.title}</button>
        </h2>
      </div>
      {isOpen && (
        <div>
          <div>{item.content}</div>
          {item.subItems &&
            item.subItems.length > 0 &&
            item.subItems.map((subItem, index) => (
              <div>
                <div onClick={() => toggleSubItem(index)}>
                  <h3>
                    <button>{subItem.title}</button>
                  </h3>
                </div>
                {openSubItem === index && <div>{subItem.content}</div>}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default AccordionItem;
