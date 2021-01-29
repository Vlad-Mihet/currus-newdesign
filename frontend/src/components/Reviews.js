import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { detailsProduct, createReview , listReviews } from '../redux/actions/productActions'
import { Icon, InlineIcon } from '@iconify/react';
import starFilled from '@iconify/icons-ant-design/star-filled';
import starHalf from '@iconify/icons-bi/star-half';
import starIcon from '@iconify/icons-bi/star';


const Reviews = ({ product, productId }) => {

    const dispatch = useDispatch()



    const [author, setAuthor] = useState('')
    const [stars, setStars] = useState('')
    const [pros, setPros] = useState('')
    const [cons, setCons] = useState('')
    const [detail, setDetail] = useState('')

    const reviewList = useSelector(state=>state.reviewList)
    const { reviews, loading, error} = reviewList

    const [average, setAverage] = useState(1);

    const [five, setFive] = useState(0.01);
    const [four, setFour] = useState(0.01);
    const [three, setThree] = useState(0.01)
    const [two, setTwo] = useState(0.01);
    const [one, setOne] = useState(0.01);

    useEffect(() => {
        dispatch(listReviews(productId))
    }, [])

    useEffect(() => {
        setAverage(reviews ? (reviews.reduce((a, c) => a + c.stars, 0)/reviews.length).toFixed(2) : 1)
        setFive(reviews ? (Math.round((reviews.filter(review => review.stars >= 4.5).length)*100/reviews.length)) : 1)
        setFour(reviews ? (Math.round((reviews.filter(review => review.stars >= 3.5 && review.stars < 4.5).length)*100/reviews.length)) : 1)
        setThree(reviews ? (Math.round((reviews.filter(review => review.stars >= 2.5 && review.stars < 3.5).length)*100/reviews.length)) : 1)
        setTwo(reviews ? (Math.round((reviews.filter(review => review.stars >= 1.5 && review.stars < 2.5).length)*100/reviews.length)) : 1)
        setOne(reviews ? (Math.round((reviews.filter(review => review.stars <= 1.5).length)*100/reviews.length)) : 1)
    }, [reviews]);



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

    const starsUI = (rating) => {
        return (
            <>
                {rating > 4.5 ? <>
                <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} /> </>:
                 rating > 4 ? <>
                <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starHalf} style={{color:"#fcc455", fontSize: '20px'}} /> </> :
                 rating > 3.5 ? <>
                <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starIcon} style={{color: '#fcc455', fontSize: '24px'}} /> </> :
                 rating > 3 ? <>
                <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starHalf} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starIcon} style={{color:"#fcc455", fontSize: '20px'}} /> </> :
                 rating > 2.5 ? <>
                <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starIcon} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starIcon} style={{color:"#fcc455", fontSize: '20px'}} /> </> :
                 rating > 2 ? <>
                <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starHalf} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starIcon} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starIcon} style={{color:"#fcc455", fontSize: '20px'}} /> </> :
                 rating > 1.5 ? <>
                <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starIcon} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starIcon} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starIcon} style={{color:"#fcc455", fontSize: '20px'}} /> </> :
                 rating > 1 ? <>
                <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starHalf} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starIcon} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starIcon} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starIcon} style={{color:"#fcc455", fontSize: '20px'}} /> </> :
                 rating > 0.5 ? <>
                <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starIcon} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starIcon} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starIcon} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starIcon} style={{color:"#fcc455", fontSize: '20px'}} /> </> :
                 <>
                <Icon icon={starHalf} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starIcon} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starIcon} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starIcon} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starIcon} style={{color:"#fcc455", fontSize: '20px'}} /> </>}
            </>
        )
    } 

    return (
        <section className="reviews">
        

	<div className="main-section">
		<div className="hedding-title">{reviews && <h1>{reviews.length} User Reviews</h1>}</div> 
		<div className="rating-part">
			<div className="average-rating">
				<h2>{average}</h2>
				<i aria-hidden="true" className="fa fa-star"></i>
				<i aria-hidden="true" className="fa fa-star"></i>
				<i className="fa fa-star-half-o" aria-hidden="true"></i>
				<i aria-hidden="true" className="fa fa-star-o"></i>
				<i aria-hidden="true" className="fa fa-star-o"></i>
                <div>{starsUI(average)}</div>
			</div>
			<div className="loder-ratimg">

				<div className="progress">
                    <div className="progressbar-1" style={{width: `${five}%`}}>
                    </div>
                    <div className="star">
                    5 <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                    </div>
                </div>
				<div className="progress-2">
                    <div className="progressbar-2" style={{width: `${four}%`}}>
                    </div>
                    <div className="star">
                    4 <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                    </div>
                </div>
				<div className="progress-3">
                    <div className="progressbar-3" style={{width: `${three}%`}}>
                    </div>
                    <div className="star">
                    3 <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                    </div>
                </div>
				<div className="progress-4">
                    <div className="progressbar-4" style={{width: `${two}%`}}>
                    </div>
                    <div className="star">
                    2 <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                    </div>
                </div>
				<div className="progress-5">
                    <div className="progressbar-5" style={{width: `${one}%`}}>
                    </div>
                    <div className="star">
                    1 <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                    </div>
                </div>

			</div>
			<div className="start-part">
	
				<span>{five}%</span><br/>

				<span>{four}%</span><br/>

				<span>{three}%</span><br/>

				<span>{two}%</span><br/>

				<span>{one}%</span>
			</div>
            
			<div style={{clear: "both"}}></div>
			<div className="reviews"><h1>Reviews</h1></div>
				<div className="comment-part">
					<div className="user-img-part">
						<div className="user-img">
							<img src="/demo/man01.png" />
						</div>
						<div className="user-text">
							<h4>8 days ago</h4>
							<p>Tom kok</p>
							<span>Report</span>
						</div>
						<div style={{clear: "both"}}></div>
					</div>
					<div className="comment">
						<i aria-hidden="true" className="fa fa-star"></i>
						<i aria-hidden="true" className="fa fa-star"></i>
						<i aria-hidden="true" className="fa fa-star"></i>
						<i aria-hidden="true" className="fa fa-star"></i>
						<i aria-hidden="true" className="fa fa-star-o"></i>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco.</p>
					</div>
					<div style={{clear: "both"}}></div>
				</div>
				<div className="comment-part">
					<div className="user-img-part">
						<div className="user-img">
							<img src="/demo/man02.png" />
						</div>
						<div className="user-text">
							<h4>30 days ago</h4>
							<p>Win Rool</p>
							<span>Report</span>
						</div>
						<div style={{clear: "both"}}></div>
					</div>
					<div className="comment">
						<i aria-hidden="true" className="fa fa-star"></i>
						<i aria-hidden="true" className="fa fa-star"></i>
						<i aria-hidden="true" className="fa fa-star"></i>
						<i aria-hidden="true" className="fa fa-star-o"></i>
						<i aria-hidden="true" className="fa fa-star-o"></i>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco.</p>
					</div>
					<div style={{clear: "both"}}></div>
				</div>
				<div className="comment-part">
					<div className="user-img-part">
						<div className="user-img">
							<img src="/demo/man03.png"/>
						</div>
						<div className="user-text">
							<h4>1 days ago</h4>
							<p>Jui Choal</p>
							<span>Report</span>
						</div>
						<div style={{clear: "both"}}></div>
					</div>
					<div className="comment">
						<i aria-hidden="true" className="fa fa-star"></i>
						<i aria-hidden="true" className="fa fa-star"></i>
						<i aria-hidden="true" className="fa fa-star-o"></i>
						<i aria-hidden="true" className="fa fa-star-o"></i>
						<i aria-hidden="true" className="fa fa-star-o"></i>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco.</p>
					</div>
					<div style={{clear: "both"}}></div>
				</div>	
				<div className="comment-part">
					<div className="user-img-part">
						<div className="user-img">
							<img src="/demo/man04.png"/>
						</div>
						<div className="user-text">
							<h4>24 days ago</h4>
							<p>Jack Mins</p>
							<span>Report</span>
						</div>
						<div style={{clear: "both"}}></div>
					</div>
					<div className="comment">
						<i aria-hidden="true" className="fa fa-star"></i>
						<i aria-hidden="true" className="fa fa-star-o"></i>
						<i aria-hidden="true" className="fa fa-star-o"></i>
						<i aria-hidden="true" className="fa fa-star-o"></i>
						<i aria-hidden="true" className="fa fa-star-o"></i>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco.</p>
					</div>
					<div style={{clear: "both"}}></div>
				</div>		
		</div>
	</div>

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
