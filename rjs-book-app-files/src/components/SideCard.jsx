import styles from "./Sidecard.module.css";


function SideCard ({data :{image , title}}){
    return(
        <div className={styles.container}>
            <img src={image} alt={title} />
            <p>{title}</p>
        </div>


    )
}

export default SideCard