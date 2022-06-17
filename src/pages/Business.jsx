import "./home.css";

import greenSpring from "../assets/green-spring.svg";
import atm from "../assets/atm.svg";

import jummy from "../assets/jummy.svg";
import charge from "../assets/charge.svg";
import bless from "../assets/bless.svg";

import { Text, Image, Button } from "@chakra-ui/react";
import Header from "../components/Layout/Header"
import Footer from "../components/Layout/Footer"
import {AppContainer} from "../Styles"


function Business() {
    
  return (
    <>
      <Header />
      <AppContainer>
        <section className="ind">
          <Text className="fin-ind">Finosell for Business</Text>
        </section>
        <section className="card-sec">
          <div>
            <Text className="digits">
              Manage and track your transactions on the go
            </Text>
            <Text className="debit">
              We provide sales management solutions that help you manage sales,
              expenses, debts, and invoices seamlessly.
            </Text>
            <ul className="list">
              <li className="easily">
                Easily manage products, customer orders, and track deliveries
              </li>
              <li className="easily">
                {" "}
                Record business transactions on a daily, weekly and monthly basis
              </li>
              <li className="easily"> Send invoices and get paid</li>
              <li className="easily"> Sell more online with a free website.</li>
            </ul>
            <div className="shop-now">
              <Text className="sales">Sign up and track</Text>
            </div>
          </div>
          <div className="atm-div">
            <Image src={greenSpring} alt="swing" />
          </div>
        </section>
        <section className="card-sec">
          <div className="atm-div">
            <Image src={atm} alt="atm" />
          </div>
          <div className="atm-right">
            <Text className="digits">
              A digital card for online payments at your fingertips
            </Text>
            <Text className="debit">
              Make payment online without a physical debit or credit card. Our
              virtual dollar card provides secure and flexible payments on all
              your favorite channels such as online shopping, subscriptions, and
              bill payments across borders.
            </Text>
            <ul className="list">
              <li className="easily">Easily create a virtual card</li>
              <li className="easily"> Pay subscriptions and bills in seconds</li>
              <li className="easily"> Place thousands of Ads</li>
              <li className="easily"> No hidden transaction fees</li>
            </ul>
            <div id="saleDiv">
              <Text className="sales">Create an account</Text>
            </div>
          </div>
        </section>
        <section className="card-sec">
          <div className="atm-right">
            <Text className="digits">
              Enjoy risk-free transactions with Escrow
            </Text>
            <Text className="debit">
              Escrow protects buyers and sellers by temporarily holding money in a
              trusted account and allows payment to be made after goods and
              services have been received in good condition.
            </Text>
            <ul className="list">
              <li className="easily">Buyer and seller agree on terms</li>
              <li className="easily">The buyer makes payment to escrow</li>
              <li className="easily">Buyer approves purchase</li>
              <li className="easily"> Escrow makes payment to the seller</li>
            </ul>
            <div id="saleDiv" style={{ marginTop: "1.5rem" }}>
              <Text className="sales">Get started</Text>
            </div>
          </div>
          <div className="atm-div">
            <Image src={jummy} alt="atm" />
          </div>
        </section>

        <section className="card-sec">
          <div className="atm-div">
            <Image src={charge} alt="hanger" />
          </div>
          <div className="atm-right">
            <Text className="digits">
              One unique payment link, multiple payment options
            </Text>
            <Text className="debit">
              Accept payments, make transfers, and accelerate your business with
              Finosell
            </Text>
            <ul className="list">
              <li className="easily">Generate a unique payment link</li>
              <li className="easily">
                Provide multiple payment options for your customers
              </li>
              <li className="easily">
                {" "}
                Streamlined one page checkout for seamless shopping experience.
              </li>
            </ul>
            <div id="saleDiv">
              <Text className="sales">Create an account</Text>
            </div>
          </div>
        </section>

        <section className="card-sec">
          <div>
            <Text className="digits">Bring your team members on board</Text>
            <Text className="debit">
              Team members can receive payment notifications and manage the
              business account and perform all sales operations.
            </Text>
            <ul className="list">
              <li className="easily">
                Real time payment notification for team members
              </li>
            </ul>
            <div className="shop-now">
              <Text className="sales">Get on board</Text>
            </div>
          </div>
          <div className="atm-div">
            <Image src={bless} alt="names" />
          </div>
        </section>
      </AppContainer>
      <Footer />
    </>
  );
}

export default Business;