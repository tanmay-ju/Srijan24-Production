"use client"
import { useState } from "react";

export default function Svg_Login({ botState, robotActive, setRobotActive }) {
    const handleClick=()=>{
        setRobotActive(true);
    }
    return (
        <div className={`page ${robotActive ? (botState === 'sad' ? 'bot-sad' : botState === 'happy' ? 'bot-happy-start bot-happy' : 'bot-surprised') : 'bot-stand-by'}`}>
            <div className="in-page loud-link-click" data-sound="http://www.r4ms3s.cz/codepen/emobot/sounds/on.{{type}}">
                <div className="action" onClick={handleClick}>
                    <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 590 140"
                    >
                        <g>
                            <path className="st0" d="M77.7,139.1c35,0,52.8-21.2,60.6-39l-34.8-16c-3.4,10.4-13.8,19.4-25.8,19.4c-19.4,0-32.4-14.8-32.4-33.4
                        s13-33.4,32.4-33.4c12,0,22.4,9,25.8,19.4l34.8-16.2c-8-18.4-25.6-38.8-60.6-38.8c-41.8,0-73.4,27.8-73.4,69
                        C4.3,111.1,35.9,139.1,77.7,139.1z" />
                            <path className="st0" d="M241.9,136.7v-35.2h-50.6V3.3h-40.4v133.4H241.9z" />
                            <path className="st0" d="M298.5,136.7V3.3h-40.4v133.4H298.5z" />
                            <path className="st0" d="M386.3,139.1c35,0,52.8-21.2,60.6-39l-34.8-16c-3.4,10.4-13.8,19.4-25.8,19.4c-19.4,0-32.4-14.8-32.4-33.4
                        s13-33.4,32.4-33.4c12,0,22.4,9,25.8,19.4l34.8-16.2c-8-18.4-25.6-38.8-60.6-38.8c-41.8,0-73.4,27.8-73.4,69
                        C312.9,111.1,344.5,139.1,386.3,139.1z" />
                            <path className="st0"
                                d="M586.5,136.7l-52.6-71.4l50.4-62h-49.4l-35,50v-50h-40.4v133.4h40.4v-37l7.4-10l30,47H586.5z" />
                        </g>
                    </svg>
                </div>
                <div className="bot-bg">
                    <i className="bg"></i><i className="bg-small bg-first"></i><i className="bg-small bg-second"></i><i
                        className="bg-small bg-third"></i>
                </div>
                <div className="bot">
                    <div className="bot-head">
                        <div className="bot-face"><i className="eye eye-left"></i><i className="eye eye-right"></i>
                            <div className="mouth"></div>
                        </div>
                        <svg version="1.1" id="head" x="0px" y="0px" viewBox="0 0 219 157"
                        >
                            <g>
                                <path className="st0"
                                    d="M212.1,60.2l-7.4-1c0.7-14.5-0.1-26.4-3.7-30.4C172.4-2.8,44.2,0.2,17,28.8c-4.1,4.4-5.1,16.3-4.3,30.6
                                l-5.8,0.8c0,0-2,14.7,0.1,29.2c2.1,15.2,8.3,30.2,8.3,30.2l6.6-0.9c2.1,8.5,4,14.6,5.1,16.1c4.9,6.5,35.7,15,82,15
                                c46.3,0,76.3-8.3,82-15c1.4-1.6,3.2-7.7,5.2-16.2l7.5,1.1c0,0,6.1-15,8.3-30.2C214,74.9,212.1,60.2,212.1,60.2z" />
                            </g>
                            <path className="st1" d="M204,27.8C175.4-3.8,43.2-0.8,16,27.8c-4,4.2-5,15.3-4.4,28.9c13.4,33.9,32.6,70,45.2,70c23.8,0,19.6-7,52-7
                            c26.1,0,20.2,7,52,7c13.3,0,33.5-39.4,47.1-74.5C208.1,40.5,207.1,31.2,204,27.8z" />
                            <path className="st2"
                                d="M132.5,7C86.6,3.6,33.4,11.5,17,28.8c-4.1,4.4-5.1,16.3-4.3,30.6l-5.8,0.8c0,0-2,14.7,0.1,29.2
                            c2.1,15.2,8.3,30.2,8.3,30.2l6.6-0.9c0.2,0.9,0.4,1.7,0.6,2.5C33.2,87.5,63.4,17.9,132.5,7z" />
                            <g>
                                <path className="st3"
                                    d="M111.4,6.2c38.1,0,75.7,7.2,89.6,22.6c3.6,4,4.4,15.9,3.7,30.4l7.4,1c0,0,2,14.7-0.1,29.2
                                c-2.1,15.2-8.3,30.2-8.3,30.2l-7.5-1.1c-2,8.5-3.9,14.6-5.2,16.2c-5.7,6.7-35.7,15-82,15s-77.1-8.5-82-15
                                c-1.2-1.5-3.1-7.6-5.1-16.1l-6.6,0.9c0,0-6.1-15-8.3-30.2c-2-14.5-0.1-29.2-0.1-29.2l5.8-0.8C11.9,45,12.8,33.1,17,28.8
                                C30.9,14.1,71.4,6.2,111.4,6.2 M111.4,0.2c-34.8,0-81.6,6.4-98.7,24.5C9.7,27.7,6,34.2,6.5,54.2L6,54.3l-4.5,0.6l-0.6,4.5
                                C0.8,60-1.1,75.1,1,90.3c2.2,15.8,8.4,31,8.7,31.6l1.8,4.3l4.6-0.6l1.3-0.2c2.7,10.2,4.2,12.2,4.8,13c7.6,10.1,44.1,17.4,86.8,17.4
                                c42.4,0,78-7,86.6-17.1c0.8-1,2.5-2.9,5.2-13.4l2.2,0.3l4.6,0.6l1.8-4.3c0.3-0.6,6.5-15.9,8.7-31.6c2.1-15.1,0.2-30.2,0.1-30.9
                                l-0.6-4.5l-4.5-0.6l-2-0.3c0.5-20.1-2.8-26.3-5.4-29.2c-7.4-8.2-20.5-14.6-38.8-18.9C150.7,2.2,131.6,0.2,111.4,0.2L111.4,0.2z" />
                            </g>
                        </svg>
                    </div>
                    <div className="bot-body">
                        <div className="bot-body-active">
                            <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 226 175"
                            >
                                <path className="st0"
                                    d="M213.7,47.8c-8-13.9-18.9-23.8-28.2-26.9c-0.3-0.6-0.6-1.1-1-1.4c-11.3-12.2-133-15-144,0
                            c-0.4,0.6-0.8,1.4-1.1,2.3c-8.8,3.8-18.6,13.2-26,26.1c-11.8,20.5-2.9,47.8-2.9,47.8s18.7-3.9,32-16.5c5.8,35,15.2,72.8,18,76.4
                            c4.9,6.5,5.7,15,52,15c46.3,0,46.3-8.3,52-15c3.2-3.8,12.7-42.6,18.4-78c13.4,13.8,33.6,18.1,33.6,18.1S225.5,68.3,213.7,47.8z" />
                                <path className="st1" d="M112.1,139.5c-21.8,0-43.5-3.1-58.4-5.9c3,11.9,5.5,20.3,6.7,21.9c4.9,6.5,5.7,15,52,15c46.3,0,46.3-8.3,52-15
                            c1.4-1.7,4-10,7-21.8C156.2,136.4,134.1,139.5,112.1,139.5z" />
                                <g className="st2">
                                    <path className="st3"
                                        d="M40.5,19.5c-0.4,0.6-0.8,1.4-1.1,2.3c-8.8,3.8-18.6,13.2-26,26.1c-11.8,20.5-2.9,47.8-2.9,47.8
                                s18.7-3.9,32-16.5c3.9,23.9,9.6,49,13.7,63.7c1.4-40.1,10.5-108.2,55-133.5C78.3,9,45.9,12.1,40.5,19.5z" />
                                    <ellipse transform="matrix(0.866 -0.5 0.5 0.866 -55.4706 94.9796)" className="st3"
                                        cx="149.5" cy="151" rx="10" ry="5.5" />
                                </g>
                                <path className="st4"
                                    d="M213.7,47.8c-8-13.9-18.9-23.8-28.2-26.9c-0.3-0.6-0.6-1.1-1-1.4c-11.3-12.2-133-15-144,0
                            c-0.4,0.6-0.8,1.4-1.1,2.3c-8.8,3.8-18.6,13.2-26,26.1c-11.8,20.5-2.9,47.8-2.9,47.8s18.7-3.9,32-16.5c5.8,35,15.2,72.8,18,76.4
                            c4.9,6.5,5.7,15,52,15c46.3,0,46.3-8.3,52-15c3.2-3.8,12.7-42.6,18.4-78c13.4,13.8,33.6,18.1,33.6,18.1S225.5,68.3,213.7,47.8z" />
                                <g>
                                    <g>
                                        <path className="st1"
                                            d="M94.5,74.5h37c2.2,0,4-1.8,4-4s-1.8-4-4-4h-37c-2.2,0-4,1.8-4,4S92.3,74.5,94.5,74.5z M131.5,78.5h-37
                                    c-2.2,0-4,1.8-4,4s1.8,4,4,4h37c2.2,0,4-1.8,4-4S133.7,78.5,131.5,78.5z M111.5,100.5h-17c-2.2,0-4,1.8-4,4s1.8,4,4,4h17
                                    c2.2,0,4-1.8,4-4S113.7,100.5,111.5,100.5z M131.5,100.5c-2.2,0-4,1.8-4,4s1.8,4,4,4s4-1.8,4-4S133.7,100.5,131.5,100.5z" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div className="bot-body-dont-active">
                            <svg version="1.1" id="Layer_2" x="0px" y="0px" viewBox="0 0 226 175"
                            >
                                <path className="st0"
                                    d="M205.3,63.1c-3.8-14.1-10.6-25.6-18-31.7c-0.2-5.9-1.1-10.1-2.8-11.9c-11.3-12.2-133-15-144,0
                            c-1.7,2.4-2.5,7.2-2.7,13.6c-6.6,6.4-12.7,17.1-16.1,30c-6.1,22.9,9.6,47.1,9.6,47.1s7.2-3.7,14.9-10.5c5.5,27.9,12,52.8,14.2,55.8
                            c4.9,6.5,5.7,15,52,15c46.3,0,46.3-8.3,52-15c2.6-3.1,9.3-28.8,14.7-57.1c8.2,7.7,16.4,11.9,16.4,11.9S211.4,86.1,205.3,63.1z" />
                                <path className="st1" d="M112.1,140.5c-21.7,0-43.2-3.1-58.1-5.8c2.9,11.3,5.3,19.3,6.5,20.8c4.9,6.5,5.7,15,52,15
                            c46.3,0,46.3-8.3,52-15c1.4-1.6,3.9-9.5,6.7-20.8C156,137.4,134,140.5,112.1,140.5z" />
                                <g>
                                    <g>
                                        <path className="st1"
                                            d="M94.5,88.5h37c2.2,0,4-1.8,4-4s-1.8-4-4-4h-37c-2.2,0-4,1.8-4,4S92.3,88.5,94.5,88.5z M131.5,92.5h-37
                                    c-2.2,0-4,1.8-4,4s1.8,4,4,4h37c2.2,0,4-1.8,4-4S133.7,92.5,131.5,92.5z M111.5,114.5h-17c-2.2,0-4,1.8-4,4s1.8,4,4,4h17
                                    c2.2,0,4-1.8,4-4S113.7,114.5,111.5,114.5z M131.5,114.5c-2.2,0-4,1.8-4,4s1.8,4,4,4s4-1.8,4-4S133.7,114.5,131.5,114.5z" />
                                    </g>
                                </g>
                                <path className="st2"
                                    d="M205.3,63.1c-3.8-14.1-10.6-25.6-18-31.7c-0.2-5.9-1.1-10.1-2.8-11.9c-11.3-12.2-133-15-144,0
                            c-1.7,2.4-2.5,7.2-2.7,13.6c-6.6,6.4-12.7,17.1-16.1,30c-6.1,22.9,9.6,47.1,9.6,47.1s7.2-3.7,14.9-10.5c5.5,27.9,12,52.8,14.2,55.8
                            c4.9,6.5,5.7,15,52,15c46.3,0,46.3-8.3,52-15c2.6-3.1,9.3-28.8,14.7-57.1c8.2,7.7,16.4,11.9,16.4,11.9S211.4,86.1,205.3,63.1z" />
                            </svg>
                        </div>
                    </div>
                    <div className="levitas"><i className="levitas-first"></i><i className="levitas-second"></i><i
                        className="levitas-third"></i><i className="levitas-four"></i></div>
                    <i className="bot-shadow"></i>
                </div>
            </div>
        </div>
    );
}