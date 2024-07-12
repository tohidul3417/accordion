import React, { useState } from "react";

function AccordionItem({ item, isOpen, onClick }) {
  const [openSubItem, setOpenSubItem] = useState(null);

  const toggleSubItem = (index) => {
    setOpenSubItem(openSubItem === index ? null : index);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={onClick}>
        <h2>
          <button>{item.title}</button>
        </h2>
      </div>
      {isOpen && (
        <div >
          <div className="accordion-item-content">{item.content}</div>
          <div className="accordion-sub-items">
          {item.subItems &&
            item.subItems.length > 0 &&
            item.subItems.map((subItem, index) => (
              <div className="accordion-sub-item">
                <div className="accordion-sub-title" onClick={() => toggleSubItem(index)}>
                  <h3>
                    <button>{subItem.title}</button>
                  </h3>
                </div>
                {openSubItem === index && <div className="accordion-sub-content">{subItem.content}</div>}
              </div>
            ))}
            </div>
        </div>
      )}
    </div>
  );
}

export default AccordionItem;
