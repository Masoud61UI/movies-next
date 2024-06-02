"use client";

import AccordionItem from "@/components/AccordionItem";
import { useState } from "react";

export default function page() {
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }

    setOpen(index);
  };

  const accordionData = [
    {
      title: "This is demo title 1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ipsam a qui earum animi accusamus quod saepe ex laboriosam minima recusandae, nulla velit magni numquam nisi eum nihil. Odit esse ab dolorem fugit, deserunt nulla eum explicabo deleniti iure numquam earum, quidem dolorum repellat beatae sapiente ex natus officiis harum.",
    },
    {
      title: "This is demo title 2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ipsam a qui earum animi accusamus quod saepe ex laboriosam minima recusandae, nulla velit magni numquam nisi eum nihil. Odit esse ab dolorem fugit, deserunt nulla eum explicabo deleniti iure numquam earum, quidem dolorum repellat beatae sapiente ex natus officiis harum.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "This is demo title 3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ipsam a qui earum animi accusamus quod saepe ex laboriosam minima recusandae, nulla velit magni numquam nisi eum nihil.",
    },
    {
      title: "This is demo title 4",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ipsam a qui earum animi accusamus quod saepe ex laboriosam minima recusandae, nulla velit magni numquam nisi eum nihil. Odit esse ab dolorem fugit, deserunt nulla eum explicabo deleniti iure numquam earum.",
    },
    {
      title: "This is demo title 5",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ipsam a qui earum animi accusamus quod saepe ex laboriosam minima recusandae, nulla velit magni numquam nisi eum nihil. Odit esse ab dolorem fugit, deserunt nulla eum explicabo deleniti iure numquam earum, quidem dolorum repellat beatae sapiente ex natus officiis harum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ipsam a qui earum animi accusamus quod saepe ex laboriosam minima recusandae",
    },
    {
      title: "This is demo title 6",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ipsam a qui earum animi accusamus quod saepe ex laboriosam minima recusandae, nulla velit magni numquam nisi eum nihil. Odit esse ab dolorem fugit.",
    },
  ];

  return (
    <section className="grid place-items-center pb-20 pt-4">
      <div className="px-10 max-w-5xl">
        {accordionData.map((data, index) => (
          <AccordionItem
            key={index}
            open={index === open}
            title={data.title}
            desc={data.desc}
            toggle={() => toggle(index)}
          />
        ))}
      </div>
    </section>
  );
}
