import React, { useState, useEffect, Component } from "react"
import "./App.css"
import Button from "./MinorComponents/Button.js"
import GithubSVG from "./MinorComponents/GithubSVG.js"
import ThemesIcon from "./MinorComponents/ThemesIcon.js"
import HitIcon from "./MinorComponents/HitIcon.js"
import StandIcon from "./MinorComponents/StandIcon.js"
import DoubleIcon from "./MinorComponents/DoubleIcon.js"
import SplitIcon from "./MinorComponents/SplitIcon.js"
import TableLow from "./MinorComponents/TableLow.js"
import TableMid from "./MinorComponents/TableMid.js"
import TableHigh from "./MinorComponents/TableHigh.js"
import TableCustom from "./MinorComponents/TableCustom.js"

// import Push from "./MinorComponents/Push.js"
import Outcome from "./MinorComponents/Outcome.js"

import Button_Theme1 from "./Images/Button_Theme1.png"
import Button_Theme2 from "./Images/Button_Theme2.png"
import Button_Theme3 from "./Images/Button_Theme3.png"
import Button_Theme4 from "./Images/Button_Theme4.png"
import cards from "./MinorComponents/cards.js"
import chip1 from "./Images/chip1.png"
import chip5 from "./Images/chip5.png"
import chip10 from "./Images/chip10.png"
import chip25 from "./Images/chip25.png"
import chip50 from "./Images/chip50.png"
import chip100 from "./Images/chip100.png"
import chip500 from "./Images/chip500.png"

// Important thing perhaps is don't setState in a useEffect that I intend to use for a calculation in the same cycle

function LoadOrder({
  startFlag,
  theDeckCountValue,
  otherPlayersValue,
  yourMoneyValue,
  playerDeal,
  startFlagSwitch,
  playerHit,
  roundStartFlagSwitch,
  roundStartFlag,
  yourCards,
  yourCards2,
  playerBet,
  playerBetUpdate,
  splitting,
  dealerCards,
  dealerDeal,
  splitFlag,
  deck,
  setDeck,
  setDealerCards,
  endTurnFlagSwitch,
  endTurnFlag,
  roundStartFlagReset,
  yourMoney,
  discardPileUpdate,
  yourCardsValue,
  yourCardsValue2,
  setYourCards,
  setYourCards2,
  playerHit2,
  setSplitFlag,
  shoeCount,
  remainingCards,
  discardPile,
  oldDiscardPileUpdate,
  oldDiscardPile,
  cutPosition,
  shuffleDeck,
  tableStart,
  tableStartZero,
  tableStartOne,
  setDiscardPile,
  playerHitAlt,
  realDiscardPileUpdate,
  deckUpdate,
  doubleCard,
  homeFlag,
  homeFlagSwitch,
  homeFlagSwitch1,
  buttonTheme,
  iconTheme,
  textColor,
  settingsFlag,
  settingsFlagSwitch,
  settingsFlagSwitch0,
  t1ThemeChange,
  t2ThemeChange,
  t3ThemeChange,
  t4ThemeChange,
  displayCard,
  altButtonTheme,
  altButtonThemeActive,
  playerBetModify,
  betRange,
  maxBet,
  minBet,
  cardThemeNum
}) {
  if (settingsFlag) {
    return (
      <ThemeSettings
        buttonTheme={buttonTheme}
        t1ThemeChange={t1ThemeChange}
        t2ThemeChange={t2ThemeChange}
        t3ThemeChange={t3ThemeChange}
        t4ThemeChange={t4ThemeChange}
        displayCard={displayCard}
        settingsFlagSwitch0={settingsFlagSwitch0}
      ></ThemeSettings>
    )
  } else if (homeFlag) {
    return (
      <Home
        homeFlagSwitch={homeFlagSwitch}
        homeFlagSwitch1={homeFlagSwitch1}
        buttonTheme={buttonTheme}
        iconTheme={iconTheme}
        textColor={textColor}
        settingsFlagSwitch={settingsFlagSwitch}
        startFlagSwitch={startFlagSwitch}
      ></Home>
    )
  }
  //switch goes to 0
  //roundStartFlagReset goes to 1 and sets end player turn to 1
  else if (startFlag) {
    return (
      <StartScreen
        theDeckCountValue={theDeckCountValue}
        otherPlayersValue={otherPlayersValue}
        yourMoneyValue={yourMoneyValue}
        startFlagSwitch={startFlagSwitch}
        buttonTheme={buttonTheme}
        iconTheme={iconTheme}
        textColor={textColor}
        settingsFlagSwitch={settingsFlagSwitch}
        homeFlagSwitch1={homeFlagSwitch1}
        betRange={betRange}
        playerBetUpdate={playerBetUpdate}
        maxBet={maxBet}
        minBet={minBet}
      ></StartScreen>
    )
  } else if (roundStartFlag) {
    return (
      <RoundStart
        playerDeal={playerDeal}
        roundStartFlagSwitch={roundStartFlagSwitch}
        playerBet={playerBet}
        playerBetUpdate={playerBetUpdate}
        dealerDeal={dealerDeal}
        yourMoney={yourMoney}
        yourMoneyValue={yourMoneyValue}
        cutPosition={cutPosition}
        discardPile={discardPile}
        buttonTheme={buttonTheme}
        iconTheme={iconTheme}
        textColor={textColor}
        shoeCount={shoeCount}
        deck={deck}
        altButtonTheme={altButtonTheme}
        settingsFlagSwitch={settingsFlagSwitch}
        altButtonThemeActive={altButtonThemeActive}
        playerBetModify={playerBetModify}
        maxBet={maxBet}
        minBet={minBet}
      ></RoundStart>
    )
  } else if (tableStart) {
    return (
      <TableOptions
        playerHit={playerHit}
        yourCards={yourCards}
        yourCards2={yourCards2}
        splitting={splitting}
        playerBet={playerBet}
        dealerCards={dealerCards}
        splitFlag={splitFlag}
        deck={deck}
        setDeck={setDeck}
        setDealerCards={setDealerCards}
        endTurnFlagSwitch={endTurnFlagSwitch}
        endTurnFlag={endTurnFlag}
        roundStartFlagReset={roundStartFlagReset}
        yourMoney={yourMoney}
        yourMoneyValue={yourMoneyValue}
        discardPileUpdate={discardPileUpdate}
        playerBetUpdate={playerBetUpdate}
        yourCardsValue={yourCardsValue}
        yourCardsValue2={yourCardsValue2}
        setYourCards={setYourCards}
        setYourCards2={setYourCards2}
        playerHit2={playerHit2}
        setSplitFlag={setSplitFlag}
        roundStartFlag={roundStartFlag}
        shoeCount={shoeCount}
        remainingCards={remainingCards}
        discardPile={discardPile}
        oldDiscardPileUpdate={oldDiscardPileUpdate}
        oldDiscardPile={oldDiscardPile}
        cutPosition={cutPosition}
        shuffleDeck={shuffleDeck}
        setDiscardPile={setDiscardPile}
        playerHitAlt={playerHitAlt}
        realDiscardPileUpdate={realDiscardPileUpdate}
        deckUpdate={deckUpdate}
        doubleCard={doubleCard}
        buttonTheme={buttonTheme}
        iconTheme={iconTheme}
        textColor={textColor}
        settingsFlagSwitch={settingsFlagSwitch}
        cardThemeNum={cardThemeNum}
      ></TableOptions>
    )
  }
}

function Home({
  homeFlagSwitch,
  buttonTheme,
  iconTheme,
  textColor,
  settingsFlagSwitch,
  homeFlagSwitch1,
  startFlagSwitch
}) {
  useEffect(() => {
    window.history.replaceState("Home", null, "http://localhost:3000/Home")
  }, [])

  const [subText, setSubText] = useState(
    <h2 style={textColor}>The Blackjack that plays itself.</h2>
  )

  useEffect(() => {
    let random = Math.random()
    if (random > 0.66) {
      setSubText(<h2 style={textColor}>The Blackjack that plays itself.</h2>)
    } else if (random < 0.33) {
      setSubText(
        <h2 style={textColor}>It plays itself so you don't have to.</h2>
      )
    } else {
      setSubText(<h2 style={textColor}>Blackjack. It's Blackjack.</h2>)
    }
  }, [textColor])

  // const [hoverText, setHoverText] = useState()

  return (
    <div>
      <header>
        <h1 style={textColor}>Autojack</h1>
      </header>
      {/* Have this be different texts on reload. */}
      {/* It plays itself so you don't have to. */}
      {subText}
      <div className="buttonWrapper">
        <div id="manual">
          <Button
            buttonTheme={buttonTheme}
            content={"Manual"}
            func={homeFlagSwitch}
          ></Button>
        </div>
        <div id="automated">
          <Button buttonTheme={buttonTheme} content={"Automated"}></Button>
        </div>

        {/* This h3 should be seen on the hover of the buttons between the two texts. Do it for the theme and the github buttons */}
        <div className="hoverText" id="hoverManual">
          <h3 style={textColor}>Play the game yourself.</h3>
        </div>
        <div className="hoverText" id="hoverAutomated">
          <h3 style={textColor}>Let the machine do the work for you.</h3>
        </div>
      </div>

      <div className="one">
        <a href="https://github.com/TheDemonOn/AutoJack" target="_blank">
          <GithubSVG iconTheme={iconTheme}></GithubSVG>
        </a>
      </div>
      <div className="two">
        <a onClick={settingsFlagSwitch}>
          <ThemesIcon iconTheme={iconTheme}></ThemesIcon>
        </a>
      </div>

      <div className="hoverText2" id="hoverGithub">
        <h3 style={textColor}>Github link.</h3>
      </div>
      <div className="hoverText2" id="hoverTheme">
        <h3 style={textColor}>Theme options.</h3>
      </div>
      {/* <h3>/</h3>
      <h3>Let the machine do it for you</h3> */}
      {/* Github button image and setting button here */}
    </div>
  )
}

// Perhaps add a random theme button so that the drawn cards are a mix of all the themes

function ThemeSettings({
  buttonTheme,
  t1ThemeChange,
  t2ThemeChange,
  t3ThemeChange,
  t4ThemeChange,
  displayCard,
  settingsFlagSwitch0
}) {
  useEffect(() => {
    if (
      window.history.state === "Home" ||
      window.history.state === "StartScreen"
    ) {
      window.history.pushState(
        "ThemeSettings",
        null,
        "http://localhost:3000/ThemeSettings"
      )
    }
  }, [])

  return (
    <div>
      <img
        className="placeHolderCard"
        src={process.env.PUBLIC_URL + displayCard}
        height="379.2px"
        width="259.2px"
        alt="Ace of spades card."
      ></img>
      <div>
        <div className="themeSelector">
          <a className="hoverHover" onClick={t1ThemeChange}>
            <img
              src={Button_Theme1}
              height="150px"
              width="150px"
              alt="Blue and gold theme."
            ></img>
          </a>

          <a className="hoverHover" onClick={t2ThemeChange}>
            <img
              src={Button_Theme2}
              height="150px"
              width="150px"
              alt="Purple theme."
            ></img>
          </a>

          <a className="hoverHover" onClick={t3ThemeChange}>
            <img
              src={Button_Theme3}
              height="150px"
              width="150px"
              alt="White and red theme."
            ></img>
          </a>

          <a className="hoverHover" onClick={t4ThemeChange}>
            <img
              src={Button_Theme4}
              height="150px"
              width="150px"
              alt="Space and green theme."
            ></img>
          </a>
        </div>
      </div>
      <div id="three">
        <Button
          buttonTheme={buttonTheme}
          content={"Back"}
          func={settingsFlagSwitch0}
        ></Button>
      </div>
    </div>
  )
}

function StartScreen({
  theDeckCountValue,
  otherPlayersValue,
  yourMoneyValue,
  startFlagSwitch,
  buttonTheme,
  iconTheme,
  textColor,
  settingsFlagSwitch,
  homeFlagSwitch1,
  betRange,
  playerBetUpdate,
  maxBet,
  minBet
}) {
  useEffect(() => {
    if (window.history.state === "Home")
      window.history.pushState(
        "StartScreen",
        null,
        "http://localhost:3000/StartScreen"
      )
  }, [])

  const [deckSize, setDeckSize] = useState(8)

  const [tableIconSize, setTableIconSize] = useState("130px")

  const [parameterSection, setParameterSection] = useState(
    <div className="parameterBox">
      <h4 style={textColor}>Table Rules</h4>
      <div className="parametersH5">
        <h5 style={textColor}>Decks Used: 8</h5>
        <h5 style={textColor}>Min Bet: 5</h5>
        <h5 style={textColor}>Max Bet: 100</h5>
      </div>
      <h5 style={textColor}>Starting Money: 500</h5>
    </div>
  )

  // In the initial values set them to the values of the lowEnd
  // Make lowEnd the default.
  const lowEnd = () => {
    setParameterSection(
      <div className="parameterBox">
        <h4 style={textColor}>Table Rules</h4>
        <div className="parametersH5">
          <h5 style={textColor}>Decks Used: 8</h5>
          <h5 style={textColor}>Min Bet: 5</h5>
          <h5 style={textColor}>Max Bet: 100</h5>
        </div>
        <h5 style={textColor}>Starting Money: 500</h5>
      </div>
    )
    theDeckCountValue(8)
    yourMoneyValue(500)
    playerBetUpdate(5)
    betRange("min", 5)
    betRange("max", 100)
  }

  const midEnd = () => {
    setParameterSection(
      <div className="parameterBox">
        <h4 style={textColor}>Table Rules</h4>
        <div className="parametersH5">
          <h5 style={textColor}>Decks Used: 6</h5>
          <h5 style={textColor}>Min Bet: 20</h5>
          <h5 style={textColor}>Max Bet: 500</h5>
        </div>
        <h5 style={textColor}>Starting Money: 2000</h5>
      </div>
    )
    theDeckCountValue(6)
    yourMoneyValue(2000)
    playerBetUpdate(20)
    betRange("min", 20)
    betRange("max", 500)
  }

  const highEnd = () => {
    setParameterSection(
      <div className="parameterBox">
        <h4 style={textColor}>Table Rules</h4>
        <div className="parametersH5">
          <div>
            <h5 style={textColor}>Decks Used: 4</h5>
          </div>
          <div>
            <h5 style={textColor}>Min Bet: 100</h5>
          </div>
          <div>
            <h5 style={textColor}>Max Bet: 10000</h5>
          </div>
        </div>
        <h5 style={textColor}>Starting Money: 10000</h5>
      </div>
    )
    theDeckCountValue(4)
    yourMoneyValue(10000)
    playerBetUpdate(100)
    betRange("min", 100)
    betRange("max", 10000)
  }

  const [deckValue, setDeckValue] = useState()

  useEffect(() => {
    if (minBet < 1) {
      betRange("min", 0)
    }
  }, [minBet])

  // Need to set a default value for bet on custom
  const custom = () => {
    setParameterSection(
      <div className="parameterBox">
        <h4 style={textColor}>Table Rules</h4>
        <div className="inputWrapper">
          <div>
            <h5 style={textColor}>Decks Used: </h5>
            {/* Figure out if type="number" can use maxLength or a variant */}
            {/* Also figure out if you can restrict the input value being higher than the max */}
            <input
              type="text"
              // min="1"
              // max="100"
              maxLength="3"
              placeholder="1"
              value={deckValue}
              onChange={e => theDeckCountValue(e.target.value)}
              // onChange={e => theDeckCountValue(e.target.value)}
            ></input>
          </div>
          <div>
            <h5 style={textColor}>Min Bet: </h5>
            <input
              type="number"
              min="1"
              placeholder="5"
              onChange={e => betRange("min", e.target.value)}
            ></input>
          </div>
          <div>
            <h5 style={textColor}>Max Bet: </h5>
            <input
              type="number"
              min="1"
              placeholder="100"
              onChange={e => betRange("max", e.target.value)}
            ></input>
          </div>
          <div>
            <h5 style={textColor}>Money: </h5>
            <input
              type="number"
              min="1"
              placeholder="100"
              onChange={e => yourMoneyValue(e.target.value)}
            ></input>
          </div>
        </div>
      </div>
    )
    theDeckCountValue(1)
    yourMoneyValue(100)
    playerBetUpdate(5)
    betRange("min", 5)
    betRange("max", 100)
  }

  const startAndUpdateDeck = () => {
    homeFlagSwitch1()
    theDeckCountValue(deckSize)
  }

  // The section below is for updating the size of the svg table icons to be responsive
  const [windowFlag, setWindowFlag] = useState(0)

  useEffect(() => {
    console.log(windowFlag)
    if (window.innerWidth <= 750) {
      setTableIconSize("90px")
    } else {
      setTableIconSize("130px")
    }
  }, [windowFlag])

  const updateSize = () => {
    setWindowFlag(prevCount => prevCount + 1)
    window.removeEventListener("resize", updateSize)
    window.setTimeout(window.addEventListener("resize", updateSize), 1000)
  }

  useEffect(() => {
    window.addEventListener("resize", updateSize)
    return () => {
      window.removeEventListener("resize", updateSize)
    }
  }, [])

  return (
    <div>
      <div className="tableBack">
        <Button
          buttonTheme={buttonTheme}
          content={"Back"}
          func={startAndUpdateDeck}
        ></Button>
      </div>
      <div className="secondTitle">
        <h6 style={textColor}>Autojack</h6>
      </div>
      <div className="tableWrapper">
        {/* 
        This is a placeholder for the real icons.
        The way the state will be managed is that the different table options will have an onClick function that will change
          the state that holds the element of the table parameters box, as well as setting the proper state for things like
          deck size and bet sizes.
        The custom will be different because the state changes are static for the 1-3 options whereas the custom will take in an input
          and constantly update the state to reflect what is inside it to set the parameters to however you would like.
        */}

        {/* These should go down to 9em for the responsitivity */}
        <a className="hoverHover" onClick={lowEnd}>
          <TableLow
            iconTheme={iconTheme}
            tableIconSize={tableIconSize}
          ></TableLow>
        </a>

        <a className="hoverHover" onClick={midEnd}>
          <TableMid
            iconTheme={iconTheme}
            tableIconSize={tableIconSize}
          ></TableMid>
        </a>

        <a className="hoverHover" onClick={highEnd}>
          <TableHigh
            iconTheme={iconTheme}
            tableIconSize={tableIconSize}
          ></TableHigh>
        </a>

        <a className="hoverHover" onClick={custom}>
          <TableCustom
            iconTheme={iconTheme}
            tableIconSize={tableIconSize}
          ></TableCustom>
        </a>
      </div>

      {parameterSection}

      <div className="tablePlay">
        <Button
          buttonTheme={buttonTheme}
          content={"Play"}
          func={startFlagSwitch}
        ></Button>
      </div>
      <a
        className="one"
        href="https://github.com/TheDemonOn/AutoJack"
        target="_blank"
      >
        <GithubSVG iconTheme={iconTheme}></GithubSVG>
      </a>
      <a className="two hoverHover" onClick={settingsFlagSwitch}>
        <ThemesIcon iconTheme={iconTheme}></ThemesIcon>
      </a>
      {/* <button onClick={startFlagSwitch}>Continue</button> */}
    </div>
  )
}

function RoundStart({
  playerDeal,
  roundStartFlagSwitch,
  playerBet,
  playerBetUpdate,
  dealerDeal,
  yourMoney,
  yourMoneyValue,
  cutPosition,
  discardPile,
  shoeCount,
  deck,
  buttonTheme,
  iconTheme,
  textColor,
  altButtonTheme,
  settingsFlagSwitch,
  altButtonThemeActive,
  playerBetModify,
  maxBet,
  minBet
}) {
  useEffect(() => {
    window.history.pushState(
      "RoundStart",
      null,
      "http://localhost:3000/RoundStart"
    )
  }, [])

  // So it appears that even when thr function is called from the child it still executes in the location it was defined (the parent) and had access to everything it would normally.

  const deal = e => {
    yourMoneyValue(yourMoney - playerBet)
    playerDeal()
    dealerDeal()
    roundStartFlagSwitch()
  }

  const [cardsLeft, setCardsLeft] = useState()

  // If the game hasn't looped to main once then the remaining cards does not display (or exist)
  useEffect(() => {
    if (cutPosition - discardPile.length) {
      setCardsLeft(
        <div>
          <p style={textColor}>{cutPosition - discardPile.length}</p>
          <p style={textColor} id="underRemaining">
            Cards Remaining
          </p>
        </div>
      )
    }
  }, [])

  console.log(cardsLeft)
  console.log(cutPosition)
  console.log(discardPile.length)

  // These states and functions control the active state for the plus and minus buttons toggling between the two

  const [activeState, setActiveState] = useState(altButtonThemeActive)

  const [activeStateOpposite, setActiveStateOpposite] = useState(altButtonTheme)

  const switchActive = () => {
    setActiveState(altButtonTheme)
    setActiveStateOpposite(altButtonThemeActive)
  }

  const switchActiveBack = () => {
    setActiveState(altButtonThemeActive)
    setActiveStateOpposite(altButtonTheme)
  }

  useEffect(() => {
    if (playerBet > maxBet) {
      playerBetUpdate(maxBet)
    }
  }, [])

  // Instead of using a useEffect to put the value of the bet to the respective max range when exceeded, this way will remove the single
  // tick of the value being wrong before being corrected
  const rangeCheckMax = value => {
    if (playerBet + value > maxBet) {
      playerBetUpdate(maxBet)
    }
  }

  const rangeCheckMin = value => {
    if (playerBet - value < minBet) {
      playerBetUpdate(minBet)
    }
  }

  const one = () => {
    if (activeState === altButtonThemeActive) {
      playerBetModify("add", 1)
      rangeCheckMax(1)
    } else {
      playerBetModify("subtract", 1)
      rangeCheckMin(1)
    }
  }
  const five = () => {
    if (activeState === altButtonThemeActive) {
      playerBetModify("add", 5)
      rangeCheckMax(5)
    } else {
      playerBetModify("subtract", 5)
      rangeCheckMin(5)
    }
  }
  const ten = () => {
    if (activeState === altButtonThemeActive) {
      playerBetModify("add", 10)
      rangeCheckMax(10)
    } else {
      playerBetModify("subtract", 10)
      rangeCheckMin(10)
    }
  }
  const twentyFive = () => {
    if (activeState === altButtonThemeActive) {
      playerBetModify("add", 25)
      rangeCheckMax(25)
    } else {
      playerBetModify("subtract", 25)
      rangeCheckMin(25)
    }
  }
  const fifty = () => {
    if (activeState === altButtonThemeActive) {
      playerBetModify("add", 50)
      rangeCheckMax(50)
    } else {
      playerBetModify("subtract", 50)
      rangeCheckMin(50)
    }
  }
  const oneHundred = () => {
    if (activeState === altButtonThemeActive) {
      playerBetModify("add", 100)
      rangeCheckMax(100)
    } else {
      playerBetModify("subtract", 100)
      rangeCheckMin(100)
    }
  }
  const fiveHundred = () => {
    if (activeState === altButtonThemeActive) {
      playerBetModify("add", 500)
      rangeCheckMax(500)
    } else {
      playerBetModify("subtract", 500)
      rangeCheckMin(500)
    }
  }

  return (
    <div className="block">
      <div className="remainingCards">
        <div>
          <img
            className="drawPile"
            src={process.env.PUBLIC_URL + cards.t2.spade.ace.src}
            height="153.576px"
            width="104.976px"
            alt="Ace of spades card."
          ></img>
        </div>
        <div>{cardsLeft}</div>
      </div>

      <div className="moneyWrapper">
        <p style={textColor} id="bet">
          ${yourMoney}
        </p>
        <p style={textColor} id="currentBet">
          Your Money
        </p>
      </div>

      <div className="topContainer">
        <div className="chipsTop">
          <a className="hoverHover" onClick={one}>
            <img src={chip1} height="100px" width="100px" alt="Chip 1"></img>
          </a>
          <a className="hoverHover" onClick={five}>
            <img src={chip5} height="100px" width="100px" alt="Chip 1"></img>
          </a>
          <a className="hoverHover" onClick={ten}>
            <img src={chip10} height="100px" width="100px" alt="Chip 1"></img>
          </a>
        </div>
      </div>

      <div className="botContainer">
        <div className="chipsBot">
          <a className="hoverHover" onClick={twentyFive}>
            <img src={chip25} height="100px" width="100px" alt="Chip 1"></img>
          </a>
          <a className="hoverHover" onClick={fifty}>
            <img src={chip50} height="100px" width="100px" alt="Chip 1"></img>
          </a>
          <a className="hoverHover" onClick={oneHundred}>
            <img src={chip100} height="100px" width="100px" alt="Chip 1"></img>
          </a>
          <a className="hoverHover" onClick={fiveHundred}>
            <img src={chip500} height="100px" width="100px" alt="Chip 1"></img>
          </a>
        </div>
      </div>

      <div className="underWrapper">
        <div className="underChipSection">
          <Button
            buttonTheme={activeStateOpposite}
            func={switchActive}
            ID="minus"
            content={"−"}
          ></Button>

          <div className="bet">
            <p style={textColor} id="bet">
              ${playerBet}
            </p>
            <p style={textColor} id="currentBet">
              Current bet
            </p>
          </div>
          <Button
            buttonTheme={activeState}
            func={switchActiveBack}
            ID="plus"
            content={"+"}
          ></Button>

          <Button
            buttonTheme={buttonTheme}
            func={deal}
            content={"Deal"}
            ID={"mobileDeal"}
          ></Button>
        </div>
      </div>

      <div className="one">
        <a href="https://github.com/TheDemonOn/AutoJack" target="_blank">
          <GithubSVG iconTheme={iconTheme}></GithubSVG>
        </a>
      </div>

      <div className="two">
        <a className="hoverHover" onClick={settingsFlagSwitch}>
          <ThemesIcon iconTheme={iconTheme}></ThemesIcon>
        </a>
      </div>
    </div>
  )
}

function TableOptions({
  playerHit,
  yourCards,
  yourCards2,
  // splitting,
  playerBet,
  playerBetUpdate,
  dealerCards,
  splitFlag,
  deck,
  setDeck,
  setDealerCards,
  endTurnFlagSwitch,
  endTurnFlag,
  roundStartFlagReset,
  yourMoney,
  yourMoneyValue,
  discardPileUpdate,
  yourCardsValue,
  yourCardsValue2,
  setYourCards,
  setYourCards2,
  playerHit2,
  setSplitFlag,
  roundStartFlag,
  shoeCount,
  remainingCards,
  discardPile,
  oldDiscardPileUpdate,
  oldDiscardPile,
  cutPosition,
  shuffleDeck,
  tableStart,
  setDiscardPile,
  playerHitAlt,
  realDiscardPileUpdate,
  deckUpdate,
  doubleCard,
  buttonTheme,
  iconTheme,
  textColor,
  settingsFlagSwitch,
  cardThemeNum
}) {
  useEffect(() => {
    window.history.replaceState("Table", null, "http://localhost:3000/Table")
  }, [])

  useEffect(() => {
    if (yourCards2[0]) {
      yourCards2.length = 0
      setYourCards2([])
      console.log("CLEAED YOURCARDS2")
    }
  }, [])

  const [localDealerCards, setLocalDealerCards] = useState(dealerCards)

  const [roundResultKey, setRoundResultKey] = useState("")

  const [roundResultKey2, setRoundResultKey2] = useState("")

  const [handResult1, setHandResult1] = useState("")

  const [handResult2, setHandResult2] = useState("")

  const [bust, setBust] = useState(0)

  const [bust2, setBust2] = useState(0)

  const [playerBet2, setPlayerBet2] = useState(playerBet)

  const [handOneEnd, setHandOneEnd] = useState(1)

  const [handOneWin, setHandOneWin] = useState(0)

  const [handTwoWin, setHandTwoWin] = useState(0)

  const [totalWithAce, setTotalWithAce] = useState()

  const [cardTotal, setCardTotal] = useState(
    yourCards.map(x => x.value).reduce((x, y) => x + y)
  )

  const [cardTotal2, setCardTotal2] = useState(0)

  const [dealerCardTotal, setDealerCardTotal] = useState(
    localDealerCards.map(x => x.value).reduce((x, y) => x + y)
  )

  const [endPlayerTurn, setEndPlayerTurn] = useState(0)

  //////////////////////////////////////////////////////
  // ISSUE: When busting after drawing a card then doubling down while the dealer does not bust the cards they drew does not show up, but should.
  // Double Down causes the bug, don't know for split

  useEffect(() => {
    console.log("discard length: " + discardPile.length)
    console.log("deck + discard: " + (deck.length + discardPile.length))
    console.log("deck length: " + deck.length)
    console.log(dealerCards.map(x => x.name))
    console.log(yourCards.map(x => x.name))
    console.log(yourCards2.map(x => x.name))
  }, [deck, discardPile, yourCards, yourCards2])

  const splitting = () => {
    // splitting should only be available on the deal no other times
    // Need to add functions of splitting that occur before standing

    // So all the state it receives stays the same through the entire operation

    yourMoneyValue(yourMoney - playerBet)

    let splitCard1 = yourCards.slice(0, 1)
    let splitCard2 = yourCards.slice(1, 2)

    let thisDeck = deck

    let cardIndex = Math.floor(Math.random() * thisDeck.length)
    let card = thisDeck[cardIndex]
    thisDeck.splice(cardIndex, 1)

    let cardIndex2 = Math.floor(Math.random() * thisDeck.length)
    let card2 = thisDeck[cardIndex2]
    thisDeck.splice(cardIndex2, 1)

    setDiscardPile(discardPile => [...discardPile, card, card2])
    setDeck(thisDeck)

    yourCards.length = 0
    yourCards2.length = 0

    yourCards.push(...splitCard1, card)
    setYourCards([...splitCard1, card]) // The reason it needs to be spread out is that the split is an object

    // setYourCards(splitCard1 => [...splitCard1, card])

    yourCards2.push(...splitCard2, card2)
    setYourCards2([...splitCard2, card2])
    // setYourCards2(splitCard2 => [...splitCard2, card2])
    console.log(yourCards)
    console.log(yourCards2)
  }

  const [doubleSplit, setDoubleSplit] = useState(0)

  if (cutPosition === "none") {
    // If the position is not set then set it to a random point between 70% and 85% of the total deck
    console.log(deck.length)
    shoeCount(
      Math.floor(
        (Math.floor(Math.random() * (85 - 70 + 1) + 70) / 100) * deck.length
      )
    )
  }

  // Come back to this and investigate the flag resets for if they are needed
  const splitRoundReset = () => {
    setSplitFlag(1)
    roundStartFlagReset()
  }

  let doubleLostCards = []

  //////////////////////////////////////
  // So even in doubleDown yourCards2 is not visible to the act of doubling is not the cause of the bug

  // PlayerHit executes giving stand stale state

  // The yourCards it sees here is actually the old state of yourCards, not the new one. This explains the inconsistency with
  // yourCards 1 having 2 cards and yourCards2 having zero

  // When doubleDown Executes even after the useEffect updates variables in tableOptions doubleDown does not see it
  // potential solution is running the useEffect in a different context where doubleDown is (the main) and send it to table options

  // With the updated split doubleDown can now see yourCards and 2 but before the hit, meaning doubling would be fine but not after hitting
  // I need to make it see the hit
  const doubleDown = () => {
    console.log("Should only occur once reeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
    playerBetUpdate(playerBet * 2)
    yourMoneyValue(yourMoney - playerBet)
    // Because of issues with the transfer of state we are drawing the card from within function manually; this did not work
    let thisDeck = deck
    let cardIndex = Math.floor(Math.random() * thisDeck.length)
    let card = thisDeck[cardIndex]
    deck.splice(cardIndex, 1)
    setDiscardPile(discardPile => [...discardPile, card])
    // The card is being pushed here so that yourCards is accurate for the local calculations below
    // Do note that if it was just the push then the display of cards from the state would not include the drawn card
    // The state has to be set at the end for it to update in the list
    yourCards.push(card)
    // Because drawing a card then ending the turn happens in one cycle I have to do a local calculation that checks for Aces
    // because otherwise the cardTotal is set too late for the final evaluation
    if (yourCards.map(x => x.value).filter(x => x === 11)[0] > 0) {
      // Checking for Aces in yourCards
      let aceCards = yourCards.filter(x => x.value2 === 1)
      if (
        // Checks for bust with Aces reduced to 1
        yourCards.map(x => x.value).reduce((x, y) => x + y) -
          aceCards.length * 11 +
          aceCards.length >
        21
      ) {
        setCardTotal(
          yourCards.map(x => x.value).reduce((x, y) => x + y) -
            aceCards.length * 11 +
            aceCards.length
        )
        setBust(1)
      } else if (yourCards.map(x => x.value).reduce((x, y) => x + y) <= 21) {
        // Normal draw calculation with Ace being 11 if not busting
        setCardTotal(yourCards.map(x => x.value).reduce((x, y) => x + y))
        stand()
      } else {
        // Draw but with reduced Aces
        setCardTotal(
          yourCards.map(x => x.value).reduce((x, y) => x + y) -
            aceCards.length * 11 +
            aceCards.length
        )
        stand()
      }
    } else if (yourCards.map(x => x.value).reduce((x, y) => x + y) > 21) {
      // Checks for bust with no Aces
      setCardTotal(yourCards.map(x => x.value).reduce((x, y) => x + y))
      setBust(1)
    } else {
      // Normal draw calculation without Aces
      setCardTotal(yourCards.map(x => x.value).reduce((x, y) => x + y))
      stand()
    }
    // This actually sets the state to what it should be because otherwise the "yourCards" locally would not be the same as the global yourCards
    // yourCardsValue(yourCards)
    setYourCards([...yourCards])
  }

  // Money is being added even if busting

  // From set's perspective state is not

  //////////////////////////////////////////
  // See explanation above

  let dealerHitLostCards = []

  const dealerHit = () => {
    console.log("Dealer Hitting")
    if (localDealerCards.map(x => x.value).reduce((x, y) => x + y) < 17) {
      let thisDeck = deck
      let cardIndex = Math.floor(Math.random() * thisDeck.length)
      let card = thisDeck[cardIndex]
      thisDeck.splice(cardIndex, 1)
      realDiscardPileUpdate(card)
      dealerHitLostCards.push(card)
      if (
        localDealerCards.map(x => x.value).reduce((x, y) => x + y) +
          card.value <
        17
      ) {
        let cardIndex2 = Math.floor(Math.random() * thisDeck.length)
        let card2 = thisDeck[cardIndex2]
        thisDeck.splice(cardIndex2, 1)
        realDiscardPileUpdate(card2)
        dealerHitLostCards.push(card2)
        if (
          localDealerCards.map(x => x.value).reduce((x, y) => x + y) +
            card.value +
            card2.value <
          17
        ) {
          let cardIndex3 = Math.floor(Math.random() * thisDeck.length)
          let card3 = thisDeck[cardIndex3]
          thisDeck.splice(cardIndex3, 1)
          realDiscardPileUpdate(card3)
          dealerHitLostCards.push(card3)
          if (
            localDealerCards.map(x => x.value).reduce((x, y) => x + y) +
              card.value +
              card2.value +
              card3.value <
            17
          ) {
            let cardIndex4 = Math.floor(Math.random() * thisDeck.length)
            let card4 = thisDeck[cardIndex4]
            thisDeck.splice(cardIndex4, 1)
            realDiscardPileUpdate(card4)
            dealerHitLostCards.push(card4)
            if (
              localDealerCards.map(x => x.value).reduce((x, y) => x + y) +
                card.value +
                card2.value +
                card3.value +
                card4.value <
              17
            ) {
              let cardIndex5 = Math.floor(Math.random() * thisDeck.length)
              let card5 = thisDeck[cardIndex5]
              thisDeck.splice(cardIndex5, 1)
              realDiscardPileUpdate(card5)
              dealerHitLostCards.push(card5)
              setDeck(thisDeck)
              localDealerCards.push(card)
              localDealerCards.push(card2)
              localDealerCards.push(card3)
              localDealerCards.push(card4)
              localDealerCards.push(card5)
              return
            }
            setDeck(thisDeck)
            localDealerCards.push(card)
            localDealerCards.push(card2)
            localDealerCards.push(card3)
            localDealerCards.push(card4)
            return
          }
          setDeck(thisDeck)
          localDealerCards.push(card)
          localDealerCards.push(card2)
          localDealerCards.push(card3)
          return
        }
        setDeck(thisDeck)
        localDealerCards.push(card)
        localDealerCards.push(card2)
        return
      }
      setDeck(thisDeck)
      localDealerCards.push(card)
    }
  }

  // Evaluates dealerCardTotal and draws additional cards if necessary with Aces
  function dealerCardTotalEvaluation() {
    console.log("Evaluating dealer cards")
    if (localDealerCards.map(x => x.value).filter(x => x === 11)[0] > 0) {
      // Checking for Aces in yourCards
      let aceCards = localDealerCards.filter(x => x.value2 === 1)
      // For the dealer a bust flag does not need to trigger, if the dealer busts then no more cards are drawn and the result is calculated
      if (localDealerCards.map(x => x.value).reduce((x, y) => x + y) <= 21) {
        // Normal draw calculation with Ace being 11 if not busting, no additional card check needed
        console.log(
          "Total is:",
          localDealerCards.map(x => x.value).reduce((x, y) => x + y)
        )
        setDealerCardTotal(
          localDealerCards.map(x => x.value).reduce((x, y) => x + y)
        )
        endTurnFlagSwitch() // The draw is done and conditions met; end turn
        console.log("End: Aces, but reduced not needed")
      } else if (
        localDealerCards.map(x => x.value).reduce((x, y) => x + y) -
          aceCards.length * 11 +
          aceCards.length <
        17
      ) {
        // The total with normal Aces is greater than 21, this checks to see if the reduced Aces put it below its goal.
        // If so draw a card, if the total is at 17 or greater then an additional card draw is not needed.

        let initialReducedAceValue =
          localDealerCards.map(x => x.value).reduce((x, y) => x + y) -
          aceCards.length * 11 +
          aceCards.length
        let thisDeck = deck

        while (initialReducedAceValue < 17) {
          let cardIndex = Math.floor(Math.random() * thisDeck.length)
          let card = thisDeck[cardIndex]
          thisDeck.splice(cardIndex, 1)
          realDiscardPileUpdate(card) // This is a .push so no issue to loop
          // console.log(localDealerCards) // Checks to see if pushing the card works for future calculations
          localDealerCards.push(card)
          // console.log(localDealerCards)

          let aceCardsLocal = localDealerCards.filter(x => x.value2 === 1)

          let localTotal =
            localDealerCards.map(x => x.value).reduce((x, y) => x + y) -
            aceCardsLocal.length * 11 +
            aceCardsLocal.length

          initialReducedAceValue += localTotal - initialReducedAceValue

          setDeck(thisDeck)
          setDealerCards([...localDealerCards]) // This will probably be removed soon, not sure if it does anything
          // setLocalDealerCards([...localDealerCards, card])
          setDealerCardTotal(initialReducedAceValue)
        }
        endTurnFlagSwitch()
      } else {
        setDealerCardTotal(
          localDealerCards.map(x => x.value).reduce((x, y) => x + y) -
            aceCards.length * 11 +
            aceCards.length
        )
        console.log("Aces are reduced and the total is at 17 or higher")
        endTurnFlagSwitch()
      }
    } else {
      // Normal draw calculation without Aces
      console.log(
        "Total is",
        localDealerCards.map(x => x.value).reduce((x, y) => x + y)
      )
      if (localDealerCards.map(x => x.value).reduce((x, y) => x + y) >= 17) {
        setDealerCardTotal(
          localDealerCards.map(x => x.value).reduce((x, y) => x + y)
        )
        console.log("End: No Aces")
        endTurnFlagSwitch()
      } else {
        console.log("Should never get to the end here")
      }
    }
  }
  // If splitting the game should continue its normal flow then after stand switch your cards2 into your cards and play it out

  function deckShuffleFunction() {
    // This sometimes see deck and discard missing cards
    // The deck is up to date but the discard is not, it is missing the card that was added to the discard from the dealer drawing, old state it seems
    // The reason this matters is that if it is not pulling the up to date info then the shoeCount is inaccurate as well as the deck being updated without it.

    // It seems the card that double down pulls also is missing during these calculations

    // So the issue now is that the card drawn from the double is setting the discardPile after we set it to zero thereby adding a card

    // The deck is set to the proper values, but the discard is not set to 0

    console.log("Shuffle check")
    console.log(cutPosition - discardPile.length)
    let together = deck.length + discardPile.length
    console.log("Deck + discard: " + together)
    console.log("Deck length: " + deck.length)
    console.log("discard length: " + discardPile.length)
    let bothLost = dealerHitLostCards.length + doubleLostCards.length
    console.log("Number of lost Cards: " + bothLost)
    if (cutPosition - discardPile.length <= 0) {
      console.log("Your Cards: " + yourCards.length)
      console.log("Dealer card: " + localDealerCards.length)

      discardPile.push(...dealerHitLostCards)
      discardPile.push(...doubleLostCards)
      let placeHolderDeck = [...deck, ...discardPile]
      console.log(placeHolderDeck.length)
      // let localDiscardPile = discardPile
      console.log("Deck Shuffling")

      shoeCount(
        Math.floor(
          (Math.floor(Math.random() * (85 - 70 + 1) + 70) / 100) *
            (deck.length + discardPile.length)
        )
      )

      console.log(yourCards)
      console.log(localDealerCards)
      console.log(placeHolderDeck.length)
      deck.length = 0
      deckUpdate(placeHolderDeck)
      discardPile.length = 0
      setDiscardPile([])
    }
  }

  //
  const [splitCard1Display, setSplitCard1Display] = useState({
    display: "none"
  })
  const [splitCard1Flag, setSplitCard1Flag] = useState("//:0")
  const [splitCard1Alt, setSplitCard1Alt] = useState()
  useEffect(() => {
    if (yourCards2[0]) {
      setSplitCard1Flag()
    }
  }, [yourCards2, endPlayerTurn])

  const [splitCard1, setSplitCard1] = useState(splitCard1Flag)

  useEffect(() => {
    console.log("SPLITCARD TRIGGERED")
    setSplitCard1(
      splitCard1Flag ||
        cards[cardThemeNum][yourCards2[0].suit][yourCards2[0].card].src +
          "#" +
          new Date().getTime()
    )
    if (splitCard1Flag != "//:0") {
      setSplitCard1Display({ display: "block" })
      setSplitCard1Alt(
        cards[cardThemeNum][yourCards2[0].suit][yourCards2[0].card].alt
      )
    }
  }, [splitCard1Flag])

  //
  const [splitCard2Display, setSplitCard2Display] = useState({
    display: "none"
  })
  const [splitCard2Flag, setSplitCard2Flag] = useState("//:0")
  const [splitCard2Alt, setSplitCard2Alt] = useState()
  useEffect(() => {
    if (yourCards2[1]) {
      setSplitCard2Flag()
    }
  }, [yourCards2, endPlayerTurn])

  const [splitCard2, setSplitCard2] = useState(splitCard2Flag)

  useEffect(() => {
    setSplitCard2(
      splitCard2Flag ||
        cards[cardThemeNum][yourCards2[1].suit][yourCards2[1].card].src +
          "#" +
          new Date().getTime()
    )
    if (splitCard2Flag != "//:0") {
      setSplitCard2Display({ display: "block" })
      setSplitCard2Alt(
        cards[cardThemeNum][yourCards2[1].suit][yourCards2[1].card].alt
      )
    }
  }, [splitCard2Flag])

  let stand = () => {
    if (yourCards2.length === 0) {
      // If split is not triggered
      console.log("THERE WAS NO SPLIT")
      dealerHit()
      dealerCardTotalEvaluation()
      deckShuffleFunction()
      setEndPlayerTurn(1)
    } else {
      setSplitCard2("//:0")
      setSplitCard2Display({
        display: "none"
      })
      setPlayerThirdCardFlag("//:0")
      setThirdDisplay({ display: "none" })
      setPlayerFourthCardFlag("//:0")
      setFourthDisplay({ display: "none" })
      setPlayerFifthCardFlag("//:0")
      setFifthDisplay({ display: "none" })
      setPlayerSixthCardFlag("//:0")
      setSixthDisplay({ display: "none" })
      setPlayerSeventhCardFlag("//:0")
      setSeventhDisplay({ display: "none" })

      setSplitCard1(
        cards[cardThemeNum][yourCards[yourCards.length - 1].suit][
          yourCards[yourCards.length - 1].card
        ].src +
          "#" +
          new Date().getTime()
      )
      setSplitCard1Alt(
        cards[cardThemeNum][yourCards[yourCards.length - 1].suit][
          yourCards[yourCards.length - 1].card
        ].alt
      )
      setCardTotal2(cardTotal)
      let cards1 = yourCards
      let cards2 = yourCards2
      setYourCards2(cards1)
      setYourCards(cards2)
      setSplitCard2Alt()
      setStandElement(
        <a className="hoverHover" onClick={stand2}>
          <StandIcon iconTheme={iconTheme}></StandIcon>
        </a>
      )
    }
  }

  let stand2 = () => {
    console.log("SPLIT STAND")
    dealerHit()
    dealerCardTotalEvaluation()
    deckShuffleFunction()
    setEndPlayerTurn(1)
  }

  ///////////
  // Bug with calculation of cardTotal after blackjack from drawn card off of split
  // I suspect that when the cardTotal useEffect activated the blackjack check passed so it standed and the cardTotal was just the same
  // total it had before the useEffect triggered because it wasn't updated

  // Solution: have the blackjack check ensure that there is no split

  // sets yourCards to totalCards
  useEffect(() => {
    if (
      yourCards[0].value + yourCards[1].value === 21 &&
      yourCards2.length === 0
    ) {
      // Blackjack check
      stand()
    } else if (dealerCards[0].value + dealerCards[1].value === 21) {
      console.log("DID DEALER BLACKJACK")
      stand()
    } else {
      if (yourCards.map(x => x.value).filter(x => x === 11)[0] > 0) {
        // Checking for Aces in yourCards
        let aceCards = yourCards.filter(x => x.value2 === 1)
        if (
          // Checks for bust with Aces reduced to 1
          yourCards.map(x => x.value).reduce((x, y) => x + y) -
            aceCards.length * 11 +
            aceCards.length >
          21
        ) {
          setCardTotal(
            yourCards.map(x => x.value).reduce((x, y) => x + y) -
              aceCards.length * 11 +
              aceCards.length
          )
          setBust(1)
        } else if (yourCards.map(x => x.value).reduce((x, y) => x + y) <= 21) {
          // Normal draw calculation with Ace being 11 if not busting
          setCardTotal(yourCards.map(x => x.value).reduce((x, y) => x + y))
        } else {
          // Draw but with reduced Aces
          console.log("This is where we are")
          setCardTotal(
            yourCards.map(x => x.value).reduce((x, y) => x + y) -
              aceCards.length * 11 +
              aceCards.length
          )
        }
      } else if (yourCards.map(x => x.value).reduce((x, y) => x + y) > 21) {
        // Checks for bust with no Aces
        setCardTotal(yourCards.map(x => x.value).reduce((x, y) => x + y))
        setBust(1)
      } else {
        // Normal draw calculation without Aces
        setCardTotal(yourCards.map(x => x.value).reduce((x, y) => x + y))
      }
    }
  }, [yourCards])

  // Bust starts at 0
  useEffect(() => {
    if (bust === 1 && yourCards2.length === 0) {
      console.log("Busted, no split")
      setRoundResultKey("bust")
      stand()
    }
  }, [bust])

  // Creates round result
  useEffect(() => {
    if (endPlayerTurn === 1) {
      console.log("cardTotal:", cardTotal)
      console.log("cardTotal2:", cardTotal2)
      console.log("dealerCardTotal:", dealerCardTotal)
      if (cardTotal > 21 && cardTotal2 === 0) {
        // Checks for bust on double down
        console.log("bust")
        return
      } else {
        console.log("Calculating final round result")
        if (yourCards2.length === 0) {
          // If turn has ended and it has not split
          if (dealerCardTotal === cardTotal) {
            yourMoneyValue(yourMoney + playerBet)
            setRoundResultKey("push")
          }
          if (dealerCardTotal < cardTotal) {
            if (cardTotal > 21) {
              return
            } else if (yourCards[0].value + yourCards[1].value === 21) {
              yourMoneyValue(
                yourMoney + playerBet + Math.round(playerBet * 1.5)
              )
              setRoundResultKey("blackjack")
            } else {
              yourMoneyValue(yourMoney + playerBet * 2)
              setRoundResultKey("won")
            }
          } else if (dealerCardTotal > cardTotal) {
            if (dealerCards[0].value + dealerCards[1].value === 21) {
              setRoundResultKey("DealerBlackjack")
            } else if (dealerCardTotal < 22) {
              setRoundResultKey("lost")
            } else if (yourCards[0].value + yourCards[1].value === 21) {
              yourMoneyValue(
                yourMoney + playerBet + Math.round(playerBet * 1.5)
              )
              setRoundResultKey("blackjack")
            } else {
              yourMoneyValue(yourMoney + playerBet * 2)
              setRoundResultKey("dealerBust")
            }
          }
        } else {
          // This will evaluate both the first and second hand sequentially at once
          // First hand
          if (dealerCardTotal < cardTotal) {
            if (cardTotal > 21) {
              // busted
              setRoundResultKey("bust")
            } else {
              yourMoneyValue(yourMoney + playerBet * 2)
              setRoundResultKey("win")
              setHandOneWin(1)
            }
          } else if (dealerCardTotal > cardTotal) {
            if (dealerCardTotal < 22) {
              setRoundResultKey("lost")
            } else {
              yourMoneyValue(yourMoney + playerBet * 2)
              setRoundResultKey("dealerBust")
              setHandOneWin(1)
            }
          } else {
            yourMoneyValue(yourMoney + playerBet)
            setRoundResultKey("push")
          }
          // Second hand
          if (dealerCardTotal < cardTotal2) {
            if (cardTotal2 > 21) {
              setRoundResultKey2("bust")
            } else {
              yourMoneyValue(yourMoney + playerBet2 * 2)
              setRoundResultKey2("win")
              setHandTwoWin(1)
            }
          } else if (dealerCardTotal > cardTotal2) {
            if (dealerCardTotal < 22) {
              setRoundResultKey2("lost")
            } else {
              yourMoneyValue(yourMoney + playerBet2 * 2)
              setRoundResultKey2("dealerBust")
              setHandTwoWin(1)
            }
          } else {
            yourMoneyValue(yourMoney + playerBet2)
            setRoundResultKey2("push")
          }
        }
      }
    }
  }, [endPlayerTurn])

  // Resolves for updating yourMoney state twice in the same cycle if both hands on split win
  useEffect(() => {
    if (handOneWin && handTwoWin) {
      yourMoneyValue(yourMoney + playerBet + playerBet2)
    }
  }, [handTwoWin])

  // Checks for busting on second hand and ends turn
  // The bust below is determined as the cardTotal is being calculated, meaning after it has triggered once we just reset is then it
  // should all work as planned

  // Checks for bust on split for both hands
  useEffect(() => {
    if (yourCards2.length) {
      // I think I should use cardTotal2
      if (bust && cardTotal2 === 0) {
        setRoundResultKey("bust")
        stand()
      } else if (bust && cardTotal2) {
        setRoundResultKey2("bust")
        stand2()
      }
    }
  }, [bust])

  const [splitElement, setSplitElement] = useState()
  // Sets split element
  useEffect(() => {
    // This removes the ability to press the button after standing
    if (endPlayerTurn) {
      setSplitElement(
        <a>
          <SplitIcon iconTheme={iconTheme} opacity={"50%"}></SplitIcon>
        </a>
      )
    } else if (
      yourCards[0].value === yourCards[1].value &&
      playerBet <= yourMoney &&
      yourCards[2] === undefined
    ) {
      setSplitElement(
        // Normal split element
        <a className="hoverHover" onClick={splitting}>
          <SplitIcon iconTheme={iconTheme}></SplitIcon>
        </a>
      )
    } else {
      setSplitElement(
        // This will be the lowered opacity, or greyed out version of the split icon
        <a>
          <SplitIcon iconTheme={iconTheme} opacity={"50%"}></SplitIcon>
        </a>
      )
    }
  }, [yourCards, endPlayerTurn])

  const [doubleDownElement, setDoubleDownElement] = useState(
    <a className="hoverHover" onClick={doubleDown}>
      <DoubleIcon iconTheme={iconTheme}></DoubleIcon>
    </a>
  )

  // Sets double down element
  useEffect(() => {
    if (endPlayerTurn) {
      setDoubleDownElement(
        <a>
          <DoubleIcon iconTheme={iconTheme} opacity={"50%"}></DoubleIcon>
        </a>
      )
    } else if (playerBet <= yourMoney) {
      setDoubleDownElement(
        <a className="hoverHover" onClick={doubleDown}>
          <DoubleIcon iconTheme={iconTheme}></DoubleIcon>
        </a>
      )
    } else {
      setDoubleDownElement(
        // Unusable version
        <a>
          <DoubleIcon iconTheme={iconTheme} opacity={"50%"}></DoubleIcon>
        </a>
      )
    }
    // Removes the option to double on split if you have already hit, too many bugs if allowed
    if (yourCards2.length && yourCards.length > 2) {
      setDoubleDownElement(
        // Unusable version
        <a>
          <DoubleIcon iconTheme={iconTheme} opacity={"50%"}></DoubleIcon>
        </a>
      )
    }
  }, [yourCards, endPlayerTurn])

  const [cardsLeft, setCardsLeft] = useState()

  // If the game hasn't looped to main once then the remaining cards does not display (or exist)
  useEffect(() => {
    if (cutPosition - discardPile.length) {
      setCardsLeft(
        <div>
          <p style={textColor}>{cutPosition - discardPile.length}</p>
          <p style={textColor} id="underRemaining">
            Cards Remaining
          </p>
        </div>
      )
    }
  }, [cutPosition, discardPile])
  //
  const [thirdDisplay, setThirdDisplay] = useState({ display: "none" })
  const [playerThirdCardFlag, setPlayerThirdCardFlag] = useState("//:0")
  const [playerThirdAlt, setPlayerThirdAlt] = useState()
  useEffect(() => {
    if (yourCards[2]) {
      setPlayerThirdCardFlag()
    }
  }, [yourCards])

  const [playerThird, setPlayerThird] = useState(playerThirdCardFlag)

  useEffect(() => {
    setPlayerThird(
      playerThirdCardFlag ||
        cards[cardThemeNum][yourCards[2].suit][yourCards[2].card].src +
          "#" +
          new Date().getTime()
    )
    if (playerThirdCardFlag != "//:0") {
      setThirdDisplay({ display: "block" })
      setPlayerThirdAlt(
        cards[cardThemeNum][yourCards[2].suit][yourCards[2].card].alt
      )
    }
  }, [yourCards, playerThirdCardFlag])

  //

  const [fourthDisplay, setFourthDisplay] = useState({ display: "none" })
  const [playerFourthCardFlag, setPlayerFourthCardFlag] = useState("//:0")
  const [playerFourthAlt, setPlayerFourthAlt] = useState()
  useEffect(() => {
    if (yourCards[3]) {
      setPlayerFourthCardFlag()
    }
  }, [yourCards])

  const [playerFourth, setPlayerFourth] = useState(playerFourthCardFlag)

  useEffect(() => {
    setPlayerFourth(
      playerFourthCardFlag ||
        cards[cardThemeNum][yourCards[3].suit][yourCards[3].card].src +
          "#" +
          new Date().getTime()
    )
    if (playerFourthCardFlag != "//:0") {
      setFourthDisplay({ display: "block" })
      setPlayerFourthAlt(
        cards[cardThemeNum][yourCards[3].suit][yourCards[3].card].alt
      )
    }
  }, [yourCards, playerFourthCardFlag])

  //
  const [fifthDisplay, setFifthDisplay] = useState({ display: "none" })
  const [playerFifthCardFlag, setPlayerFifthCardFlag] = useState("//:0")
  const [playerFifthAlt, setPlayerFifthAlt] = useState()
  useEffect(() => {
    if (yourCards[4]) {
      setPlayerFifthCardFlag()
    }
  }, [yourCards])

  const [playerFifth, setPlayerFifth] = useState(playerFifthCardFlag)

  useEffect(() => {
    setPlayerFifth(
      playerFifthCardFlag ||
        cards[cardThemeNum][yourCards[4].suit][yourCards[4].card].src +
          "#" +
          new Date().getTime()
    )
    if (playerFifthCardFlag != "//:0") {
      setFifthDisplay({ display: "block" })
      setPlayerFifthAlt(
        cards[cardThemeNum][yourCards[4].suit][yourCards[4].card].alt
      )
    }
  }, [yourCards, playerFifthCardFlag])

  //
  const [sixthDisplay, setSixthDisplay] = useState({ display: "none" })
  const [playerSixthCardFlag, setPlayerSixthCardFlag] = useState("//:0")
  const [playerSixthAlt, setPlayerSixthAlt] = useState()
  useEffect(() => {
    if (yourCards[5]) {
      setPlayerSixthCardFlag()
    }
  }, [yourCards])

  const [playerSixth, setPlayerSixth] = useState(playerSixthCardFlag)

  useEffect(() => {
    setPlayerSixth(
      playerSixthCardFlag ||
        cards[cardThemeNum][yourCards[5].suit][yourCards[5].card].src +
          "#" +
          new Date().getTime()
    )
    if (playerSixthCardFlag != "//:0") {
      setSixthDisplay({ display: "block" })
      setPlayerSixthAlt(
        cards[cardThemeNum][yourCards[5].suit][yourCards[5].card].alt
      )
    }
  }, [yourCards, playerSixthCardFlag])

  //
  const [seventhDisplay, setSeventhDisplay] = useState({ display: "none" })
  const [playerSeventhCardFlag, setPlayerSeventhCardFlag] = useState("//:0")
  const [playerSeventhAlt, setPlayerSeventhAlt] = useState()
  useEffect(() => {
    if (yourCards[6]) {
      setPlayerSeventhCardFlag()
    }
  }, [yourCards])

  const [playerSeventh, setPlayerSeventh] = useState(playerSeventhCardFlag)

  useEffect(() => {
    setPlayerSeventh(
      playerSeventhCardFlag ||
        cards[cardThemeNum][yourCards[6].suit][yourCards[6].card].src +
          "#" +
          new Date().getTime()
    )
    if (playerSeventhCardFlag != "//:0") {
      setSeventhDisplay({ display: "block" })
      setPlayerSeventhAlt(
        cards[cardThemeNum][yourCards[6].suit][yourCards[6].card].alt
      )
    }
  }, [yourCards, playerSeventhCardFlag])

  //
  //
  //
  const [thirdDealerDisplay, setThirdDealerDisplay] = useState({
    display: "none"
  })
  const [dealerThirdCardFlag, setDealerThirdCardFlag] = useState("//:0")
  const [dealerThirdAlt, setDealerThirdAlt] = useState()
  useEffect(() => {
    if (localDealerCards[2] || dealerCards[2]) {
      setDealerThirdCardFlag()
    }
  }, [dealerCards, localDealerCards, endPlayerTurn])

  const [dealerThird, setDealerThird] = useState(dealerThirdCardFlag)

  useEffect(() => {
    setDealerThird(
      dealerThirdCardFlag ||
        cards[cardThemeNum][localDealerCards[2].suit][localDealerCards[2].card]
          .src +
          "#" +
          new Date().getTime()
    )
    if (dealerThirdCardFlag != "//:0") {
      setThirdDealerDisplay({ display: "block" })
      setDealerThirdAlt(
        cards[cardThemeNum][localDealerCards[2].suit][localDealerCards[2].card]
          .alt
      )
    }
  }, [dealerThirdCardFlag])

  //
  const [fourthDealerDisplay, setFourthDealerDisplay] = useState({
    display: "none"
  })
  const [dealerFourthCardFlag, setDealerFourthCardFlag] = useState("//:0")
  const [dealerFourthAlt, setDealerFourthAlt] = useState()
  useEffect(() => {
    if (dealerCards[3]) {
      setDealerFourthCardFlag()
    }
  }, [dealerCards, localDealerCards, endPlayerTurn])

  const [dealerFourth, setDealerFourth] = useState(dealerFourthCardFlag)

  useEffect(() => {
    setDealerFourth(
      dealerFourthCardFlag ||
        cards[cardThemeNum][dealerCards[3].suit][dealerCards[3].card].src +
          "#" +
          new Date().getTime()
    )
    if (dealerFourthCardFlag != "//:0") {
      setFourthDealerDisplay({ display: "block" })
      setDealerFourthAlt(
        cards[cardThemeNum][dealerCards[3].suit][dealerCards[3].card].alt
      )
    }
  }, [dealerFourthCardFlag])

  //
  const [fifthDealerDisplay, setFifthDealerDisplay] = useState({
    display: "none"
  })
  const [dealerFifthCardFlag, setDealerFifthCardFlag] = useState("//:0")
  const [dealerFifthAlt, setDealerFifthAlt] = useState()
  useEffect(() => {
    if (dealerCards[4]) {
      console.log(dealerCards[4])
      setDealerFifthCardFlag()
    }
  }, [dealerCards, localDealerCards, endPlayerTurn])

  const [dealerFifth, setDealerFifth] = useState(dealerFifthCardFlag)

  useEffect(() => {
    console.log(dealerCards[4])
    if (dealerCards[4]) {
      setDealerFifth(
        dealerFifthCardFlag ||
          cards[cardThemeNum][dealerCards[4].suit][dealerCards[4].card].src +
            "#" +
            new Date().getTime()
      )
      if (dealerFifthCardFlag != "//:0") {
        setFifthDealerDisplay({ display: "block" })
        setDealerFifthAlt(
          cards[cardThemeNum][dealerCards[4].suit][dealerCards[4].card].alt
        )
      }
    }
  }, [dealerFifthCardFlag])

  //
  const [sixthDealerDisplay, setSixthDealerDisplay] = useState({
    display: "none"
  })
  const [dealerSixthCardFlag, setDealerSixthCardFlag] = useState("//:0")
  const [dealerSixthAlt, setDealerSixthAlt] = useState()
  useEffect(() => {
    if (dealerCards[5]) {
      setDealerSixthCardFlag()
    }
  }, [dealerCards, localDealerCards, endPlayerTurn])

  const [dealerSixth, setDealerSixth] = useState(dealerSixthCardFlag)

  useEffect(() => {
    setDealerSixth(
      dealerSixthCardFlag ||
        cards[cardThemeNum][dealerCards[5].suit][dealerCards[5].card].src +
          "#" +
          new Date().getTime()
    )
    if (dealerSixthCardFlag != "//:0") {
      setSixthDealerDisplay({ display: "block" })
      setDealerSixthAlt(
        cards[cardThemeNum][dealerCards[5].suit][dealerCards[5].card].alt
      )
    }
  }, [dealerSixthCardFlag])

  //
  const [seventhDealerDisplay, setSeventhDealerDisplay] = useState({
    display: "none"
  })
  const [dealerSeventhCardFlag, setDealerSeventhCardFlag] = useState("//:0")
  const [dealerSeventhAlt, setDealerSeventhAlt] = useState()
  useEffect(() => {
    if (dealerCards[6]) {
      setDealerSeventhCardFlag()
    }
  }, [dealerCards, localDealerCards, endPlayerTurn])

  const [dealerSeventh, setDealerSeventh] = useState(dealerSeventhCardFlag)

  useEffect(() => {
    setDealerSeventh(
      dealerSeventhCardFlag ||
        cards[cardThemeNum][dealerCards[6].suit][dealerCards[6].card].src +
          "#" +
          new Date().getTime()
    )
    if (dealerSeventhCardFlag != "//:0") {
      setSeventhDealerDisplay({ display: "block" })
      setDealerSeventhAlt(
        cards[cardThemeNum][dealerCards[6].suit][dealerCards[6].card].alt
      )
    }
  }, [dealerSeventhCardFlag])

  //

  const [dealerCardOne, setDealerCardOne] = useState(
    process.env.PUBLIC_URL +
      cards[cardThemeNum][dealerCards[0].suit][dealerCards[0].card].src +
      "#" +
      new Date().getTime()
  )

  const [dealerCardTwo, setDealerCardTwo] = useState(
    process.env.PUBLIC_URL +
      cards[cardThemeNum][dealerCards[1].suit][dealerCards[1].card].src +
      "#" +
      new Date().getTime()
  )

  const [playerCardOne, setPlayerCardOne] = useState(
    process.env.PUBLIC_URL +
      cards[cardThemeNum][yourCards[0].suit][yourCards[0].card].src +
      "#" +
      new Date().getTime()
  )

  const [playerCardTwo, setPlayerCardTwo] = useState(
    process.env.PUBLIC_URL +
      cards[cardThemeNum][yourCards[1].suit][yourCards[1].card].src +
      "#" +
      new Date().getTime()
  )

  // This is here I believe to ensure that they properly update
  useEffect(() => {
    setDealerCardOne(
      process.env.PUBLIC_URL +
        cards[cardThemeNum][dealerCards[0].suit][dealerCards[0].card].src +
        "#" +
        new Date().getTime()
    )
    setDealerCardTwo(
      process.env.PUBLIC_URL +
        cards[cardThemeNum][dealerCards[1].suit][dealerCards[1].card].src +
        "#" +
        new Date().getTime()
    )
    setPlayerCardOne(
      process.env.PUBLIC_URL +
        cards[cardThemeNum][yourCards[0].suit][yourCards[0].card].src +
        "#" +
        new Date().getTime()
    )
    setPlayerCardTwo(
      process.env.PUBLIC_URL +
        cards[cardThemeNum][yourCards[1].suit][yourCards[1].card].src +
        "#" +
        new Date().getTime()
    )
  }, [yourCards2, yourCards])

  let z = document.getElementsByClassName("block")

  const backgroundBlur = () => {
    z[0].style.filter = "blur(4px) grayscale(85%)"
  }

  const roundEndAuto = () => {
    setTimeout(roundStartFlagReset, 3000)
  }

  const [outcomeContent, setOutcomeContent] = useState()

  const [outcomeEffect, setOutcomeEffect] = useState("")

  const blur = () => {
    setTimeout(backgroundBlur, 1000)
  }

  const splitHandle = () => {
    // disable blur
    z[0].style.filter = ""
    // remove outcomeComponent
    setOutcomeComponent()
    // swap hands
    setSplitCard1(
      cards[cardThemeNum][yourCards[yourCards.length - 1].suit][
        yourCards[yourCards.length - 1].card
      ].src +
        "#" +
        new Date().getTime()
    )
    setSplitCard1Alt(
      cards[cardThemeNum][yourCards[yourCards.length - 1].suit][
        yourCards[yourCards.length - 1].card
      ].alt
    )
    setSplitCard2("//:0")
    setSplitCard2Display({
      display: "none"
    })
    setCardTotal2(cardTotal)
    let cards1 = yourCards
    let cards2 = yourCards2
    setYourCards2(cards1)
    setYourCards(cards2)
    // Here I hope the rest of the triggers for displaying the cards to occur actually display them

    // I suspect that perhaps I may have to swap the roundResultKey to make things simpler
    switch (roundResultKey2) {
      case "won":
        setOutcomeEffect("positive")
        blur()
        roundEndAuto()
        break
      case "lost":
        setOutcomeEffect("negative")
        blur()
        roundEndAuto()
        break
      case "push":
        setOutcomeEffect("neutral")
        blur()
        roundEndAuto()
        break
      case "blackjack":
        setOutcomeContent("Blackjack.")
        setOutcomeEffect("positive")
        blur()
        roundEndAuto()
        break
      case "bust":
        setOutcomeContent("You bust.")
        setOutcomeEffect("negative")
        blur()
        roundEndAuto()
        break
      case "dealerBust":
        setOutcomeContent("Dealer bust.")
        setOutcomeEffect("positive")
        blur()
        roundEndAuto()
        break
      case "DealerBlackjack":
        setOutcomeContent("Dealer Blackjack.")
        setOutcomeEffect("negative")
        blur()
        roundEndAuto()
    }
    // With that assuming all the systems work that should have resolved everything and took you back to the bet phase
  }

  useEffect(() => {
    console.log("roundResultKey switch")
    console.log(roundResultKey)

    if (yourCards2.length === 0) {
      // There is no split
      switch (roundResultKey) {
        case "won":
          setOutcomeEffect("positive")
          blur()
          roundEndAuto()
          break
        case "lost":
          setOutcomeEffect("negative")
          blur()
          roundEndAuto()
          break
        case "push":
          setOutcomeEffect("neutral")
          blur()
          roundEndAuto()
          break
        case "blackjack":
          setOutcomeContent("Blackjack.")
          setOutcomeEffect("positive")
          blur()
          roundEndAuto()
          break
        case "bust":
          setOutcomeContent("You bust.")
          setOutcomeEffect("negative")
          blur()
          roundEndAuto()
          break
        case "dealerBust":
          setOutcomeContent("Dealer bust.")
          setOutcomeEffect("positive")
          blur()
          roundEndAuto()
          break
        case "DealerBlackjack":
          setOutcomeContent("Dealer Blackjack.")
          setOutcomeEffect("negative")
          blur()
          roundEndAuto()
      }
    } else if (yourCards2.length && roundResultKey2 !== "") {
      switch (roundResultKey) {
        case "won":
          setOutcomeEffect("positive")
          blur()
          break
        case "lost":
          setOutcomeEffect("negative")
          blur()
          break
        case "push":
          setOutcomeEffect("neutral")
          blur()
          break
        case "blackjack":
          setOutcomeContent("Blackjack.")
          setOutcomeEffect("positive")
          blur()
          break
        case "bust":
          setOutcomeContent("You bust.")
          setOutcomeEffect("negative")
          blur()
          break
        case "dealerBust":
          setOutcomeContent("Dealer bust.")
          setOutcomeEffect("positive")
          blur()
          break
        case "DealerBlackjack":
          setOutcomeContent("Dealer Blackjack.")
          setOutcomeEffect("negative")
          blur()
      }
      // Here put a setTimeout that handles resetting the blur and the outcomeComponent that triggers when the time is about the same as a
      // normal end turn, then after that swap the hands of 1 and 2 then trigger another switch that is basically just the normal one
      // with the roundEndAuto.
      // Another thing I would like to add is updating the money during the blur function

      // It seems like it mostly worked except the blur and component didn't trigger, nor the ending I think. Better than I expected

      setTimeout(splitHandle, 5000)
    }
  }, [roundResultKey, roundResultKey2])

  const [outcomeComponent, setOutcomeComponent] = useState()

  const outcomeContainer = () => {
    setOutcomeComponent(
      <Outcome
        textColor={textColor}
        outcomeContent={outcomeContent}
        outcomeEffect={outcomeEffect}
        iconTheme={iconTheme}
      ></Outcome>
    )
  }

  // How long it takes for the component to display
  // The issue with this i am predicting is what if the outcomeEffect from roundResultKey2 is the same as 1, would this not trigger then?
  useEffect(() => {
    if (outcomeEffect !== "") {
      console.log("OUTCOME COMPONENT SET")
      setTimeout(outcomeContainer, 1500)
    }
  }, [outcomeEffect])

  const [standElement, setStandElement] = useState(
    <a className="hoverHover" onClick={stand}>
      <StandIcon iconTheme={iconTheme}></StandIcon>
    </a>
  )

  // Sets stand element
  useEffect(() => {
    if (endPlayerTurn) {
      console.log(
        "END PLAYER TURN STAAND RRRRRREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE"
      )
      setStandElement(
        <a>
          <StandIcon iconTheme={iconTheme} opacity={"50%"}></StandIcon>
        </a>
      )
    }
  }, [endPlayerTurn])

  const [hitElement, setHitElement] = useState(
    <a className="hoverHover" onClick={playerHit}>
      <HitIcon iconTheme={iconTheme}></HitIcon>
    </a>
  )

  // Sets hit element
  useEffect(() => {
    if (endPlayerTurn) {
      setHitElement(
        <a>
          <HitIcon iconTheme={iconTheme} opacity={"50%"}></HitIcon>
        </a>
      )
    }
  }, [endPlayerTurn])

  const [themesButtonToggle, setThemesButtonToggle] = useState(
    <a className="hoverHover" onClick={settingsFlagSwitch}>
      <ThemesIcon iconTheme={iconTheme}></ThemesIcon>
    </a>
  )

  useEffect(() => {
    if (endPlayerTurn) {
      setThemesButtonToggle(
        <a className="hoverHover">
          <ThemesIcon iconTheme={iconTheme}></ThemesIcon>
        </a>
      )
    }
  }, [endPlayerTurn])

  return (
    <div>
      <div>{outcomeComponent}</div>

      <div className="block">
        <div className="remainingCards">
          <div>
            <img
              className="drawPile"
              src={process.env.PUBLIC_URL + cards.t2.spade.ace.src}
              height="153.576px"
              width="104.976px"
              alt="Ace of spades card."
            ></img>
          </div>
          <div>{cardsLeft}</div>
        </div>

        <div className="dealerTotal">
          <p style={textColor}>{dealerCardTotal}</p>
        </div>
        <div className="playerTotal">
          <p style={textColor}>{cardTotal}</p>
        </div>

        <div className="dealerCardsWrap">
          <div className="firstCard">
            <img
              src={process.env.PUBLIC_URL + dealerCardOne}
              height="199.6488px"
              width="136.4688px"
              alt={
                cards[cardThemeNum][dealerCards[0].suit][dealerCards[0].card]
                  .alt
              }
            ></img>
          </div>
          <div className="otherCard">
            <img
              src={process.env.PUBLIC_URL + dealerCardTwo}
              height="199.6488px"
              width="136.4688px"
              alt={
                cards[cardThemeNum][dealerCards[1].suit][dealerCards[1].card]
                  .alt
              }
            ></img>
          </div>
          <div className="thirdCard" style={thirdDealerDisplay}>
            <img
              src={process.env.PUBLIC_URL + dealerThird}
              height="199.6488px"
              width="136.4688px"
              alt={dealerThirdAlt}
            ></img>
          </div>
          <div className="fourthCard" style={fourthDealerDisplay}>
            <img
              src={process.env.PUBLIC_URL + dealerFourth}
              height="199.6488px"
              width="136.4688px"
              alt={dealerFourthAlt}
            ></img>
          </div>
          <div className="fifthCard" style={fifthDealerDisplay}>
            <img
              src={process.env.PUBLIC_URL + dealerFifth}
              height="199.6488px"
              width="136.4688px"
              alt={dealerFifthAlt}
            ></img>
          </div>
          <div className="sixthCard" style={sixthDealerDisplay}>
            <img
              src={process.env.PUBLIC_URL + dealerSixth}
              height="199.6488px"
              width="136.4688px"
              alt={dealerSixthAlt}
            ></img>
          </div>
          <div className="seventhCard" style={seventhDealerDisplay}>
            <img
              src={process.env.PUBLIC_URL + dealerSeventh}
              height="199.6488px"
              width="136.4688px"
              alt={dealerSeventhAlt}
            ></img>
          </div>
        </div>

        <div className="playerCardsWrap">
          <div className="firstCard">
            <img
              src={process.env.PUBLIC_URL + playerCardOne}
              height="199.6488px"
              width="136.4688px"
              alt={
                cards[cardThemeNum][yourCards[0].suit][yourCards[0].card].alt
              }
            ></img>
          </div>
          <div className="otherCard">
            <img
              src={process.env.PUBLIC_URL + playerCardTwo}
              height="199.6488px"
              width="136.4688px"
              alt={
                cards[cardThemeNum][yourCards[1].suit][yourCards[1].card].alt
              }
            ></img>
          </div>
          <div className="thirdCard" style={thirdDisplay}>
            <img
              src={process.env.PUBLIC_URL + playerThird}
              height="199.6488px"
              width="136.4688px"
              alt={playerThirdAlt}
            ></img>
          </div>
          <div className="fourthCard" style={fourthDisplay}>
            <img
              src={process.env.PUBLIC_URL + playerFourth}
              height="199.6488px"
              width="136.4688px"
              alt={playerFourthAlt}
            ></img>
          </div>
          <div className="fifthCard" style={fifthDisplay}>
            <img
              src={process.env.PUBLIC_URL + playerFifth}
              height="199.6488px"
              width="136.4688px"
              alt={playerFifthAlt}
            ></img>
          </div>
          <div className="sixthCard" style={sixthDisplay}>
            <img
              src={process.env.PUBLIC_URL + playerSixth}
              height="199.6488px"
              width="136.4688px"
              alt={playerSixthAlt}
            ></img>
          </div>
          <div className="seventhCard" style={seventhDisplay}>
            <img
              src={process.env.PUBLIC_URL + playerSeventh}
              height="199.6488px"
              width="136.4688px"
              alt={playerSeventhAlt}
            ></img>
          </div>
        </div>

        <div className="playerCards2Wrap">
          <div className="splitCard1" style={splitCard1Display}>
            <img
              src={process.env.PUBLIC_URL + splitCard1}
              height="99.8244"
              width="68.2344px"
              alt={splitCard1Alt}
            ></img>
          </div>
          <div className="splitCard2" style={splitCard2Display}>
            <img
              src={process.env.PUBLIC_URL + splitCard2}
              height="99.8244"
              width="68.2344px"
              alt={splitCard2Alt}
            ></img>
          </div>
        </div>

        <div className="playerActions">
          {standElement}
          {hitElement}
          {doubleDownElement}
          {splitElement}
        </div>

        <div className="moneyWrapperTable">
          <p style={textColor} id="bet">
            ${yourMoney}
          </p>
          <p style={textColor} id="currentBet">
            Your Money
          </p>
        </div>

        <div>
          <p style={textColor} id="bet">
            ${playerBet}
          </p>
          <p style={textColor} id="currentBet">
            Current bet
          </p>
        </div>

        <div className="one">
          <a href="https://github.com/TheDemonOn/AutoJack" target="_blank">
            <GithubSVG iconTheme={iconTheme}></GithubSVG>
          </a>
        </div>

        <div className="two">{themesButtonToggle}</div>
      </div>
    </div>
  )
}

// later create a validation so that if the entered input is not acceptable it lets them know, but also prompts a button to continue with default options.
function App() {
  console.log("Main is looped")

  // This is the current/default bodyTheme
  const [bodyTheme, setBodyTheme] = useState("bodyTheme2")

  // Sets the body to the default of bodyTheme2
  useEffect(() => {
    document.body.classList.add(bodyTheme)
  }, [])

  const bodyChange = newBodyTheme => {
    document.body.classList.remove(bodyTheme)
    document.body.classList.add(newBodyTheme)
  }

  const goldTheme = {
    borderColor: "#e7bd52",
    backgroundColor: "rgba(40, 47, 93, .5)",
    color: "#e7bd52"
  }

  const goldColor = {
    color: "#e7bd52"
  }
  const goldColorString = "#e7bd52"

  const purpleTheme = {
    borderColor: "#392950",
    backgroundColor: "#392950",
    color: "white"
  }

  const purpleColor = {
    color: "#392950"
  }
  const purpleColorString = "#392950"

  const redTheme = {
    borderColor: "#c12f2f",
    backgroundColor: "rgba(244, 244, 244, .2)",
    color: "#c12f2f"
  }

  const redColor = {
    color: "#c12f2f"
  }
  const redColorString = "#c12f2f"

  const greenTheme = {
    borderColor: "#48b74d",
    backgroundColor: "rgba(42, 31, 73, .5)",
    color: "#48b74d"
  }

  const greenColor = {
    color: "#48b74d"
  }
  const greenColorString = "#48b74d"

  // This is just inserted into buttonTheme
  // const [themeColor, setThemeColor] = useState(purpleTheme)

  // The three states that affect everything are the textColor, buttonTheme(themeColor), and iconTheme
  const [textColor, setTextColor] = useState(purpleColor)

  // The hover state for the buttons will probably have to go into here
  const buttonSettings = {
    padding: "0 1em",
    textAlign: "center",
    fontSize: "4em",
    fontFamily: "whitman, arial",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "1.3",
    // padding: "0 30px",
    textDecoration: "none",
    borderStyle: "solid",
    borderRadius: "10px",
    outline: "none"
  }

  const altButtonSettings = {
    padding: "0 0.5em",
    textAlign: "center",
    fontSize: "3.5em",
    fontFamily: "upgrade, sans-serif",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "1",
    // padding: "0 30px",
    textDecoration: "none",
    borderStyle: "solid",
    borderRadius: "10px",
    outline: "none"
  }

  // Format: object; This should stay consistent
  const [buttonTheme, setButtonTheme] = useState({
    ...buttonSettings,
    ...purpleTheme
  })

  const [altButtonTheme, setAltButtonTheme] = useState({
    ...altButtonSettings,
    ...purpleTheme
  })

  // Need to add the change to the function theme change
  const [altButtonThemeActive, setAltButtonThemeActive] = useState({
    ...altButtonSettings,
    ...purpleTheme,
    backgroundColor: "#DBD8DF",
    color: "#392950"
  })

  // Format: string
  const [iconTheme, setIconTheme] = useState(purpleColorString)

  const [cardThemeNum, setCardThemeNum] = useState("t2")

  const [displayCard, setDisplayCard] = useState(
    cards[cardThemeNum].spade.ace.src
  )

  const t1ThemeChange = () => {
    setDisplayCard(cards.t1.spade.ace.src)
    setButtonTheme({
      ...buttonSettings,
      ...goldTheme
    })
    setAltButtonTheme({
      ...altButtonSettings,
      ...goldTheme
    })
    setAltButtonThemeActive({
      ...altButtonSettings,
      ...goldTheme,
      backgroundColor: "#e7bd52",
      color: "rgba(40, 47, 93, 1)"
    })
    setTextColor(goldColor)
    setIconTheme(goldColorString)
    bodyChange("bodyTheme1")
    setBodyTheme("bodyTheme1")
    setCardThemeNum("t1")
  }

  const t2ThemeChange = () => {
    setDisplayCard(cards.t2.spade.ace.src)
    setButtonTheme({
      ...buttonSettings,
      ...purpleTheme
    })
    setAltButtonTheme({
      ...altButtonSettings,
      ...purpleTheme
    })
    setAltButtonThemeActive({
      ...altButtonSettings,
      ...purpleTheme,
      backgroundColor: "#DBD8DF",
      color: "#392950"
    })
    setTextColor(purpleColor)
    setIconTheme(purpleColorString)
    bodyChange("bodyTheme2")
    setBodyTheme("bodyTheme2")
    setCardThemeNum("t2")
  }

  const t3ThemeChange = () => {
    setDisplayCard(cards.t3.spade.ace.src)
    setButtonTheme({
      ...buttonSettings,
      ...redTheme
    })
    setAltButtonTheme({
      ...altButtonSettings,
      ...redTheme
    })
    setAltButtonThemeActive({
      ...altButtonSettings,
      ...redTheme,
      backgroundColor: "#c12f2f",
      color: "#fff"
    })
    setTextColor(redColor)
    setIconTheme(redColorString)
    bodyChange("bodyTheme3")
    setBodyTheme("bodyTheme3")
    setCardThemeNum("t3")
  }

  const t4ThemeChange = () => {
    setDisplayCard(cards.t4.spade.ace.src)
    setButtonTheme({
      ...buttonSettings,
      ...greenTheme
    })
    setAltButtonTheme({
      ...altButtonSettings,
      ...greenTheme
    })
    setAltButtonThemeActive({
      ...altButtonSettings,
      ...greenTheme,
      borderColor: "rgba(42, 31, 73, 1)",
      backgroundColor: "#48b74d",
      color: "rgba(42, 31, 73, 1)"
    })
    setTextColor(greenColor)
    setIconTheme(greenColorString)
    bodyChange("bodyTheme4")
    setBodyTheme("bodyTheme4")
    setCardThemeNum("t4")
  }

  const [storedTheme, setStoredTheme] = useState(
    localStorage.getItem("theme") || ""
  )

  useEffect(() => {
    localStorage.setItem("theme", bodyTheme)
  }, [bodyTheme])

  useEffect(() => {
    switch (storedTheme) {
      case "bodyTheme1":
        setDisplayCard(cards.t1.spade.ace.src)
        setButtonTheme({
          ...buttonSettings,
          ...goldTheme
        })
        setAltButtonTheme({
          ...altButtonSettings,
          ...goldTheme
        })
        setAltButtonThemeActive({
          ...altButtonSettings,
          ...goldTheme,
          backgroundColor: "#e7bd52",
          color: "rgba(40, 47, 93, 1)"
        })
        setTextColor(goldColor)
        setIconTheme(goldColorString)
        bodyChange("bodyTheme1")
        setBodyTheme("bodyTheme1")
        setCardThemeNum("t1")
        break

      case "bodyTheme2":
        setDisplayCard(cards.t2.spade.ace.src)
        setButtonTheme({
          ...buttonSettings,
          ...purpleTheme
        })
        setAltButtonTheme({
          ...altButtonSettings,
          ...purpleTheme
        })
        setAltButtonThemeActive({
          ...altButtonSettings,
          ...purpleTheme,
          backgroundColor: "#DBD8DF",
          color: "#392950"
        })
        setTextColor(purpleColor)
        setIconTheme(purpleColorString)
        bodyChange("bodyTheme2")
        setBodyTheme("bodyTheme2")
        setCardThemeNum("t2")
        break

      case "bodyTheme3":
        setDisplayCard(cards.t3.spade.ace.src)
        setButtonTheme({
          ...buttonSettings,
          ...redTheme
        })
        setAltButtonTheme({
          ...altButtonSettings,
          ...redTheme
        })
        setAltButtonThemeActive({
          ...altButtonSettings,
          ...redTheme,
          backgroundColor: "#c12f2f",
          color: "#fff"
        })
        setTextColor(redColor)
        setIconTheme(redColorString)
        bodyChange("bodyTheme3")
        setBodyTheme("bodyTheme3")
        setCardThemeNum("t3")
        break

      case "bodyTheme4":
        setDisplayCard(cards.t4.spade.ace.src)
        setButtonTheme({
          ...buttonSettings,
          ...greenTheme
        })
        setAltButtonTheme({
          ...altButtonSettings,
          ...greenTheme
        })
        setAltButtonThemeActive({
          ...altButtonSettings,
          ...greenTheme,
          borderColor: "rgba(42, 31, 73, 1)",
          backgroundColor: "#48b74d",
          color: "rgba(42, 31, 73, 1)"
        })
        setTextColor(greenColor)
        setIconTheme(greenColorString)
        bodyChange("bodyTheme4")
        setBodyTheme("bodyTheme4")
        setCardThemeNum("t4")
        break
    }
  }, [])

  const [settingsFlag, setSettingsFlag] = useState(0)
  const settingsFlagSwitch = () => {
    setSettingsFlag(1)
  }
  const settingsFlagSwitch0 = () => {
    setSettingsFlag(0)
  }

  const [homeFlag, setHomeFlag] = useState(1)
  const homeFlagSwitch = () => {
    setHomeFlag(0)
  }
  const homeFlagSwitch1 = () => {
    setHomeFlag(1)
  }

  const [deck, setDeck] = useState([
    {
      value: 11,
      value2: 1,
      name: "Ace of Clubs",
      suit: "club",
      card: "ace"
    },
    {
      value: 2,
      name: "Two of Clubs",
      suit: "club",
      card: "two"
    },
    {
      value: 3,
      name: "Three of Clubs",
      suit: "club",
      card: "three"
    },
    {
      value: 4,
      name: "Four of Clubs",
      suit: "club",
      card: "four"
    },
    {
      value: 5,
      name: "Five of Clubs",
      suit: "club",
      card: "five"
    },
    {
      value: 6,
      name: "Six of Clubs",
      suit: "club",
      card: "six"
    },
    {
      value: 7,
      name: "Seven of Clubs",
      suit: "club",
      card: "seven"
    },
    {
      value: 8,
      name: "Eight of Clubs",
      suit: "club",
      card: "eight"
    },
    {
      value: 9,
      name: "Nine of Clubs",
      suit: "club",
      card: "nine"
    },
    {
      value: 10,
      name: "Ten of Clubs",
      suit: "club",
      card: "ten"
    },
    {
      value: 10,
      name: "Jack of Clubs",
      suit: "club",
      card: "jack"
    },
    {
      value: 10,
      name: "Queen of Clubs",
      suit: "club",
      card: "queen"
    },
    {
      value: 10,
      name: "King of Clubs",
      suit: "club",
      card: "king"
    },
    {
      value: 11,
      value2: 1,
      name: "Ace of Diamonds",
      suit: "diamond",
      card: "ace"
    },
    {
      value: 2,
      name: "Two of Diamonds",
      suit: "diamond",
      card: "two"
    },
    {
      value: 3,
      name: "Three of Diamonds",
      suit: "diamond",
      card: "three"
    },
    {
      value: 4,
      name: "Four of Diamonds",
      suit: "diamond",
      card: "four"
    },
    {
      value: 5,
      name: "Five of Diamonds",
      suit: "diamond",
      card: "five"
    },
    {
      value: 6,
      name: "Six of Diamonds",
      suit: "diamond",
      card: "six"
    },
    {
      value: 7,
      name: "Seven of Diamonds",
      suit: "diamond",
      card: "seven"
    },
    {
      value: 8,
      name: "Eight of Diamonds",
      suit: "diamond",
      card: "eight"
    },
    {
      value: 9,
      name: "Nine of Diamonds",
      suit: "diamond",
      card: "nine"
    },
    {
      value: 10,
      name: "Ten of Diamonds",
      suit: "diamond",
      card: "ten"
    },
    {
      value: 10,
      name: "Jack of Diamonds",
      suit: "diamond",
      card: "jack"
    },
    {
      value: 10,
      name: "Queen of Diamonds",
      suit: "diamond",
      card: "queen"
    },
    {
      value: 10,
      name: "King of Diamonds",
      suit: "diamond",
      card: "king"
    },
    {
      value: 11,
      value2: 1,
      name: "Ace of Hearts",
      suit: "heart",
      card: "ace"
    },
    {
      value: 2,
      name: "Two of Hearts",
      suit: "heart",
      card: "two"
    },
    {
      value: 3,
      name: "Three of Hearts",
      suit: "heart",
      card: "three"
    },
    {
      value: 4,
      name: "Four of Hearts",
      suit: "heart",
      card: "four"
    },
    {
      value: 5,
      name: "Five of Hearts",
      suit: "heart",
      card: "five"
    },
    {
      value: 6,
      name: "Six of Hearts",
      suit: "heart",
      card: "six"
    },
    {
      value: 7,
      name: "Seven of Hearts",
      suit: "heart",
      card: "seven"
    },
    {
      value: 8,
      name: "Eight of Hearts",
      suit: "heart",
      card: "eight"
    },
    {
      value: 9,
      name: "Nine of Hearts",
      suit: "heart",
      card: "nine"
    },
    {
      value: 10,
      name: "Ten of Hearts",
      suit: "heart",
      card: "ten"
    },
    {
      value: 10,
      name: "Jack of Hearts",
      suit: "heart",
      card: "jack"
    },
    {
      value: 10,
      name: "Queen of Hearts",
      suit: "heart",
      card: "queen"
    },
    {
      value: 10,
      name: "King of Hearts",
      suit: "heart",
      card: "king"
    },
    {
      value: 11,
      value2: 1,
      name: "Ace of Spades",
      suit: "spade",
      card: "ace"
    },
    {
      value: 2,
      name: "Two of Spades",
      suit: "spade",
      card: "two"
    },
    {
      value: 3,
      name: "Three of Spades",
      suit: "spade",
      card: "three"
    },
    {
      value: 4,
      name: "Four of Spades",
      suit: "spade",
      card: "four"
    },
    {
      value: 5,
      name: "Five of Spades",
      suit: "spade",
      card: "five"
    },
    {
      value: 6,
      name: "Six of Spades",
      suit: "spade",
      card: "six"
    },
    {
      value: 7,
      name: "Seven of Spades",
      suit: "spade",
      card: "seven"
    },
    {
      value: 8,
      name: "Eight of Spades",
      suit: "spade",
      card: "eight"
    },
    {
      value: 9,
      name: "Nine of Spades",
      suit: "spade",
      card: "nine"
    },
    {
      value: 10,
      name: "Ten of Spades",
      suit: "spade",
      card: "ten"
    },
    {
      value: 10,
      name: "Jack of Spades",
      suit: "spade",
      card: "jack"
    },
    {
      value: 10,
      name: "Queen of Spades",
      suit: "spade",
      card: "queen"
    },
    {
      value: 10,
      name: "King of Spades",
      suit: "spade",
      card: "king"
    }
  ])
  const deckUpdate = value => {
    setDeck(value)
  }
  // const deckUpdate = value => { This is for iterating state not replacing it
  //   setDeck(deck => [...deck, value])
  // }

  // How many decks are being used.
  const [deckCount, setDeckCount] = useState(1)

  // If there is a state we want children to modify we use this structure of function and pass it down.
  const theDeckCountValue = count => {
    // This is a function that is being passed to the child of start screen so that deckCount in the parent can be modified from there.
    setDeckCount(count)
  }

  useEffect(() => {
    // If deck is ever manually updated update the deck
    if (deckCount !== 1) {
      let localDeck = deck
      deck.length = 52
      for (let i = 1; i < deckCount; i++) {
        deck.push(...localDeck.slice(0, 52))
      }
    }
    console.log(deck)
  }, [deckCount])

  const [cutPosition, setCutPosition] = useState("none")
  const shoeCount = amount => {
    setCutPosition(amount)
  }

  const [discardPile, setDiscardPile] = useState([]) // discardPile is not iterable // Objects are outside the array
  const discardPileUpdate = value => {
    discardPile.push(value)
  }
  const realDiscardPileUpdate = value => {
    setDiscardPile(discardPile => [...discardPile, value])
  }

  const [oldDiscardPile, setOldDiscardPile] = useState(discardPile)
  const oldDiscardPileUpdate = value => {
    setOldDiscardPile(value)
  }

  // Used to determine if the startScreen should load.
  const [startFlag, setStartFlag] = useState(1)
  const startFlagSwitch = () => {
    setStartFlag(0)
  }
  const [roundStartFlag, setRoundStartFlag] = useState(1)
  const roundStartFlagSwitch = () => {
    setRoundStartFlag(0)
  }
  const roundStartFlagReset = () => {
    setRoundStartFlag(1)
    setEndTurnFlag(1)
    tableStartZero()
  }

  //   // How many hands have been delt.
  //   const [handCount, setHandCount] = useState(0)

  const [yourCards, setYourCards] = useState([])
  const yourCardsValue = value => {
    setYourCards(value)
  }

  // To be used when splitting cards
  const [yourCards2, setYourCards2] = useState([])
  const yourCardsValue2 = value => {
    setYourCards2(value)
  }

  const [dealerCards, setDealerCards] = useState([])

  const dealerDeal = () => {
    let thisDeck = deck
    let cardIndex = Math.floor(Math.random() * thisDeck.length)
    let card = thisDeck[cardIndex]
    thisDeck.splice(cardIndex, 1)
    discardPile.push(card)
    let cardIndex2 = Math.floor(Math.random() * thisDeck.length)
    let card2 = thisDeck[cardIndex2]
    thisDeck.splice(cardIndex2, 1)
    discardPile.push(card2)
    setDeck(thisDeck)
    setDealerCards([card, card2])
  }

  // The number of additional players
  const [otherPlayers, setOtherPlayers] = useState(0)

  const otherPlayersValue = value => {
    setOtherPlayers(value)
  }

  // For here use a function to generate a new state for each otherPlayer
  const [otherPlayerHands, setOtherPlayerHands] = useState([])

  const playerDeal = () => {
    let thisDeck = deck
    let cardIndex = Math.floor(Math.random() * thisDeck.length)
    let card = thisDeck[cardIndex]
    thisDeck.splice(cardIndex, 1)
    discardPile.push(card)
    let cardIndex2 = Math.floor(Math.random() * thisDeck.length)
    let card2 = thisDeck[cardIndex2]
    thisDeck.splice(cardIndex2, 1)
    discardPile.push(card2) // We use two ways of doing this need to see if there is a difference; there isn't
    setDeck(thisDeck)
    setYourCards([card, card2])
    // An issue for seeing the results I had was that after setYourCards was finished viewing yourCards through the console wasn't correctly updated until the next update.
  }

  const [playerBet, setPlayerBet] = useState(5)
  const playerBetUpdate = value => {
    setPlayerBet(value)
  }

  function playerBetModify(action, value) {
    if (action === "add") {
      setPlayerBet(prevBet => prevBet + value)
    } else if (action === "subtract") {
      setPlayerBet(prevBet => prevBet - value)
    }
  }

  const [maxBet, setMaxBet] = useState(100)

  const [minBet, setMinBet] = useState(5)

  function betRange(range, value) {
    if (range === "max") {
      setMaxBet(value)
    } else if (range === "min") {
      setMinBet(value)
    }
  }

  const playerHit = () => {
    // deck + discard became NaN

    // I think I can make this work if I make the have the ablility to run multiple times in a cycle
    console.log(yourCards)
    let thisDeck = deck
    let cardIndex = Math.floor(Math.random() * thisDeck.length)
    let card = thisDeck[cardIndex]
    thisDeck.splice(cardIndex, 1)
    setDiscardPile(discardPile => [...discardPile, card])
    setDeck(thisDeck)
    yourCards.push(card)
    setYourCards([...yourCards])
    console.log(yourCards)
  }

  const [doubleCard, setDoubleCard] = useState(["hello"])

  const playerHitAlt = () => {
    let thisDeck = deck
    let cardIndex = Math.floor(Math.random() * thisDeck.length)
    let card = thisDeck[cardIndex]
    thisDeck.splice(cardIndex, 1)
    setDiscardPile(discardPile => [...discardPile, card])
    setDeck(thisDeck)
    setYourCards(yourCards => [...yourCards, card])

    // doubleCard.push(card)
    setDoubleCard(card)
  }

  const playerHit2 = () => {
    let thisDeck = deck
    let cardIndex = Math.floor(Math.random() * thisDeck.length)
    let card = thisDeck[cardIndex]
    thisDeck.splice(cardIndex, 1)
    setDiscardPile(discardPile => [...discardPile, card]) // We use two ways of doing this need to see if there is a difference
    setDeck(thisDeck)
    yourCards2.push(card)
    // Now update hand
    setYourCards2(yourCards2 => [...yourCards2])
  }

  // Flag to indicate if standing should end the turn
  const [splitFlag, setSplitFlag] = useState(1)
  // const splitFlagSwitch = () => {
  //   setSplitFlag(0)
  // }

  const [endTurnFlag, setEndTurnFlag] = useState(1)
  const endTurnFlagSwitch = () => {
    setEndTurnFlag(0)
  }

  const [yourMoney, setYourMoney] = useState(100)

  const yourMoneyValue = value => {
    setYourMoney(value)
  }

  const [result, setResult] = useState([])

  const [pastResults, setPastResults] = useState([])

  const [tableStart, setTableStart] = useState(1)
  const tableStartZero = () => {
    setTableStart(x => x + 1)
  }
  const tableStartOne = () => {
    setTableStart(1)
  }

  // Need to figure out why I can't go forward to roundStart when I can go back

  window.onpopstate = () => {
    // console.log(window.history.state)
    if (discardPile.length) {
    } else {
      switch (window.history.state) {
        case "Home":
          setHomeFlag(1)
          setSettingsFlag(0)
          setStartFlag(1)
          break
        case "ThemeSettings":
          console.log("setting flag 1")
          setSettingsFlag(1)
          break
        case "StartScreen":
          setHomeFlag(0)
          setSettingsFlag(0)
          setStartFlag(1)
          break
      }
    }
  }

  return (
    <LoadOrder
      startFlagSwitch={startFlagSwitch}
      startFlag={startFlag}
      theDeckCountValue={theDeckCountValue}
      otherPlayersValue={otherPlayersValue}
      yourMoneyValue={yourMoneyValue}
      playerDeal={playerDeal}
      playerHit={playerHit}
      roundStartFlagSwitch={roundStartFlagSwitch}
      roundStartFlag={roundStartFlag}
      yourCards={yourCards}
      yourCards2={yourCards2}
      playerBet={playerBet}
      playerBetUpdate={playerBetUpdate}
      // splitting={splitting}
      dealerCards={dealerCards}
      dealerDeal={dealerDeal}
      splitFlag={splitFlag}
      deck={deck}
      setDeck={setDeck}
      setDealerCards={setDealerCards}
      endTurnFlagSwitch={endTurnFlagSwitch}
      endTurnFlag={endTurnFlag}
      roundStartFlagReset={roundStartFlagReset}
      yourMoney={yourMoney}
      discardPileUpdate={discardPileUpdate}
      yourCardsValue={yourCardsValue}
      yourCardsValue2={yourCardsValue2}
      setYourCards={setYourCards}
      setYourCards2={setYourCards2}
      playerHit2={playerHit2}
      setSplitFlag={setSplitFlag}
      roundStartFlag={roundStartFlag}
      shoeCount={shoeCount}
      discardPile={discardPile}
      oldDiscardPile={oldDiscardPile}
      oldDiscardPileUpdate={oldDiscardPileUpdate}
      cutPosition={cutPosition}
      // shuffleDeck={shuffleDeck}
      tableStart={tableStart}
      tableStartZero={tableStartZero}
      tableStartOne={tableStartOne}
      setDiscardPile={setDiscardPile}
      realDiscardPileUpdate={realDiscardPileUpdate}
      playerHitAlt={playerHitAlt}
      deckUpdate={deckUpdate}
      doubleCard={doubleCard}
      homeFlag={homeFlag}
      homeFlagSwitch={homeFlagSwitch}
      homeFlagSwitch1={homeFlagSwitch1}
      buttonTheme={buttonTheme}
      iconTheme={iconTheme}
      textColor={textColor}
      settingsFlag={settingsFlag}
      settingsFlagSwitch={settingsFlagSwitch}
      settingsFlagSwitch0={settingsFlagSwitch0}
      t1ThemeChange={t1ThemeChange}
      t2ThemeChange={t2ThemeChange}
      t3ThemeChange={t3ThemeChange}
      t4ThemeChange={t4ThemeChange}
      displayCard={displayCard}
      altButtonTheme={altButtonTheme}
      altButtonThemeActive={altButtonThemeActive}
      playerBetModify={playerBetModify}
      betRange={betRange}
      maxBet={maxBet}
      minBet={minBet}
      cardThemeNum={cardThemeNum}
    ></LoadOrder>
  )
}

export default App
