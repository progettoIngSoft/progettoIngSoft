import {DEFAULT_REQUEST_ID, fetchActionFactory, isRequestInPending} from 'fetch-with-redux-observable'
import {FETCH_ALL_EVENTS_LIST_API, FETCH_PAYMENT_API} from '../../../fetch.constants'


export const FETCH_PAYMENT_ACTION = 'FETCH_PAYMENT_ACTION'
export const fetchPaymentAction = fetchActionFactory(FETCH_PAYMENT_API, FETCH_PAYMENT_ACTION)
export const isFetchPaymentPendingSelector = isRequestInPending(fetchPaymentAction.pendingActionTypeWithSpinner, DEFAULT_REQUEST_ID)

export const RESET_STRIPE_CLIENT_SECRET_ACTION = 'RESET_STRIPE_CLIENT_SECRET_ACTION'
export const resetStripeClienteSecretAction = (payload:string) => ({
    type: RESET_STRIPE_CLIENT_SECRET_ACTION,
    payload
})


export const FETCH_ALL_EVENTS_LIST_ACTION = 'FETCH_EVENTS_LIST_ACTION'
export const fetchAllEventsListAction = fetchActionFactory(FETCH_ALL_EVENTS_LIST_API, FETCH_ALL_EVENTS_LIST_ACTION)
export const isFetchALLEventsListPendingSelector = isRequestInPending(fetchAllEventsListAction.pendingActionTypeWithSpinner, DEFAULT_REQUEST_ID)
