import React from 'react'

const ProductPagePlaceholder = () => {
    return (
        <section className="py-3">
        <div className="container px-4 px-lg-5 my-5">
            <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
                <img
                className="card-img-top mb-5 mb-md-0"
                src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg"
                alt="..."
                />
            </div>
            <div className="col-md-6">
                <span className="placeholder col-4"></span>
                <span className="placeholder col-12"></span>
                <span className="placeholder col-4"></span>

                <p className="lead">
                <span className="placeholder col-12"></span>
                <span className="placeholder col-12"></span>
                <span className="placeholder col-12"></span>
                <span className="placeholder col-12"></span>
                <span className="placeholder col-12"></span>
                </p>
            
            </div>
            </div>
        </div>
        </section>
    )
}

export default ProductPagePlaceholder