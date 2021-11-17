
const serviceFeatures =  [
    { id: 1, label: "Competitor Analysis" },
    { id: 2, label: "Quatitative Survey" },
    { id: 3, label: "User Personas" },
    { id: 4, label: "User Journey Mapping" },
    { id: 5, label: "Product Positioning" },
  ]

export const useServiceFeature = (featureId) => {
    return serviceFeatures?.find(sf => sf.id == featureId) 
}

export const useServiceFeatures = (serviceId) => {
    // This should return the service features for given service Id
    return serviceFeatures
}
