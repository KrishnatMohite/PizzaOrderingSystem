import { environment } from 'src/environments/environment';

export const ApiBaseUrl = (()=>{
    if(environment.production) {
        return './';
    } else {
        return 'http://localhost:49907/api/';
    }    
})();


export enum VegNonVegtype {
    veg = "veg",
    nonveg = "nonveg"
}

export enum PizzaSize {
    Regular="Regular",
    Medium= "Medium",
    Large="Large",
}
export enum OrderType {
    Custome="Custome",
    Regular="Regular"
}
export enum OrderStatus {
    Open="Open",
    Closed = "Closed"
}

