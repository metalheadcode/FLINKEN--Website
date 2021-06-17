import React, { Component } from "react";
import classes from "./TeamLayoutsTypeEleventh.module.css";
import Member from "./Member/MemberTypeEleventh";
import UserPicList from "../../../components/UserPicList/UserPicList";
import { Container, Col, Row } from "reactstrap";
import { LinkedIn } from "../../../components/Icons/Icons";
import Socials from "../../../components/Socials/Socials";
import Divider from "../../../components/Divider/Divider";
import { Fade } from "react-awesome-reveal";

const title = "Our Team";
class TeamLayoutsTypeEleventh extends Component {
    state = {
        activePerson: 0,
        person: [
            {
                name: "Gordon Phur E.Y",
                post: "Director, Co-Founder",
                id: 1,
                socials: [{ social: "LinkedIn", link: "https://www.linkedin.com/in/gordon-phur-2780a5152/?originalSubdomain=my", id: "1", icon: <LinkedIn /> }],
                description:
                    "Hold Master in Civil Engineering from Liverpool John Moores University, UK with experiences in construction industry. Upon returning to his hometown, Gordon and his co-founder lead the young minds to venture into the dry-mix manufacturing and setup the first dry-mix factory, FLINKEN in Sarawak. Currently, he leads the team with two dry-mix factories in Kuching and Miri, manufacturing of fine dry sand, super-fine calcium carbonate powders and also premix- manufacturing. Also he leads the team to undertake innovative and smart manufacturing with the aims to achieve the forth industry revolution.",
                picture: "https://res.cloudinary.com/metalheadcoder/image/upload/v1623835051/FLINKEN%C2%AE%20Website/Gordon_Phurr_qscclo.png",
                avatar: "https://res.cloudinary.com/metalheadcoder/image/upload/v1623836141/FLINKEN%C2%AE%20Website/Avatar_1_jnejjk.png",
            },
            {
                name: "Marcus Chai K.K",
                post: "Director, Co-Founder",
                id: 2,
                socials: [{ social: "LinkedIn", link: "https://www.linkedin.com/in/marcus-chai-042088192/", id: "1", icon: <LinkedIn /> }],
                description:
                    "Hold Master in Business Administration from University of Sunderland, UK with more 10 year experiences in cement and ready mixed concrete industry. His roles includes financial planning actions, connecting resources to ensure the finance of FLINKEN is healthy and sustainable growth in long term basis. He successfully leads various investors to trust and invest to the company that achieves tremendous growth within a short period. Marcus is also a visionary leader that believes in technology and hence FLINKEN’s core vision is to apply the advance of technology include Artificial Intelligence in assisting his daily analysis and administration.",
                picture: "https://res.cloudinary.com/metalheadcoder/image/upload/v1623835051/FLINKEN%C2%AE%20Website/Marcus_Chai_d7dd9k.png",
                avatar: "https://res.cloudinary.com/metalheadcoder/image/upload/v1623836141/FLINKEN%C2%AE%20Website/Avatar_2_av33qx.png",
            },
            {
                name: "Ts. Dr. Chai K.C",
                post: "Chief of Innovation",
                id: 3,
                socials: [{ social: "LinkedIn", link: "https://www.linkedin.com/in/dr-chai-kc-36219b40/", id: "1", icon: <LinkedIn /> }],
                description:
                    "A technopreneur who received his PhD in Electronic and Computer Engineering and completed his post-doctoral research in 2016 and 2017. He was recognised as a professional Technologist by Malaysia Board of Technology in 2021. By aggregating his research skills with business experiences, he assists the team in apply advanced information technology include artificial intelligence for daily operation includes, inventory management, product inspection, warehouse management, human resource management, and etc.",
                picture: "https://res.cloudinary.com/metalheadcoder/image/upload/v1623835051/FLINKEN%C2%AE%20Website/KC_Chai_jmprz1.png",
                avatar: "https://res.cloudinary.com/metalheadcoder/image/upload/v1623836141/FLINKEN%C2%AE%20Website/Avatar_3_khxt3f.png",
            },
            {
                name: "Marcus Sia C.P",
                post: "Chief of Operation",
                id: 4,
                socials: [{ social: "LinkedIn", link: "https://www.linkedin.com/in/dr-chai-kc-36219b40/", id: "1", icon: <LinkedIn /> }],
                description:
                    "With years of operating experiences in Kion Sing Hardware and Industrial and Marcus’s vision, he was invited to join FLINKEN and established the new FLINKEN factory in Miri. Currently, he is one of the key operating chief that assists FLINKEN Group in expanding and distributing FLINKEN products to Brunei, Sibu, Bintulu, Miri and other regions. Marcus is a very dedicated and on-the-ground partner who plays great roles in the team to ensure top customer relationship and satisfaction by continuous.",
                picture: "https://res.cloudinary.com/metalheadcoder/image/upload/v1623835051/FLINKEN%C2%AE%20Website/Marcus_Sia_ujdd5r.png",
                avatar: "https://res.cloudinary.com/metalheadcoder/image/upload/v1623836141/FLINKEN%C2%AE%20Website/Avatar_4_ibymrn.png",
            },
            {
                name: "Hannah Chong M.F",
                post: "Chief of Marketing",
                id: 5,
                socials: [{ social: "LinkedIn", link: "https://www.linkedin.com/in/dr-chai-kc-36219b40/", id: "1", icon: <LinkedIn /> }],
                description:
                    "Hold Master in Economy from UNIMAS with great experiences in marketing research and execution. Her responsibility includes oversee the planning, development and execution of an organization’s marketing and advertising initiatives. Within just a short period, Hannah manages to make FLINKEN products and brand known in the local market especially to the construction industry. She plays great strategies in both online digital and physical marketing to ensure sustainable development of the company.",
                picture: "https://res.cloudinary.com/metalheadcoder/image/upload/v1623835051/FLINKEN%C2%AE%20Website/Hannah_Chong_qzldmm.png",
                avatar: "https://res.cloudinary.com/metalheadcoder/image/upload/v1623836141/FLINKEN%C2%AE%20Website/Avatar_5_jtf3hl.png",
            },
        ],
    };

    onButtonClickHandler = (event) => {
        this.setState({ activePerson: event.target.closest("button").id - 1 });
    };

    render() {
        return (
            <React.Fragment>
                <section className={`section ${classes.teams} ${this.props.dark ? `dark ${classes.dark}` : ""}`}>
                    <div className={classes.gridWrapper}>
                        <Container>
                            <Row>
                                <Col lg="6" md="6" className={classes.leftColumn}>
                                    <Fade down triggerOnce={true}>
                                        <h3>{title}</h3>
                                    </Fade>
                                    <Fade down delay={50} triggerOnce={true}>
                                        <div className={classes.userList}>
                                            <UserPicList target={this.state.person} onClick={this.onButtonClickHandler} element={this.state.activePerson} />
                                        </div>
                                    </Fade>
                                    <Fade down delay={100} triggerOnce={true}>
                                        <div className={classes.divider}>
                                            <Divider />
                                        </div>
                                    </Fade>
                                    <Fade down delay={150} triggerOnce={true}>
                                        <Member
                                            name={this.state.person[this.state.activePerson].name}
                                            post={this.state.person[this.state.activePerson].post}
                                            description={this.state.person[this.state.activePerson].description}
                                            socials={
                                                <Socials dark={this.props.dark ? true : false}>
                                                    {this.state.person[this.state.activePerson].socials.map((item, index) => {
                                                        return (
                                                            <a target="_blank" href={item.link} key={index}>
                                                                {item.icon}
                                                            </a>
                                                        );
                                                    })}
                                                </Socials>
                                            }
                                        />
                                    </Fade>
                                </Col>

                                <Col lg={{ size: 5, offset: 1 }} md={6} className={classes.rightColumn}>
                                    <Fade down delay={100} triggerOnce={true}>
                                        <>
                                            <img src={this.state.person[this.state.activePerson].picture} alt="person" />
                                        </>
                                    </Fade>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default TeamLayoutsTypeEleventh;
