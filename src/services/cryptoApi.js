import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
  'X-RapidAPI-Key': 'f0ccdcf81dmshf6a4019cb403aabp1a738ajsnfaa660288ae4',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const creatRequest = (url) => ({url, headers: cryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath: 'createApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => creatRequest(`/coins?limit=${count}`)
        }),

        getCryptoDetails: builder.query({
            query: (coinId) => creatRequest(`/coin/${coinId}`)

        }),

        getCryptoHistory: builder.query({
            query: ({coinId, timeperiod}) => creatRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`)

        }),
    })
})

export const {
  useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery,
} = cryptoApi;

