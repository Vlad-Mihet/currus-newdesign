import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useSelector, useDispatch } from "react-redux";
import Breadcrumbs from "../components/Breadcrumbs";
import ProductGridView from "../components/ProductGridView";
import { listProducts } from "../redux/actions/productActions";

const Accountpage = (props) => {
  const userSignIn = useSelector((state) => state.userSignin);
  const { userInfo } = userSignIn;

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, filteredProducts } = productList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, []);

  return (
    <>
      <Breadcrumbs title={props.location.pathname} />
      <div className="accountpage">
        <Tabs>
          <TabList>
            <Tab>My account</Tab>
            <Tab>Orders</Tab>
            <Tab>Shipping / Billing</Tab>
            <Tab>Profile</Tab>
          </TabList>
          <TabPanel>
            <div className="accountpage_myaccount">
              {userInfo && (
                <>
                  <h5 className="accountpage_myaccount_name">
                    {userInfo.name}
                  </h5>
                  <h5 className="accountpage_myaccount_createdat">
                    Member since {userInfo.createdAt}
                  </h5>
                  <div className="shoppage_gridview">
                    {products &&
                      products
                        .slice(0, 3)
                        .map((product) => (
                          <ProductGridView
                            history={props.history}
                            grid="true"
                            key={product._id}
                            product={product}></ProductGridView>
                        ))}
                  </div>
                </>
              )}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="accountpage_history">
              <h1>Orders History</h1>
              <table>
                <tr>
                  <th>Order </th>
                  <th>Date </th>
                  <th>Status </th>
                  <th>Total </th>
                  <th>Tracking </th>
                </tr>

                {userInfo &&
                  userInfo.orders &&
                  userInfo.orders.length > 0 &&
                  userInfo.orders.map((order) => (
                    <tr>
                      <td>{order._id}</td>
                      <td>{order.createdAt}</td>
                      <td>{order.isDelivered}</td>
                      <td>{order.totalPrice}</td>
                      <td>{order.tracking}</td>
                    </tr>
                  ))}
              </table>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="accountpage_shipping">
              <h1>Shipping / Billing Info</h1>
              {userInfo && (
                <div className="account_shipping_info_grid">
                  <div>Name: {userInfo.name}</div>
                  {userInfo.orders && userInfo.orders.length > 0 ? (
                    <>
                      <div>
                        Address: {userInfo.orders[0].shippingAddress.address}
                      </div>
                      <div>Town: {userInfo.orders[0].shippingAddress.town}</div>
                      <div>
                        State: {userInfo.orders[0].shippingAddress.state}
                      </div>
                      <div>
                        Postcode: {userInfo.orders[0].shippingAddress.postcode}
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              )}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="accountpage_shipping">
              <h1>Profile Info</h1>

              {userInfo && (
                <>
                  <div>Name: {userInfo.name}</div>
                  <div>Email: {userInfo.email}</div>
                </>
              )}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default Accountpage;
