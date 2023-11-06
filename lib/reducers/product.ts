import { nanoid } from "nanoid"

export enum Status {
  Missing = "Missing",
  MissingUrgent = "Missing - Urgent",
  Approved = "Approved",
  PriceUpdated = "Price Updated",
  QuantityUpdated = "Quantity Updated",
  PriceQuantityUpdated = "Price and Quantity Updated",
  Available = "Available",
}
const initialState = [
  {
    id: nanoid(),
    name: "Chicken Breast Fillets, Boneless, Marinated 6 ounce Raw, invivid",
    image: "/avocado.jpg",
    brand: "Hormen Black Labelmany",
    status: Status.Missing,
    price: "250",
    changeReason: undefined,
    quantity: "500",
  },
  {
    id: nanoid(),
    name: "Chicken Breast Fillets, Boneless, Marinated 6 ounce Raw, invivid",
    image: "/avocado.jpg",
    brand: "Hormen Black Labelmany",
    status: Status.PriceQuantityUpdated,
    changeReason: undefined,
    price: "250",
    quantity: "500",
  },
]

const productReducer = (
  state = initialState,
  action: { type: "ADD_PRODUCT" | "EDIT_PRODUCT"; payload: any }
) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [...state, action.payload]

    case "EDIT_PRODUCT":
      return state.map((product) =>
        product.id === action.payload.id
          ? { ...product, ...action.payload.changes }
          : product
      )

    default:
      return state
  }
}

export default productReducer
