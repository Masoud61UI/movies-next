import { Collapse } from "react-collapse";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function AccordionItem({ open, toggle, title, desc }) {
  return (
    <div className="pt-7">
      <div
        className="dark:bg-gray-700 bg-gray-100 py-5 px-8 flex justify-between items-center cursor-pointer "
        onClick={toggle}
      >
        <h3 className="text-base sm:text-lg font-semibold">{title}</h3>
        <div className="text-2xl">
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>

      <Collapse isOpened={open}>
        <p className="text-sm sm:text-base dark:bg-gray-700 bg-gray-100 pt-0 pb-5 px-8">
          {desc}
        </p>
      </Collapse>
    </div>
  );
}
