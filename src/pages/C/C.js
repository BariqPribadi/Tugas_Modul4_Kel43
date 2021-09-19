import React from 'react'
import { useContext, createContext, useState } from "react";

const bold = {
  normal: {
    value: "font-normal",
  },
  tebal: {
    value: "font-black",
  },
};

const italic = {
  biasa: {
    value: "not-italic",
  },
  miring: {
    value: "italic",
  },
};


const BoldContext = createContext();
const ItalicContext = createContext();

export default function StyleChange() {
  const [valuebold, setValuebold] = useState(bold.normal);
  const [valueitalic, setValueitalic] = useState(italic.biasa);
  return (
    <div className="container text-center" style={{paddingTop: "1%"}}>
    <BoldContext.Provider value={valuebold}>
      <div className="contentWrapper">
        <Text1 />
        <button
          className="Button mb-3 rounded bg-black hover:bg-gray-400 py-2 px-4 text-white"
          onClick={() =>
            setValuebold(
              valuebold === bold.normal ? bold.tebal : bold.normal
            )
          }
        >
          Ubah
        </button>
      </div>
    </BoldContext.Provider>
    <ItalicContext.Provider value={valueitalic}>
      <div className="contentWrapper">
        <Text2 />
        <button
          className="Button rounded bg-black hover:bg-gray-400 py-2 px-4 text-white"
          onClick={() =>
            setValueitalic(
              valueitalic === italic.biasa ? italic.miring : italic.biasa
            )
          }
        >
          Ubah
        </button>
      </div>
    </ItalicContext.Provider>
    </div>
    
  );
}

function Text1(props) {
  const style1 = useContext(BoldContext);
  return (
    <p
      className="titleContext"
      class={style1.value}
    >
      You can change what you do, but you can't change what you want.
    </p>
  );
}

function Text2(props) {
  const style2 = useContext(ItalicContext);
  return (
    <p
      className="titleContext"
      class={style2.value}
    >
      Lies travel faster than the truth.
    </p>
  );
}