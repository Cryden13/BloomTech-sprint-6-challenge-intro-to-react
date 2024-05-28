import React, { useState } from 'react'

function Character({ charName, homeworld }) { // ❗ Add the props
    // ❗ Create a state to hold whether the homeworld is rendering or not
    const [renderHomeworld, setRenderHomeworld] = useState(false)
    // ❗ Create a "toggle" click handler to show or remove the homeworld
    const toggleHomeworld = () => {
        setRenderHomeworld(!renderHomeworld)
    }
    return (
        <div className="character-card" onClick={toggleHomeworld}>
            {/* Use the same markup with the same attributes as in the mock */}
            <h3 className='character-name'>{charName}</h3>
            {renderHomeworld && <p>Planet: <span className='character-planet'>{homeworld}</span></p>}
        </div>
    )
}

export default Character
