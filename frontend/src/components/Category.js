import React from 'react'

function Category(props) {

    const { title, description } = props

    return (
        <div className="category_page">
            <div className="category">
                <div className="rectangle-19">
                    <div className="category_title">
                        {title}
                    </div>
                    <div className="category_description">
                        {description}
                    </div>
                </div>
            </div>
            <div className="category">
                <div className="rectangle-19">
                    <div className="category_title">
                        {title}
                    </div>
                    <div className="category_description">
                        {description}
                    </div>
                </div>
            </div>
        </div>       
    )
}

export default Category
