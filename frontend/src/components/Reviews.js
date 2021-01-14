import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { detailsProduct, createReview , listReviews } from '../redux/actions/productActions'


const Reviews = ({ product, productId }) => {

    const dispatch = useDispatch()



    const [author, setAuthor] = useState('')
    const [stars, setStars] = useState('')
    const [pros, setPros] = useState('')
    const [cons, setCons] = useState('')
    const [detail, setDetail] = useState('')

    const reviewList = useSelector(state=>state.reviewList)
    const { reviews, loading, error} = reviewList

    useEffect(() => {
        dispatch(listReviews(productId))
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(createReview(productId, {
            author,
            stars,
            pros,
            cons,
            detail
        }))
    }

    return (
        <section className="reviews">
            <h4>Reviews</h4>
            <ul>
                {reviews ? reviews.map(x=> (
                    <li key={x._id}>{x.pros} | {x.cons}</li>
                )) : <h1>Loading</h1>}
            </ul>

            <form onSubmit={submitHandler}>
                <input id="author" placeholder="Author" onChange={e => setAuthor(e.target.value)}></input>
                <input id="stars" placeholder="Stars" onChange={e => setStars(e.target.value)}></input>
                <input id="pros" placeholder="Pros" onChange={e => setPros(e.target.value)}></input>
                <input id="cons" placeholder="Cons" onChange={e => setCons(e.target.value)}></input>
                <input id="detail" placeholder="Detail" onChange={e => setDetail(e.target.value)}></input>      
                <button type="submit">Post Your Review</button>      
            </form>
        </section>
    )
}

export default Reviews
