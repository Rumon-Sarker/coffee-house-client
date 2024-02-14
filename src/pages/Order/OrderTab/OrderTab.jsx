import CoffeeCard from "../../../components/CoffeeCard/CoffeeCard";

const OrderTab = ({ items }) => {
    return (
        <div className="grid items-center mx-auto justify-center md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-5">
            {
                items.map((items, index) => (
                    <CoffeeCard key={index} items={items}></CoffeeCard>
                ))
            }
        </div>
    );
};

export default OrderTab;