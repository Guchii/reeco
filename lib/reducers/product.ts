import initialState from "@/initial-data.json"

export enum Status {
  Missing = "Missing",
  MissingUrgent = "Missing - Urgent",
  Approved = "Approved",
  PriceUpdated = "Price Updated",
  QuantityUpdated = "Quantity Updated",
  PriceQuantityUpdated = "Price and Quantity Updated",
  Available = "Available",
}

const productReducer = (
  state = initialState.products,
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
