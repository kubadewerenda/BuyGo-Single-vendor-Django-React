import { BASE_URL } from "../../api";
import styles from "./HomeCard.module.css";
import { Link } from "react-router-dom";

const HomeCard = ({product}) => {
    return (
        <div className={`col-md-3 ${styles.col}`}>
            {/* /products/ zaczyna od niowa a products/ dodaje do linku */}
            <Link to={`/products/${product.slug}`}>
                <div className={styles.card}>
                    <div className={styles.cardImgWrapper}>
                        <img src={`${BASE_URL}${product.image}`} className={styles.cardImgTop} alt="Product Image" />
                    </div>
                    <div className={styles.cardBody}>
                        <h5 className={`${styles.cardTitle} mb-1`}>{product.name}</h5>
                        <h6 className={styles.cardText}>{`${product.price}$`}</h6>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default HomeCard