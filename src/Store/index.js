import { createStore } from "redux";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaGithub,
    FaInstagram,
} from 'react-icons/fa';

const initState = {
    linksIconsComponents: [
        <FaFacebookF />,
        <FaLinkedinIn />,
        <FaGithub />,
        <FaInstagram />
    ],
    smothlyTextWriting: (text, setterFunc, duration = 50) => {
        let charIndex = 0;
        let textInternval = setInterval(() => {
            if (charIndex < text.length) {
                setterFunc(text.slice(0, charIndex + 1));
                charIndex++;
            } else {
                let textTimeout = setTimeout(() => {
                    charIndex = 0;
                    clearTimeout(textTimeout);
                }, 2000);
                clearInterval(textInternval);
            };
        }, duration);
    }
}

const rootReducer = (state = initState, action) => {
    return state;
}

const store = createStore(rootReducer);

export default store;