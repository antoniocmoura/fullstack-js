import { atom } from 'recoil'

export const initialPropertieState = {
    _id: '',
    type: '',
    title: '',
    description: ''
}

export const propertieState = atom({
    key: 'propertieState',
    default: initialPropertieState
})