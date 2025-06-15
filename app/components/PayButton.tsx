/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { useRazorpay, RazorpayOrderOptions } from "react-razorpay";
import axios from "axios";


export default function PayButton() {
  const { Razorpay } = useRazorpay();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = RAZORPAY_CHECKOUT_URL;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = async () => {
    try {
      // Step 1: Create an order on the server
      const response = await axios.post("https://wym-backend.onrender.com/order", {
        amount: 500, // Amount in rupees
      });

      const { id: order_id, amount, currency } = response.data;

      // Step 2: Configure Razorpay options
      const options: RazorpayOrderOptions = {
        key: RZKEY,
        amount: amount,
        currency: currency,
        name: "Test Company",
        description: "Test Transaction",
        order_id: order_id,
        handler: function (response) {
          console.log("Payment successful!", response);
          alert("Payment Successful!");
        },
        prefill: {
          name: "John Doe",
          email: "john.doe@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#12213B",
        },
      };

      // Step 3: Open Razorpay payment modal
      const razorpayInstance = new Razorpay(options);
      razorpayInstance.open();

    } catch (error) {
      console.error("Payment initiation failed", error);
      alert("Payment initiation failed. Please try again.");
    }
  };

  return (
    <button
      onClick={handlePayment}
      className="px-4 py-2 bg-blue-600 text-white rounded-md"
    >
      Pay
    </button>
  );
}


// WIP
// Create money parameters for the order
// Ensure to keep credentials secure
// 