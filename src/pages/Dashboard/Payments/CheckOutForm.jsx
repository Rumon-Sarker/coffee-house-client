import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxionSecure from "../../../hocks/useAxionSecure";
import useCart from "../../../hocks/useCart";
import useAuth from "../../../hocks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const CheckOutForm = () => {
    const [taransitionId, setTaramsitionId] = useState("")
    const [error, setError] = useState('');
    const { user } = useAuth();
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxionSecure();
    const navigate = useNavigate()
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)


    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post("/create-payment-intent", { price: totalPrice })
                .then(res => {
                    console.log("clienst secret", res.data.clientSecret);
                    setClientSecret(res.data.clientSecret)

                })
        }

    }, [axiosSecure, totalPrice])



    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log("Error", error)
            setError(error.message)
        }
        else {
            console.log("Paymentmethod", paymentMethod)
            setError("")
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user.displayName || "anonymous",
                        email: user.email || "anonymous",
                    }
                }
            });
        if (confirmError) {
            console.log("Confirm Error")
        }
        else {
            console.log("paymentIntens", paymentIntent)
            if (paymentIntent.status == "succeeded") {
                setTaramsitionId(paymentIntent.id)


                const payments = {
                    email: user.email,
                    price: totalPrice,
                    date: new Date(),
                    taransitionId: paymentIntent.id,
                    cartIds: cart.map(item => item._id),
                    menuIds: cart.map(item => item.menuId),
                    status: "pending"
                }
                const res = await axiosSecure.post("/payments", payments)
                console.log(res.data)

                if (res.data?.paymentsResult?.insertedId) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Payment Success",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate("/dashboard/paymentsHistory")
                }
            }
        }



    };
    return (
        <div className="w-8/12 mx-auto mt-12">
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '20px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-outline mt-4 btn-sm bg-green-100" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                <p className="text-red-600">{error}</p>
                {taransitionId && <p className="text-green-500">Payments Success taransitionId: {taransitionId}</p>}
            </form>
        </div>
    );
};

export default CheckOutForm;