import React from 'react'
import PropertiesForm from '../components/Properties/Form'
import PropertiesList from '../components/Properties/List'

export default function PropertiesScreen() {

    return (
        <div className='content'>
            <PropertiesForm />
            <PropertiesList />
        </div>
    )

}