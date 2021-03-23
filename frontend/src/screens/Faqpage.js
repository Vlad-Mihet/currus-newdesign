import React, { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import { Icon, InlineIcon } from "@iconify/react";
import minusIcon from "@iconify/icons-feather/minus";
import plusIcon from "@iconify/icons-feather/plus";

const Faqpage = (props) => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);
  const [fifth, setFifth] = useState(false);
  const [sixth, setSixth] = useState(false);
  const [seventh, setSeventh] = useState(false);

  return (
    <div>
      <Breadcrumbs title={props.location.pathname} />

      <div className="faqpage">
        <div className="faqpage_image">
          <img src="https://currus-ij.s3.ap-northeast-2.amazonaws.com/faq_scooter_front.png"></img>
        </div>
        <div className="sandbox">
          <div className="wrapper">
            <div
              className={
                first ? "borderleft borderopen" : "borderleft borderclosed"
              }></div>
            <div className="title">
              What is the shipping cost? (In the USA, Canada and other
              countries)
              <div className="icon" onClick={() => setFirst(!first)}>
                {first ? (
                  <Icon icon={minusIcon} style={{ fontSize: "24px" }} />
                ) : (
                  <Icon icon={plusIcon} style={{ fontSize: "24px" }} />
                )}
              </div>
            </div>
            <div className={first ? "content open" : "content closed"}>
              We only ship to the United States. All domestic orders to all
              locations in Canada &amp; the U.S., exclusing Alaska and Hawaii,
              include FREE Standard Shipping.
              <br />
              We do not currently ship to international locations.
            </div>
          </div>
          <div className="wrapper">
            <div
              className={
                second ? "borderleft borderopen" : "borderleft borderclosed"
              }></div>
            <div className="title">
              Is There A Warranty on Currus Vehicles?
              <div className="icon" onClick={() => setSecond(!second)}>
                {second ? (
                  <Icon icon={minusIcon} style={{ fontSize: "24px" }} />
                ) : (
                  <Icon icon={plusIcon} style={{ fontSize: "24px" }} />
                )}
              </div>
            </div>
            <div className={second ? "content open" : "content closed"}>
              Yes. We offer a 12-month limited warranty from the date of
              purchase. The warranty covers any defects or problems that may
              result from the normal use of the scooter. In addition to 12
              months product warranty, we also offer 12 months of free technical
              support for any repairs, spare parts or any other service you may
              need during the period.
              <br />
              For used certified items, we offer a six-month warranty.
              <br />
              The warranty will not be applicable to items modified by
              customers. Physical damages to the vehicle resulting from an
              accident are also not covered under the warranty.
            </div>
          </div>
          <div className="wrapper">
            <div
              className={
                third ? "borderleft borderopen" : "borderleft borderclosed"
              }></div>
            <div className="title">
              Can I Get a Test Ride Before Buying?
              <div className="icon" onClick={() => setThird(!third)}>
                {third ? (
                  <Icon icon={minusIcon} style={{ fontSize: "24px" }} />
                ) : (
                  <Icon icon={plusIcon} style={{ fontSize: "24px" }} />
                )}
              </div>
            </div>
            <div className={third ? "content open" : "content closed"}>
              No. We do not offer test rides as of now, as we only have online
              stores. However, we are working to make partners with physical
              stores across the USA and might soon allow customers to test ride
              before buying from one of the Currus-authorised stores.
            </div>
          </div>
          <div className="wrapper">
            <div
              className={
                fourth ? "borderleft borderopen" : "borderleft borderclosed"
              }></div>
            <div className="title">
              How Do I Order Wholesale?
              <div className="icon" onClick={() => setFourth(!fourth)}>
                {fourth ? (
                  <Icon icon={minusIcon} style={{ fontSize: "24px" }} />
                ) : (
                  <Icon icon={plusIcon} style={{ fontSize: "24px" }} />
                )}
              </div>
            </div>
            <div className={fourth ? "content open" : "content closed"}>
              If you’d like to become a dealer and resell our products through
              your own website or physical store, we can provide you these items
              at wholesale prices. If you want to order wholesale for any other
              reason, we might be able to help you with discounts.
              <br />
              To know about our wholesale price or to discuss the details, give
              us a call or send an enquiry.
            </div>
          </div>
          <div className="wrapper">
            <div
              className={
                fifth ? "borderleft borderopen" : "borderleft borderclosed"
              }></div>
            <div className="title">
              How often does this need servicing in a year?
              <div className="icon" onClick={() => setFifth(!fifth)}>
                {fifth ? (
                  <Icon icon={minusIcon} style={{ fontSize: "24px" }} />
                ) : (
                  <Icon icon={plusIcon} style={{ fontSize: "24px" }} />
                )}
              </div>
            </div>
            <div className={fifth ? "content open" : "content closed"}>
              Well, regular servicing of your Currus E-scooter is a must in
              order to maintain a safe and good condition. We suggest regular
              check-ups for tires, brakes, suspension, and battery. The more and
              better you maintain your vehicle, the longer it will be able to
              serve you. Also, take proper care of the scooter battery. Avoid
              overcharging or undercharging it. Keep it away from direct
              sunlight and rain.
            </div>
          </div>
          <div className="wrapper">
            <div
              className={
                sixth ? "borderleft borderopen" : "borderleft borderclosed"
              }></div>
            <div className="title">
              Is there any age restriction to Order the Electric Scooter?
              <div className="icon" onClick={() => setSixth(!sixth)}>
                {sixth ? (
                  <Icon icon={minusIcon} style={{ fontSize: "24px" }} />
                ) : (
                  <Icon icon={plusIcon} style={{ fontSize: "24px" }} />
                )}
              </div>
            </div>
            <div className={sixth ? "content open" : "content closed"}>
              At CurrusMotors.com, we only sell high-power scooters that are
              meant to be used by adults, above 18 years of age. So, we accept
              online orders only from legal adult age users.
            </div>
          </div>
          <div className="wrapper">
            <div
              className={
                seventh ? "borderleft borderopen" : "borderleft borderclosed"
              }></div>
            <div className="title">
              Is case of damage, where do I get spare parts for the scooter?
              <div className="icon" onClick={() => setSeventh(!seventh)}>
                {seventh ? (
                  <Icon icon={minusIcon} style={{ fontSize: "24px" }} />
                ) : (
                  <Icon icon={plusIcon} style={{ fontSize: "24px" }} />
                )}
              </div>
            </div>
            <div className={seventh ? "content open" : "content closed"}>
              If your product is in the warranty period, send a query to our
              technical support team for any service or repair needs. As long as
              your damages are covered under warranty, we will take care of
              them, without a cost.
              <br />
              However, if your product is not under warranty or the damages are
              not covered, we can only help you get spare parts and replace the
              damaged parts. The cost of repair and spare parts will be borne by
              the user/customer.
            </div>
          </div>
        </div>
      </div>
      <div className="faqpage_questions">
        <div className="faqpage_questions_circle">
          <i className="fas fa-question"></i>
        </div>
        <div>
          <h6>Have more questions? </h6>
          <p>
            Feel free to contact at any time and our customer support will
            answer any questions. We work 24 hours, every day of the week.
          </p>
          <div id="shipping_phone">
            +1 80 <span>123 123 123</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqpage;
