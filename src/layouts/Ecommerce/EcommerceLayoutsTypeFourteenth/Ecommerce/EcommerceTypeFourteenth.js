import React from "react";

//components
import SimpleRating from "../../../../components/SimpleRating/SimpleRating";
import SmallBadge from "../../../../components/SmallBadge/SmallBadge";
//styles
import classes from "./EcommerceTypeFourteenth.module.css";

const EcommerceTypeFourteenth = ({ dark, link, poster, rating, title, price }) => {
    return (
        <div className={`${classes.ecommerce}  ${dark ? `dark ${classes.dark}` : ""}`}>
            <a href={link}>
                <div className={classes.wrapper} style={{ backgroundImage: `url(${poster})` }}>
                    <div className={classes.top}>
                        <SimpleRating dark={dark ? true : false} value={rating} color="#ffffff" />
                        <SmallBadge>SALE</SmallBadge>
                    </div>

                    <div className={classes.bottom}>
                        <h3 className={classes.title}>{title}</h3>
                        <div className={classes.price}>RM{price}</div>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default EcommerceTypeFourteenth;
