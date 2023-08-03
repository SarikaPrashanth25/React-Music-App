import React from 'react'
import CourseItem from './Screen/CourseItem'

function Artist(props) {
    const { id, name, popularity, images, genres, followers, } = props

    return (
        <div className="col-md-4 col-lg-4 cl-sm-6">
            <div className="card mt-2 mb-2">
                <div className="row g-0">
                    <div className="col-md-6">
                        <div id="imgGrp" className="carousel slide" style={{ height: '200px'}} data-bs-ride="carousel">
                            <div className="carousel-inner">
                                {
                                    images && images.map((item,index) => {
                                        return (
                                            <CourseItem key={index} {...item} />
                                        )
                                    })
                                }

                                <button className="carousel-control-prev" data-bs-target="#imgGrp" data-bs-slide="prev"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}