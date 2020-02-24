import React from 'react';

const Citater = ({citater, deleteCitat}) => {
    return (
        <div className="citater-list">
            {
                citater.map(citat =>{
                    return (
                    <div className="citat" key={citat.id}>
                        <div>Title: { citat.overskrift }</div>
                        <div>Citat: { citat.citat }</div>
                        <div>Forfatter: { citat.forfatter }</div>
                        <button onClick={() => {deleteCitat(citat.id)}}>Slet citat</button>
                    </div>
                        )
                })
            }
        </div>
    )
        
    
}

export default Citater