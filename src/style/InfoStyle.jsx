import styled from "styled-components";

export const Screen = styled.main`
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    min-height: 100vh;
    background-color: #333333;
`

export const TrainerCard = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    width: 80vw;
    max-height: 200px;
    min-height: 84px;
    margin-top: 4rem;
    padding: 0 2rem;
    border-radius: 10px;

    background-color: #555;
    border: 5px solid #222; 
    box-shadow: 0px 0px 3px #555;
    .Logo{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;

        width: 40rem;   
        height: 100%;
        margin: .4vw 0 12vw 0;
        img{
            width: 96%;
        }

    }
    .right{
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        flex-direction: column;
        margin-top: 1rem;   

        .top{
            margin-right: 0rem;
                margin-bottom: 0rem;
            span{
                display: inline-block;
                margin-left: 2.6rem;
                &:nth-child(1){
                    display: none;
                }
                svg{
                    font-size: 5vw;   
                    color: #C8C8CA;
                    user-select: none;
                    transition: all .3s;
                    cursor: pointer;
                    &:hover{
                        color: #fff;
                    }
                }
            }
        }
        .bottom{
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            left: 0px;
            bottom: 0px;
            width: 100%;
            margin-bottom: 2vw;
            margin-top: 1rem;
            input{
                all: unset;
                font-size: 1vw;
                color: #C8C8CA;
                font-weight: bold;
                width: 78%;
                border-radius: 2rem;
                border: 2px solid #C8C8CA;
                transition: all .35s ease-in-out;
                padding: 1vw 1.8vw 1vw 1.6vw;

                cursor: pointer;     
                ::placeholder{
                    color: #C8C8CA;
                }
                @media (min-width: 600px) and (max-width: 1024px) {
                    padding: 1.4vw 1.4vw 1.4vw 1.4vw;
                    font-size: 1.4vw;
                }
            }
            .Active{
                width: 26rem;
                padding: 1rem 2rem 1rem 1.8rem;
            }
            button{
                all: unset;
                position: absolute;
                top: 50%;
                right: 12%;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 1vw;
                height: 1vw;
                transform: translateY(-50%);
                background: transparent;
                border: none;
                svg{
                    width: 4vw;
                    height: 4vw;
                    font-size: 2.6rem;
                    color: #C8C8CA;
                    user-select: none;
                    transition: all .3s;
                    cursor: pointer;
                    &:hover{
                        color: #fff;
                    }
                }
                &:focus{
                    svg{
                        animation: identifier 1s infinite ease-in-out;
                    }
                    @keyframes identifier {
                        0%{
                            color: #C8C8CA;
                        }   
                        50%{
                            color: #41ff41;
                        }
                        100%{
                            color: #C8C8CA;
                        }
                    }
                }
            }
        }
    }
`

// Media 소중대형 휴대기기 ~ 600 ~ 태블릿 ~ 1024 ~ 1440 ~ 1920 까지

export const LottieStyled = styled.div`
    position: fixed;
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    transition: all .5s;
    svg{
        transition: all .5s;
    }
`

export const Pokemon = styled.ul`
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 80%;
    margin-bottom: 4rem;
    padding: 2rem 2rem;
    background-color: #555;
    border-radius: 10px;
    border: 5px solid #222;
    box-shadow: 0px 0px 3px #555;
    @media (min-width: 600px) and (max-width: 1024px){
        justify-content: space-between;
        flex-direction: row;
        white-space: wrap;
        flex-wrap: wrap;
    }
    li{
        position: relative;
        display: flex;
        width: 100%;
        margin-bottom: 1rem;
        border-radius: 1rem;
        background-color: #656565;
        border: 3px solid #767676;
        transition: all .5s;
        cursor: pointer;

        @media (min-width: 600px) and (max-width: 800px){
            width: 49%;
        }
        @media (min-width: 800px) and (max-width: 1024px){
            width: 24%;
        }
        a{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: row;
            width: 26rem;
            height: 5rem;
            transition: all .5s;
            @media (min-width: 800px) and (max-width: 1024px){
                flex-direction: column;
                justify-content: flex-end;
                width: 100%;
                height: 17vw;
            }
            .ID{
                position: absolute;
                display: block;
                top: 50%;
                left: 6px;
                font-size: 1rem;
                transform: translate(30%, -50%);
                color: #FFCD4A;
                font-weight: bold;
                font-family: 'Galmuri7';
                text-shadow: 2px 2px 4px black;
                &::before{
                    content: '';
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    width: 100%;
                    height: 100%;
                    padding: 1vw;
                    z-index: -1;
                    transform: translate(-54%, -50%);
                }
                @media (min-width: 800px) and (max-width: 1024px){
                    top: 1rem;
                    left: 0rem;
                }
            }
            img{
                position: absolute;

                width: 24%;
                right: 0px;
                margin-left: 1vw;

                z-index: 10;

                @media (min-width: 800px) and (max-width: 1024px){
                    left: 50%;
                    top: 40%;
                    transform: translate(-50%, -50%);
                    margin-left: 0vw;
                    width: 75%;
                }
            }
            span, h1{
                font-size: 1.6rem;
                color: #fff;
                font-weight: bold;
                font-family: 'Galmuri9';
            }
            h1{
                margin-left: calc(22px + 10%);
                font-size: 2.6vw;

                @media (min-width: 800px) and (max-width: 1024px){
                    margin-left: 0;
                    font-size: 2vw;
                }
            }
            div{
                position: absolute;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;

                right: 14%;
                width: 7rem;
                height: 100%;
                @media (min-width: 600px) and (max-width: 1024px){
                    position: relative;
                    flex-direction: row;
                    right: 0%;
                    width: 100%;
                    height: fit-content
                }
                span{
                    display: inline-block;
                    text-align: center;
                    vertical-align: middle;

                    margin: 0 .8rem;
                    padding: .3rem .75rem;
                    border-radius: 10px;
                    font-size: 1.2vw;

                    color: #fff;
                    background-color: var(--color) !important;
                    &:not(:last-child){
                        margin-bottom: .4rem;
                    }
                    @media (min-width: 600px) and (max-width: 1024px){
                        &:not(:last-child){
                            margin-bottom: 0px;
                        }
                    }
                }
            }
        }
    }
    .Observer{
        position: absolute;
        left: 0px;
        bottom: 0px;
        width: 100%;
        height: 10px;
    }
`

export const HashTag = styled.ul`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow-x: scroll;
    white-space: nowrap;

    width: 80%;
    border-radius: 10px;
    margin: 2rem 0;
    padding: calc(1rem + .5vw) 1rem;

    border: 5px solid #222;
    box-shadow:inset 0px 0px 3px #555;
    li{
        font-size: 2rem;
        color: #fff;
        font-weight: bold;
        font-family: 'Galmuri9';
        cursor: pointer;
        font-size: 2vw;
        margin: 0 1rem;
    }
`