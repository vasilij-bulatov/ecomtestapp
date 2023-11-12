export function getTotal(products) {
  let total = 0;
  products.forEach(item => {
    total =
      total +
      (item.price - (item?.price / 100) * item.discountPercentage) *
        item.quantity;
  });
  return total;
}
