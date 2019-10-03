import React, { useState } from "react";
import { connect } from "react-redux";

import ghostyGhost from "./ghostyGhost";

const Button = ({
  id,
  draggable,
  duplicate,
  addButton,
  incrementColor,
  incrementDups
}) => {
  const colors = {
    yellow: "#FFCC11",
    red: "#EE2C2C",
    blue: "#0276FD"
  };

  const [backgroundColor, setBGC] = useState(colors.yellow);
  const [counter, setCounter] = useState(0);

  const changeColor = () => {
    if (id === 0) {
      setBGC(colors.red);
      incrementColor();
    } else if (id === 2) {
      setBGC(colors.blue);
      incrementColor();
    }
  };

  const replicate = () => {
    if (counter < 5) {
      setCounter(counter + 1);
      incrementDups();
    }
  };

  const handleClick = () => {
    if (duplicate) return replicate();
    if (!draggable) return addButton();
  };

  const ButtonLing = () => (
    <div className="col-12">
      <button
        className="m-3"
        draggable={draggable}
        onClick={handleClick}
        onDragStart={e => e.dataTransfer.setDragImage(ghostyGhost, 0, 0)}
        onDragEnd={changeColor}
        style={{
          height: "10vh",
          width: "10vh",
          borderRadius: "50%",
          backgroundColor
        }}
      />
    </div>
  );

  return (
    <div className="col-4 my-auto">
      {counter < 5 ? (
        <ButtonLing />
      ) : (
        Array.from({ length: 5 }, (_, i) => <ButtonLing key={`${id}-${i}`} />)
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  draggable: state.counter === 3,
  duplicate: state.colors === 2
});

const mapDispatchToProps = {
  addButton: () => ({ type: "ADD_BUTTON" }),
  incrementColor: () => ({ type: "INCREMENT_COLOR" }),
  incrementDups: () => ({ type: "INCREMENT_DUPS" })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);
