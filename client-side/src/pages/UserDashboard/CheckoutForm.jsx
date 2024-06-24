/** @format */

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./CheckoutForm.css";
import { ImSpinner9 } from "react-icons/im";
import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import Spinner from "../../shared/Spinner";
import toast from "react-hot-toast";
const CheckoutForm = ({ setIsOpen }) => {
	const { user, loading } = useAuth();
	const axios = useAxios();
	const stripe = useStripe();
	const elements = useElements();
	const [paymentError, setPaymentError] = useState("");
	const [client_secret, setClient_secret] = useState("");
	const [proccesing, setProccesing] = useState(false);
	useEffect(() => {
		getClientSecret(500);
	}, []);
	const getClientSecret = async (price) => {
		const { data } = await axios.post("/create-payment-intent", { price });
		setClient_secret(data?.clientSecret);
	};
	if (loading) return <Spinner />;

	const handleSubmit = async (event) => {
		// Block native form submission.
		event.preventDefault();
		setProccesing(true);
		if (!stripe || !elements) {
			// Stripe.js has not loaded yet. Make sure to disable
			// form submission until Stripe.js has loaded.
			return;
		}
		// Get a reference to a mounted CardElement. Elements knows how
		// to find your CardElement because there can only ever be one of
		// each type of element.
		const card = elements.getElement(CardElement);

		if (card == null) {
			return console.log("card null console to check what card", card);
		}

		// Use your card Element with other Stripe.js APIs
		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: "card",
			card,
		});

		// confirm payment
		const { error: confirmError, paymentIntent } =
			await stripe.confirmCardPayment(client_secret, {
				payment_method: {
					card: card,
					billing_details: {
						email: user?.email,
						name: user?.displayName || "anonymous",
					},
				},
			});

		if (error || confirmError) {
			return setPaymentError(error?.message || confirmError?.message);
		} else {
			console.log("[PaymentMethod]", paymentMethod);
			setPaymentError("");
		}

		if (paymentIntent.status === "succeeded") {
			// 1. create payment info objects
			const paymentInfo = {
				user: user?.email,
				displayName: user?.displayName,
				packageName: "dhaka tour",
				transactionId: paymentIntent?.id,
				paymentDate: new Date(),
				price: 500,
			};
			//2. save this booking || payment data
			const { data } = await axios.post("/payment-history", paymentInfo);
			if (data.insertedId) {
				toast.success("Payment Success");
				setIsOpen(false);
			}
			//3 . change ui state pay to payment done
		}

		setProccesing(false);
	};

	return (
		<>
			{paymentError && <p className="text-red-500 my-1">{paymentError}</p>}
			<form onSubmit={handleSubmit}>
				<CardElement
					options={{
						style: {
							base: {
								fontSize: "16px",
								color: "#424770",
								"::placeholder": {
									color: "#aab7c4",
								},
							},
							invalid: {
								color: "#9e2146",
							},
						},
					}}
				/>
				{proccesing ? (
					<button disabled>
						<ImSpinner9 size={20} className="animate-spin my-3" />
					</button>
				) : (
					<button
						type="submit"
						disabled={!stripe || !client_secret || paymentError}
					>
						Pay
					</button>
				)}
			</form>
			<div className="text-end -mt-10">
				<button className="bg-red-400" onClick={() => setIsOpen(false)}>
					Cancel
				</button>
			</div>
		</>
	);
};
export default CheckoutForm;
