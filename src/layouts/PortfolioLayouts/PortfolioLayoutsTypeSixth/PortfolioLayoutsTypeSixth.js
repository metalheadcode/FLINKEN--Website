import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Portfolio from "./Portfolio/PortfolioTypeSixth";
import Slider from "./Slider/Slider";
import classes from "./PortfolioLayoutsTypeSixth.module.css";

const title = "Projects References";
const placeholderDark = "https://res.cloudinary.com/metalheadcoder/image/upload/v1623819782/FLINKEN%C2%AE%20Website/placeholder-gray-dark_r3bucl.png";
const placeholder = "https://res.cloudinary.com/metalheadcoder/image/upload/v1623819781/FLINKEN%C2%AE%20Website/placeholder-gray_xkqdj6.png";

class PortfolioLayoutsTypeSixth extends Component {
    state = {
        projects: [
            {
                title: "Swimburne University",
                id: 1,
                description: "Simpang Tiga, Kuching",
                picture:
                    "https://www.swinburne.edu.my/wp-content/uploads/2020/02/1_An-artist%e2%80%99s-impression-shows-how-the-new-Swinburne-University-of-Technology-Sarawak-Campus-will-look-by-2022.jpg",
                link: "/some-link",
            },
            {
                title: "Sarawak General Hospital",
                id: 2,
                description: "Jalan Hospital, Kuching",
                picture: "https://www.akdi.net/wp-content/uploads/2016/05/b-Meditel-20130418.jpg",
                link: "/some-link",
            },
            {
                title: "Hikmah Exchange",
                id: 3,
                description: "Jalan Haji Taha, Kuching",
                picture: "https://sarawakvoice.com/wp-content/uploads/2019/05/hikmah.jpg",
                link: "/some-link",
            },
            {
                title: "Semariang Square",
                id: 4,
                description: "Semariang, Kuching",
                picture: "https://dwxbwps5boihg.cloudfront.net/property/pictures/7557964/samariang_square_-jHgqYyzJdB35U4fxbL5_large.jpg?v=1531187347",
                link: "/some-link",
            },
            {
                title: "Liberty Groove",
                id: 5,
                description: "Kota Sentosa, Kuching",
                picture: "https://www.theborneopost.com/newsimages/2017/02/TA05316.jpg",
                link: "/some-link",
            },
        ],
    };

    renderCards() {
        const card = this.state.projects;
        const listItems = card.map((item, index) => {
            return (
                <div key={index}>
                    <Portfolio title={item.title} descr={item.description}>
                        {item.picture ? <img src={item.picture} width="920" height="500" alt="" /> : <img src={this.props.dark ? placeholderDark : placeholder} width="920" height="500" alt="" />}
                    </Portfolio>
                </div>
            );
        });
        return <Slider array={listItems} />;
    }

    render() {
        return (
            <React.Fragment>
                <section className={`section  ${classes.portfolio} ${this.props.dark ? `dark ${classes.dark}` : ""}`}>
                    <div className={classes.wrapper}>
                        <div className={classes.left}>
                            <div className={classes.first}></div>
                            <div className={classes.second}>
                                <h2>{title}</h2>
                            </div>
                        </div>
                        <div className={classes.right}>{this.renderCards()}</div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default PortfolioLayoutsTypeSixth;
