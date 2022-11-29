import { Pokemon } from "../style/InfoStyle";
import { useRef, useEffect } from "react";
import { Translator } from "../func/Translator";

export default function PokeList(){

    const inputRef = useRef(null);
    const pokemons = 100
    // const APIData = []
    
    const fetchData = () => {
        for (let i = 1; i <= pokemons; i++) {
            getPokemon(i);
        }
    }   

    const getPokemon = async (id) => {
        const Sprite = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemonSprite = await Sprite.json();
        const pokemonType = pokemonSprite.types.map((poke) => poke.type.name);

        const Name = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
        const pokemonName = await Name.json();

        const transformedPokemonSprite = {
            id: pokemonSprite.id,
            image: `${pokemonSprite.sprites.front_default}`,
            type: pokemonType,        
        }

        const transformedPokemonName = {
            name: pokemonName.names[2].name,
            // flavor: pokemonName.flavor_text_entries.
        }

        showPokemon(transformedPokemonSprite, transformedPokemonName);
    }
    
    const showPokemon = (pokemonSprite, pokemonName) => {
        if(Object.values(pokemonSprite.type).length === 2){
            // Issue 170번째 초라기는 KoName이 3번째가 아닌 1번쨰라 예외처리함
            // 성능 저하 API 에서 검열하는 코드로 리팩토링 예정
            let output = `
            <li>
                <a href="/${pokemonSprite.id}">
                    <img loading="lazy" src=${pokemonSprite.image} alt=${pokemonName.name} />
                    <span class='ID'>#${pokemonSprite.id}</span>
                    <h1>${pokemonName.name === 'Chonchie' ? '초라기' : pokemonName.name}</h1>
                    <div>
                        ${Translator(Object.values(pokemonSprite.type)[0])}
                        ${Translator(Object.values(pokemonSprite.type)[1])}
                    </div>
                </a>
            </li>
            `
            if(inputRef.current.innerHTML === null) return;
            inputRef.current.innerHTML += output;
        }else{
            let output = `
            <li>
                <a href="/${pokemonSprite.id}">
                    <img loading="lazy" src=${pokemonSprite.image} alt=${pokemonName.name} />
                    <span class='ID'>#${pokemonSprite.id}</span>
                    <h1>${pokemonName.name}</h1>
                    <div>
                        ${Translator(Object.values(pokemonSprite.type)[0])}
                    </div>
                </a>
            </li>
            `
            if(inputRef.current.innerHTML === null) return;
            inputRef.current.innerHTML += output;
        }
    }

    function callback(){
        return;
    }

    const observer = useRef(
        new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                callback(); 
                }
            },
            { threshold: 1 }
        )
    );

    useEffect(() => {
        window.onload = () => {
            fetchData()
        }   
    }, [fetchData]);

    return(
        <>
            <Pokemon className="List" ref={inputRef}>
                <div className="Observer" ref={observer} ></div>
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