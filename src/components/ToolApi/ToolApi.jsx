import React from "react";
// import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ToolApi = () => {
  return (
    <section className="tool-api-area">
      <div className="container-fluid">
        <Tabs className="row">
          <div className="col-lg-4 col-xl-3">
            <div className="sidebar-navs">
              <TabList>
                <Tab> Connection</Tab>
                <Tab>Purchase </Tab>
                <Tab>Pre-Authorization </Tab>
                <Tab>Pre-Authorization Completion </Tab>
                <Tab>Force Post </Tab>
                <Tab>Purchase Correction (Void) </Tab>
                <Tab>Refund </Tab>
                <Tab>Independent Refund </Tab>
                <Tab>Card Verification </Tab>
                <Tab>Batch Close </Tab>
                <Tab>Open Totals </Tab>
                <Tab>Recurring Billing Update </Tab>
                <Tab>Vault </Tab>
              </TabList>
            </div>
          </div>
          <div className="col-lg-8 col-xl-9">
            <div className="main-content-tabs">
              <TabPanel>
                <div className="content-title">
                  <h2>Connection</h2>
                </div>
                <div className="content-description">
                  <p>
                    There are some common steps for every transaction that is
                    processed.
                  </p>
                </div>
                <div className="content-list">
                  <ol>
                    <li>
                      Instantiate the transaction object (such as Purchase), and
                      update it with object definitions that refer to the
                      individual transaction.
                    </li>
                    <li>
                      Instantiate the HttpsPostRequest connection object and
                      update it with connection information, host information
                      and the transaction object that you created in step 1. The
                      HttpsPostRequest object and its mandatory variables apply
                      to every transaction request.
                    </li>
                    <li>Invoke the HttpsPostRequest object's send() method.</li>
                    <li>
                      Instantiate the Receipt object, by invoking the
                      HttpsPostRequest object's getReceipt() method. Use this
                      object to retrieve the applicable response details.
                    </li>
                  </ol>
                </div>
                <div className="content-description">
                  <p>
                    Some transactions may require steps in addition to the ones
                    listed here. For example, ACH transactions require the use
                    of an ACHinfo object.
                  </p>
                  <p>
                    For an example of the full steps for each transaction,
                    please refer to the individual transactions on this site.
                  </p>
                </div>
                <div className="content-title">
                  <h3>HttpsPostRequest object mandatory values</h3>
                </div>
                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th className="w-10">Value</th>
                      <th className="w-5">Type</th>
                      <th className="w-15">Limits</th>
                      <th className="w-20">Set Method</th>
                      <th className="w-50">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Processing country code</td>
                      <td>String</td>
                      <td>2-character alphabetic</td>
                      <td>
                        <span>
                          {" "}
                          mpgReq.setProcCountryCode(processing_country_code);
                        </span>
                      </td>
                      <td> CA for Canada</td>
                    </tr>
                    <tr>
                      <td>Test mode</td>
                      <td>Boolean</td>
                      <td>true/false</td>
                      <td>
                        <span>mpgReq.setTestMode(true);</span>
                      </td>
                      <td>
                        {" "}
                        Set to true when in test mode. Set to false (or comment
                        out entire line) when in production mode.
                      </td>
                    </tr>
                    <tr>
                      <td>Store ID</td>
                      <td>String</td>
                      <td> 10-character alphanumeric</td>
                      <td>
                        <span>mpgReq.setStoreId(store_id);</span>
                      </td>
                      <td>
                        Unique identifier provided by Moneris upon merchant
                        account set up.
                      </td>
                    </tr>
                    <tr>
                      <td>API Token</td>
                      <td>String</td>
                      <td>20-character alphabetic</td>
                      <td>
                        <span>mpgReq.setApiToken(api_token);</span>
                      </td>
                      <td>
                        Unique alphanumeric string assigned upon merchant
                        account activation. To locate your production API token,
                        refer to the Merchant Resource Centre Admin Store
                        Settings. The Merchant Resource Centre may be located at
                        the following CA URL
                      </td>
                    </tr>
                    <tr>
                      <td>Transaction</td>
                      <td>Object</td>
                      <td> </td>
                      <td>
                        <span>mpgReq.setTransaction(transaction);</span>
                      </td>
                      <td>
                        Sets the transaction object that is to be processed.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </TabPanel>
              <TabPanel>
                <div className="content-title">
                  <h2>Purchase</h2>
                </div>

                <div className="content-description">
                  <p>
                    A Purchase verifies funds on the customer’s card, removes
                    the funds and prepares them for deposit into the merchant’s
                    account.
                  </p>
                </div>
                <div className="content-title">
                  <h3>Purchase - Transaction Values</h3>
                </div>
                <div className="content-list">
                  <ul>
                    <li>
                      <span>Purchase purchase = new Purchase();</span>
                    </li>
                    <li>
                      <span>
                        HttpsPostRequest mpgReq = new HttpsPostRequest();
                      </span>
                    </li>
                    <li>
                      <span>mpgReq.setTransaction(purchase);</span>
                    </li>
                  </ul>
                </div>
                <div className="content-title">
                  <h3>Purchase object mandatory values</h3>
                </div>
                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th className="w-10">Value</th>
                      <th className="w-5">Type</th>
                      <th className="w-15">Limits</th>
                      <th className="w-20">Set Method</th>
                      <th className="w-50">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Order ID</td>
                      <td>String</td>
                      <td>50-character alphabetic</td>
                      <td>
                        <span>purchase.setOrderId(order_id);</span>
                      </td>
                      <td>
                        <p>
                          {" "}
                          Merchant-defined transaction identifier that must be
                          unique for every Purchase, Pre-Authorization and
                          Independent Refund transaction. No two transactions of
                          these types may have the same order ID.
                        </p>
                        <p>
                          For Refund, Completion and Purchase Correction
                          transactions, the order ID must be the same as that of
                          the original transaction.
                        </p>
                        <p>
                          The last 10 characters of the order ID are displayed
                          in the “Invoice Number” field on the Merchant Direct
                          Reports. However only letters, numbers and spaces are
                          sent to Merchant Direct.
                        </p>
                        <p>
                          A minimum of 3 and a maximum of 10 valid characters
                          are sent to Merchant Direct. Only the last characters
                          beginning after any invalid characters are sent. For
                          example, if the order ID is 1234-567890, only 567890
                          is sent to Merchant Direct.
                        </p>
                        <p>
                          If the order ID has fewer than 3 characters, it may
                          display a blank or 0000000000 in the Invoice Number
                          field.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>Amount</td>
                      <td>String</td>
                      <td>10-character alphabetic</td>
                      <td>
                        <span>purchase.setAmount(amount);</span>
                      </td>
                      <td>
                        <p>Transaction amount</p>
                        <p>
                          This must contain at least 3 digits, two of which are
                          penny values.
                        </p>
                        <p>
                          The minimum allowable value is $0.01, and the maximum
                          allowable value is $9999999.99. Transaction amounts of
                          $0.00 are not allowed.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>Credit card number</td>
                      <td>String</td>
                      <td>20-character alphabetic</td>
                      <td>
                        <span>purchase.setPan(pan);</span>
                      </td>
                      <td>
                        Most credit card numbers today are 16 digits, but some
                        13-digit numbers are still accepted by some issuers.
                        This field has been intentionally expanded to 20 digits
                        in consideration for future expansion and potential
                        support of private label card ranges.
                      </td>
                    </tr>
                    <tr>
                      <td>Expiry date</td>
                      <td>String</td>
                      <td>4-character alphabetic</td>
                      <td>
                        <span>purchase.setExpdate(expdate);</span>
                      </td>
                      <td>
                        <strong>Submit in YYMM format.</strong> <br />
                        <strong>Note: </strong> This is the reverse of the date
                        displayed on the physical card, which is MMYY.
                      </td>
                    </tr>
                    <tr>
                      <td>E-Commerce indicator</td>
                      <td>String</td>
                      <td>1-character alphabetic</td>
                      <td>
                        <span>purchase.setCryptType(crypt);</span>
                      </td>
                      <td>
                        <p>
                          Describes the category of e-commerce transaction being
                          processed. Allowable values are:
                        </p>
                        <ol>
                          <li>Mail Order / Telephone Order—Single</li>
                          <li>Mail Order / Telephone Order—Recurring</li>
                          <li>Mail Order / Telephone Order—Instalment</li>
                          <li>
                            Mail Order / Telephone Order—Unknown classification
                          </li>
                          <li>Authenticated e-commerce transaction (VBV)</li>
                          <li>
                            Non-authenticated e-commerce transaction (VBV)
                          </li>
                          <li>SSL-enabled merchant</li>
                        </ol>
                        <p>
                          <strong>
                            In Credential on File transactions where the request
                            field e-commerce indicator is also being sent:
                          </strong>{" "}
                          the allowable values for e-commerce indicator are
                          dependent on the value sent for payment indicator, as
                          follows:
                        </p>
                        <ul>
                          <li>
                            if payment indicator = R, then allowable values for
                            e-commerce indicator: 2, 5 or 6
                          </li>
                          <li>
                            if payment indicator = C, then allowable values for
                            e-commerce indicator: 1, 5, 6 or 7
                          </li>
                          <li>
                            if payment indicator = U, then allowable values for
                            e-commerce indicator: 1 or 7
                          </li>
                          <li>
                            if payment indicator = Z, then allowable values for
                            e-commerce indicator: 1, 5, 6 or 7
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </TabPanel>
              <TabPanel>
                <div className="content-title">
                  <h2>Pre-Authorization </h2>
                </div>
                <div className="content-description">
                  <p>
                    There are some common steps for every transaction that is
                    processed.
                  </p>
                </div>
                <div className="content-list">
                  <ol>
                    <li>
                      Instantiate the transaction object (such as Purchase), and
                      update it with object definitions that refer to the
                      individual transaction.
                    </li>
                    <li>
                      Instantiate the HttpsPostRequest connection object and
                      update it with connection information, host information
                      and the transaction object that you created in step 1. The
                      HttpsPostRequest object and its mandatory variables apply
                      to every transaction request.
                    </li>
                    <li>Invoke the HttpsPostRequest object's send() method.</li>
                    <li>
                      Instantiate the Receipt object, by invoking the
                      HttpsPostRequest object's getReceipt() method. Use this
                      object to retrieve the applicable response details.
                    </li>
                  </ol>
                </div>
                <div className="content-description">
                  <p>
                    Some transactions may require steps in addition to the ones
                    listed here. For example, ACH transactions require the use
                    of an ACHinfo object.
                  </p>
                  <p>
                    For an example of the full steps for each transaction,
                    please refer to the individual transactions on this site.
                  </p>
                </div>
                <div className="content-title">
                  <h3>HttpsPostRequest object mandatory values</h3>
                </div>
                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th className="w-10">Value</th>
                      <th className="w-5">Type</th>
                      <th className="w-15">Limits</th>
                      <th className="w-30">Set Method</th>
                      <th className="w-40">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Processing country code</td>
                      <td>String</td>
                      <td>2-character alphabetic</td>
                      <td>
                        mpgReq.setProcCountryCode(processing_country_code);
                      </td>
                      <td>
                        {" "}
                        Unique alphanumeric string assigned upon merchant
                        account activation. To locate your production API token,
                        refer to the Merchant Resource Centre Admin Store
                        Settings. The Merchant Resource Centre may be located at
                        the following CA URL
                      </td>
                    </tr>
                    <tr>
                      <td>Processing country code</td>
                      <td>String</td>
                      <td>2-character alphabetic</td>
                      <td>
                        mpgReq.setProcCountryCode(processing_country_code);
                      </td>
                      <td>
                        {" "}
                        Set to true when in test mode. Set to false (or comment
                        out entire line) when in production mode.
                      </td>
                    </tr>
                    <tr>
                      <td>Processing country code</td>
                      <td>String</td>
                      <td>2-character alphabetic</td>
                      <td>
                        mpgReq.setProcCountryCode(processing_country_code);
                      </td>
                      <td>
                        Unique identifier provided by Moneris upon merchant
                        account set up.
                      </td>
                    </tr>
                    <tr>
                      <td>Processing country code</td>
                      <td>String</td>
                      <td>2-character alphabetic</td>
                      <td>
                        mpgReq.setProcCountryCode(processing_country_code);
                      </td>
                      <td>
                        Sets the transaction object that is to be processed.
                      </td>
                    </tr>
                    <tr>
                      <td>Processing country code</td>
                      <td>String</td>
                      <td>2-character alphabetic</td>
                      <td>
                        mpgReq.setProcCountryCode(processing_country_code);
                      </td>
                      <td> CA for Canada</td>
                    </tr>
                  </tbody>
                </table>
              </TabPanel>
              <TabPanel>
                <div className="content-title">
                  <h2>Pre-Authorization Completion</h2>
                </div>
                <div className="content-description">
                  <p>
                    There are some common steps for every transaction that is
                    processed.
                  </p>
                </div>
                <div className="content-list">
                  <ol>
                    <li>
                      Instantiate the transaction object (such as Purchase), and
                      update it with object definitions that refer to the
                      individual transaction.
                    </li>
                    <li>
                      Instantiate the HttpsPostRequest connection object and
                      update it with connection information, host information
                      and the transaction object that you created in step 1. The
                      HttpsPostRequest object and its mandatory variables apply
                      to every transaction request.
                    </li>
                    <li>Invoke the HttpsPostRequest object's send() method.</li>
                    <li>
                      Instantiate the Receipt object, by invoking the
                      HttpsPostRequest object's getReceipt() method. Use this
                      object to retrieve the applicable response details.
                    </li>
                  </ol>
                </div>
                <div className="content-description">
                  <p>
                    Some transactions may require steps in addition to the ones
                    listed here. For example, ACH transactions require the use
                    of an ACHinfo object.
                  </p>
                  <p>
                    For an example of the full steps for each transaction,
                    please refer to the individual transactions on this site.
                  </p>
                </div>
                <div className="content-title">
                  <h3>HttpsPostRequest object mandatory values</h3>
                </div>
                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th className="w-10">Value</th>
                      <th className="w-5">Type</th>
                      <th className="w-15">Limits</th>
                      <th className="w-30">Set Method</th>
                      <th className="w-40">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Processing country code</td>
                      <td>String</td>
                      <td>2-character alphabetic</td>
                      <td>
                        mpgReq.setProcCountryCode(processing_country_code);
                      </td>
                      <td>
                        {" "}
                        Unique alphanumeric string assigned upon merchant
                        account activation. To locate your production API token,
                        refer to the Merchant Resource Centre Admin Store
                        Settings. The Merchant Resource Centre may be located at
                        the following CA URL
                      </td>
                    </tr>
                    <tr>
                      <td>Processing country code</td>
                      <td>String</td>
                      <td>2-character alphabetic</td>
                      <td>
                        mpgReq.setProcCountryCode(processing_country_code);
                      </td>
                      <td>
                        {" "}
                        Set to true when in test mode. Set to false (or comment
                        out entire line) when in production mode.
                      </td>
                    </tr>
                    <tr>
                      <td>Processing country code</td>
                      <td>String</td>
                      <td>2-character alphabetic</td>
                      <td>
                        mpgReq.setProcCountryCode(processing_country_code);
                      </td>
                      <td>
                        Unique identifier provided by Moneris upon merchant
                        account set up.
                      </td>
                    </tr>
                    <tr>
                      <td>Processing country code</td>
                      <td>String</td>
                      <td>2-character alphabetic</td>
                      <td>
                        mpgReq.setProcCountryCode(processing_country_code);
                      </td>
                      <td>
                        Sets the transaction object that is to be processed.
                      </td>
                    </tr>
                    <tr>
                      <td>Processing country code</td>
                      <td>String</td>
                      <td>2-character alphabetic</td>
                      <td>
                        mpgReq.setProcCountryCode(processing_country_code);
                      </td>
                      <td> CA for Canada</td>
                    </tr>
                  </tbody>
                </table>
              </TabPanel>
              <TabPanel>
                <div className="content-title">
                  <h2>Force Post</h2>
                </div>
                <div className="content-description">
                  <p>
                    There are some common steps for every transaction that is
                    processed.
                  </p>
                </div>
                <div className="content-list">
                  <ol>
                    <li>
                      Instantiate the transaction object (such as Purchase), and
                      update it with object definitions that refer to the
                      individual transaction.
                    </li>
                    <li>
                      Instantiate the HttpsPostRequest connection object and
                      update it with connection information, host information
                      and the transaction object that you created in step 1. The
                      HttpsPostRequest object and its mandatory variables apply
                      to every transaction request.
                    </li>
                    <li>Invoke the HttpsPostRequest object's send() method.</li>
                    <li>
                      Instantiate the Receipt object, by invoking the
                      HttpsPostRequest object's getReceipt() method. Use this
                      object to retrieve the applicable response details.
                    </li>
                  </ol>
                </div>
                <div className="content-description">
                  <p>
                    Some transactions may require steps in addition to the ones
                    listed here. For example, ACH transactions require the use
                    of an ACHinfo object.
                  </p>
                  <p>
                    For an example of the full steps for each transaction,
                    please refer to the individual transactions on this site.
                  </p>
                </div>
                <div className="content-title">
                  <h3>HttpsPostRequest object mandatory values</h3>
                </div>
                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th className="w-10">Value</th>
                      <th className="w-5">Type</th>
                      <th className="w-15">Limits</th>
                      <th className="w-30">Set Method</th>
                      <th className="w-40">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Processing country code</td>
                      <td>String</td>
                      <td>2-character alphabetic</td>
                      <td>
                        mpgReq.setProcCountryCode(processing_country_code);
                      </td>
                      <td>
                        {" "}
                        Unique alphanumeric string assigned upon merchant
                        account activation. To locate your production API token,
                        refer to the Merchant Resource Centre Admin Store
                        Settings. The Merchant Resource Centre may be located at
                        the following CA URL
                      </td>
                    </tr>
                    <tr>
                      <td>Processing country code</td>
                      <td>String</td>
                      <td>2-character alphabetic</td>
                      <td>
                        mpgReq.setProcCountryCode(processing_country_code);
                      </td>
                      <td>
                        {" "}
                        Set to true when in test mode. Set to false (or comment
                        out entire line) when in production mode.
                      </td>
                    </tr>
                    <tr>
                      <td>Processing country code</td>
                      <td>String</td>
                      <td>2-character alphabetic</td>
                      <td>
                        mpgReq.setProcCountryCode(processing_country_code);
                      </td>
                      <td>
                        Unique identifier provided by Moneris upon merchant
                        account set up.
                      </td>
                    </tr>
                    <tr>
                      <td>Processing country code</td>
                      <td>String</td>
                      <td>2-character alphabetic</td>
                      <td>
                        mpgReq.setProcCountryCode(processing_country_code);
                      </td>
                      <td>
                        Sets the transaction object that is to be processed.
                      </td>
                    </tr>
                    <tr>
                      <td>Processing country code</td>
                      <td>String</td>
                      <td>2-character alphabetic</td>
                      <td>
                        mpgReq.setProcCountryCode(processing_country_code);
                      </td>
                      <td> CA for Canada</td>
                    </tr>
                  </tbody>
                </table>
              </TabPanel>
              <TabPanel>
                <div className="content-title">
                  <h2>Purchase Correction (Void)</h2>
                </div>
                <div className="content-description">
                  <p>
                    There are some common steps for every transaction that is
                    processed.
                  </p>
                </div>
                <div className="content-list">
                  <ol>
                    <li>
                      Instantiate the transaction object (such as Purchase), and
                      update it with object definitions that refer to the
                      individual transaction.
                    </li>
                    <li>
                      Instantiate the HttpsPostRequest connection object and
                      update it with connection information, host information
                      and the transaction object that you created in step 1. The
                      HttpsPostRequest object and its mandatory variables apply
                      to every transaction request.
                    </li>
                    <li>Invoke the HttpsPostRequest object's send() method.</li>
                    <li>
                      Instantiate the Receipt object, by invoking the
                      HttpsPostRequest object's getReceipt() method. Use this
                      object to retrieve the applicable response details.
                    </li>
                  </ol>
                </div>
                <div className="content-description">
                  <p>
                    Some transactions may require steps in addition to the ones
                    listed here. For example, ACH transactions require the use
                    of an ACHinfo object.
                  </p>
                  <p>
                    For an example of the full steps for each transaction,
                    please refer to the individual transactions on this site.
                  </p>
                </div>
                <div className="content-title">
                  <h3>HttpsPostRequest object mandatory values</h3>
                </div>
                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th className="w-10">Value</th>
                      <th className="w-5">Type</th>
                      <th className="w-15">Limits</th>
                      <th className="w-30">Set Method</th>
                      <th className="w-40">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Processing country code</td>
                      <td>String</td>
                      <td>2-character alphabetic</td>
                      <td>
                        mpgReq.setProcCountryCode(processing_country_code);
                      </td>
                      <td>
                        {" "}
                        Unique alphanumeric string assigned upon merchant
                        account activation. To locate your production API token,
                        refer to the Merchant Resource Centre Admin Store
                        Settings. The Merchant Resource Centre may be located at
                        the following CA URL
                      </td>
                    </tr>
                    <tr>
                      <td>Processing country code</td>
                      <td>String</td>
                      <td>2-character alphabetic</td>
                      <td>
                        mpgReq.setProcCountryCode(processing_country_code);
                      </td>
                      <td>
                        {" "}
                        Set to true when in test mode. Set to false (or comment
                        out entire line) when in production mode.
                      </td>
                    </tr>
                    <tr>
                      <td>Processing country code</td>
                      <td>String</td>
                      <td>2-character alphabetic</td>
                      <td>
                        mpgReq.setProcCountryCode(processing_country_code);
                      </td>
                      <td>
                        Unique identifier provided by Moneris upon merchant
                        account set up.
                      </td>
                    </tr>
                    <tr>
                      <td>Processing country code</td>
                      <td>String</td>
                      <td>2-character alphabetic</td>
                      <td>
                        mpgReq.setProcCountryCode(processing_country_code);
                      </td>
                      <td>
                        Sets the transaction object that is to be processed.
                      </td>
                    </tr>
                    <tr>
                      <td>Processing country code</td>
                      <td>String</td>
                      <td>2-character alphabetic</td>
                      <td>
                        mpgReq.setProcCountryCode(processing_country_code);
                      </td>
                      <td> CA for Canada</td>
                    </tr>
                  </tbody>
                </table>
              </TabPanel>
              <TabPanel>
                <div className="content-title">
                  <h2>Refund</h2>
                </div>
                <div className="content-description">
                  <p>
                    There are some common steps for every transaction that is
                    processed.
                  </p>
                </div>
                <div className="content-list">
                  <ol>
                    <li>
                      Instantiate the transaction object (such as Purchase), and
                      update it with object definitions that refer to the
                      individual transaction.
                    </li>
                    <li>
                      Instantiate the HttpsPostRequest connection object and
                      update it with connection information, host information
                      and the transaction object that you created in step 1. The
                      HttpsPostRequest object and its mandatory variables apply
                      to every transaction request.
                    </li>
                    <li>Invoke the HttpsPostRequest object's send() method.</li>
                    <li>
                      Instantiate the Receipt object, by invoking the
                      HttpsPostRequest object's getReceipt() method. Use this
                      object to retrieve the applicable response details.
                    </li>
                  </ol>
                </div>
                <div className="content-description">
                  <p>
                    Some transactions may require steps in addition to the ones
                    listed here. For example, ACH transactions require the use
                    of an ACHinfo object.
                  </p>
                  <p>
                    For an example of the full steps for each transaction,
                    please refer to the individual transactions on this site.
                  </p>
                </div>
                <div className="content-title">
                  <h3>HttpsPostRequest object mandatory values</h3>
                </div>
                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th className="w-10">Value</th>
                      <th className="w-5">Type</th>
                      <th className="w-15">Limits</th>
                      <th className="w-30">Set Method</th>
                      <th className="w-40">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Processing country code</td>
                      <td>String</td>
                      <td>2-character alphabetic</td>
                      <td>
                        mpgReq.setProcCountryCode(processing_country_code);
                      </td>
                      <td>
                        {" "}
                        Unique alphanumeric string assigned upon merchant
                        account activation. To locate your production API token,
                        refer to the Merchant Resource Centre Admin Store
                        Settings. The Merchant Resource Centre may be located at
                        the following CA URL
                      </td>
                    </tr>
                    <tr>
                      <td>Processing country code</td>
                      <td>String</td>
                      <td>2-character alphabetic</td>
                      <td>
                        mpgReq.setProcCountryCode(processing_country_code);
                      </td>
                      <td>
                        {" "}
                        Set to true when in test mode. Set to false (or comment
                        out entire line) when in production mode.
                      </td>
                    </tr>
                    <tr>
                      <td>Processing country code</td>
                      <td>String</td>
                      <td>2-character alphabetic</td>
                      <td>
                        mpgReq.setProcCountryCode(processing_country_code);
                      </td>
                      <td>
                        Unique identifier provided by Moneris upon merchant
                        account set up.
                      </td>
                    </tr>
                    <tr>
                      <td>Processing country code</td>
                      <td>String</td>
                      <td>2-character alphabetic</td>
                      <td>
                        mpgReq.setProcCountryCode(processing_country_code);
                      </td>
                      <td>
                        Sets the transaction object that is to be processed.
                      </td>
                    </tr>
                    <tr>
                      <td>Processing country code</td>
                      <td>String</td>
                      <td>2-character alphabetic</td>
                      <td>
                        mpgReq.setProcCountryCode(processing_country_code);
                      </td>
                      <td> CA for Canada</td>
                    </tr>
                  </tbody>
                </table>
              </TabPanel>
              <TabPanel>
                <div className="content-title">
                  <h2>Independent Refund</h2>
                </div>
                <div className="content-description">
                  <p>
                    There are some common steps for every transaction that is
                    processed.
                  </p>
                </div>
                <div className="content-list">
                  <ol>
                    <li>
                      Instantiate the transaction object (such as Purchase), and
                      update it with object definitions that refer to the
                      individual transaction.
                    </li>
                    <li>
                      Instantiate the HttpsPostRequest connection object and
                      update it with connection information, host information
                      and the transaction object that you created in step 1. The
                      HttpsPostRequest object and its mandatory variables apply
                      to every transaction request.
                    </li>
                    <li>Invoke the HttpsPostRequest object's send() method.</li>
                    <li>
                      Instantiate the Receipt object, by invoking the
                      HttpsPostRequest object's getReceipt() method. Use this
                      object to retrieve the applicable response details.
                    </li>
                  </ol>
                </div>
                <div className="content-description">
                  <p>
                    Some transactions may require steps in addition to the ones
                    listed here. For example, ACH transactions require the use
                    of an ACHinfo object.
                  </p>
                  <p>
                    For an example of the full steps for each transaction,
                    please refer to the individual transactions on this site.
                  </p>
                </div>
                <div className="content-title">
                  <h3>HttpsPostRequest object mandatory values</h3>
                </div>
                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th className="w-10">Value</th>
                      <th className="w-5">Type</th>
                      <th className="w-15">Limits</th>
                      <th className="w-30">Set Method</th>
                      <th className="w-40">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Processing country code</td>
                      <td>String</td>
                      <td>2-character alphabetic</td>
                      <td>
                        mpgReq.setProcCountryCode(processing_country_code);
                      </td>
                      <td>
                        {" "}
                        Unique alphanumeric string assigned upon merchant
                        account activation. To locate your production API token,
                        refer to the Merchant Resource Centre Admin Store
                        Settings. The Merchant Resource Centre may be located at
                        the following CA URL
                      </td>
                    </tr>
                    <tr>
                      <td>Processing country code</td>
                      <td>String</td>
                      <td>2-character alphabetic</td>
                      <td>
                        mpgReq.setProcCountryCode(processing_country_code);
                      </td>
                      <td>
                        {" "}
                        Set to true when in test mode. Set to false (or comment
                        out entire line) when in production mode.
                      </td>
                    </tr>
                    <tr>
                      <td>Processing country code</td>
                      <td>String</td>
                      <td>2-character alphabetic</td>
                      <td>
                        mpgReq.setProcCountryCode(processing_country_code);
                      </td>
                      <td>
                        Unique identifier provided by Moneris upon merchant
                        account set up.
                      </td>
                    </tr>
                    <tr>
                      <td>Processing country code</td>
                      <td>String</td>
                      <td>2-character alphabetic</td>
                      <td>
                        mpgReq.setProcCountryCode(processing_country_code);
                      </td>
                      <td>
                        Sets the transaction object that is to be processed.
                      </td>
                    </tr>
                    <tr>
                      <td>Processing country code</td>
                      <td>String</td>
                      <td>2-character alphabetic</td>
                      <td>
                        mpgReq.setProcCountryCode(processing_country_code);
                      </td>
                      <td> CA for Canada</td>
                    </tr>
                  </tbody>
                </table>
              </TabPanel>
              <TabPanel>
                <div className="content-title">
                  <h2>Card Verification with CVD & AVS</h2>
                </div>
                <div className="content-description">
                  <p>
                    Verifies the validity of the credit card, expiry date and
                    any additional details (such as the Card Verification Digits
                    or Address Verification details). It does not verify the
                    available amount or lock any funds on the credit card.
                  </p>
                  <p>
                    The Card Validation Digits (CVD) value refers to the numbers
                    appearing on the back of the credit card rather than the
                    numbers imprinted on the front. It is an optional fraud
                    prevention tool that enables merchants to verify data
                    provided by the cardholder at transaction time. This data is
                    submitted along with the transaction to the issuing bank,
                    which provides a response indicating whether the data is a
                    match.
                  </p>
                  <p>
                    The response that is received from CVD verification is
                    intended to provide added security and fraud prevention, but
                    the response itself does not affect the completion of a
                    transaction. Upon receiving a response, the choice whether
                    to proceed with a transaction is left entirely to the
                    merchant. The response is not a strict guideline of which
                    transaction will approve or decline.
                  </p>
                  <p>
                    Address Verification Service (AVS) is an optional
                    fraud-prevention tool offered by issuing banks whereby a
                    cardholder's address is submitted as part of the transaction
                    authorization. The AVS address is then compared to the
                    address kept on file at the issuing bank. AVS checks whether
                    the street number, street name and zip/postal code match.
                    The issuing bank returns an AVS result code indicating
                    whether the data was matched successfully. Regardless of the
                    AVS result code returned, the credit card is authorized or
                    declined by the issuing bank.
                  </p>
                  <p>
                    The response that is received from AVS verification is
                    intended to provide added security and fraud prevention, but
                    the response itself does not affect the completion of a
                    transaction. Upon receiving a response, the choice to
                    proceed with a transaction is left entirely to the merchant.
                    The responses is not a strict guideline of whether a
                    transaction will be approved or declined.
                  </p>
                </div>
                <div className="content-list">
                  <p>Things to consider:</p>
                  <ol>
                    <li>
                      Card Verification transaction is only supported by Visa,
                      MasterCard, Discover, and American Express.
                    </li>
                    <li>
                      When testing CVD or AVS, you must use the Card numbers and
                      the amounts described in the Simulator eFraud Response
                      Codes Table.
                    </li>
                    <li>
                      For a full list of possible AVS & CVD result codes refer
                      to the CVD and AVS Result Code tables..
                    </li>
                  </ol>
                </div>
                <div className="content-description">
                  <p>
                    <strong> Security: </strong> The CVD value must only be
                    passed to the payment gateway. Under no circumstances may it
                    be stored for subsequent uses or displayed as part of the
                    receipt information.
                  </p>
                </div>
                <div className="content-title">
                  <h3>Card Verification transaction object definition</h3>
                </div>
                <div className="content-list">
                  <ul>
                    <li>
                      <span>
                        CardVerification cardVerification = new
                        CardVerification();
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="content-title">
                  <h3>
                    HttpsPostRequest object for Card Verification transaction
                  </h3>
                </div>
                <div className="content-list">
                  <ul>
                    <li>
                      <span>
                        HttpsPostRequest mpgReq = new HttpsPostRequest();
                      </span>
                    </li>
                    <li>
                      <span>mpgReq.setTransaction(cardVerification);</span>
                    </li>
                  </ul>
                </div>
                <div className="content-title">
                  <h3>Card Verification transaction object mandatory values</h3>
                </div>
                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th className="w-10">Value</th>
                      <th className="w-5">Type</th>
                      <th className="w-15">Limits</th>
                      <th className="w-20">Set Method</th>
                      <th className="w-50">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Order ID</td>
                      <td>String</td>
                      <td>50-character alphabetic</td>
                      <td>
                        <span>cardVerification.setOrderId(order_id);</span>
                      </td>
                      <td>
                        <p>
                          {" "}
                          Merchant-defined transaction identifier that must be
                          unique for every Purchase, Pre-Authorization and
                          Independent Refund transaction. No two transactions of
                          these types may have the same order ID.
                        </p>
                        <p>
                          For Refund, Completion and Purchase Correction
                          transactions, the order ID must be the same as that of
                          the original transaction.
                        </p>
                        <p>
                          The last 10 characters of the order ID are displayed
                          in the “Invoice Number” field on the Merchant Direct
                          Reports. However only letters, numbers and spaces are
                          sent to Merchant Direct.
                        </p>
                        <p>
                          A minimum of 3 and a maximum of 10 valid characters
                          are sent to Merchant Direct. Only the last characters
                          beginning after any invalid characters are sent. For
                          example, if the order ID is <b>1234-567890</b>, only
                          <b>567890</b> is sent to Merchant Direct.
                        </p>
                        <p>
                          If the order ID has fewer than 3 characters, it may
                          display a blank or 0000000000 in the Invoice Number
                          field.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>Credit card number</td>
                      <td>String</td>
                      <td>20-character alphabetic</td>
                      <td>
                        <span>ardVerification.setPan(pan);</span>
                      </td>
                      <td>
                        Most credit card numbers today are 16 digits, but some
                        13-digit numbers are still accepted by some issuers.
                        This field has been intentionally expanded to 20 digits
                        in consideration for future expansion and potential
                        support of private label card ranges.
                      </td>
                    </tr>
                    <tr>
                      <td>Expiry date</td>
                      <td>String</td>
                      <td>4-character alphabetic</td>
                      <td>
                        <span>cardVerification.setExpdate(expdate);</span>
                      </td>
                      <td>
                        <strong>Submit in YYMM format. </strong>
                        <br />
                        <strong> Note: </strong> This is the reverse of the date
                        displayed on the physical card, which is MMYY.
                      </td>
                    </tr>
                    <tr>
                      <td>E-commerce indicator</td>
                      <td>String</td>
                      <td>1-character alphabetic</td>
                      <td>
                        <span>cardVerification.setCryptType(crypt);</span>
                      </td>
                      <td>
                        <p>
                          Describes the category of e-commerce transaction being
                          processed. Allowable values are:
                        </p>
                        <ol>
                          <li>Mail Order / Telephone Order—Single</li>
                          <li>Mail Order / Telephone Order—Recurring</li>
                          <li>Mail Order / Telephone Order—Instalment</li>
                          <li>
                            Mail Order / Telephone Order—Unknown classification
                          </li>
                          <li>Authenticated e-commerce transaction (VBV)</li>
                          <li>
                            Non-authenticated e-commerce transaction (VBV)
                          </li>
                          <li>SSL-enabled merchant</li>
                        </ol>
                        <p>
                          <strong>
                            In Credential on File transactions where the request
                            field e-commerce indicator is also being sent:
                          </strong>{" "}
                          the allowable values for e-commerce indicator are
                          dependent on the value sent for payment indicator, as
                          follows:
                        </p>
                        <ul>
                          <li>
                            if payment indicator = R, then allowable values for
                            e-commerce indicator: 2, 5 or 6
                          </li>
                          <li>
                            if payment indicator = C, then allowable values for
                            e-commerce indicator: 1, 5, 6 or 7
                          </li>
                          <li>
                            if payment indicator = U, then allowable values for
                            e-commerce indicator: 1 or 7
                          </li>
                          <li>
                            if payment indicator = Z, then allowable values for
                            e-commerce indicator: 1, 5, 6 or 7
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>CVD</td>
                      <td>Object</td>
                      <td>Not applicable.</td>
                      <td>
                        <span>cardVerification.setCvdInfo(cvdCheck);</span>
                      </td>
                      <td>
                        {" "}
                        <strong> Note: </strong> It is optional for Canada.
                        Refer below for further breakdown and definition.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </TabPanel>
              <TabPanel>
                <div className="content-title">
                  <h2>Batch Close</h2>
                </div>
                <div className="content-description">
                  <p>
                    There are some common steps for every transaction that is
                    processed.
                  </p>
                </div>
                <div className="content-list">
                  <ol>
                    <li>
                      Instantiate the transaction object (such as Purchase), and
                      update it with object definitions that refer to the
                      individual transaction.
                    </li>
                    <li>
                      Instantiate the HttpsPostRequest connection object and
                      update it with connection information, host information
                      and the transaction object that you created in step 1. The
                      HttpsPostRequest object and its mandatory variables apply
                      to every transaction request.
                    </li>
                    <li>Invoke the HttpsPostRequest object's send() method.</li>
                    <li>
                      Instantiate the Receipt object, by invoking the
                      HttpsPostRequest object's getReceipt() method. Use this
                      object to retrieve the applicable response details.
                    </li>
                  </ol>
                </div>
                <div className="content-description">
                  <p>
                    Some transactions may require steps in addition to the ones
                    listed here. For example, ACH transactions require the use
                    of an ACHinfo object.
                  </p>
                  <p>
                    For an example of the full steps for each transaction,
                    please refer to the individual transactions on this site.
                  </p>
                </div>
                <div className="content-title">
                  <h3>HttpsPostRequest object mandatory values</h3>
                </div>
                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th className="w-10">Value</th>
                      <th className="w-5">Type</th>
                      <th className="w-15">Limits</th>
                      <th className="w-30">Set Method</th>
                      <th className="w-40">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Processing country code</td>
                      <td>String</td>
                      <td>2-character alphabetic</td>
                      <td>
                        mpgReq.setProcCountryCode(processing_country_code);
                      </td>
                      <td>
                        {" "}
                        Unique alphanumeric string assigned upon merchant
                        account activation. To locate your production API token,
                        refer to the Merchant Resource Centre Admin Store
                        Settings. The Merchant Resource Centre may be located at
                        the following CA URL
                      </td>
                    </tr>
                    <tr>
                      <td>Processing country code</td>
                      <td>String</td>
                      <td>2-character alphabetic</td>
                      <td>
                        mpgReq.setProcCountryCode(processing_country_code);
                      </td>
                      <td>
                        {" "}
                        Set to true when in test mode. Set to false (or comment
                        out entire line) when in production mode.
                      </td>
                    </tr>
                    <tr>
                      <td>Processing country code</td>
                      <td>String</td>
                      <td>2-character alphabetic</td>
                      <td>
                        mpgReq.setProcCountryCode(processing_country_code);
                      </td>
                      <td>
                        Unique identifier provided by Moneris upon merchant
                        account set up.
                      </td>
                    </tr>
                    <tr>
                      <td>Processing country code</td>
                      <td>String</td>
                      <td>2-character alphabetic</td>
                      <td>
                        mpgReq.setProcCountryCode(processing_country_code);
                      </td>
                      <td>
                        Sets the transaction object that is to be processed.
                      </td>
                    </tr>
                    <tr>
                      <td>Processing country code</td>
                      <td>String</td>
                      <td>2-character alphabetic</td>
                      <td>
                        mpgReq.setProcCountryCode(processing_country_code);
                      </td>
                      <td> CA for Canada</td>
                    </tr>
                  </tbody>
                </table>
              </TabPanel>
              <TabPanel>
                <div className="content-title">
                  <h2>Open Totals</h2>
                </div>
                <div className="content-description">
                  <p>
                    There are some common steps for every transaction that is
                    processed.
                  </p>
                </div>
                <div className="content-list">
                  <ol>
                    <li>
                      Instantiate the transaction object (such as Purchase), and
                      update it with object definitions that refer to the
                      individual transaction.
                    </li>
                    <li>
                      Instantiate the HttpsPostRequest connection object and
                      update it with connection information, host information
                      and the transaction object that you created in step 1. The
                      HttpsPostRequest object and its mandatory variables apply
                      to every transaction request.
                    </li>
                    <li>Invoke the HttpsPostRequest object's send() method.</li>
                    <li>
                      Instantiate the Receipt object, by invoking the
                      HttpsPostRequest object's getReceipt() method. Use this
                      object to retrieve the applicable response details.
                    </li>
                  </ol>
                </div>
                <div className="content-description">
                  <p>
                    Some transactions may require steps in addition to the ones
                    listed here. For example, ACH transactions require the use
                    of an ACHinfo object.
                  </p>
                  <p>
                    For an example of the full steps for each transaction,
                    please refer to the individual transactions on this site.
                  </p>
                </div>
                <div className="content-title">
                  <h3>HttpsPostRequest object mandatory values</h3>
                </div>
                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th className="w-10">Value</th>
                      <th className="w-5">Type</th>
                      <th className="w-15">Limits</th>
                      <th className="w-30">Set Method</th>
                      <th className="w-40">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Processing country code</td>
                      <td>String</td>
                      <td>2-character alphabetic</td>
                      <td>
                        mpgReq.setProcCountryCode(processing_country_code);
                      </td>
                      <td>
                        {" "}
                        Unique alphanumeric string assigned upon merchant
                        account activation. To locate your production API token,
                        refer to the Merchant Resource Centre Admin Store
                        Settings. The Merchant Resource Centre may be located at
                        the following CA URL
                      </td>
                    </tr>
                    <tr>
                      <td>Processing country code</td>
                      <td>String</td>
                      <td>2-character alphabetic</td>
                      <td>
                        mpgReq.setProcCountryCode(processing_country_code);
                      </td>
                      <td>
                        {" "}
                        Set to true when in test mode. Set to false (or comment
                        out entire line) when in production mode.
                      </td>
                    </tr>
                    <tr>
                      <td>Processing country code</td>
                      <td>String</td>
                      <td>2-character alphabetic</td>
                      <td>
                        mpgReq.setProcCountryCode(processing_country_code);
                      </td>
                      <td>
                        Unique identifier provided by Moneris upon merchant
                        account set up.
                      </td>
                    </tr>
                    <tr>
                      <td>Processing country code</td>
                      <td>String</td>
                      <td>2-character alphabetic</td>
                      <td>
                        mpgReq.setProcCountryCode(processing_country_code);
                      </td>
                      <td>
                        Sets the transaction object that is to be processed.
                      </td>
                    </tr>
                    <tr>
                      <td>Processing country code</td>
                      <td>String</td>
                      <td>2-character alphabetic</td>
                      <td>
                        mpgReq.setProcCountryCode(processing_country_code);
                      </td>
                      <td> CA for Canada</td>
                    </tr>
                  </tbody>
                </table>
              </TabPanel>
              <TabPanel>
                <div className="content-title">
                  <h2>Recurring Billing Update</h2>
                </div>
                <div className="content-description">
                  <p>
                    There are some common steps for every transaction that is
                    processed.
                  </p>
                </div>
                <div className="content-list">
                  <ol>
                    <li>
                      Instantiate the transaction object (such as Purchase), and
                      update it with object definitions that refer to the
                      individual transaction.
                    </li>
                    <li>
                      Instantiate the HttpsPostRequest connection object and
                      update it with connection information, host information
                      and the transaction object that you created in step 1. The
                      HttpsPostRequest object and its mandatory variables apply
                      to every transaction request.
                    </li>
                    <li>Invoke the HttpsPostRequest object's send() method.</li>
                    <li>
                      Instantiate the Receipt object, by invoking the
                      HttpsPostRequest object's getReceipt() method. Use this
                      object to retrieve the applicable response details.
                    </li>
                  </ol>
                </div>
                <div className="content-description">
                  <p>
                    Some transactions may require steps in addition to the ones
                    listed here. For example, ACH transactions require the use
                    of an ACHinfo object.
                  </p>
                  <p>
                    For an example of the full steps for each transaction,
                    please refer to the individual transactions on this site.
                  </p>
                </div>
                <div className="content-title">
                  <h3>HttpsPostRequest object mandatory values</h3>
                </div>
                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th className="w-10">Value</th>
                      <th className="w-5">Type</th>
                      <th className="w-15">Limits</th>
                      <th className="w-30">Set Method</th>
                      <th className="w-40">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Processing country code</td>
                      <td>String</td>
                      <td>2-character alphabetic</td>
                      <td>
                        mpgReq.setProcCountryCode(processing_country_code);
                      </td>
                      <td>
                        {" "}
                        Unique alphanumeric string assigned upon merchant
                        account activation. To locate your production API token,
                        refer to the Merchant Resource Centre Admin Store
                        Settings. The Merchant Resource Centre may be located at
                        the following CA URL
                      </td>
                    </tr>
                    <tr>
                      <td>Processing country code</td>
                      <td>String</td>
                      <td>2-character alphabetic</td>
                      <td>
                        mpgReq.setProcCountryCode(processing_country_code);
                      </td>
                      <td>
                        {" "}
                        Set to true when in test mode. Set to false (or comment
                        out entire line) when in production mode.
                      </td>
                    </tr>
                    <tr>
                      <td>Processing country code</td>
                      <td>String</td>
                      <td>2-character alphabetic</td>
                      <td>
                        mpgReq.setProcCountryCode(processing_country_code);
                      </td>
                      <td>
                        Unique identifier provided by Moneris upon merchant
                        account set up.
                      </td>
                    </tr>
                    <tr>
                      <td>Processing country code</td>
                      <td>String</td>
                      <td>2-character alphabetic</td>
                      <td>
                        mpgReq.setProcCountryCode(processing_country_code);
                      </td>
                      <td>
                        Sets the transaction object that is to be processed.
                      </td>
                    </tr>
                    <tr>
                      <td>Processing country code</td>
                      <td>String</td>
                      <td>2-character alphabetic</td>
                      <td>
                        mpgReq.setProcCountryCode(processing_country_code);
                      </td>
                      <td> CA for Canada</td>
                    </tr>
                  </tbody>
                </table>
              </TabPanel>
              <TabPanel>
                <div className="content-title">
                  <h2>Vault</h2>
                </div>
                <div className="content-description">
                  <p>
                    There are some common steps for every transaction that is
                    processed.
                  </p>
                </div>
                <div className="content-list">
                  <ol>
                    <li>
                      Instantiate the transaction object (such as Purchase), and
                      update it with object definitions that refer to the
                      individual transaction.
                    </li>
                    <li>
                      Instantiate the HttpsPostRequest connection object and
                      update it with connection information, host information
                      and the transaction object that you created in step 1. The
                      HttpsPostRequest object and its mandatory variables apply
                      to every transaction request.
                    </li>
                    <li>Invoke the HttpsPostRequest object's send() method.</li>
                    <li>
                      Instantiate the Receipt object, by invoking the
                      HttpsPostRequest object's getReceipt() method. Use this
                      object to retrieve the applicable response details.
                    </li>
                  </ol>
                </div>
                <div className="content-description">
                  <p>
                    Some transactions may require steps in addition to the ones
                    listed here. For example, ACH transactions require the use
                    of an ACHinfo object.
                  </p>
                  <p>
                    For an example of the full steps for each transaction,
                    please refer to the individual transactions on this site.
                  </p>
                </div>
                <div className="content-title">
                  <h3>HttpsPostRequest object mandatory values</h3>
                </div>
                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th className="w-10">Value</th>
                      <th className="w-5">Type</th>
                      <th className="w-15">Limits</th>
                      <th className="w-30">Set Method</th>
                      <th className="w-40">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Processing country code</td>
                      <td>String</td>
                      <td>2-character alphabetic</td>
                      <td>
                        mpgReq.setProcCountryCode(processing_country_code);
                      </td>
                      <td>
                        {" "}
                        Unique alphanumeric string assigned upon merchant
                        account activation. To locate your production API token,
                        refer to the Merchant Resource Centre Admin Store
                        Settings. The Merchant Resource Centre may be located at
                        the following CA URL
                      </td>
                    </tr>
                    <tr>
                      <td>Processing country code</td>
                      <td>String</td>
                      <td>2-character alphabetic</td>
                      <td>
                        mpgReq.setProcCountryCode(processing_country_code);
                      </td>
                      <td>
                        {" "}
                        Set to true when in test mode. Set to false (or comment
                        out entire line) when in production mode.
                      </td>
                    </tr>
                    <tr>
                      <td>Processing country code</td>
                      <td>String</td>
                      <td>2-character alphabetic</td>
                      <td>
                        mpgReq.setProcCountryCode(processing_country_code);
                      </td>
                      <td>
                        Unique identifier provided by Moneris upon merchant
                        account set up.
                      </td>
                    </tr>
                    <tr>
                      <td>Processing country code</td>
                      <td>String</td>
                      <td>2-character alphabetic</td>
                      <td>
                        mpgReq.setProcCountryCode(processing_country_code);
                      </td>
                      <td>
                        Sets the transaction object that is to be processed.
                      </td>
                    </tr>
                    <tr>
                      <td>Processing country code</td>
                      <td>String</td>
                      <td>2-character alphabetic</td>
                      <td>
                        mpgReq.setProcCountryCode(processing_country_code);
                      </td>
                      <td> CA for Canada</td>
                    </tr>
                  </tbody>
                </table>
              </TabPanel>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default ToolApi;
