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
    align-items: center;
    width: 80%;
    height: 20%;
    background-color: #555;
    border-radius: 10px;
    border: 5px solid #222; 
    box-shadow: 0px 0px 3px #555;
    padding: 0 2rem;
    margin-top: 4rem;
    .Logo{
        position: relative;
        display: inline-block;
        width: 50rem;
        height: 12rem;
        padding-bottom: 2rem;
        margin-bottom: 2rem;
        overflow: hidden;
        img{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }
    .right{
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        flex-direction: column;
        .top{
            margin-right: 1rem;
            margin-bottom: 1rem;
            span{
                display: inline-block;
                margin-left: 2.6rem;
                svg{
                    font-size: 2.6rem;
                    color: #C8C8CA;
                    user-select: none;
                    transition: all .3s;
                    cursor: pointer;
                    &:hover{
                        color: #fff;
                    }
                    /* font-weight: bold; */
                }
            }
        }
        .bottom{
            position: relative;
            margin-top: 1rem;
            input{
                all: unset;
                font-size: 1.6rem;
                color: #C8C8CA;
                font-weight: bold;
                border-radius: 2rem;
                border: 2px solid #C8C8CA;
                transition: all .5s ease-in-out;
                cursor: pointer;     

                width: 0rem;
                padding: 1rem 2rem 1rem 1.8rem;
                ::placeholder{
                    color: #C8C8CA;
                }
            }
            .Active{
                width: 26rem;
                padding: 1rem 2rem 1rem 1.8rem;
            }
            button{
                all: unset;
                height: 100%;
                position: absolute;
                right: 0px;
                top: 0px;
                background: transparent;
                border: none;
                svg{
                    width: 75%;
                    height: 75%;
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
                    @keyframes identifierㅉ {
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
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 2rem .2rem;
    place-items: center;
    width: 80%;
    min-height: 60%;
    background-color: #555;
    border-radius: 10px;
    border: 5px solid #222;
    box-shadow: 0px 0px 3px #555;
    padding: 2rem 2rem;
    margin-bottom: 4rem;
    li{
        position: relative;
        width: 20rem;
        height: 20rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-radius: 1rem;
        background-color: #656565;
        border: 3px solid #767676;
        transition: all .5s;
        cursor: pointer;

        .ID{
            position: absolute;
            display: block;
            left: 1rem;
            top: 1rem;
        }
        img{
            width: 60%;
            transform: scale(1.2);
        }
        span, h1{
            font-size: 1.6rem;
            color: #fff;
            font-weight: bold;
            font-family: 'Galmuri9';
        }
        div{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            margin-top: 1rem;
            span{
                display: inline-block;
                margin: 0 .8rem;
                color: #fff;
                background-color: var(--color) !important;
                padding: .4rem 1rem;
                border-radius: 10px;
            }
        }
    }
`

export const HashTag = styled.ul`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    min-height: 8vh;
    border-radius: 10px;
    border: 5px solid #222;
    box-shadow:inset 0px 0px 3px #555;
    padding: 0 4rem;
    margin: 2rem 0;
    li{
        font-size: 2rem;
        color: #fff;
        font-weight: bold;
        font-family: 'Galmuri9';
        cursor: pointer;
    }
`