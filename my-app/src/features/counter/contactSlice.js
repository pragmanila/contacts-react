import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {
        create: (state, { payload }) => {
            state.push(payload)
        },
        update: (state, { payload }) => {
            const contact = state.find((contact) => contact.id === payload.id)
            if (contact) {
                contact.first_name = payload.first_name
                contact.middle_name = payload.middle_name
                contact.last_name = payload.last_name
                contact.contact_no = payload.contact_no
                contact.email = payload.email
            }
        },
        del: (state, { payload }) => {
            return state = state.filter(({ id }) => id !== payload)
        },
    },
})

// Action creators are generated for each case reducer function
export const { create, update, del } = counterSlice.actions

export default counterSlice.reducer