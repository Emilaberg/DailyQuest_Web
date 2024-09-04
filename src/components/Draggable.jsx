import React from "react";
import { useDraggable } from "@dnd-kit/core";

function Draggable({ id, children }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        transition: "transform 250ms ease",
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      onDragStart={(e) => e.preventDefault()} // Prevent default drag behavior for images
    >
      {children}
    </div>
  );
}

export default Draggable;
