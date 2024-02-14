import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Populer from "../Populer/Populer";
import ResentMenu from "../ResentMenu/ResentMenu";
import Review from "../Review/Review";
import Team from "../Team/Team";
import Contact from "../../Contact/Contact";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Green Coffee House</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Populer></Populer>
            <ResentMenu></ResentMenu>
            <Featured></Featured>
            <Team></Team>
            <Contact></Contact>
            <Review></Review>

        </div>
    );
};

export default Home;