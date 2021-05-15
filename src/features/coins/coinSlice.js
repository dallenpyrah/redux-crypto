import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    coins: [],
    activeCoin: {}
}

export const getAllCoins = createAsyncThunk('coins/getallcoins', async () => {
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    console.log(res.data)
    return res.data
})

export const getCoinById = createAsyncThunk('coins/getcoinbyid', async (id) => {
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/' + id)
    console.log(res.data)
    return res.data
})

export const coinSlice = createSlice({
    name: 'coin',
    initialState,
    reducers: {

    },
    extraReducers: {
        [getAllCoins.fulfilled.toString()]: (state, { payload }) => {
            state.coins = payload
        },
        [getCoinById.fulfilled.toString()]: (state, { payload }) => {
            state.activeCoin = payload
        }
    }
})

export const selectAllCoins = (state) => state.coins.coins
export const selectActiveCoin = (state) => state.coins.activeCoin

export default coinSlice.reducer