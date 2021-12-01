import * as React from 'react'
import {FC, useState} from 'react'
import {IconButton, Link, Tooltip, Typography} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import {useDispatch, useSelector} from 'react-redux'
import {isFetchFilteredFriendsListPendingSelector} from '../../../containers/friends/redux/friends.actions'
import {filteredFriendsListSelector} from '../../../containers/friends/redux/friends.selectors'
import {closeCurrentDialog, setCurrentDialog} from '../../../redux/dialogs/current-dialogs.actions'
import {CurrentDialogType} from '../../../redux/dialogs/current-dialog.constants'
import {IEvent} from '../../../containers/events/eventi.types'

interface IAddFriendsListDialogProps {
}

const AddFriendsListDialog: FC<IAddFriendsListDialogProps> = () => {

    const [searchValue, setSearchValue] = useState<string>('')

    const dispatch = useDispatch()
    /*
        const friendsList = useSelector(friendsListSelector)  TODO decommentare quando il be tornerà la lista
    */
    const filteredFriendsList = useSelector(filteredFriendsListSelector)
    const isFetchFilteredFriendsListPending = useSelector(isFetchFilteredFriendsListPendingSelector)


    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value)
    }

    const handleAddFriend = (friend: any) => {
        //TODO dispatch addFriend
    }

    const handleClose = () => {
        dispatch(closeCurrentDialog())
    }
    const handleOpenEvent = (event: IEvent) => {
        dispatch(setCurrentDialog(CurrentDialogType.LOCAL_DETAILS, {event}))
    }

    return (
        <>
            <div className="row m-4" style={{width: '600px', minHeight: '300px', alignContent: 'start'}}>
                <div className="col-12">

                    <div className="row">
                        <div className="col-12 p-1 d-flex align-items-center">
                            {/* TITLE */}
                            <Typography variant={'h3'} color="primary">Dettagli amico</Typography>

                            {/* CLOSE BUTTON*/}
                            <div style={{position: 'absolute', right: 16}}>
                                <IconButton onClick={handleClose}
                                            color="secondary">
                                    <CloseIcon/>
                                </IconButton>
                            </div>
                        </div>
                    </div>

                    <div className="row pt-4">
                        <div className="col-12 d-flex align-items-baseline">
                            <div className="col-auto">
                                <Typography variant="h4"
                                            color="secondary"
                                            style={{opacity: 0.6}}>
                                    Amici da
                                </Typography>
                            </div>
                            <div className="col">
                                <Typography variant="h6"
                                            color="secondary"
                                            className="ms-3">
                                    22/10/1999
                                </Typography>
                            </div>
                        </div>
                        <div className="col-12 pt-3 d-flex align-items-baseline">
                            <div className="col-auto">
                                <Typography variant="h4"
                                            color="secondary"
                                            style={{opacity: 0.6}}>
                                    Ultimo accesso
                                </Typography>
                            </div>
                            <div className="col">
                                <Typography variant="h6"
                                            color="secondary"
                                            className="ms-3">
                                    date time
                                </Typography>
                            </div>
                        </div>
                    </div>

                    <div className="row pt-3">
                        <Typography variant={'h4'} color="secondary" style={{opacity: 0.6}}>
                            Lista iscrizione eventi
                        </Typography>
                        <div className="col-12 d-flex">
                            {[{name: 'bar1'}, {name: 'bar2'}, {name: 'bar3'}, {name: 'bar4'}].map((event: any, index) =>
                                <Tooltip title="Clicca per visionare"
                                         className="c-pointer"
                                         onClick={() => handleOpenEvent(event)}>
                                    <Link className="me-2">
                                        {event?.name}{[{name: 'bar1'}, {name: 'bar2'}, {name: 'bar3'}, {name: 'bar4'}].length - 1 !== index ? `,` : '.'}
                                    </Link>
                                </Tooltip>
                            )}
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}
export default AddFriendsListDialog