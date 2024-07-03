'use client';

import React, { useState } from "react";
import "./style.css";

const ToggleButton = () => {
    const [checkBox, setCheckBox] = useState(false);
    const [check, setCheck] = useState('')

    return (
        <div className="flex gap-3 ">
            {[`I have it`, `I had it`, `I want it`].map((item, idx) => {
                return (
                    <div className="flex justify-center items-center gap-2 ">


                        <div
                            id="toggleBtnCard"
                            className={` ${checkBox ? "" : ""
                                } hover:scale-[1.009] z-[10]`}
                        >
                            <div className={`button r ${idx + 1 === check ? 'ring-4 ring-pink-500/30 border-2 border-pink-500' : ''} `}>
                                <input
                                    type="checkbox"
                                    checked={idx + 1 === check}
                                    className={`checkbox z-99`}
                                    onChange={() => {
                                        setCheck(idx + 1)
                                        setCheckBox(!checkBox)
                                    }}
                                />
                                <div className="knobs"></div>
                                <div className="layer"></div>
                            </div>
                        </div>
                        <div className="">{item}</div>
                    </div>
                );
            })}
        </div>

    );
};

export default ToggleButton;
