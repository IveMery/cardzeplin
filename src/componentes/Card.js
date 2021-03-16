import './Card.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";



const Card = ({ title, type, price, img, rating, isAvailable, onSale }) => {
    return (


        <article className="card">
            <div className="card-container-img">
                <img className={isAvailable && 'image'} src={img} alt="product"></img>
            </div>
            <div className="card-container-info">
                <h2 className="title">{title} {onSale ? <span>ON SALE!</span> : ''} </h2>
                <p className="type">{type}</p>
                {/* <p>{rating >0 ? <span><FontAwesomeIcon icon={faStar} /></span>:rating}</p> */}
                <p>{rating}</p>
                <p className="price">{price}</p>
               
            </div>


        </article>
    )
}

export default Card