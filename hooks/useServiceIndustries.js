
const serviceIndustries = [
    { id: 1, label: "Industry 1" },
    { id: 2, label: "Industry 2" },
    { id: 3, label: "Industry 3" },
    { id: 4, label: "Industry 4" },
  ]

export const useServiceIndustry = (featureId) => {
    return serviceIndustries?.find(sf => sf.id == featureId) 
}

export const useServiceIndustries = (serviceId) => {
    // This should return the service industries for given service Id
    return serviceIndustries
}
