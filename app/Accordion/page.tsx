import React from "react";
import Accordion from "../components/Accordion/Accordion";
import { accordionItems } from "../data/contents";
const AccordionPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Accordion Example</h1>
      <Accordion items={accordionItems} />
    </div>
  );
};

export default AccordionPage;
