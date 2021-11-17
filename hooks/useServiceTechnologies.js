
const serviceTechnologies = [
    { id: 1, label: "Tool 1" },
    { id: 2, label: "Tool 2" },
    { id: 3, label: "Tool 3" },
    { id: 4, label: "Tool 4" },
  ]

export const useServiceTechnology = (featureId) => {
    return serviceTechnologies?.find(sf => sf.id == featureId) 
}

export const useServiceTechnologies = (serviceId) => {
    // This should return the service technologies for given service Id
    return serviceTechnologies
}
