import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";


function Card({data,reference}) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      className="relative flex-shrink-0 overflow-hidden w-60 h-72 bg-zinc-900 rounded-[45px] text-white py-10 px-5"
    >
      <FaRegFileAlt />
      <p className="text-sm mt-5 font-semibold leading-tight">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex item-center justify-between px-8 py-3 mb-3">
          <h4>{data.filesize}</h4>
          <span className="w-7 h-7 rounded-full bg-zinc-600 flex items-center justify-center ">
            {data.close ? (
              <IoCloseSharp />
            ) : (
              <FiDownload size=".8em" color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card
