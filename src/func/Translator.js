export const Translator = (word) => {
    if(word === 'normal'){
        return `<span style="--color: #A8A878" >노말</span>`
    }else if(word === 'fighting'){
        return `<span style="--color: #C03028" >격투</span>`
    }else if(word === 'flying'){
        return `<span style="--color: #A890F0" >비행</span>`
    }else if(word === 'poison'){
        return `<span style="--color: #A040A0" >독</span>`
    }else if(word === 'ground'){
        return `<span style="--color: #E0C068" >땅</span>`
    }else if(word === 'rock'){
        return `<span style="--color: #B8A038" >바위</span>`
    }else if(word === 'bug'){
        return `<span style="--color: #A8B820" >벌레</span>`
    }else if(word === 'ghost'){
        return `<span style="--color: #705898" >고스트</span>`
    }else if(word === 'steel'){
        return `<span style="--color: #B8B8D0" >강철</span>`
    }else if(word === 'fire'){
        return `<span style="--color: #F08030" >불꽃</span>`
    }else if(word === 'water'){
        return `<span style="--color: #6890F0" >물</span>`
    }else if(word === 'grass'){
        return `<span style="--color: #78C850" >풀</span>`
    }else if(word === 'electric'){
        return `<span style="--color: #F8D030" >전기</span>`
    }else if(word === 'psychic'){
        return `<span style="--color: #F85888" >에스퍼</span>`
    }else if(word === 'ice'){
        return `<span style="--color: #98D8D8" >얼음</span>`
    }else if(word === 'dragon'){
        return `<span style="--color: #7038F8" >드래곤</span>`
    }else if(word === 'dark'){
        return `<span style="--color: #705848" >악</span>`
    }else if(word === 'fairy'){
        return `<span style="--color: #EE99AC" >페어리</span>`
    }else{
        return `<span style="--color: #68A090" >언노운</span>`
    }
}