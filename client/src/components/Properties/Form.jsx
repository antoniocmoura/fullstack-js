import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { useRecoilState } from 'recoil'
import { initialPropertieState, propertieState, usePropertiesActions } from '../../state'

export default function PropertiesForm() {

    const [propertie, setPropertie] = useRecoilState(propertieState)

    const propertiesActions = usePropertiesActions()


    const update = (event) => {
        const _propertie = { ...propertie }
        _propertie[event.target.name] = event.target.value
        setPropertie(_propertie)
    }

    const clear = () => {
        setPropertie(initialPropertieState)
    }

    const save = () => {
        if (propertie._id) {
            propertiesActions.updatePropertie(propertie).then(clear())
        } else {
            propertiesActions.createPropertie(propertie).then(clear())
        }
    }

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off">

            <TextField
                valiant="outlined"
                type='text'
                name='title'
                value={propertie.title}
                onChange={e => update(e)}
                placeholder='digite o título do anúncio'
            />

            <TextField
                valiant="outlined"
                type='text'
                name='type'
                value={propertie.type}
                onChange={e => update(e)}
                placeholder='digite o tipo do imóvel'
            />

            <TextField
                valiant="outlined"
                type='text'
                name='description'
                value={propertie.description}
                onChange={e => update(e)}
                placeholder='digite a descrição'
            />

            <Stack spacing={2} direction="row">
                <Button variant="outlined"
                    onClick={e => save(e)}>
                    Salvar
                </Button>
                <Button variant="text"
                    onClick={e => clear(e)}>
                    Cancelar
                </Button>
            </Stack>

        </Box>
    )
}