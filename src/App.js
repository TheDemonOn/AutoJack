import React, { useState, useEffect, Component } from "react"
import "./App.css"
import Button from "./MinorComponents/Button.js"
import GithubSVG from "./MinorComponents/GithubSVG.js"
import ThemesIcon from "./MinorComponents/ThemesIcon.js"
import image2 from "./Images/2.png"
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
  displayCard
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
      ></RoundStart>
    )
  } else if (dealerCards[0].value + dealerCards[1].value === 21) {
    return (
      <DealerBlackJack
        roundStartFlagReset={roundStartFlagReset}
        yourMoney={yourMoney}
        yourMoneyValue={yourMoneyValue}
        playerBet={playerBet}
        cutPosition={cutPosition}
        discardPile={discardPile}
        yourCards={yourCards}
        dealerCards={dealerCards}
        buttonTheme={buttonTheme}
        iconTheme={iconTheme}
        textColor={textColor}
      ></DealerBlackJack>
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
  return (
    <div>
      <header>
        <h1 style={textColor}>Autojack</h1>
      </header>
      {/* Have this be different texts on reload. */}
      {/* It plays itself so you don't have to. */}
      <h2 style={textColor}>The Blackjack that plays itself.</h2>
      <div className="buttonWrapper">
        <div>
          <Button
            buttonTheme={buttonTheme}
            content={"Manual"}
            func={homeFlagSwitch}
          ></Button>
        </div>
        <div>
          <Button buttonTheme={buttonTheme} content={"Automated"}></Button>
        </div>
      </div>
      {/* This h3 should be seen on the hover of the buttons between the two texts. Do it for the theme and the github buttons */}
      <h3 style={textColor}>Play the game yourself.</h3>
      <a id="one" href="https://github.com/TheDemonOn/AutoJack" target="_blank">
        <GithubSVG iconTheme={iconTheme}></GithubSVG>
      </a>
      <a id="two" href="#" onClick={settingsFlagSwitch}>
        <ThemesIcon iconTheme={iconTheme}></ThemesIcon>
      </a>
      {/* <h3>/</h3>
      <h3>Let the machine do it for you</h3> */}
      {/* Github button image and setting button here */}
    </div>
  )
}

function ThemeSettings({
  buttonTheme,
  t1ThemeChange,
  t2ThemeChange,
  t3ThemeChange,
  t4ThemeChange,
  displayCard,
  settingsFlagSwitch0
}) {
  return (
    <div>
      <a>
        <img
          className="placeHolderCard"
          src={process.env.PUBLIC_URL + displayCard}
          height="379.2px"
          width="259.2px"
          alt="Ace of spades card."
        ></img>
      </a>
      <div>
        <div className="themeSelector">
          <a href="#" onClick={t1ThemeChange}>
            <img
              src={Button_Theme1}
              height="150px"
              width="150px"
              alt="Blue and gold theme."
            ></img>
          </a>

          <a href="#" onClick={t2ThemeChange}>
            <img
              src={Button_Theme2}
              height="150px"
              width="150px"
              alt="Purple theme."
            ></img>
          </a>

          <a href="#" onClick={t3ThemeChange}>
            <img
              src={Button_Theme3}
              height="150px"
              width="150px"
              alt="White and red theme."
            ></img>
          </a>

          <a href="#" onClick={t4ThemeChange}>
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
  homeFlagSwitch1
}) {
  const [deckCountValue, setDeckCountValue] = useState("")

  const [YourMoneyLocal, setYourMoneyLocal] = useState("")

  const handleDeckCount = e => {
    e.preventDefault()
    if (!deckCountValue) return
    console.log(deckCountValue)
    theDeckCountValue(deckCountValue)
    setDeckCountValue("")
  }

  const handleYourMoney = e => {
    e.preventDefault()
    if (!YourMoneyLocal) return
    console.log(YourMoneyLocal)
    yourMoneyValue(YourMoneyLocal)
    setYourMoneyLocal("")
  }

  const [tableIconSize, setTableIconSize] = useState("130px")

  const [parameterSection, setParameterSection] = useState()

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
  }

  const highEnd = () => {
    setParameterSection(
      <div className="parameterBox">
        <h4 style={textColor}>Table Rules</h4>
        <div className="parametersH5">
          <h5 style={textColor}>Decks Used: 4</h5>
          <h5 style={textColor}>Min Bet: 100</h5>
          <h5 style={textColor}>Max Bet: 10000</h5>
        </div>
        <h5 style={textColor}>Starting Money: 10000</h5>
      </div>
    )
  }

  const custom = () => {
    setParameterSection(
      <div className="parameterBox">
        <h4 style={textColor}>Table Rules</h4>
        <div className="parametersH5">
          <h5 style={textColor}>Decks Used: </h5>
          <input type="number" min="1" max="100"></input>
          <h5 style={textColor}>Min Bet: </h5>
          <input type="number" min="1"></input>
          <h5 style={textColor}>Max Bet: </h5>
          <input type="number" min="1"></input>
        </div>
        <h5 style={textColor}>Starting Money: </h5>
        <input type="number" min="1"></input>
      </div>
    )
  }

  return (
    <div>
      {/* <form onSubmit={handleDeckCount}>
        <h3 style={textColor}>How many decks do you want to use?</h3>
        <input
          type="number"
          value={deckCountValue}
          min="1"
          max="100"
          onChange={e => setDeckCountValue(e.target.value)}
        />{" "}
        <br></br>
      </form>
      <form onSubmit={handleYourMoney}>
        <h3 style={textColor}>How much money do you want to start with?</h3>
        <input
          type="number"
          value={YourMoneyLocal}
          min="1"
          max="10000"
          onChange={e => setYourMoneyLocal(e.target.value)}
        />
      </form> */}
      <div className="tableBack">
        <Button
          buttonTheme={buttonTheme}
          content={"Back"}
          func={homeFlagSwitch1}
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
        <a href="#">
          <img
            src={chip1}
            height={tableIconSize}
            width={tableIconSize}
            onClick={lowEnd}
          ></img>
        </a>

        <a href="#">
          <img
            src={chip5}
            height={tableIconSize}
            width={tableIconSize}
            onClick={midEnd}
          ></img>
        </a>

        <a href="#">
          <img
            src={chip10}
            height={tableIconSize}
            width={tableIconSize}
            onClick={highEnd}
          ></img>
        </a>

        <a href="#">
          <img
            src={chip25}
            height={tableIconSize}
            width={tableIconSize}
            onClick={custom}
          ></img>
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
        id="four"
        href="https://github.com/TheDemonOn/AutoJack"
        target="_blank"
      >
        <GithubSVG iconTheme={iconTheme}></GithubSVG>
      </a>
      <a id="five" href="#" onClick={settingsFlagSwitch}>
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
  discardPile
}) {
  // So it appears that even when thr function is called from the child it still executes in the location it was defined (the parent) and had access to everything it would normally.
  const [playerBetHandle, setPlayerBetHandle] = useState("")

  const deal = e => {
    playerDeal()
    dealerDeal()
    roundStartFlagSwitch()
  }

  const betHandle = e => {
    e.preventDefault()
    if (!playerBetHandle) return
    console.log(playerBetHandle)
    playerBetUpdate(playerBetHandle)
    yourMoneyValue(yourMoney - playerBetHandle)
    deal()
  }

  const betOne = () => {
    playerBetUpdate(1)
    yourMoneyValue(yourMoney - 1)
    deal()
  }
  const betFive = () => {
    playerBetUpdate(5)
    yourMoneyValue(yourMoney - 5)
    deal()
  }
  const betTen = () => {
    playerBetUpdate(10)
    yourMoneyValue(yourMoney - 10)
    deal()
  }
  const betTwentyFive = () => {
    playerBetUpdate(25)
    yourMoneyValue(yourMoney - 25)
    deal()
  }
  const betFifty = () => {
    playerBetUpdate(50)
    yourMoneyValue(yourMoney - 50)
    deal()
  }
  const betOneHundred = () => {
    playerBetUpdate(100)
    yourMoneyValue(yourMoney - 100)
    deal()
  }
  const betFiveHundred = () => {
    playerBetUpdate(500)
    yourMoneyValue(yourMoney - 500)
    deal()
  }

  const [cardsLeft, setCardsLeft] = useState()
  const [one, setOne] = useState()
  const [five, setFive] = useState()
  const [ten, setTen] = useState()
  const [twentyFive, setTwentyFive] = useState()
  const [fifty, setFifty] = useState()
  const [oneHundred, setOneHundred] = useState()
  const [fiveHundred, setFiveHundred] = useState()

  useEffect(() => {
    if (yourMoney >= 1) {
      setOne(<button onClick={betOne}>Bet 1</button>)
    }
    if (yourMoney >= 5) {
      setFive(<button onClick={betFive}>Bet 5</button>)
    }
    if (yourMoney >= 10) {
      setTen(<button onClick={betTen}>Bet 10</button>)
    }
    if (yourMoney >= 25) {
      setTwentyFive(<button onClick={betTwentyFive}>Bet 25</button>)
    }
    if (yourMoney >= 50) {
      setFifty(<button onClick={betFifty}>Bet 50</button>)
    }
    if (yourMoney >= 100) {
      setOneHundred(<button onClick={betOneHundred}>Bet 100</button>)
    }
    if (yourMoney >= 500) {
      setFiveHundred(<button onClick={betFiveHundred}>Bet 500</button>)
    }
  }, [])

  useEffect(() => {
    if (cutPosition - discardPile.length) {
      setCardsLeft(
        <div>Remaining Cards: {cutPosition - discardPile.length}</div>
      )
    }
  }, [])

  return (
    <div>
      <div>
        <p>Money: {yourMoney}</p>
        <form onSubmit={betHandle}>
          Enter bet
          <input
            type="number"
            min="1"
            max={yourMoney}
            value={playerBetHandle}
            onChange={e => setPlayerBetHandle(e.target.value)}
          />{" "}
          <br></br>
        </form>
        {cardsLeft}
      </div>
      <div>
        {one}
        <br></br>
        {five}
        <br></br>
        {ten}
        <br></br>
        {twentyFive}
        <br></br>
        {fifty}
        <br></br>
        {oneHundred}
        <br></br>
        {fiveHundred}
      </div>
    </div>
  )
}

//  There is a bug where cards are randomly disappearing, pay attention to the discardPile plus deck total to figure out how this happens
// I was splitting don't remember if doubling, the turn the deck shuffled seems correct but suddenly the next turn
// Perhaps some code was running twice because of outdated information?

// New testing, hitting until busting does not appear to cause the bug
// Reproduced similar situation to last time by only using doubleDown, after shuffle seemed fine then next turn went down to 16
// discardPile does not seem to be the issue, leaving the deck still for scrutiny
// Double Down causes the bug, don't know for split

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
  doubleCard
}) {
  const [localDealerCards, setLocalDealerCards] = useState(dealerCards)

  const [roundResult, setRoundResult] = useState("")

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
  console.log(yourCards2.map(x => x.name))

  useEffect(() => {
    console.log("discard length: " + discardPile.length)
    console.log("deck + discard: " + (deck.length + discardPile.length))
    console.log("deck length: " + deck.length)
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

    setSplitFlag(0)
  }

  const [doubleSplit, setDoubleSplit] = useState(0)

  if (cutPosition === "none") {
    // If the position is not set then set it to a random point between 70% and 85% of the total deck
    shoeCount(
      Math.floor(
        (Math.floor(Math.random() * (85 - 70 + 1) + 70) / 100) * deck.length
      )
    )
  }

  const splitRoundReset = () => {
    setSplitFlag(1)
    roundStartFlagReset()
  }

  const handSwitch = () => {
    // Start playing other hand
    setHandOneEnd(0)
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
  const doubleDown2 = () => {
    console.log("Double Down 2222222222222222222222222222222222222222222222")
    playerBetUpdate(playerBet * 2)
    yourMoneyValue(yourMoney - playerBet)
    // Because of issues with the transfer of state we are drawing the card from within function manually
    let thisDeck = deck
    let cardIndex = Math.floor(Math.random() * thisDeck.length)
    let card = thisDeck[cardIndex]
    deck.splice(cardIndex, 1)
    setDiscardPile(discardPile => [...discardPile, card])
    // The card is being pushed here so that yourCards is accurate for the local calculations below
    // Do note that if it was just the push then the display of cards from the state would not include the drawn card
    // The state has to be set at the end for it to update in the list
    yourCards2.push(card)
    // Because drawing a card then ending the turn happens in one cycle I have to do a local calculation that checks for Aces
    // because otherwise the cardTotal is set too late for the final evaluation
    if (yourCards2.map(x => x.value).filter(x => x === 11)[0] > 0) {
      // Checking for Aces in yourCards
      let aceCards = yourCards2.filter(x => x.value2 === 1)
      if (
        // Checks for bust with Aces reduced to 1
        yourCards2.map(x => x.value).reduce((x, y) => x + y) -
          aceCards.length * 11 +
          aceCards.length >
        21
      ) {
        setCardTotal2(
          yourCards2.map(x => x.value).reduce((x, y) => x + y) -
            aceCards.length * 11 +
            aceCards.length
        )
        setBust2(1)
      } else if (yourCards2.map(x => x.value).reduce((x, y) => x + y) <= 21) {
        // Normal draw calculation with Ace being 11 if not busting
        setCardTotal2(yourCards2.map(x => x.value).reduce((x, y) => x + y))
        stand()
      } else {
        // Draw but with reduced Aces
        setCardTotal2(
          yourCards2.map(x => x.value).reduce((x, y) => x + y) -
            aceCards.length * 11 +
            aceCards.length
        )
        stand()
      }
    } else if (yourCards2.map(x => x.value).reduce((x, y) => x + y) > 21) {
      // Checks for bust with no Aces
      setCardTotal2(yourCards2.map(x => x.value).reduce((x, y) => x + y))
      setBust2(1)
    } else {
      // Normal draw calculation without Aces
      setCardTotal2(yourCards2.map(x => x.value).reduce((x, y) => x + y))
      stand()
    }
    // This actually sets the state to what it should be because otherwise the "yourCards" locally would not be the same as the global yourCards
    // yourCardsValue2(yourCards2)
    setYourCards2([...yourCards2])
  }

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

  console.log("SplitFlag position: " + splitFlag)
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

  const stand = () => {
    if (splitFlag) {
      // If split is not triggered
      dealerHit()
      dealerCardTotalEvaluation()
      // Shuffle deck
      deckShuffleFunction()
      setEndPlayerTurn(1)
      // roundEvaluation()
      // setEndPlayerTurn(1)

      // endTurnFlagSwitch() // This is what starts the results calculations
    } else {
      // Handle second hand
      // We need both hands to resolve before endTurnFlag can be switched
      if (handOneEnd === 0) {
        dealerHit()
        dealerCardTotalEvaluation()
        deckShuffleFunction()
        setEndPlayerTurn(1)
        // roundEvaluation()
        // endTurnFlagSwitch()
      }
      handSwitch() // Switches to second hand
    }
  }

  // Sets an initial value for yourCards2 if the hand is split
  useEffect(() => {
    if (splitFlag === 0) {
      if (yourCards2.map(x => x.value).filter(x => x === 11)[0] > 0) {
        // Checking for ace in yourCards
        let aceCards = yourCards2.filter(x => x.value2 === 1)
        if (
          // Checking for bust with reduced Aces
          yourCards2.map(x => x.value).reduce((x, y) => x + y) -
            aceCards.length * 11 +
            aceCards.length >
          21
        ) {
          // Checks to see if you bust with the ace being 11, if true calculate total with the ace being 1
          setCardTotal2(
            yourCards2.map(x => x.value).reduce((x, y) => x + y) -
              aceCards.length * 11 +
              aceCards.length
          )
          setBust2(1)
        } else if (yourCards2.map(x => x.value).reduce((x, y) => x + y) <= 21) {
          // Normal draw calculation with Ace being 11 if not busting
          setCardTotal2(yourCards2.map(x => x.value).reduce((x, y) => x + y))
        } else {
          // Draw but with reduced Aces
          setCardTotal2(
            yourCards2.map(x => x.value).reduce((x, y) => x + y) -
              aceCards.length * 11 +
              aceCards.length
          )
        }
      } else if (yourCards2.map(x => x.value).reduce((x, y) => x + y) > 21) {
        // Checking for Bust without Aces
        setCardTotal2(yourCards2.map(x => x.value).reduce((x, y) => x + y))
        setBust2(1)
      } else {
        // Normal draw calculation
        setCardTotal2(yourCards2.map(x => x.value).reduce((x, y) => x + y))
      }
    }
  }, [splitFlag])

  ///////////
  // Bug with calculation of cardTotal after blackjack from drawn card off of split
  // I suspect that when the cardTotal useEffect activated the blackjack check passed so it standed and the cardTotal was just the same
  // total it had before the useEffect triggered because it wasn't updated

  // Solution: have the blackjack check ensure that there is no split

  // sets yourCards to totalCards
  useEffect(() => {
    if (yourCards[0].value + yourCards[1].value === 21 && splitFlag === 1) {
      // Blackjack check
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

  // Sets card total for yourCards2
  useEffect(() => {
    if (handOneEnd === 0) {
      console.log("Your Cards 2 evaluation for total is starting")
      // if (yourCards2[0].value + yourCards2[1].value === 21) {
      //   // Blackjack check
      //   // stand() ////////////////////////////
      // } else {
      if (yourCards2.map(x => x.value).filter(x => x === 11)[0] > 0) {
        // Checking for ace in yourCards
        let aceCards = yourCards2.filter(x => x.value2 === 1)
        if (
          // Checking for bust with reduced Aces
          yourCards2.map(x => x.value).reduce((x, y) => x + y) -
            aceCards.length * 11 +
            aceCards.length >
          21
        ) {
          // Checks to see if you bust with the ace being 11, if true calculate total with the ace being 1
          setCardTotal2(
            yourCards2.map(x => x.value).reduce((x, y) => x + y) -
              aceCards.length * 11 +
              aceCards.length
          )
          setBust2(1)
        } else if (yourCards2.map(x => x.value).reduce((x, y) => x + y) <= 21) {
          // Normal draw calculation with Ace being 11 if not busting
          setCardTotal2(yourCards2.map(x => x.value).reduce((x, y) => x + y))
        } else {
          // Draw but with reduced Aces
          setCardTotal2(
            yourCards2.map(x => x.value).reduce((x, y) => x + y) -
              aceCards.length * 11 +
              aceCards.length
          )
        }
      } else if (yourCards2.map(x => x.value).reduce((x, y) => x + y) > 21) {
        // Checking for Bust without Aces
        setCardTotal2(yourCards2.map(x => x.value).reduce((x, y) => x + y))
        setBust2(1)
      } else {
        // Normal draw calculation
        setCardTotal2(yourCards2.map(x => x.value).reduce((x, y) => x + y))
      }
      // }
    }
  }, [yourCards2])

  // Creates round result
  useEffect(() => {
    if (endPlayerTurn === 1) {
      console.log("cardTotal:", cardTotal)
      console.log("cardTotal2:", cardTotal2)
      console.log("dealerCardTotal:", dealerCardTotal)
      if (cardTotal > 21 && cardTotal === 0) {
        // Checks for bust on double down
        console.log("bust")
        return
      } else {
        console.log("Calculating final round result")
        if (splitFlag) {
          // If turn has ended and it has not split
          if (dealerCardTotal === cardTotal) {
            yourMoneyValue(yourMoney + playerBet)
            setRoundResult("It's a push")
          }
          if (dealerCardTotal < cardTotal) {
            if (cardTotal > 21) {
              return
            } else if (yourCards[0].value + yourCards[1].value === 21) {
              yourMoneyValue(
                yourMoney + playerBet + Math.round(playerBet * 1.5)
              )
              setRoundResult(
                `Blackjack! You won ${playerBet + Math.round(playerBet * 1.5)}`
              )
            } else {
              yourMoneyValue(yourMoney + playerBet * 2)
              setRoundResult(`You won ${playerBet * 2}`)
            }
          } else if (dealerCardTotal > cardTotal) {
            if (dealerCardTotal < 22) {
              setRoundResult("You lost")
            } else if (yourCards[0].value + yourCards[1].value === 21) {
              yourMoneyValue(
                yourMoney + playerBet + Math.round(playerBet * 1.5)
              )
              setRoundResult(
                `Blackjack! You won ${playerBet + Math.round(playerBet * 1.5)}`
              )
            } else {
              yourMoneyValue(yourMoney + playerBet * 2)
              setRoundResult(`Dealer Bust. You win ${playerBet * 2}`)
            }
          }
        } else {
          // This will evaluate both the first and second hand sequentially at once
          // First hand
          if (dealerCardTotal < cardTotal) {
            if (cardTotal > 21) {
            } else {
              yourMoneyValue(yourMoney + playerBet * 2)
              setHandResult1(`You won ${playerBet * 2}`)
              setHandOneWin(1)
            }
          } else if (dealerCardTotal > cardTotal) {
            if (dealerCardTotal < 22) {
              setHandResult1("You lost")
            } else {
              yourMoneyValue(yourMoney + playerBet * 2)
              setHandResult1(`Dealer Bust. You win ${playerBet * 2}`)
              setHandOneWin(1)
            }
          } else {
            yourMoneyValue(yourMoney + playerBet)
            setHandResult1("It's a tie")
          }
          // Second hand
          if (dealerCardTotal < cardTotal2) {
            if (cardTotal2 > 21) {
              setHandResult2(`Bust`)
            } else {
              yourMoneyValue(yourMoney + playerBet2 * 2)
              setHandResult2(`You won ${playerBet2 * 2}`)
              setHandTwoWin(1)
            }
          } else if (dealerCardTotal > cardTotal2) {
            if (dealerCardTotal < 22) {
              setHandResult2("You lost")
            } else {
              yourMoneyValue(yourMoney + playerBet2 * 2)
              setHandResult2(`Dealer Bust. You win ${playerBet2 * 2}`)
              setHandTwoWin(1)
            }
          } else {
            yourMoneyValue(yourMoney + playerBet2)
            setHandResult2("It's a tie")
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
  useEffect(() => {
    if (splitFlag === 0) {
      if (bust2) {
        setHandResult2("Bust")
        stand()
      }
    }
  }, [cardTotal2])

  // Checks for busting on first hand and switches to second
  useEffect(() => {
    if (splitFlag === 0) {
      if (bust) {
        setHandResult1("Bust hand one")
        // Initiate switch to 2nd hand
        handSwitch()
      }
    }
  }, [cardTotal])

  const [splitElement, setSplitElement] = useState()

  // Sets split element
  useEffect(() => {
    if (
      yourCards[0].value === yourCards[1].value &&
      playerBet <= yourMoney &&
      yourCards[2] === undefined
    ) {
      setSplitElement(
        <div>
          <button onClick={splitting}>Split</button>
        </div>
      )
    }
  }, [yourCards])

  const [doubleDownElement, setDoubleDownElement] = useState()

  // Sets double down element
  useEffect(() => {
    if (playerBet <= yourMoney) {
      setDoubleDownElement(
        <div>
          <button onClick={doubleDown}>Double Down</button>
          <br></br>
        </div>
      )
    }
    // Removes the option to double on split if you have already hit
    if (splitFlag === 0 && yourCards.length > 2) {
      setDoubleDownElement()
    }
  }, [yourCards])

  const [doubleDownElement2, setDoubleDownElement2] = useState()

  // Sets double down element 2
  useEffect(() => {
    if (playerBet2 <= yourMoney) {
      setDoubleDownElement2(
        <div>
          <button onClick={doubleDown2}>Double Down</button>
          <br></br>
        </div>
      )
      // Removes the option to double on split if you have already hit
      if (splitFlag === 0 && yourCards2.length > 2) {
        setDoubleDownElement2()
      }
    }
  }, [yourCards2])

  if (splitFlag === 0) {
    // Split flag triggered
    if (handOneEnd === 1) {
      // First hand
      console.log("First Hand")
      return (
        <div>
          <button onClick={playerHit}>Hit</button>
          <br></br>
          {doubleDownElement}
          <button onClick={stand}>Stand</button>
          <br></br>
          Remaining Cards: {cutPosition - discardPile.length}
          <br></br>
          <p>Money: {yourMoney}</p>
          <p>Your Bet: {playerBet}</p>
          <p>Second Bet: {playerBet2}</p>
          <br></br>
          <p>
            Your First Hand: {yourCards.map(x => x.name).join(", ")}
            <br></br>
            Total: {cardTotal}
          </p>
          <br></br>
          <p>
            Your Second Hand: {yourCards2.map(x => x.name).join(", ")}
            <br></br>
            Total: {cardTotal2}
          </p>
          <br></br>
          <p>
            Dealer Card: {localDealerCards[0].name}
            <br></br>
            Value: {localDealerCards[0].value}
          </p>
        </div>
      )
    } else if (endTurnFlag === 1) {
      // when the final stand occurs this is no longer true and gives next screen
      // Second hand
      console.log("Second Hand")
      return (
        <div>
          <button onClick={playerHit2}>Hit</button>
          <br></br>
          {doubleDownElement2}
          <button onClick={stand}>Stand</button>
          <br></br>
          Remaining Cards: {cutPosition - discardPile.length}
          <br></br>
          <p>Money: {yourMoney}</p>
          <p>Your Bet: {playerBet}</p>
          <p>Second Bet: {playerBet2}</p>
          <br></br>
          <p>
            Your First Hand: {yourCards.map(x => x.name).join(", ")}
            <br></br>
            Total: {cardTotal}
          </p>
          <br></br>
          <p>
            Your Second Hand: {yourCards2.map(x => x.name).join(", ")}
            <br></br>
            Total: {cardTotal2}
          </p>
          <br></br>
          <p>
            Dealer Card: {localDealerCards[0].name}
            <br></br>
            Value: {localDealerCards[0].value}
          </p>
          <h1>{handResult1}</h1>
        </div>
      )
    } else {
      return (
        // Split hand full resolved
        <div>
          <button onClick={splitRoundReset}>Continue</button>
          <br></br>
          Remaining Cards: {cutPosition - discardPile.length}
          <br></br>
          <p>Money: {yourMoney}</p>
          <p>Your Bet: {playerBet}</p>
          <p>Second Bet: {playerBet2}</p>
          <br></br>
          <p>
            Your First Hand: {yourCards.map(x => x.name).join(", ")}
            <br></br>
            Total: {cardTotal}
          </p>
          <br></br>
          <p>
            Your Second Hand: {yourCards2.map(x => x.name).join(", ")}
            <br></br>
            Total: {cardTotal2}
          </p>
          <br></br>
          <p>
            Dealer Card: {localDealerCards.map(x => x.name).join(", ")}
            <br></br>
            Value: {dealerCardTotal}
          </p>
          <h1>
            Hand 1:{handResult1}
            <br></br>
            Hand 2:{handResult2}
          </h1>
        </div>
      )
    }
  } else if (bust) {
    // Bust
    // If you bust then run a check for shuffling the deck
    deckShuffleFunction()
    return (
      <div>
        <button onClick={roundStartFlagReset}>Continue</button>
        <br></br>
        Remaining Cards: {cutPosition - discardPile.length}
        <br></br>
        <p>Money: {yourMoney}</p>
        <p>Your Bet: {playerBet}</p>
        <br></br>
        <p>
          Your Cards: {yourCards.map(x => x.name).join(", ")}
          <br></br>
          Total: {cardTotal}
        </p>
        <br></br>
        <p>
          Dealer Card: {localDealerCards[0].name}
          <br></br>
          Value: {localDealerCards[0].value}
        </p>
        <h1>You bust</h1>
      </div>
    )
  } else if (endTurnFlag) {
    // Normal hand
    return (
      <div>
        <button onClick={playerHit}>Hit</button>
        <br></br>
        {doubleDownElement}
        <button onClick={stand}>Stand</button>
        {splitElement}
        <br></br>
        Remaining Cards: {cutPosition - discardPile.length}
        <br></br>
        <p>Money: {yourMoney}</p>
        <p>Your Bet: {playerBet}</p>
        <br></br>
        <p>
          Your Cards: {yourCards.map(x => x.name).join(", ")}
          <br></br>
          Total: {cardTotal}
        </p>
        <br></br>
        <p>
          Dealer Card: {localDealerCards[0].name}
          <br></br>
          Value: {localDealerCards[0].value}
        </p>
      </div>
    )
  } else {
    return (
      // Normal hand resolve
      <div>
        <button onClick={roundStartFlagReset}>Continue</button>
        <br></br>
        Remaining Cards: {cutPosition - discardPile.length}
        <br></br>
        <p>Money: {yourMoney}</p>
        <p>Your Bet: {playerBet}</p>
        <br></br>
        <p>
          Your Cards: {yourCards.map(x => x.name).join(", ")}
          <br></br>
          Total: {cardTotal}
        </p>
        <br></br>
        <p>
          Dealer Cards: {localDealerCards.map(x => x.name).join(", ")}
          <br></br>
          Value: {dealerCardTotal}
        </p>
        <h1>{roundResult}</h1>
      </div>
    )
  }
}

function DealerBlackJack({
  roundStartFlagReset,
  yourMoney,
  yourMoneyValue,
  playerBet,
  cutPosition,
  discardPile,
  yourCards,
  dealerCards
}) {
  /////////////////////////
  // Need to import a bunch of state for this later to shuffle check when the dealer draws a blackJack

  // function deckShuffleFunction() {
  //   console.log("Shuffle check")
  //   console.log(cutPosition - discardPile.length)
  //   if (cutPosition - discardPile.length <= 0) {
  //     // discardPile.push(...yourCards, ...localDealerCards)
  //     console.log("Deck length: " + deck.length)
  //     console.log("discard length: " + discardPile.length)
  //     console.log("Your Cards: " + yourCards.length)
  //     console.log("dealer card: " + localDealerCards.length)
  //     let placeHolderDeck = [...deck, ...discardPile]
  //     let localDiscardPile = discardPile
  //     console.log("Deck Shuffling")
  //     // shuffleDeck()
  //     // setDeck(...placeHolderDeck)
  //     shoeCount(
  //       Math.floor(
  //         (Math.floor(Math.random() * (85 - 70 + 1) + 70) / 100) *
  //           (deck.length + discardPile.length)
  //       )
  //     )

  //     console.log(yourCards)
  //     console.log(localDealerCards)
  //     deckUpdate(placeHolderDeck)
  //     discardPile.length = 0
  //   }
  // }
  // deckShuffleFunction()

  const [cardsLeft, setCardsLeft] = useState()

  useEffect(() => {
    if (cutPosition - discardPile.length) {
      setCardsLeft(
        <div>Remaining Cards: {cutPosition - discardPile.length}</div>
      )
    }
  }, [])

  const [pushElement, setPushElement] = useState()

  useEffect(() => {
    if (yourCards.map(x => x.value).reduce((x, y) => x + y) === 21) {
      yourMoneyValue(yourMoney + playerBet)
      setPushElement(
        <div>
          <br></br>
          <p>You also have a blackjack. It's a push.</p>
        </div>
      )
    }
  }, [])

  return (
    <div>
      <p>Money: {yourMoney}</p>
      <p>Dealer blackjack</p>
      {pushElement}
      <button onClick={roundStartFlagReset}>Continue</button>
      <br></br>
      {cardsLeft}
      <br></br>
      <p>Money: {yourMoney}</p>
      <p>Your Bet: {playerBet}</p>
      <br></br>
      <p>
        Your Cards: {yourCards.map(x => x.name).join(", ")}
        <br></br>
        Total: {yourCards.map(x => x.value).reduce((x, y) => x + y)}
      </p>
      <br></br>
      <p>
        Dealer Cards: {dealerCards.map(x => x.name).join(", ")}
        <br></br>
        Value: 21
      </p>
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
    borderColor: "#595d67",
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

  // Format: object; This should stay consistent
  const [buttonTheme, setButtonTheme] = useState({
    ...buttonSettings,
    ...purpleTheme
  })

  // Format: string
  const [iconTheme, setIconTheme] = useState(purpleColorString)

  const [displayCard, setDisplayCard] = useState(cards.t2.spade.ace.src)

  const t1ThemeChange = () => {
    setDisplayCard(cards.t1.spade.ace.src)
    setButtonTheme({
      ...buttonSettings,
      ...goldTheme
    })
    setTextColor(goldColor)
    setIconTheme(goldColorString)
    bodyChange("bodyTheme1")
    setBodyTheme("bodyTheme1")
  }

  const t2ThemeChange = () => {
    setDisplayCard(cards.t2.spade.ace.src)
    setButtonTheme({
      ...buttonSettings,
      ...purpleTheme
    })
    setTextColor(purpleColor)
    setIconTheme(purpleColorString)
    bodyChange("bodyTheme2")
    setBodyTheme("bodyTheme2")
  }

  const t3ThemeChange = () => {
    setDisplayCard(cards.t3.spade.ace.src)
    setButtonTheme({
      ...buttonSettings,
      ...redTheme
    })
    setTextColor(redColor)
    setIconTheme(redColorString)
    bodyChange("bodyTheme3")
    setBodyTheme("bodyTheme3")
  }

  const t4ThemeChange = () => {
    setDisplayCard(cards.t4.spade.ace.src)
    setButtonTheme({
      ...buttonSettings,
      ...greenTheme
    })
    setTextColor(greenColor)
    setIconTheme(greenColorString)
    bodyChange("bodyTheme4")
    setBodyTheme("bodyTheme4")
  }

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
      name: "Ace of Clubs"
    },
    {
      value: 2,
      name: "Two of Clubs"
    },
    {
      value: 3,
      name: "Three of Clubs"
    },
    {
      value: 4,
      name: "Four of Clubs"
    },
    {
      value: 5,
      name: "Five of Clubs"
    },
    {
      value: 6,
      name: "Six of Clubs"
    },
    {
      value: 7,
      name: "Seven of Clubs"
    },
    {
      value: 8,
      name: "Eight of Clubs"
    },
    {
      value: 9,
      name: "Nine of Clubs"
    },
    {
      value: 10,
      name: "Ten of Clubs"
    },
    {
      value: 10,
      name: "Jack of Clubs"
    },
    {
      value: 10,
      name: "Queen of Clubs"
    },
    {
      value: 10,
      name: "King of Clubs"
    },
    {
      value: 11,
      value2: 1,
      name: "Ace of Diamonds"
    },
    {
      value: 2,
      name: "Two of Diamonds"
    },
    {
      value: 3,
      name: "Three of Diamonds"
    },
    {
      value: 4,
      name: "Four of Diamonds"
    },
    {
      value: 5,
      name: "Five of Diamonds"
    },
    {
      value: 6,
      name: "Six of Diamonds"
    },
    {
      value: 7,
      name: "Seven of Diamonds"
    },
    {
      value: 8,
      name: "Eight of Diamonds"
    },
    {
      value: 9,
      name: "Nine of Diamonds"
    },
    {
      value: 10,
      name: "Ten of Diamonds"
    },
    {
      value: 10,
      name: "Jack of Diamonds"
    },
    {
      value: 10,
      name: "Queen of Diamonds"
    },
    {
      value: 10,
      name: "King of Diamonds"
    },
    {
      value: 11,
      value2: 1,
      name: "Ace of Hearts"
    },
    {
      value: 2,
      name: "Two of Hearts"
    },
    {
      value: 3,
      name: "Three of Hearts"
    },
    {
      value: 4,
      name: "Four of Hearts"
    },
    {
      value: 5,
      name: "Five of Hearts"
    },
    {
      value: 6,
      name: "Six of Hearts"
    },
    {
      value: 7,
      name: "Seven of Hearts"
    },
    {
      value: 8,
      name: "Eight of Hearts"
    },
    {
      value: 9,
      name: "Nine of Hearts"
    },
    {
      value: 10,
      name: "Ten of Hearts"
    },
    {
      value: 10,
      name: "Jack of Hearts"
    },
    {
      value: 10,
      name: "Queen of Hearts"
    },
    {
      value: 10,
      name: "King of Hearts"
    },
    {
      value: 11,
      value2: 1,
      name: "Ace of Spades"
    },
    {
      value: 2,
      name: "Two of Spades"
    },
    {
      value: 3,
      name: "Three of Spades"
    },
    {
      value: 4,
      name: "Four of Spades"
    },
    {
      value: 5,
      name: "Five of Spades"
    },
    {
      value: 6,
      name: "Six of Spades"
    },
    {
      value: 7,
      name: "Seven of Spades"
    },
    {
      value: 8,
      name: "Eight of Spades"
    },
    {
      value: 9,
      name: "Nine of Spades"
    },
    {
      value: 10,
      name: "Ten of Spades"
    },
    {
      value: 10,
      name: "Jack of Spades"
    },
    {
      value: 10,
      name: "Queen of Spades"
    },
    {
      value: 10,
      name: "King of Spades"
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

  const [playerBet, setPlayerBet] = useState(1)
  const playerBetUpdate = value => {
    setPlayerBet(value)
  }

  const playerHit = () => {
    // deck + discard became NaN

    // I think I can make this work if I make the have the ablility to run multiple times in a cycle
    let thisDeck = deck
    let cardIndex = Math.floor(Math.random() * thisDeck.length)
    let card = thisDeck[cardIndex]
    thisDeck.splice(cardIndex, 1)
    setDiscardPile(discardPile => [...discardPile, card])
    setDeck(thisDeck)
    yourCards.push(card)
    setYourCards(yourCards => [...yourCards])
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
    ></LoadOrder>
  )
}

export default App
