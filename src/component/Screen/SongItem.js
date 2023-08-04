import React from 'react'



function SongItem(props) {
    const { name, album, preview_url } = props

    return (
        <div className="col-md-4 mt-2 mb-2">
            <div className="card">
                <img src={album ? album.images[1].url: "#"} alt="no image" className="card-img-top rounded-circle" />

                <div className="card-body">
                    <h6 className="text-success text-center"> {name} </h6>
                </div>
            </div>
        </div>
    )
}

export default SongItem