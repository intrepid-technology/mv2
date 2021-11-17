
const serviceCategories = [
    { id: 1, label: "Category 1" },
    { id: 2, label: "Category 2" },
    { id: 3, label: "Category 3" },
    { id: 4, label: "Category 4" },
  ]

export const useServiceCategory = (categoryId) => {
    return serviceCategories?.find(sc => sc.id == categoryId) 
}

export const useServiceCategories = () => {
    return serviceCategories
}
