import App from "../App";

function ProductCard({title,price}) {


    // console.log(props);




    return(
        <div className="ProductCard">
            {/*ProductCard*/}
            {/*props.title;*/}
            {/*title*/}

            <p> {title} </p>
            <p>{price}</p>
        </div>
    )
}


export default ProductCard;