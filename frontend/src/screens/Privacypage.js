import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";

const Privacypage = (props) => {
  return (
    <>
      <Breadcrumbs title={`${props.location.pathname}`} />
      <div className="privacy_wrap">
        <div className="privacy">
          <div className="privacy_box">
            <h2>Code of Practice</h2>
            <p>
              We continue to strive towards achieving excellence by delivering
              best-in-class personal electric mobility solutions to our
              customers with the highest product quality, value and unmatchable
              service. As life teach us lessons when we make mistakes, we might
              encounter few, but that doesn’t stop us from abiding by our work
              ethics and serving our customers in the most unbiased and fair
              manner.
            </p>
          </div>
          <div className="privacy_box">
            <h2>Contact</h2>
            <p>
              We use cookies to personalize or improve your user experience with
              our site, such as quick sign up and logout process, etc. We assure
              that none of the customer personal information delivered through
              cookies will be used to disclose our customer’s identity.
            </p>
          </div>
          <div className="privacy_box">
            <h2>Updates</h2>
            <p>
              Any changes made in the security &amp; privacy policy and company
              code of practices will be informed to customers through SMS or
              email alerts. We simultaneously post those changes here in this
              section.
            </p>
          </div>
          <div className="privacy_box">
            <h2>Collection of Non-Personally</h2>
            <p>
              As an e-commerce retailer, we do collect
              non-personally-identifying information of all kinds from our
              customers that are typically made available through the different
              type of web browsers such as browser type, referring site, user
              date and time of visit, language preference, etc. However, we
              ensure that this gathered non-personal information from our
              customers will only be used to better understand how our visitors
              interact with our platform so that we can serve our them in a more
              effective way.
            </p>
          </div>
          <div className="privacy_box">
            <h2>What we do with User Personal</h2>
            <p>
              The personal information gathered is not rented or sold to any
              third-party from our end. We sent relevant marketing
              communications to our customers based on personal information
              gathered by us. The customer’s requests, various program
              administration, delivery of product &amp; services is also managed
              via the gathered personal information if required.
            </p>
          </div>
          <div className="privacy_box">
            <h2>Collection of Personally identifying infomration</h2>
            <p>
              In certain cases, the interactions made by customers on our
              website require us to gather some personally-identifying
              information. The amount and type of personal information that we
              gather from customers will depend upon the nature of interaction
              with us through our website. For example, we might ask customers
              to provide additional information like personal and financial
              information during the product purchase to complete their
              transactions. However, we make sure that we do not disclose any
              kind of personally-identifying information of our customers by
              applying strict procedures to prevent unauthorized access.
              However, we cannot guarantee the security of the customer personal
              information completely as we might be legally bound to share
              customer personal data in certain scenarios.
            </p>
          </div>
          <div className="privacy_box">
            <h2>Cookies Usage</h2>
            <p>
              We use cookies to personalize or improve your user experience with
              our site, such as quick sign up and logout process, etc. We assure
              that none of the customer personal information delivered through
              cookies will be used to disclose our customer’s identity.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacypage;
