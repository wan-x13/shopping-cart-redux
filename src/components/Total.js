import { useSelector } from 'react-redux'
import './total.css'

function Total() {
  const {cart} = useSelector((state)=>state.cart)

  const getTotal = ()=>{

    let totalQuantity = 0
    let totalPrice = 0

    cart.forEach(item=>{
      totalQuantity += item.quantity
      totalPrice += item.price

    })
    return {totalPrice , totalQuantity}
  }
 
  return (
    <div className="total">
      <h2>ORDER SUMMARY</h2>
      <div>
        <p className="total__p">
          total ({getTotal().totalQuantity}) : <strong>${getTotal().totalPrice}</strong>
        </p>
      </div>
    </div>
  )
}

export default Total