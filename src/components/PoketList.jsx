import { Pokemon } from "../style/InfoStyle";
import { useReducer } from "react";
import LottieCompo from "../lottie/lottieCompo";
import axios from "axios";
import Card from "./Card";

import { useRecoilState } from "recoil";
import { textState } from "../atom/atom";

export default function PokeList(){
    const DataList = [];

    const MaxCreature = 200

    const [text] = useRecoilState(textState)

    function reducer(state, action) {
        switch (action.type) {
          case 'LOADING':
            return {
              loading: true,
              data: null,
              error: null
            };
          case 'SUCCESS':
            return {
              loading: false,
              data: action.data,
              error: null
            };
          case 'ERROR':
            return {
              loading: false,
              data: null,
              error: action.error
            };
          default:
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }

    const fetchData = () => {
        for (let i = 1; i <= MaxCreature; i++) {
            fetchUsers(i);
        }
    } 

    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: null
    });

    const fetchUsers = async (id) => {

        dispatch({ type: 'LOADING' });
        const Data = {};
        const types = [];

        try {
            const responseC1 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const responseC2 = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);

            Data.id = responseC1.data.id
            responseC1.data.sprites.front_default !== null ? Data.sprite = responseC1.data.sprites.front_default : Data.sprite = Object.values(responseC1.data.sprites.other)[2].front_default;
            
            // 타입은 확정 1~2개이니 map으로 코스트를 개높이는 것 보다 이게 훨 나은듯
            types.push(responseC1.data.types[0].type.name);
            types.push(responseC1.data.types[1]?.type.name);
            
            Data.types = types;
            if(responseC2.data.names[2].name === "Chonchie"){Data.name = "초라기"}
            else Data.name = responseC2.data.names[2].name

            DataList.push(Data);
        } catch (e) {
            dispatch({ type: 'ERROR', error: e });
        }
        if(DataList.length === MaxCreature){
            dispatch({ type: 'SUCCESS', data: DataList})
        }
    };

    const { loading, data: Value, error } = state;

    window.onload = () => {
        fetchData()
    }   

    if (error) return <div>에러 발생</div>;
    if (loading) return <LottieCompo></LottieCompo>;
    if (!Value) return null

    if (Value.length === MaxCreature) {
        const filterdMonster = Value.filter((data) => {
            return data.name.includes(text);
        });
        return(
            <>
                <Pokemon className="List">
                    {filterdMonster.map(cur => (
                        <Card key={cur.id} {...cur} />
                    ))}
                </Pokemon>
            </>
        )
    }
}

// Logic - 불러옴 - 이벤트 감지 - 필터로 거르는데 여기서
// 검색창에 단어 있으면 같이 검색함