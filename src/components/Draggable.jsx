import React from "react";
import { useDraggable } from "@dnd-kit/core";

function Draggable({ id, children, dragHandle }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    // Define the drag handle
    dragHandle,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        transition: "transform 250ms ease",
      }
    : undefined;

  return (
    <div ref={setNodeRef} style={style}>
      {/* Apply listeners only to the drag handle */}
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          ...attributes,
          ...listeners,
        })
      )}
    </div>
  );
}

export default Draggable;
