import { atom, selector, useRecoilState } from 'recoil'
import API from '../helpers/Api'

const clientAPI = API();
const baseUrl = `${process.env.REACT_APP_API_URL}/properties`

export const propertiesState = atom({
    key: 'properties',
    default: selector({
        key: 'propertiesLoader',
        get: async () => {
            return clientAPI.get(baseUrl)
        }
    })
})

export function usePropertiesActions() {

    const [properties, setProperties] = useRecoilState(propertiesState)

    const createPropertie = async (propertie) => {
        const createdPropertie = await clientAPI.post(baseUrl, propertie)
        setProperties([...properties, createdPropertie])
    }

    const updatePropertie = async (propertie) => {
        const updatedPropertie = await clientAPI.put(`${baseUrl}/${propertie._id}`, propertie)
        const newProperties = properties.map((p) => {
            if (p._id !== updatedPropertie._id) {
                return p
            }
            return updatedPropertie
        })
        setProperties(newProperties)
    }

    const deletePropertie = async (id) => {
        await clientAPI.delete(`${baseUrl}/${id}`)
        const newProperties = properties.filter((propertie) => propertie._id !== id)
        setProperties(newProperties)
    }

    return { createPropertie, updatePropertie, deletePropertie }

}