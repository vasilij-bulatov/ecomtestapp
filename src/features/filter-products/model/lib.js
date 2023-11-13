export function getSelectedCategoriesList(categories, selectedIndex) {
  const selectedCategories = [];
  selectedIndex.forEach((value) => {
    selectedCategories.push(categories[value]);
  });
  return selectedCategories;
}

export function filterByPriceRange(min, max, products) {
  console.log(products[0].price <= max);
  return products.filter(product => product.price >= min && product.price <= max);
}