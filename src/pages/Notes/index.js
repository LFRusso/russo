import React from 'react';

const Notes = () => {
    React.useEffect(() => { window.scrollTo(0, 0); }, []);
    return (
        <div>
            <h2>Anotações a serem adicionadas</h2>
        </div>
    )
}

export default Notes;