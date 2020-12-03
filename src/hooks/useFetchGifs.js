import { useState } from "react"

// estos hooks tambien pueden tener estado, para avisarle
// a otros componentes cuando renderizarse porque algo cambio


export const useFetchGifs = () => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    return state; //El state es {data:[], loading:true}


}
