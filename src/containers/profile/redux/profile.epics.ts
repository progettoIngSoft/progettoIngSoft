import {NEVER, Observable} from 'rxjs'
import {DEFAULT_REQUEST_ID, IGenericResponse, ISuccessFetchAction} from 'fetch-with-redux-observable'
import {ofType} from 'redux-observable'
import {fetchAllEventsListAction} from '../../events/redux/eventi.actions'
import {mergeMap} from 'rxjs/operators'
import {IProfile} from '../profile.types'
import {fetchProfileAction} from './profile.actions'
import {LOGIN_OR_SIGNIN_PATH, PROFILE_PATH} from '../../../routes'
import {HashHistory} from '../../../index'


export const profileSuccessEpic = (action$: Observable<ISuccessFetchAction<IGenericResponse<IProfile>>>) =>
    action$.pipe(
        ofType(fetchProfileAction.successActionType),
        mergeMap((action) => {
            if (window.location.hash.includes(LOGIN_OR_SIGNIN_PATH)) {
                return [fetchAllEventsListAction.build(null, DEFAULT_REQUEST_ID)]
            } else {
                console.info(`Redirect to ${PROFILE_PATH}`)
                //@ts-ignore
                action.meta.meta.setAnchorEl &&  action.meta.meta.setAnchorEl(null)
                HashHistory.push(PROFILE_PATH)
                return NEVER
            }
        })
    )