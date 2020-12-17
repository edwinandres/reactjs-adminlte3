import React from 'react'
import Card from './Card'

export default function Content() {

    

    return (
        <div className="content-wrapper">
            
            <Card
                title="Titulo usando PROPS"
                description="Descripción de prueba"
                img="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06"
                leftColor="#a74cf2"
                rightColor="#617bfb"
            />
        </div>
    )
}
