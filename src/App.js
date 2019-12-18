import React, { useState, useEffect } from "react"
import "./App.css"

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
  playerBet,
  playerBetUpdate,
  splitting,
  yourCards2,
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
  setYourCards,
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
  setDiscardPile
}) {
  //switch goes to 0
  //roundStartFlagReset goes to 1 and sets end player turn to 1
  if (startFlag) {
    return (
      <StartScreen
        theDeckCountValue={theDeckCountValue}
        otherPlayersValue={otherPlayersValue}
        yourMoneyValue={yourMoneyValue}
        startFlagSwitch={startFlagSwitch}
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
      ></RoundStart>
    )
  } else if (dealerCards[0].value + dealerCards[1].value === 21) {
    // .value is undefined on continue press// Didn't deal to dealer// Ran out of cards
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
      ></DealerBlackJack>
    )
  } else if (tableStart) {
    return (
      <TableOptions
        playerHit={playerHit}
        yourCards={yourCards}
        splitting={splitting}
        yourCards2={yourCards2}
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
        setYourCards={setYourCards}
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
      ></TableOptions>
    )
  }
}

function StartScreen({
  theDeckCountValue,
  otherPlayersValue,
  yourMoneyValue,
  startFlagSwitch
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

  return (
    <div>
      <form onSubmit={handleDeckCount}>
        How many decks do you want to use?{" "}
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
        How much money do you want to start with?{" "}
        <input
          type="number"
          value={YourMoneyLocal}
          min="1"
          max="1000000"
          onChange={e => setYourMoneyLocal(e.target.value)}
        />
      </form>
      <button onClick={startFlagSwitch}>Continue</button>
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
  splitting,
  yourCards2,
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
  setYourCards,
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
  setDiscardPile
}) {
  const [localDealerCards, setLocalDealerCards] = useState(dealerCards)

  const [roundResult, setRoundResult] = useState("")

  const [handResult1, setHandResult1] = useState("")

  const [handResult2, setHandResult2] = useState("")

  const [bust, setBust] = useState(0)

  const [bust2, setBust2] = useState(0)

  const [playerBet2, setPlayerBet2] = useState(playerBet)

  const [handOneEnd, setHandOneEnd] = useState(1)

  const [swappedCards1, setSwappedCards1] = useState(yourCards)

  const [swappedCards2, setSwappedCards2] = useState()

  const [handOneWin, setHandOneWin] = useState(0)

  const [handTwoWin, setHandTwoWin] = useState(0)

  const [totalWithAce, setTotalWithAce] = useState()

  const [cardTotal, setCardTotal] = useState(
    yourCards.map(x => x.value).reduce((x, y) => x + y)
  )

  const [cardTotal2, setCardTotal2] = useState()

  const [dealerCardTotal, setDealerCardTotal] = useState(
    localDealerCards.map(x => x.value).reduce((x, y) => x + y)
  )

  const [endPlayerTurn, setEndPlayerTurn] = useState(0)
  //////////////////////////////////////////////////////
  // ISSUE: When busting after drawing a card then doubling down while the dealer does not bust the cards they drew does not show up, but should.
  // Double Down causes the bug, don't know for split

  useEffect(() => {
    console.log(discardPile)
    console.log("deck + discard: " + (deck.length + discardPile.length))
    console.log("deck length: " + deck.length)
  }, [deck, discardPile])

  if (cutPosition === "none") {
    // If the position is not set then set it to a random point between 70% and 85% of the total deck
    shoeCount(
      Math.floor(
        (Math.floor(Math.random() * (85 - 70 + 1) + 70) / 100) * deck.length
      )
    )
  }

  // useEffect(() => {
  //   remainingCards -= 4
  // }, [])

  // // So far it works except for when the dealer draws

  // // I need to modify a parent state of "remainingCards" in order for it to be preserved through cycles of TableOptions
  // useEffect(() => {
  //   let discardPileDifference = discardPile.filter(
  //     x => !oldDiscardPile.includes(x)
  //   )
  //   console.log(remainingCards - discardPileDifference.length)
  //   shoeCount(remainingCards - discardPileDifference.length)
  //   oldDiscardPileUpdate(discardPile)
  // })

  // I think for this to work it will need to modify the parent state rather than it's own
  // const [singleDeckCycles, setSingleDeckCycles] = useState(0)
  // setSingleDeckCycles(x => x + 1)

  const splitRoundReset = () => {
    setSplitFlag(1)
    roundStartFlagReset()
  }

  // PlayerHit executes giving stand stale state
  const doubleDown = () => {
    // hit one time, double the bet, then end player turn.
    playerBetUpdate(playerBet * 2)
    yourMoneyValue(yourMoney - playerBet)
    doubleDownHit()
    //Turn end function
    stand()
  }

  // Money is being added even if busting

  // From set's perspective state is not
  const doubleDownHit = () => {
    let thisDeck = deck
    let cardIndex = Math.floor(Math.random() * thisDeck.length)
    let card = thisDeck[cardIndex]
    thisDeck.splice(cardIndex, 1)
    discardPileUpdate(card)
    setDeck(thisDeck)
    yourCards.push(card)
    // setYourCards([...yourCards, card])

    // This is necessary because the useEffect was not performing when the double happened because it evaluates after the render when
    // we need to make calculations before the end of the cycle
    // Spaghetti code
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

  const doubleDown2 = () => {
    // hit one time, double the bet, then end player turn.
    setPlayerBet2(playerBet2 * 2)
    yourMoneyValue(yourMoney - playerBet2)
    doubleDownHit2()
    //Turn end function
    stand()
  }

  const doubleDownHit2 = () => {
    let thisDeck = deck
    let cardIndex = Math.floor(Math.random() * thisDeck.length)
    let card = thisDeck[cardIndex]
    thisDeck.splice(cardIndex, 1)
    discardPileUpdate(card)
    setDeck(thisDeck)
    yourCards2.push(card)
    // setYourCards([...yourCards, card])

    // This is necessary because the useEffect was not performing when the double happened because it evaluates after the render when
    // we need to make calculations before the end of the cycle
    // Spaghetti code

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

  const dealerHit = () => {
    console.log("Dealer Hitting")
    if (localDealerCards.map(x => x.value).reduce((x, y) => x + y) < 17) {
      let thisDeck = deck
      let cardIndex = Math.floor(Math.random() * thisDeck.length)
      let card = thisDeck[cardIndex]
      thisDeck.splice(cardIndex, 1)
      discardPileUpdate(card)
      if (
        localDealerCards.map(x => x.value).reduce((x, y) => x + y) +
          card.value <
        17
      ) {
        let cardIndex2 = Math.floor(Math.random() * thisDeck.length)
        let card2 = thisDeck[cardIndex2]
        thisDeck.splice(cardIndex2, 1)
        discardPileUpdate(card2)
        if (
          localDealerCards.map(x => x.value).reduce((x, y) => x + y) +
            card.value +
            card2.value <
          17
        ) {
          let cardIndex3 = Math.floor(Math.random() * thisDeck.length)
          let card3 = thisDeck[cardIndex3]
          thisDeck.splice(cardIndex3, 1)
          discardPileUpdate(card3)
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
            discardPileUpdate(card4)
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
              discardPileUpdate(card5)
              setDeck(thisDeck)
              // setDealerCards([
              //   ...localDealerCards,
              //   card,
              //   card2,
              //   card3,
              //   card4,
              //   card5
              // ])
              // setLocalDealerCards([
              //   ...localDealerCards,
              //   card,
              //   card2,
              //   card3,
              //   card4,
              //   card5
              // ])
              localDealerCards.push(card)
              localDealerCards.push(card2)
              localDealerCards.push(card3)
              localDealerCards.push(card4)
              localDealerCards.push(card5)
              return
            }
            setDeck(thisDeck)
            // setDealerCards([...localDealerCards, card, card2, card3, card4])
            // setLocalDealerCards([
            //   ...localDealerCards,
            //   card,
            //   card2,
            //   card3,
            //   card4
            // ])
            localDealerCards.push(card)
            localDealerCards.push(card2)
            localDealerCards.push(card3)
            localDealerCards.push(card4)
            return
          }
          setDeck(thisDeck)
          // setDealerCards([...localDealerCards, card, card2, card3])
          // setLocalDealerCards([...localDealerCards, card, card2, card3])
          localDealerCards.push(card)
          localDealerCards.push(card2)
          localDealerCards.push(card3)
          return
        }
        setDeck(thisDeck)
        // setDealerCards([...localDealerCards, card, card2])
        // setLocalDealerCards([...localDealerCards, card, card2])
        localDealerCards.push(card)
        localDealerCards.push(card2)
        return
      }
      setDeck(thisDeck)
      // setDealerCards([...localDealerCards, card])
      // setLocalDealerCards([...localDealerCards, card])
      localDealerCards.push(card)
    }
  }

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
          discardPileUpdate(card) // This is a .push so no issue to loop
          console.log("Looped") // Checks to see how many times it loops
          console.log("Dealer Cards:")
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

  // PROBLEMS WITH PUSHING AUTOMATICALLY
  // TEST DOUBLE DOWN ON PUSH

  useEffect(() => {
    if (endPlayerTurn === 1) {
      console.log("cardTotal:", cardTotal)
      console.log("dealerCardTotal:", dealerCardTotal)
      if (cardTotal > 21) {
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

  const handSwitch = () => {
    // Start playing other hand
    setHandOneEnd(0)
  }

  // If splitting the game should continue its normal flow then after stand switch your cards2 into your cards and play it out
  const stand = () => {
    if (splitFlag) {
      // If split is not triggered
      dealerHit()
      dealerCardTotalEvaluation()
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
        setEndPlayerTurn(1)
        // roundEvaluation()
        // endTurnFlagSwitch()
      }
      handSwitch() // Switches to second hand
    }
  }

  useEffect(() => {
    // Sets an initial value for yourCards2 if the hand is split
    if (splitFlag === 0) {
      setCardTotal2(yourCards2.map(x => x.value).reduce((x, y) => x + y))
    }
  }, [splitFlag])

  // sets yourCards to totalCards
  useEffect(() => {
    if (yourCards[0].value + yourCards[1].value === 21) {
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

  useEffect(() => {
    if (handOneEnd === 0) {
      if (yourCards2[0].value + yourCards2[1].value === 21) {
        // Blackjack check
        stand()
      } else {
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
          } else if (
            yourCards2.map(x => x.value).reduce((x, y) => x + y) <= 21
          ) {
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
    }
  }, [yourCards2])

  useEffect(() => {
    // Resolves for updating yourMoney state twice in the same cycle if both hands on split win
    if (handOneWin && handTwoWin) {
      yourMoneyValue(yourMoney + playerBet + playerBet2)
    }
  }, [handTwoWin])

  useEffect(() => {
    // Checks for busting on second hand and ends turn
    if (splitFlag === 0) {
      if (bust2) {
        setHandResult2("Bust")
        stand()
      }
    }
  }, [cardTotal2])

  useEffect(() => {
    // Checks for busting on first hand and switches to second
    if (splitFlag === 0) {
      if (bust) {
        setHandResult1("Bust")
        // Initiate switch to 2nd hand
        handSwitch()
      }
    }
  }, [cardTotal])

  const [splitElement, setSplitElement] = useState()

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

  useEffect(() => {
    if (playerBet <= yourMoney) {
      setDoubleDownElement(
        <div>
          <button onClick={doubleDown}>Double Down</button>
          <br></br>
        </div>
      )
    }
  }, [])

  const [doubleDownElement2, setDoubleDownElement2] = useState()

  useEffect(() => {
    if (playerBet2 <= yourMoney) {
      setDoubleDownElement2(
        <div>
          <button onClick={doubleDown2}>Double Down</button>
          <br></br>
        </div>
      )
    }
  }, [])

  // A potential way of solving this would be removing the phantom cards from playerHand and localDealerCards and running the draws again so that the cards you draw go into the discard pile
  // Another simpler way is simply taking the cards in your cards and the dealer cards, putting them in the discard pile and splicing them out of the draw deck
  useEffect(() => {
    if (cutPosition - discardPile.length <= 0) {
      if (roundStartFlag === 0) {
        // wait until the round is over to do the next steps
        // discardPile.push(...yourCards, ...localDealerCards)
        let placeHolderDeck = [...deck, ...discardPile]
        let localDiscardPile = discardPile
        console.log("Deck Shuffling")
        shuffleDeck()
        shoeCount(
          Math.floor(
            (Math.floor(Math.random() * (85 - 70 + 1) + 70) / 100) *
              (deck.length + discardPile.length)
          )
        )

        console.log(yourCards)
        console.log(localDealerCards)
        discardPile.length = 0
        discardPile.push(...yourCards, ...localDealerCards)
        // setDiscardPile([...yourCards, ...localDealerCards])
        console.log(discardPile)

        // discardPileUpdate(yourCards)
        // discardPileUpdate(localDealerCards)
        // The DiscardPile it is reading from is old
        // The deck it is filtering with is old
        setDeck(placeHolderDeck.filter(x => !localDiscardPile.includes(x))) // This should show what cards are the same between them abd remove them
        // Something involving this piece of code is bugging
        // Double Down causes the bug, don't know for split
      }
    }
  }, [roundStartFlag]) // To shuffle when the turn ends
  //roundStartFlagSwitch gets triggered on bet and deal. roundStartFlag being zero causes the table options screen to occur

  // useEffect(() => {
  //   console.log(yourCards)
  //   console.log(localDealerCards)
  //   console.log(discardPile)
  // })

  if (splitFlag === 0) {
    // Split flag triggered
    if (handOneEnd) {
      // First hand
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
    } else if (endTurnFlag) {
      // Second hand
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
      Remaining Cards: {cutPosition - discardPile.length}
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

  // How many decks are being used.
  const [deckCount, setDeckCount] = useState(1)

  // If there is a state we want children to modify we use this structure of function and pass it down.
  const theDeckCountValue = count => {
    // This is a function that is being passed to the child of start screen so that deckCount in the parent can be modified from there.
    setDeckCount(count)
  }

  useEffect(() => {
    // If deck is ever manually updated update the deck
    if (deckCount != 1) {
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

  // function deckShufflePosition() {
  //   // The remaining cards not used should be about 0.7 to 0.85
  //   if (deck != 52) {
  //     // This will determine how many cards are remaining in the shoe between 70% and 85% of the total deck
  //     let cutPoint = Math.floor(
  //       (Math.floor(Math.random() * (85 - 70 + 1) + 70) / 100) * deck.length
  //     )
  //     console.log(cutPoint)
  //     shoeCount(cutPoint)
  //   } else {
  //     // Set method for single decks to use hands not cards remaining
  //   }
  // }

  const [discardPile, setDiscardPile] = useState([]) // discardPile is not iterable // Objects are outside the array
  const discardPileUpdate = value => {
    discardPile.push(value)
  }

  const shuffleDeck = () => {
    // Shuffle percentage 1 player to 5 hands for 1 deck,
    let deckNew = [...deck, ...discardPile]
    setDeck(deckNew)
  }

  // if (discardPile.length >= cutPosition) {
  //   shuffleDeck()
  //   deckShufflePosition()
  // }

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
    let thisDeck = deck
    let cardIndex = Math.floor(Math.random() * thisDeck.length)
    let card = thisDeck[cardIndex]
    thisDeck.splice(cardIndex, 1)
    setDiscardPile([...discardPile, card]) // We use two ways of doing this need to see if there is a difference
    setDeck(thisDeck)
    // Now update hand
    // This needs to be sent to table options faster
    setYourCards([...yourCards, card])
  }

  const playerHit2 = () => {
    let thisDeck = deck
    let cardIndex = Math.floor(Math.random() * thisDeck.length)
    let card = thisDeck[cardIndex]
    thisDeck.splice(cardIndex, 1)
    setDiscardPile([...discardPile, card]) // We use two ways of doing this need to see if there is a difference
    setDeck(thisDeck)
    // Now update hand
    setYourCards2([...yourCards2, card])
  }

  const splitting = () => {
    // splitting should only be available on the deal no other times
    // Need to add functions of splitting that occur before standing

    // So all the state it receives stays the same through the entire operation

    setYourMoney(yourMoney - playerBet)

    let splitCard1 = yourCards.slice(0, 1)
    let splitCard2 = yourCards.slice(1, 2)

    let thisDeck = deck

    let cardIndex = Math.floor(Math.random() * thisDeck.length)
    let card = thisDeck[cardIndex]
    thisDeck.splice(cardIndex, 1)

    let cardIndex2 = Math.floor(Math.random() * thisDeck.length)
    let card2 = thisDeck[cardIndex2]
    thisDeck.splice(cardIndex2, 1)

    setDiscardPile([...discardPile, card, card2])
    setDeck(thisDeck)

    setYourCards([...splitCard1, card]) // The reason it needs to be spread out is that the split is an object
    setYourCards2([...splitCard2, card2])

    splitFlagSwitch()
  }

  // Flag to indicate if standing should end the turn
  const [splitFlag, setSplitFlag] = useState(1)
  const splitFlagSwitch = () => {
    setSplitFlag(0)
  }

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
      playerBet={playerBet}
      playerBetUpdate={playerBetUpdate}
      splitting={splitting}
      yourCards2={yourCards2}
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
      setYourCards={setYourCards}
      playerHit2={playerHit2}
      setSplitFlag={setSplitFlag}
      roundStartFlag={roundStartFlag}
      shoeCount={shoeCount}
      discardPile={discardPile}
      oldDiscardPile={oldDiscardPile}
      oldDiscardPileUpdate={oldDiscardPileUpdate}
      cutPosition={cutPosition}
      shuffleDeck={shuffleDeck}
      tableStart={tableStart}
      tableStartZero={tableStartZero}
      tableStartOne={tableStartOne}
      setDiscardPile={setDiscardPile}
    ></LoadOrder>
  )
}

export default App
