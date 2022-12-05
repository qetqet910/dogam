import { Pokemon } from "../style/InfoStyle";
import { useReducer } from "react";
import { Translator } from "../func/Translator";
import { Link } from "react-router-dom";
import LottieCompo from "../lottie/lottieCompo";
import axios from "axios";

export default function PokeList(){
    const DataList = [];

    const MaxCreature = 905

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
            Data.name = responseC2.data.names[2].name

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
    // 스켈레톤 컴포넌트 추가 예정 
    if (!Value) return null
    return(
        <>
            <Pokemon className="List">
                {Value.map(cur => (
                    <li>
                        <Link to={`/${cur.id}`}>
                            <img src={`${cur.sprite}`} alt={`${cur.name}`} />
                            <span class='ID'>#{cur.id}</span>
                            <h1>{cur.name === 'Chonchie' ? '초라기' : cur.name}</h1>
                            <div>
                                {Translator(cur.types[0])}
                                {Translator(cur.types[1])}
                            </div>
                        </Link>
                    </li>
                ))}
            </Pokemon>
        </>
    )
}

// Object.values(data.pokemon_entries).map(item => {console.log(item.pokemon_species.name)})
// .map(item => {console.log(item);})
// 0번 이상해씨부터 905번 러브로스까지 전국도감 
// 관동, 성도, 호연, 신오, 하나, 칼로스, 알로라, 가라르, 히스이 
// (팔데아)는 아직 안 나옴
// 체킹 방식 클래스 이름으로 지방 이름 새겨넣기. 검색기능과 태그로 검색 가능

// pokemon-species - 이름, 버전, 도감 설명
// pokemon - sprites - 미리보기 이미지 
// pokemon-species - flavor_text_entries.version.name 등장 버전
// 버전은 영어여도 상관 없으니 다 끌어와서 중복 없애고 써야 할듯

// const getPokemon = async (id) => {
//     const Sprite = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
//     const pokemonSprite = await Sprite.json();
//     const pokemonType = pokemonSprite.types.map((poke) => poke.type.name);

//     const Name = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
//     const pokemonName = await Name.json();

//     const transformedPokemonSprite = {
//         id: pokemonSprite.id,
//         image: `${pokemonSprite.sprites.front_default}`,
//         type: pokemonType,        
//     }

//     const transformedPokemonName = {
//         name: pokemonName.names[2].name,
//         // flavor: pokemonName.flavor_text_entries.
//     }

//     showPokemon(transformedPokemonSprite, transformedPokemonName);
// }

// const showPokemon = (pokemonSprite, pokemonName) => {
//     if(Object.values(pokemonSprite.type).length === 2){
//         // Issue 170번째 초라기는 KoName이 3번째가 아닌 1번쨰라 예외처리함
//         // 성능 저하 API 에서 검열하는 코드로 리팩토링 예정
//         let output = `
//         <li>
//             <a href="/${pokemonSprite.id}">
//                 <img loading="lazy" src=${pokemonSprite.image} alt=${pokemonName.name} />
//                 <span class='ID'>#${pokemonSprite.id}</span>
//                 <h1>${pokemonName.name === 'Chonchie' ? '초라기' : pokemonName.name}</h1>
//                 <div>
//                     ${Translator(Object.values(pokemonSprite.type)[0])}
//                     ${Translator(Object.values(pokemonSprite.type)[1])}
//                 </div>
//             </a>
//         </li>
//         `
//         if(inputRef.current.innerHTML === null) return;
//         inputRef.current.innerHTML += output;
//     }else{
//         let output = `
//         <li>
//             <a href="/${pokemonSprite.id}">
//                 <img loading="lazy" src=${pokemonSprite.image} alt=${pokemonName.name} />
//                 <span class='ID'>#${pokemonSprite.id}</span>
//                 <h1>${pokemonName.name}</h1>
//                 <div>
//                     ${Translator(Object.values(pokemonSprite.type)[0])}
//                 </div>
//             </a>
//         </li>
//         `
//         if(inputRef.current.innerHTML === null) return;
//         inputRef.current.innerHTML += output;
//     }
// }