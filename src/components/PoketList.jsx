import { Pokemon } from "../style/InfoStyle";
import LottieCompo from "../lottie/lottieCompo";

import { useQuery } from "react-query";
import { APIFetcher } from "../api/api";

export default function PokeList(){
    const { isLoading, data } = useQuery("FCoins", APIFetcher)
    if(isLoading === false){
        // Object.values(data.pokemon_entries).map(item => {console.log(item.pokemon_species.name)})
        // .map(item => {console.log(item);})
        // 0번 이상해씨부터 905번 랜드로스까지 전국도감 
        // 관동, 성도, 호연, 신오, 하나, 칼로스, 알로라, 가라르, 히스이 
        // (팔데아)는 아직 안 나옴
        // 체킹 방식 클래스 이름으로 지방 이름 새겨넣기. 검색기능과 태그로 검색 가능
    }
    
    return(
        <>
            {isLoading ? <LottieCompo /> : <Pokemon>
                {Object.values(data.pokemon_entries).map(item => <li className={item.name}></li>)}
            </Pokemon>}
        </>
    )
}