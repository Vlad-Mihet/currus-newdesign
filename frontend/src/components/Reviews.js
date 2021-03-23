import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  detailsProduct,
  createReview,
  listReviews,
} from "../redux/actions/productActions";
import { Icon, InlineIcon } from "@iconify/react";
import starFilled from "@iconify/icons-ant-design/star-filled";
import starHalf from "@iconify/icons-bi/star-half";
import starIcon from "@iconify/icons-bi/star";
import arrowRight from "@iconify/icons-bi/arrow-right";

const StarsUI = ({ rating }) => {
  return (
    <>
      {rating > 4.5 ? (
        <>
          <Icon
            icon={starFilled}
            style={{ color: "#fcc455", fontSize: "24px" }}
          />
          <Icon
            icon={starFilled}
            style={{ color: "#fcc455", fontSize: "24px" }}
          />
          <Icon
            icon={starFilled}
            style={{ color: "#fcc455", fontSize: "24px" }}
          />
          <Icon
            icon={starFilled}
            style={{ color: "#fcc455", fontSize: "24px" }}
          />
          <Icon
            icon={starFilled}
            style={{ color: "#fcc455", fontSize: "24px" }}
          />{" "}
        </>
      ) : rating > 4 ? (
        <>
          <Icon
            icon={starFilled}
            style={{ color: "#fcc455", fontSize: "24px" }}
          />
          <Icon
            icon={starFilled}
            style={{ color: "#fcc455", fontSize: "24px" }}
          />
          <Icon
            icon={starFilled}
            style={{ color: "#fcc455", fontSize: "24px" }}
          />
          <Icon
            icon={starFilled}
            style={{ color: "#fcc455", fontSize: "24px" }}
          />
          <Icon
            icon={starHalf}
            style={{ color: "#fcc455", fontSize: "24px" }}
          />{" "}
        </>
      ) : rating > 3.5 ? (
        <>
          <Icon
            icon={starFilled}
            style={{ color: "#fcc455", fontSize: "24px" }}
          />
          <Icon
            icon={starFilled}
            style={{ color: "#fcc455", fontSize: "24px" }}
          />
          <Icon
            icon={starFilled}
            style={{ color: "#fcc455", fontSize: "24px" }}
          />
          <Icon
            icon={starFilled}
            style={{ color: "#fcc455", fontSize: "24px" }}
          />
          <Icon
            icon={starIcon}
            style={{ color: "#fcc455", fontSize: "24px" }}
          />{" "}
        </>
      ) : rating > 3 ? (
        <>
          <Icon
            icon={starFilled}
            style={{ color: "#fcc455", fontSize: "24px" }}
          />
          <Icon
            icon={starFilled}
            style={{ color: "#fcc455", fontSize: "24px" }}
          />
          <Icon
            icon={starFilled}
            style={{ color: "#fcc455", fontSize: "24px" }}
          />
          <Icon
            icon={starHalf}
            style={{ color: "#fcc455", fontSize: "24px" }}
          />
          <Icon
            icon={starIcon}
            style={{ color: "#fcc455", fontSize: "24px" }}
          />{" "}
        </>
      ) : rating > 2.5 ? (
        <>
          <Icon
            icon={starFilled}
            style={{ color: "#fcc455", fontSize: "24px" }}
          />
          <Icon
            icon={starFilled}
            style={{ color: "#fcc455", fontSize: "24px" }}
          />
          <Icon
            icon={starFilled}
            style={{ color: "#fcc455", fontSize: "24px" }}
          />
          <Icon
            icon={starIcon}
            style={{ color: "#fcc455", fontSize: "24px" }}
          />
          <Icon
            icon={starIcon}
            style={{ color: "#fcc455", fontSize: "24px" }}
          />{" "}
        </>
      ) : rating > 2 ? (
        <>
          <Icon
            icon={starFilled}
            style={{ color: "#fcc455", fontSize: "24px" }}
          />
          <Icon
            icon={starFilled}
            style={{ color: "#fcc455", fontSize: "24px" }}
          />
          <Icon
            icon={starHalf}
            style={{ color: "#fcc455", fontSize: "24px" }}
          />
          <Icon
            icon={starIcon}
            style={{ color: "#fcc455", fontSize: "24px" }}
          />
          <Icon
            icon={starIcon}
            style={{ color: "#fcc455", fontSize: "24px" }}
          />{" "}
        </>
      ) : rating > 1.5 ? (
        <>
          <Icon
            icon={starFilled}
            style={{ color: "#fcc455", fontSize: "24px" }}
          />
          <Icon
            icon={starFilled}
            style={{ color: "#fcc455", fontSize: "24px" }}
          />
          <Icon
            icon={starIcon}
            style={{ color: "#fcc455", fontSize: "24px" }}
          />
          <Icon
            icon={starIcon}
            style={{ color: "#fcc455", fontSize: "24px" }}
          />
          <Icon
            icon={starIcon}
            style={{ color: "#fcc455", fontSize: "24px" }}
          />{" "}
        </>
      ) : rating > 1 ? (
        <>
          <Icon
            icon={starFilled}
            style={{ color: "#fcc455", fontSize: "24px" }}
          />
          <Icon
            icon={starHalf}
            style={{ color: "#fcc455", fontSize: "24px" }}
          />
          <Icon
            icon={starIcon}
            style={{ color: "#fcc455", fontSize: "24px" }}
          />
          <Icon
            icon={starIcon}
            style={{ color: "#fcc455", fontSize: "24px" }}
          />
          <Icon
            icon={starIcon}
            style={{ color: "#fcc455", fontSize: "24px" }}
          />{" "}
        </>
      ) : rating > 0.5 ? (
        <>
          <Icon
            icon={starFilled}
            style={{ color: "#fcc455", fontSize: "24px" }}
          />
          <Icon
            icon={starIcon}
            style={{ color: "#fcc455", fontSize: "24px" }}
          />
          <Icon
            icon={starIcon}
            style={{ color: "#fcc455", fontSize: "24px" }}
          />
          <Icon
            icon={starIcon}
            style={{ color: "#fcc455", fontSize: "24px" }}
          />
          <Icon
            icon={starIcon}
            style={{ color: "#fcc455", fontSize: "24px" }}
          />{" "}
        </>
      ) : (
        <>
          <Icon
            icon={starHalf}
            style={{ color: "#fcc455", fontSize: "24px" }}
          />
          <Icon
            icon={starIcon}
            style={{ color: "#fcc455", fontSize: "24px" }}
          />
          <Icon
            icon={starIcon}
            style={{ color: "#fcc455", fontSize: "24px" }}
          />
          <Icon
            icon={starIcon}
            style={{ color: "#fcc455", fontSize: "24px" }}
          />
          <Icon
            icon={starIcon}
            style={{ color: "#fcc455", fontSize: "24px" }}
          />{" "}
        </>
      )}
    </>
  );
};

const ReviewComponent = ({ review }) => {
  return (
    <>
      <div style={{ clear: "both" }}>
        <div className="comment-part">
          <div className="user-img-part">
            <div className="user-text">
              <h4>{review.author}</h4>
              <div className="stars_date">
                <div className="stars_date_stars">
                  <StarsUI rating={review.stars} />
                </div>
                <span>{review.date ? review.date : "No date"}</span>
              </div>
            </div>
            <div style={{ clear: "both" }}></div>
          </div>
          <div className="comment">
            <p>Pros: {review.pros}</p>
            <p>Cons: {review.cons} </p>
            <p>{review.detail}</p>
          </div>
          <div style={{ clear: "both" }}></div>
        </div>
      </div>
    </>
  );
};

const Reviews = ({ product, productId }) => {
  const dispatch = useDispatch();

  const [author, setAuthor] = useState("");
  const [stars, setStars] = useState(0);
  const [pros, setPros] = useState("");
  const [cons, setCons] = useState("");
  const [detail, setDetail] = useState("");

  const reviewList = useSelector((state) => state.reviewList);
  const { reviews, loading, error } = reviewList;

  const [average, setAverage] = useState(1);

  const [five, setFive] = useState(0.01);
  const [four, setFour] = useState(0.01);
  const [three, setThree] = useState(0.01);
  const [two, setTwo] = useState(0.01);
  const [one, setOne] = useState(0.01);

  const [view, setView] = useState(2);
  const [openReviewForm, setOpenReviewForm] = useState(false);

  const { userInfo } = useSelector((state) => state.userSignin);

  useEffect(() => {
    dispatch(listReviews(productId));
  }, []);

  useEffect(() => {
    if (userInfo) {
      setAuthor(userInfo.name);
    }
  }, [userInfo]);

  useEffect(() => {
    setAverage(
      reviews
        ? (reviews.reduce((a, c) => a + c.stars, 0) / reviews.length).toFixed(1)
        : 1,
    );
    setFive(
      reviews
        ? Math.round(
            (reviews.filter((review) => review.stars >= 4.5).length * 100) /
              reviews.length,
          )
        : 1,
    );
    setFour(
      reviews
        ? Math.round(
            (reviews.filter(
              (review) => review.stars >= 3.5 && review.stars < 4.5,
            ).length *
              100) /
              reviews.length,
          )
        : 1,
    );
    setThree(
      reviews
        ? Math.round(
            (reviews.filter(
              (review) => review.stars >= 2.5 && review.stars < 3.5,
            ).length *
              100) /
              reviews.length,
          )
        : 1,
    );
    setTwo(
      reviews
        ? Math.round(
            (reviews.filter(
              (review) => review.stars >= 1.5 && review.stars < 2.5,
            ).length *
              100) /
              reviews.length,
          )
        : 1,
    );
    setOne(
      reviews
        ? Math.round(
            (reviews.filter((review) => review.stars <= 1.5).length * 100) /
              reviews.length,
          )
        : 1,
    );
  }, [reviews]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createReview(productId, {
        author,
        stars,
        pros,
        cons,
        detail,
      }),
    );
    setStars(0);
  };

  return (
    <section className="reviews">
      <div className="main-section">
        <div className="rating-part">
          <div className="average-rating">
            <div className="hedding-title">
              {reviews && <h1>{reviews.length} User Reviews</h1>}
            </div>
            <h2>{average}</h2>
            <div>
              <StarsUI rating={average} />
            </div>
          </div>
          <div className="loder-ratimg">
            <div className="progress">
              <div
                className="progressbar-1"
                style={{ width: `${five}%` }}></div>
              <div className="star">
                5{" "}
                <Icon
                  icon={starFilled}
                  style={{ color: "#fcc455", fontSize: "24px" }}
                />
              </div>
            </div>
            <div className="progress-2">
              <div
                className="progressbar-2"
                style={{ width: `${four}%` }}></div>
              <div className="star">
                4{" "}
                <Icon
                  icon={starFilled}
                  style={{ color: "#fcc455", fontSize: "24px" }}
                />
              </div>
            </div>
            <div className="progress-3">
              <div
                className="progressbar-3"
                style={{ width: `${three}%` }}></div>
              <div className="star">
                3{" "}
                <Icon
                  icon={starFilled}
                  style={{ color: "#fcc455", fontSize: "24px" }}
                />
              </div>
            </div>
            <div className="progress-4">
              <div className="progressbar-4" style={{ width: `${two}%` }}></div>
              <div className="star">
                2{" "}
                <Icon
                  icon={starFilled}
                  style={{ color: "#fcc455", fontSize: "24px" }}
                />
              </div>
            </div>
            <div className="progress-5">
              <div className="progressbar-5" style={{ width: `${one}%` }}></div>
              <div className="star">
                1{" "}
                <Icon
                  icon={starFilled}
                  style={{ color: "#fcc455", fontSize: "24px" }}
                />
              </div>
            </div>
          </div>
          <div className="start-part">
            <span>{five}%</span>
            <br />
            <span>{four}%</span>
            <br />
            <span>{three}%</span>
            <br />
            <span>{two}%</span>
            <br />
            <span>{one}%</span>
          </div>

          <div>
            {reviews ? (
              reviews
                .slice(0, view)
                .map((x) => <ReviewComponent key={x.detail} review={x} />)
            ) : (
              <h1>Loading...</h1>
            )}
          </div>
          <div>
            {reviews ? (
              reviews.length > view ? (
                <button
                  id="loadmore"
                  style={{ float: "right" }}
                  onClick={() => {
                    setView(view + 2);
                  }}>
                  <Icon
                    icon={arrowRight}
                    style={{ color: "#e7161b", fontSize: "16px" }}
                  />
                  Load More
                </button>
              ) : (
                ""
              )
            ) : (
              ""
            )}
          </div>
          {userInfo ? (
            userInfo.orders[0].orderItems.find(
              (ele) => ele.product === productId,
            ) ? (
              !openReviewForm ? (
                <button
                  id="writeareview"
                  onClick={() => setOpenReviewForm(!openReviewForm)}>
                  Write a Review
                </button>
              ) : (
                ""
              )
            ) : (
              "Can not write"
            )
          ) : (
            "No user info"
          )}
        </div>
        {openReviewForm ? (
          <form className="comment-part" onSubmit={submitHandler}>
            <div className="user-image-part">
              <div className="user-text">
                {/* <input id="author" placeholder="Author" onChange={e => setAuthor(e.target.value)}></input> */}
                <div>
                  <Icon
                    onMouseOver={() => setStars(1)}
                    icon={stars >= 1 ? starFilled : starIcon}
                    style={{ color: "#fcc455", fontSize: "24px" }}
                  />
                  <Icon
                    onMouseOver={() => setStars(2)}
                    icon={stars >= 2 ? starFilled : starIcon}
                    style={{ color: "#fcc455", fontSize: "24px" }}
                  />
                  <Icon
                    onMouseOver={() => setStars(3)}
                    icon={stars >= 3 ? starFilled : starIcon}
                    style={{ color: "#fcc455", fontSize: "24px" }}
                  />
                  <Icon
                    onMouseOver={() => setStars(4)}
                    icon={stars >= 4 ? starFilled : starIcon}
                    style={{ color: "#fcc455", fontSize: "24px" }}
                  />
                  <Icon
                    onMouseOver={() => setStars(5)}
                    icon={stars >= 5 ? starFilled : starIcon}
                    style={{ color: "#fcc455", fontSize: "24px" }}
                  />
                </div>
              </div>
            </div>
            <div className="comment">
              <input
                style={{
                  display: "block",
                  width: "100%",
                  height: "50px",
                  marginBottom: "10px",
                }}
                id="pros"
                placeholder="Pros"
                onChange={(e) => setPros(e.target.value)}></input>
              <input
                style={{
                  display: "block",
                  width: "100%",
                  height: "50px",
                  marginBottom: "10px",
                }}
                id="cons"
                placeholder="Cons"
                onChange={(e) => setCons(e.target.value)}></input>
              <input
                style={{ display: "block", width: "100%", height: "100px" }}
                id="detail"
                placeholder="Detail"
                onChange={(e) => setDetail(e.target.value)}></input>
            </div>
            <button type="submit">Post Your Review</button>
          </form>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default Reviews;
