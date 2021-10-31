import * as React from "react";

export const useTeams = () => {
    const [isLoading, setIsLoading] = React.useState(false)
    const [data, setData] = React.useState([
        { id: 1, label: "Team One" },
        { id: 2, label: "Team Two" },
        { id: 3, label: "Team Three" },
    ])

    return {
        isLoading,
        data,
    }
}
