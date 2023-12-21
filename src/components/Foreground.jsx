import React from "react";
import Card from "./Card";
import { useRef } from "react";

function Foreground() {
    const ref = useRef(null);

  const data = [
    {
      desc: "this is the card details that come from the component",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "this is the card details that come from the component",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "this is the card details that come from the component",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    }
  ];

  return (
      <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex flex-wrap gap-10 p-5">
      {data.map((item,index)=>(
        <Card data={item} reference={ref} />
      ))}
      </div>
  );
}

export default Foreground;
