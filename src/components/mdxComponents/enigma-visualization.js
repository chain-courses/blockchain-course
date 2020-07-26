import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';

import styled from '@emotion/styled';
import { makeStyles as useStyles } from '@material-ui/core/styles';
import './enigma-visualization.css';

const lightningLogo = require('../images/lightning.png')
const bitcoinLogo = require('../images/bitcoin.png')
const publicBlockchain = require('../images/public_blockchain.png')

const Box = styled('div')`
    padding: 10px;
    width: 150px;
    height: 300px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
`

const WhiteBox = styled('div')`
    padding: 10px;
    width: 150px;
    height: 300px;
    border: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
`


const EnigmaVisualization = () => {
    const [visual, setVisual] = useState("Public blockchain")

    return (
        <Fragment>
            <div style={{ border: "1px black solid", padding: "10px" }}>
                <div style={{ display: "flex", flexDirection: "column", paddingBottom: "20px" }}>
                    <p style={{ marginBottom: "10px" }}><u>Choose one</u></p>
                    <div>{visual === "Public blockchain" && <span>&#8594;</span>}<a onClick={() => setVisual("Public blockchain")} style={{ cursor: "pointer", marginBottom: "5px" }}>Public blockchain</a></div>
                    <div>{visual === "Enigma" && <span>&#8594;</span>}<a onClick={() => setVisual("Enigma")} style={{ cursor: "pointer", marginBottom: "5px" }}>Enigma</a></div>
                </div>
                
                <div className={visual === "Enigma" ? "visible" : "hidden"}>
                    {visual === "Enigma" && <Fragment><div style={{ display: "flex" }}>
                        <Box style={{ background: "#90EE90" }}>Public to Private hash table data mapping</Box>
                        <div style={{ alignSelf: "center", width: "80px", textAlign: "center" }}>public data<br/><span style={{ fontSize: "36px" }}>&larr;</span></div>
                        <Box>Blockchain</Box>
                        <div style={{ alignSelf: "center", fontSize: "36px", width: "50px", textAlign: "center" }}></div>
                        <Box style={{ background: "#90EE90" }}>Enigma</Box>
                        <div style={{ alignSelf: "center", fontSize: "36px", width: "50px", textAlign: "center" }}>&#8594;</div>
                        <Box>User</Box>
                    </div>
                    <div style={{ display: "flex" }}>
                        <div style={{ borderLeft: "1px solid black", height: "50px", marginLeft: "50px" }}></div>
                        <div style={{ borderBottom: "1px solid black", width: "400px", marginTop: "50px" }}></div>
                        <div style={{ borderLeft: "1px solid black", height: "50px" }}></div>
                        <div style={{ fontSize: "30px", marginLeft: "-10px", marginTop: "-10px" }}>&uarr;</div>
                    </div>
                    <div style={{ marginLeft: "180px", padding: "5px 0 10px 0" }}>private blockchain data</div></Fragment>}
                </div>

                <div style={{ display: "flex" }} className={visual === "Public blockchain" ? "visible" : "hidden"}>
                    {visual === "Public blockchain" && <Fragment>
                    <Box>Blockchain</Box>
                    <div style={{ alignSelf: "center", width: "100px", textAlign: "center" }}>Blockchain consists of a network of public data<br/><span style={{ fontSize: "36px" }}>&rarr;</span></div>
                    <img src={publicBlockchain} style={{ width: "150px", height: "150px", alignSelf: "center", marginRight: "10px", marginLeft: "10px" }} />
                    <div style={{ alignSelf: "center", width: "100px", textAlign: "center" }}>A User can easily access this public data with full transparency<br/><span style={{ fontSize: "36px" }}>&rarr;</span></div>
                    <Box>User</Box></Fragment>}
                </div>
            </div>
            <p style={{ textAlign: "center", marginTop: "10px" }}>The difference between data served by the public blockchain vs Enigma</p>
        </Fragment>
    )
};

export default EnigmaVisualization;
