import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";

//todo public key assign
const stripePromise = loadStripe('pk_test_51OWaDGEuuv96ci4xuNQDv4HNt02VV7BPUwcasEYLr6v008povbxRKmRDxPhG4syR0qMcHsjtwk1M4XRIyHTjgYH200j1LklSLt');
const Payments = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center">Payaments Methods</h1>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payments;