import React from 'react'

const CategorieMovies = ({name, id , onClickShowCategory}) => {
    return (
        <div>
            <button className="btn col col-md-2" onClick={()=>onClickShowCategory(id)}>{name}</button>
        </div>
    )
}

export default CategorieMovies
