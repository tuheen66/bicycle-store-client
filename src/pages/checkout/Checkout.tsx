import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const stripePromise = loadStripe(
  import.meta.env.VITE_Payment_Gateway_PK as string
);

const Checkout = () => {
  return (
    <div className="my-12 w-[45%] mx-auto bg-gray-200 p-4 rounded-xl">
      <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>
    </div>
  );
};

export default Checkout;
