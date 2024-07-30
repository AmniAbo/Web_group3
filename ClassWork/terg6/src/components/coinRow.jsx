import { MarketContext } from "../utils/context"
import { useContext } from "preact/hooks"

export default function CoinRow({ symbol, coin }) {
    const { state, dispatch } = useContext(MarketContext)

    return (
        <div class="border-t border-gray-200 py-2 grid grid-cols-12">
            <div class="col-span-1">
                <img src={coin.image} class="max-h-8" />
            </div>
            <div class="col-span-1">{symbol}</div>
            <div class="col-span-2">
                <p class="c-link" onClick={() => dispatch({ type: "SET_SELECTED_COIN", payload: symbol })}>
                    {coin.name}
                </p>
            </div>
            <div class="col-span-8 text-sm">{coin.summary}</div>
        </div>
    )
}