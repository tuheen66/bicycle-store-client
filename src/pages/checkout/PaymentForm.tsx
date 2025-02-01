/* eslint-disable @typescript-eslint/no-explicit-any */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { usePaymentMutation } from "../../redux/features/orders/ordersApi";

import { useAppSelector } from "../../redux/features/hooks";
import { useTotalPrice } from "../../redux/features/price/checkoutSlice";
import { useGetCustomerProfileQuery } from "../../redux/features/auth/authApi";
import { useCurrentUser } from "../../redux/features/auth/authSlice";
import { toast } from "sonner";

const PaymentForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const user = useAppSelector(useCurrentUser);
  const [payment] = usePaymentMutation();
  const { data: currentUser } = useGetCustomerProfileQuery(user?.email);

  const stripe = useStripe();
  const elements = useElements();
  const totalPrice = useAppSelector(useTotalPrice);

  const price = totalPrice ? parseInt((totalPrice * 100).toString()) : 0;

  console.log(currentUser);

  useEffect(() => {
    const createPaymentIntent = async () => {
      if (price > 0) {
        try {
          const res = await payment({ totalPrice: price }).unwrap();
          setClientSecret(res.data.clientSecret as string);
          console.log(res.data.clientSecret);
        } catch (err) {
          console.error("Error getting client secret:", err);
          setError("Failed to initialize payment. Please try again.");
        }
      }
    };

    createPaymentIntent();
  }, [price, payment]);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const toastId = toast.loading("Creating...");

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      toast.error(error.message, { id: toastId });
      console.log("payment error", error);
      setError(error.message || "");
    } else {
      console.log("payment method", paymentMethod);
      toast.success("Payment Successful", { id: toastId });
      setError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: currentUser?.data[0].email || "anonymous",
            name: currentUser?.data[0].name || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);
      }
    }
  };
  // 4242 4242 4242 4242

  return (
    <div>
      <h1 className="mb-4 text-2xl text-center font-semibold text-gray-700">
        Pay Here
      </h1>
      <form onSubmit={onSubmit}>
        <div className="bg-white p-2 rounded-xl my-4">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 mt-4 "
          >
            Your card details
          </label>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  // color: "#424770",
                  "::placeholder": {
                    color: "##374151 ",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <button
            className="bg-[#316881] py-1 rounded-lg w-20 border-none text-white text-lg mt-6 hover:bg-[#0d4763] "
            type="submit"
            disabled={!stripe || !clientSecret}
          >
            Pay
          </button>
          <p className="text-red-600">{error}</p>
          {transactionId && (
            <p className="text-green-600">
              Your Transaction Id : {transactionId}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
