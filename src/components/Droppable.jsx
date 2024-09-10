import React from "react";
import { useDroppable } from "@dnd-kit/core";

function Droppable({ id, children }) {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });
  const style = {
    backgroundColor: isOver ? "charcoalBlack" : undefined,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
}

export default Droppable;
