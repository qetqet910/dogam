import { useRef } from "react";

import { TrainerCard } from "../style/InfoStyle";
import LogoBack from "../asset/img/LogoBack.png";
import { faExpand, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useRecoilState } from "recoil";
import { textState } from "../atom/atom";

export const Trainer = () => {
    const nameInput = useRef(); 

    const [text, setText] = useRecoilState(textState);
      
    const onChange = (event) => {
      setText(event.target.value);
    };

    return(
        <TrainerCard>
            <a href="/" className="Logo">
                <img src={LogoBack} alt="Logo" /> 
            </a>
            <div className="right">
                <div className="top">
                <span onClick={() => {
                if (!document.fullscreenElement) {
                    document.documentElement.requestFullscreen();
                } else {
                if (document.exitFullscreen) {
                        document.exitFullscreen();
                    }
                }
                }}>
                    <FontAwesomeIcon icon={faExpand} />
                </span>
            </div>
            <div className="bottom">
                <input type="text" ref={nameInput} placeholder="포켓몬의 이름을 입력해주세요." value={text} onChange={onChange}/>
                <button type="submit">
                    <FontAwesomeIcon icon={faCheckCircle} />
                </button>
            </div>
            </div>
        </TrainerCard>
    )
}