import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import img from '../../../assets/category/ColdBrewCoffee.jpg'
import MenuCategory from "../MenuCategory/MenuCategory";
import useMenu from "../../../hocks/useMenu";

const Menu = () => {
    const [menu] = useMenu()
    const greencoffee = menu.filter((item) => item.category == "greencoffee");
    const blackcoffee = menu.filter((item) => item.category == "blackcoffee");
    const normalcoffee = menu.filter((item) => item.category == "normalcoffee");
    const offer = menu.filter((item) => item.category == "offer");
    return (
        <div>
            <Helmet>
                <title>Coffe House / Menu</title>
            </Helmet>
            <Cover title={"Menu Items List"} img={img}></Cover>
            <MenuCategory title={"green-coffee"} category={greencoffee}></MenuCategory>
            <MenuCategory title={"black-coffee"} category={blackcoffee}></MenuCategory>
            <MenuCategory title={"offer"} category={offer}></MenuCategory>
            <MenuCategory title={"normal-coffee"} category={normalcoffee}></MenuCategory>
        </div>
    );
};

export default Menu;