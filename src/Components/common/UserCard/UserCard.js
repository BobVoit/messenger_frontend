import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Paper, Avatar, Typography, Tooltip, IconButton, Fade } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import AddIcon from '@material-ui/icons/Add';
import SuccerssSnackbar from '../Snackbars/SuccerssSnackbar';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(2),
    },
    avatarWrapper: {
        padding: theme.spacing(2) 
    },
    avatar: {
        height: theme.spacing(8),
        width: theme.spacing(8),
    },
    nickname: {
        cursor: 'pointer',
        textDecoration: 'none',
        color: theme.palette.text.primary
    },
    infoWrapper: {
        flexBasis: '70%'
    },
    actionWrapper: {
        flexBasis: '10%'
    }
}))

const UserCard = ({ user, isAction, actionText, snackbarText, actionButtonHandleClick, actionIcon }) => {
    const classes = useStyles();
    const [openSnackBar, setOpenSnakeBar] = useState(false);
    const selfId = localStorage.getItem('userId');

    const handleSnackBarClick = () => {
        setOpenSnakeBar(true);
    };

    const handleSnackBarClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpenSnakeBar(false);
    };

    const sendReqestInFriedns = () => {
        actionButtonHandleClick(selfId, user.id);
        handleSnackBarClick();
    }

    return (
        <Fade in={true}>
            <Paper
                className={classes.root}
            >
                <div className={classes.avatarWrapper}>
                    <Avatar 
                        className={classes.avatar}
                        src={user.avatar || null}
                        component={NavLink}
                        to={`/profile/${user.id}`}
                    />
                </div>
                <div className={classes.infoWrapper}>
                    <Typography
                        className={classes.nickname}
                        component={NavLink}
                        to={`/profile/${user.id}`}
                    >{user.nickname}</Typography>
                </div>
                {isAction && <div className={classes.actionWrapper}>
                    {actionText ? (
                        <Tooltip title={actionText}>
                            <IconButton
                                color="primary"
                                onClick={sendReqestInFriedns}
                            >
                                {actionIcon || <AddIcon fontSize="large" /> }
                            </IconButton>
                        </Tooltip>
                    ) : (
                        <IconButton
                            color="primary"
                            onClick={sendReqestInFriedns}
                        >
                            {actionIcon || <AddIcon fontSize="large" /> }
                        </IconButton>
                    )
                    }
                    
                </div>}
                
                {/* Всплывающее окно об успешности операции */}
                <SuccerssSnackbar 
                    open={openSnackBar}
                    handleClose={handleSnackBarClose}
                    message={snackbarText}
                    duration={2000}
                />

            </Paper>
        </Fade>

    )
}

export default UserCard;