import { Translator } from "../func/Translator";
import { Link } from "react-router-dom";

const Card = ({ id, name, sprite, types }) => {
    return(
        <li>
            <Link to={`/${id}`}>
                <img src={`${sprite}`} alt={`${name}`} />
                <span className='ID'>#{id}</span>
                <h1>{name === 'Chonchie' ? '초라기' : name}</h1>
                <div>
                    {Translator(types[0])}
                    {Translator(types[1])}
                </div>
            </Link>
        </li>
    )
}

export default Card;