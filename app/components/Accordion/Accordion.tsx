"use client";
import React, { useState } from "react";

type AccordionItemProps = {
  id: number;
  title: string;
  content: React.ReactNode;
  isOpen?: boolean;
  onToggle: (id: number) => void;
};

const AccordionItem: React.FC<AccordionItemProps> = ({
  id,
  title,
  content,
  isOpen,
  onToggle,
}) => {
  return (
    <div>
      <button
        onClick={() => onToggle(id)}
        className={`w-full text-left px-4 py-2 bg-gray-200 border-b ${
          isOpen ? "font-bold" : ""
        }`}
      >
        {title}
      </button>
      {isOpen && (
        <div className="px-4 py-2 border border-t-0 bg-gray-50">{content}</div>
      )}
    </div>
  );
};

type AccordionProps = {
  items: { title: string; content: React.ReactNode }[];
};

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openItemId, setOpenItemId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="border rounded">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          id={index}
          title={item.title}
          content={item.content}
          isOpen={openItemId === index}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
};

export default Accordion;
