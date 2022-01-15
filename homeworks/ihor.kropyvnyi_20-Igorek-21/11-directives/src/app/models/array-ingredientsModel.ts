export interface ArrayIngredientsModel {
    hops:{
        0: {
            add: string,
            amount: {
                unit: string,
                value: number
            },
            attribute: string,
            name: string
        },
        1: {
            add: string,
            amount: {
                unit: string,
                value: number
            },
            attribute: string,
            name: string
        },
        2: {
            add: string,
            amount: {
                unit: string,
                value: number
            },
            attribute: string,
            name: string
        },
        3: {
            add: string,
            amount: {
                unit: string,
                value: number
            },
            attribute: string,
            name: string
        },
        4: {
            add: string,
            amount: {
                unit: string,
                value: number
            },
            attribute: string,
            name: string
        }
    },
    malt: {
        0: {
            amount:{
                unit: string,
                value: number
            } ,
            name: string
        },
        1: {
            amount:{
                unit: string,
                value: number
            } ,
            name: string
        },
        2: {
            amount:{
                unit: string,
                value: number
            } ,
            name: string
        }
    },
    yeast: string
}
