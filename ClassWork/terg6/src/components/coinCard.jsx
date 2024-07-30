import { MarketContext } from "../utils/context"
import { useContext, useRef, useEffect } from "preact/hooks"

export default function CoinCard() {
    const { state, dispatch } = useContext(MarketContext)
    const selectRef = useRef(null)

    useEffect(() => {
        if (selectRef.current) {
            selectRef.current.focus() // Focus on the select element when the selected coin changes
        }
    }, [state.selectedCoin])

    return (
        <div>
            <div class="flex justify-between pb-2">
                <h1 class="text-2xl font-bold pb-3">Cryptocurrency Card</h1>
                <div class="c-link" onClick={() => dispatch({ type: "SET_SELECTED_COIN", payload: null })}>
                    Back to all
                </div>
            </div>
            <div class="flex justify-start gap-4 pb-4">
                <div class="font-bold">Symbol</div>
                <select
                    ref={selectRef}
                    onChange={(e) =>
                        dispatch({
                            type: "SET_SELECTED_COIN",
                            payload: e.target.value,
                        })
                    }
                >
                    {Object.keys(state.data).map((key) => (
                        <option value={key} selected={key === state.selectedCoin}>
                            {key}
                        </option>
                    ))}
                </select>
                <div class="font-bold">Name</div>
                <div>{state.data[state.selectedCoin].name}</div>
            </div>
            <img src={state.data[state.selectedCoin].image} class="h-[200px] pb-4" />
            <div>
                <div class="font-bold">Summary</div>
                <div>{state.data[state.selectedCoin].summary}</div>
            </div>
        </div>
    )
}