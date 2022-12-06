import { HashTag } from "../style/InfoStyle"

import normal  from '../asset/img/types/노말.png'
import fight  from '../asset/img/types/격투.png'
import fly from '../asset/img/types/비행.png'
import poison  from '../asset/img/types/독.png'
import ground  from '../asset/img/types/땅.png'
import rock  from '../asset/img/types/바위.png'
import bug  from '../asset/img/types/벌레.png'
import ghost  from '../asset/img/types/고스트.png'
import iorn  from '../asset/img/types/강철.png'
import fire  from '../asset/img/types/불.png'
import water  from '../asset/img/types/물.png'
import leaf  from '../asset/img/types/풀.png'
import electric  from '../asset/img/types/전기.png'
import esper  from '../asset/img/types/에스퍼.png'
import ice  from '../asset/img/types/얼음.png'
import dragon  from '../asset/img/types/드래곤.png'
import ak  from '../asset/img/types/악.png'
import farr  from '../asset/img/types/페어리.png'


export default function HashSection(){
    return(
        <>
            <HashTag className="HashTagUL">
                <li style={{'--color': '#A8A878'}}>노말<img src={normal} alt="normal 노말" /></li>
                <li style={{'--color': '#C03028'}}>격투<img src={fight} alt="fight 격투" /></li>
                <li style={{'--color': '#A890F0'}}>비행<img src={fly} alt="fly비행" /></li>
                <li style={{'--color': '#A040A0'}}>독<img src={poison} alt="poison 독" /></li>
                <li style={{'--color': '#E0C068'}}>땅<img src={ground} alt="ground 땅" /></li>
                <li style={{'--color': '#B8A038'}}>바위<img src={rock} alt="rock 바위" /></li>
                <li style={{'--color': '#A8B820'}}>벌레<img src={bug} alt="bug 벌레" /></li>
                <li style={{'--color': '#705898'}}>고스트<img src={ghost} alt="ghost 고스트" /></li>
                <li style={{'--color': '#B8B8D0'}}>강철<img src={iorn} alt="iorn 강철" /></li>
                <li style={{'--color': '#F08030'}}>불꽃<img src={fire} alt="fire 불" /></li>
                <li style={{'--color': '#6890F0'}}>물<img src={water} alt="water 물" /></li>
                <li style={{'--color': '#78C850'}}>풀<img src={leaf} alt="leaf 풀" /></li>
                <li style={{'--color': '#F8D030'}}>전기<img src={electric} alt="electric 전기" /></li>
                <li style={{'--color': '#F85888'}}>에스퍼<img src={esper} alt="esper 에스퍼" /></li>
                <li style={{'--color': '#98D8D8'}}>얼음<img src={ice} alt="ice 얼음" /></li>
                <li style={{'--color': '#7038F8'}}>드래곤<img src={dragon} alt="dragon 드래곤" /></li>
                <li style={{'--color': '#705848'}}>악<img src={ak} alt="ak 악" /></li>
                <li style={{'--color': '#EE99AC'}}>페어리<img src={farr} alt="farr 페어리" /></li>
            </HashTag>
        </>
    )
}