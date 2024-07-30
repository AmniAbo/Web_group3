import { useState, useEffect, useContext } from "preact/hooks"
import { MarketContext } from "../utils/context"
import CoinRow from "./coinRow"

export default function Market() {
    const { state, dispatch } = useContext(MarketContext)

    useEffect(() => {
        fetch("https://api.mtw-testnet.com/assets/all")
            .then((response) => response.json())
            .then((d) => {
                dispatch({ type: "SET_DATA", payload: d })
                console.log(d)
            })
    }, [])

    return (
        <div>
            <h1 class="text-2xl font-bold pb-4">List of Cryptocurrencies</h1>
            {state.data &&
                Object.entries(state.data).map(([key, value], index) => (
                    <CoinRow
                        symbol={key}
                        coin={value}
                        index={index}
                        key={index}
                    />
                ))}
        </div>
    )
}