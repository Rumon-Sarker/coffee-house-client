import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import Cover from "../../Shared/Cover/Cover";
import img from "../../assets/banner/orderbg.jpg";
import { useState } from "react";
import useMenu from "../../hocks/useMenu";

import OrderTab from "./OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
    const [menu] = useMenu();
    const { category } = useParams();
    const categorys = ["black-coffee", "green-coffee", "normal-coffee", "offer"];
    const initailIndex = categorys.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initailIndex);

    const greenCoffee = menu.filter((item) => item.category == "greencoffee");
    const blackcoffee = menu.filter((item) => item.category == "blackcoffee");
    const normalcoffee = menu.filter((item) => item.category == "normalcoffee");
    const offer = menu.filter((item) => item.category == "offer");
    return (
        <div>
            <Helmet><title>Coffee House / Order</title></Helmet>
            <Cover img={img} title={">>Order Now..."} ></Cover>
            <div className="text-center my-12">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Black_Coffee</Tab>
                        <Tab>Green_Coffee</Tab>
                        <Tab>Normal_Coffee</Tab>
                        <Tab>Offer</Tab>
                    </TabList>
                    <TabPanel>
                        <OrderTab items={blackcoffee}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={greenCoffee}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={normalcoffee}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={offer}></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;