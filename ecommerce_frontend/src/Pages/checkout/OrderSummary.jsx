import dayjs from "dayjs";
import { formatMoney } from "../../utils/money";
import { DeliveryOption } from "./DeliveryOptions";
import { CartItemDetails } from "./CartItemDetails";

export function OrderSummary({cart, deliveryOptions}) {
    return (

        <div className="order-summary">
            {/* works as if statements, only if first condition is true - run the code  */}
            {deliveryOptions.length > 0 && cart.map((cartItem) => {

                const selectedDeliveryOption = deliveryOptions
                    .find((deliveryOption) => {
                        return deliveryOption.id === cartItem.deliveryOptionId;
                    });

                return (
                    // key prop 
                    <div key={cartItem.productId} className="cart-item-container">
                        <div className="delivery-date">
                            Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                        </div>

                        <div className="cart-item-details-grid">
                            <img className="product-image"
                                src={cartItem.product.image} />

                            <CartItemDetails cartItem={cartItem} />

                            <DeliveryOption cartItem={cartItem} deliveryOptions={deliveryOptions} />

                        </div>
                    </div>
                );

            })}

        </div>

    );
}