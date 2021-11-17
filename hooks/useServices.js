
const services =  [
    { id: 1, label: "Service 1" },
    { id: 2, label: "Service 2" },
    { id: 3, label: "Service 3" },
    { id: 4, label: "Service 4" },
  ]

export const useService = (serviceId) => {
    return services?.find(s => s.id == serviceId) 
}

export const useServices = () => {
    return services
}
