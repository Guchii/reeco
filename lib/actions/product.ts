export const addProduct = (product: any) => {
  return {
    type: "ADD_PRODUCT",
    payload: product,
  }
}

export const editProduct = (id: any, changes: any) => {
  return {
    type: "EDIT_PRODUCT",
    payload: { id, changes },
  }
}
