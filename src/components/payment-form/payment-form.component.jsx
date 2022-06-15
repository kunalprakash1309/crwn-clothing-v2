import { CardElement, useStripe, useElements} from "@stripe/react-stripe-js"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAllItemFromCart } from "../../store/cart/cart.actions";
import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { BUTTON_TYPE_CLASSES } from "../button/button.component"

import { FormContainer, PaymentButton } from "./payment-form.styles"


const PaymentForm = () => {

  const dispatch = useDispatch()

  const stripe = useStripe();
  const elements = useElements()
  const [isProcessingPayment, setIsProcessingPayment] = useState(false)

  const amount = useSelector(selectCartTotal)
  const currentUser = useSelector(selectCurrentUser)

  const paymentHandler = async (e) => {
    e.preventDefault()

    if(!stripe || !elements) return
    

    setIsProcessingPayment(true)
    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ amount: amount * 75 * 100 })
    }).then(res => res.json());

    const { paymentIntent: { client_secret }} = response

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName: 'Kunal Prakash'
        }
      }
    })

    setIsProcessingPayment(false)

    if(paymentResult.error) {
      alert(paymentResult.error.message)
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful!")
        dispatch(clearAllItemFromCart())
      }
    }
  }

  return (
    <FormContainer onSubmit={paymentHandler}>
      <h2>Credit Card Payment:</h2>
      <CardElement />
      <PaymentButton
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        isLoading = { isProcessingPayment }
      >
        Pay Now
      </PaymentButton>
    </FormContainer>
  )
}

export default PaymentForm