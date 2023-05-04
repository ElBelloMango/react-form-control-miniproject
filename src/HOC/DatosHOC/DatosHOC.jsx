import React, { useState } from 'react'

function ComponenteActualizado(ComponenteOriginal) {

    function DatosHOC(props) {
        const [userValid, setUserValid] = useState({
            email: true,
            password: true,
            name: true,
            lastname: true,
            number: true,
            address: true,
            city: true,
            state: true
        })

        const handleChange = (event) => {
            const target = event.target;
            setUserValid((userValid) => {
                return {
                    ...userValid,
                    [target.name]: target.checkValidity()
                }
            })
        }
        return (
            <ComponenteOriginal {...props} userValid={userValid} handleChange={handleChange} />
        )
    }
    return (
        DatosHOC
    )
}
export default ComponenteActualizado;