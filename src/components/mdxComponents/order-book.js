import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';

import { makeStyles as useStyles } from '@material-ui/core/styles';

const Order = ({ amount, currency, side, setSide }) => {
    return (
        <div style={{ display: "flex", justifyContent: "space-around", width: "100%", marginBottom: "10px" }}>
            <p style={{ alignSelf: "center", minWidth: "100px", color: "green" }}>{side === 0 && `Buy ${amount} ${currency}`}</p>
            <button onClick={() => setSide(Math.abs(side - 1))} style={{ padding: "10px" }}>
                Swtich sides
            </button>
            <p style={{ alignSelf: "center", minWidth: "100px", color: "red" }}>{side === 1 && `Sell ${amount} ${currency}`}</p>
        </div>
    )
}

const OrderBook = () => {
    const classes = useStyles({
        logo: {
            width: 150,
            height: 150
        }
    })();

    const [orders, setOrders] = useState([
        {
            amount: 5,
            currency: "BTC",
            side: 0,
        },
        {
            amount: 2,
            currency: "ETH",
            side: 0,
        },
        {
            amount: 2,
            currency: "BTC",
            side: 0,
        },
        {
            amount: 1,
            currency: "ETH",
            side: 0,
        },
        {
            amount: 3,
            currency: "ETH",
            side: 0,
        },
        {
            amount: 3,
            currency: "BTC",
            side: 0,
        }
    ]);

    const setOrderSide = (index, side) => {
        const newOrders = JSON.parse(JSON.stringify(orders));
        newOrders[index].side = side;
        setOrders(newOrders);
    }

    const buyBTC = orders.reduce(function(acc, { amount, currency, side }){
        return acc + (currency === "BTC" && side === 0 ? amount : 0);
    }, 0);

    const sellBTC = orders.reduce(function(acc, { amount, currency, side }){
        return acc + (currency === "BTC" && side === 1 ? amount : 0);
    }, 0);

    const buyETH = orders.reduce(function(acc, { amount, currency, side }){
        return acc + (currency === "ETH" && side === 0 ? amount : 0);
    }, 0);

    const sellETH = orders.reduce(function(acc, { amount, currency, side }){
        return acc + (currency === "ETH" && side === 1 ? amount : 0);
    }, 0);

    const settled = buyBTC === sellBTC && buyETH === sellETH;

    return (
        <Fragment>
            <div style={{ border: "1px black solid", padding: "10px" }}>
                <h3 style={{ marginBottom: "25px" , marginLeft: "70px", textDecoration: "underline" }}>Chain.courses Order Book</h3>
                <div style={{ display: "flex", justifyContent: "space-around", width: "100%", marginBottom: "20px" }}>
                    <h4 style={{ alignSelf: "center", minWidth: "100px" }}>Buy Orders</h4>
                    <p style={{ alignCoalignSelfntent: "center", minWidth: "100px", width: "100px" }}>
                        {settled && <span style={{ color: "green" }}>Balanced &#10003;</span>}
                        {!settled && <span style={{ color: "red" }}>Balance the order book!</span>}
                    </p>
                    <h4 style={{ alignSelf: "center", minWidth: "100px" }}>Sell Orders</h4>
                </div>
                {orders.map((order, index) => <Order {...order} setSide={side => setOrderSide(index, side)} />)}
            </div>
        </Fragment>
    )
};

export default OrderBook;
