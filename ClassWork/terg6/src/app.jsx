// src/App.jsx
import CoinCard from "./components/CoinCard";
import Market from "./components/Market";
import MainLayout from "./layouts/MainLayout";
import { MarketContext } from "./utils/context";
import { initialState, reducer } from "./utils/reducer";
import { useReducer } from "preact/hooks";
import ImageGallery from "./components/ImageGallery"; // Import the new ImageGallery component

export function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <MarketContext.Provider value={{ state, dispatch }}>
            <MainLayout>
                {state.selectedCoin ? <coinCard /> : <market />}
                <ImageGallery /> {/* Add the ImageGallery component */}
            </MainLayout>
        </MarketContext.Provider>
    );
}
