import Lottie from "lottie-web";
import { useEffect, useRef } from "react";
import PageNotFoundJSON from '../asset/json/pageNotFound.json';
import styled from "styled-components";

const Page404 = styled.div`
    position: fixed;
    left: 0px;
    top: -5%;
    width: 100%;
    height: 100%;
    a{
        position: absolute;
        left: 50%;
        bottom: 5%;
        transform: translate(-50%, -50%);
        font-size: 1.8rem;
        font-weight: bold;
        color: white;
        &:hover{
            text-decoration: underline;
        }
    }
`

const PageNotFoundLOTTIE = (props) => {
    const likecontainer = useRef();

    useEffect(() => {
        Lottie.loadAnimation({
            container: likecontainer.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: PageNotFoundJSON
        });
    }, [])
    return(
        <>
            <Page404 ref={likecontainer}>
                <a href="/">메인으로</a>
            </Page404>
        </>
    )
}

export default PageNotFoundLOTTIE;