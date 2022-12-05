// import normal  from '../asset/img/types/노말.png'
// import fight  from '../asset/img/types/격투.png'
// import fly from '../asset/img/types/비행.png'
// import poison  from '../asset/img/types/독.png'
// import ground  from '../asset/img/types/땅.png'
// import rock  from '../asset/img/types/바위.png'
// import bug  from '../asset/img/types/벌레.png'
// import ghost  from '../asset/img/types/고스트.png'
// import iorn  from '../asset/img/types/강철.png'
// import fire  from '../asset/img/types/불.png'
// import water  from '../asset/img/types/물.png'
// import leaf  from '../asset/img/types/풀.png'
// import electric  from '../asset/img/types/전기.png'
// import esper  from '../asset/img/types/에스퍼.png'
// import ice  from '../asset/img/types/얼음.png'
// import dragon  from '../asset/img/types/드래곤.png'
// import ak  from '../asset/img/types/악.png'
// import farr  from '../asset/img/types/페어리.png'


export const Translator = (word) => {
    if(word === 'normal'){
        return <span >노말</span>
    }else if(word === 'fighting'){
        return <span >격투</span>
    }else if(word === 'flying'){
        return <span >비행</span>
    }else if(word === 'poison'){
        return <span >독</span>
    }else if(word === 'ground'){
        return <span >땅</span>
    }else if(word === 'rock'){
        return <span >바위</span>
    }else if(word === 'bug'){
        return <span >벌레</span>
    }else if(word === 'ghost'){
        return <span >고스트</span>
    }else if(word === 'steel'){
        return <span >강철</span>
    }else if(word === 'fire'){
        return <span >불꽃</span>
    }else if(word === 'water'){
        return <span >물</span>
    }else if(word === 'grass'){
        return <span >풀</span>
    }else if(word === 'electric'){
        return <span >전기</span>
    }else if(word === 'psychic'){
        return <span >에스퍼</span>
    }else if(word === 'ice'){
        return <span >얼음</span>
    }else if(word === 'dragon'){
        return <span >드래곤</span>
    }else if(word === 'dark'){
        return <span >악</span>
    }else if(word === 'fairy'){
        return <span >페어리</span>
    }else if(word === undefined){
        return null;
    }else{
        return <span >언노운</span>
    }
}