import React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { initialPropertieState, propertieState, propertiesState, usePropertiesActions } from '../../state'


export default function PropertiesList() {

    const setPropertie = useSetRecoilState(propertieState)
    const properties = useRecoilValue(propertiesState)

    const propertiesActions = usePropertiesActions()

    const load = (propertie) => {
        setPropertie(propertie)
    }

    const remove = (id) => {
        propertiesActions.deletePropertie(id).then(setPropertie(initialPropertieState))
    }

    const renderPropertie = (propertie) => {
        return (
            <ListItem
                className='list'
                alignItems="flex-start"
                key={propertie._id}>
                <div className='propertie'>
                    <ListItemAvatar>
                        <Avatar alt="Foto" src="https://picsum.photos/200/300?random=1" />
                    </ListItemAvatar>
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            <Tooltip title={propertie.type}>
                                <h3>{propertie.title}</h3>
                            </Tooltip>
                            <p>{propertie.description}</p>
                        </Typography>
                    </React.Fragment>
                </div>
                <div className='actions'>
                    <button
                        className='btn-edit'
                        onClick={() => load(propertie)}>
                        Alterar</button>

                    <button
                        className='btn-delete'
                        onClick={() => remove(propertie._id)}>
                        Deletar</button>
                </div>
            </ListItem>
        )
    }

    const mapProperties = () => {
        return properties.map(propertie => {
            return renderPropertie(propertie)
        })
    }

    return (
        <List>
            {mapProperties()}
        </List>
    )
}