import React, { useState } from "react";

function Folder({ explorerData }) {
  const [expand, setExpand] = useState(false);

  const handleClick = () => {
    setExpand((prev) => !prev);
  };

  if (!explorerData.isFolder) {
    return (
      <>
        <h4>{explorerData.name}</h4>
      </>
    );
  }

  return (
    <div>
      <h4 onClick={() => handleClick()}>{explorerData.name}</h4>
      {expand &&
        explorerData.items.map((exp) => (
          <Folder key={exp.id} explorerData={exp} />
        ))}
    </div>
  );
}

export default Folder;
