import React from "react";
import { connect } from "react-redux";

import Button from "./Button";

function App({ length, duplicate, done }) {
  const text = () => {
    if (done) return "";
    if (length < 3) return "Press";
    if (duplicate) return "Press Five Times";
    return "Rub";
  };

  return (
    <div style={{touchAction: "manipulation"}}>
      {done && (
        <div className="text-center">
          <button
            className="btn btn-warning btn-lg mx-auto my-5"
            onClick={() => window.location.reload()}
          >
            AGAIN!
          </button>
        </div>
      )}
      <div className="row text-center">
        <div className="row mx-auto">
          {Array.from({ length }, (_, id) => (
            <Button key={`${id}`} id={id} />
          ))}
        </div>
        <div className="col-12">
          <p>{text()}</p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
    length: state.counter,
    duplicate: state.colors === 2,
    done: state.duplicates === 15
  });

export default connect(mapStateToProps)(App);
