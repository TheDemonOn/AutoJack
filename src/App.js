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
  doubleDown,
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
  discardPileUpdate
}) {
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
      ></RoundStart>
    )
  } else if (dealerCards[0].value + dealerCards[1].value === 21) {
    // .value is undefined on continue press// Didn't deal to dealer// Ran out of cards
    return (
      <DealerBlackJack
        roundStartFlagReset={roundStartFlagReset}
        yourMoney={yourMoney}
      ></DealerBlackJack>
    )
  } else {
    return (
      <TableOptions
        playerHit={playerHit}
        yourCards={yourCards}
        doubleDown={doubleDown}
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

  const [OtherPlayers, setOtherPlayers] = useState("")

  const [YourMoneyLocal, setYourMoneyLocal] = useState("")

  const handleDeckCount = e => {
    e.preventDefault()
    if (!deckCountValue) return
    console.log(deckCountValue)
    theDeckCountValue(deckCountValue)
    setDeckCountValue("")
  }

  const handleOtherPlayers = e => {
    e.preventDefault()
    if (!OtherPlayers) return
    console.log(OtherPlayers)
    otherPlayersValue(OtherPlayers)
    setOtherPlayers("")
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
          type="text"
          value={deckCountValue}
          onChange={e => setDeckCountValue(e.target.value)}
        />{" "}
        <br></br>
      </form>
      <form onSubmit={handleOtherPlayers}>
        How many other players do you want?{" "}
        <input
          type="text"
          value={OtherPlayers}
          onChange={e => setOtherPlayers(e.target.value)}
        />
        <br></br>
      </form>
      <form onSubmit={handleYourMoney}>
        How much money do you want to start with?{" "}
        <input
          type="text"
          value={YourMoneyLocal}
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
  yourMoneyValue
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
  return (
    <div>
      <div>
        <p>Money: {yourMoney}</p>
        <form onSubmit={betHandle}>
          Enter bet
          <input
            type="text"
            value={playerBetHandle}
            onChange={e => setPlayerBetHandle(e.target.value)}
          />{" "}
          <br></br>
        </form>
      </div>
      <div>
        <button onClick={betOne}>Bet 1</button>
        <br></br>
        <button onClick={betFive}>Bet 5</button>
        <br></br>
        <button onClick={betTen}>Bet 10</button>
        <br></br>
        <button onClick={betTwentyFive}>Bet 25</button>
        <br></br>
        <button onClick={betFifty}>Bet 50</button>
        <br></br>
        <button onClick={betOneHundred}>Bet 100</button>
        <br></br>
        <button onClick={betFiveHundred}>Bet 500</button>
      </div>
    </div>
  )
}

function TableOptions({
  playerHit,
  yourCards,
  doubleDown,
  splitting,
  yourCards2,
  playerBet,
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
  discardPileUpdate
}) {
  const [localDealerCards, setLocalDealerCards] = useState(dealerCards)

  const [roundResult, setRoundResult] = useState("")

  const [bust, setBust] = useState(0)

  const dealerHit = () => {
    // console.log(dealerCards.map(x => x.value).reduce((x, y) => x + y))

    // console.log(localDealerCards.map(x => x.value).reduce((x, y) => x + y))
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
        discardPileUpdate(card)
        if (
          localDealerCards.map(x => x.value).reduce((x, y) => x + y) +
            card.value +
            card2.value <
          17
        ) {
          let cardIndex3 = Math.floor(Math.random() * thisDeck.length)
          let card3 = thisDeck[cardIndex3]
          thisDeck.splice(cardIndex3, 1)
          discardPileUpdate(card)
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
            discardPileUpdate(card)
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
              discardPileUpdate(card)
              setDeck(thisDeck)
              setDealerCards([
                ...localDealerCards,
                card,
                card2,
                card3,
                card4,
                card5
              ])
              setLocalDealerCards([
                ...localDealerCards,
                card,
                card2,
                card3,
                card4,
                card5
              ])
              return
            }
            setDeck(thisDeck)
            setDealerCards([...localDealerCards, card, card2, card3, card4])
            setLocalDealerCards([
              ...localDealerCards,
              card,
              card2,
              card3,
              card4
            ])
            return
          }
          setDeck(thisDeck)
          setDealerCards([...localDealerCards, card, card2, card3])
          setLocalDealerCards([...localDealerCards, card, card2, card3])
          return
        }
        setDeck(thisDeck)
        setDealerCards([...localDealerCards, card, card2])
        setLocalDealerCards([...localDealerCards, card, card2])
        return
      }
      setDeck(thisDeck)
      setDealerCards([...localDealerCards, card])
      setLocalDealerCards([...localDealerCards, card])
    }
  }

  const stand = () => {
    if (splitFlag) {
      dealerHit()
      endTurnFlagSwitch()

      // In other words dealerCards doesn't change from its perspective after dealerHit() operates.

      // To fix don't use state from the main to make determinations about the future make its own local state to perform operations.

      // It could be that the state stand has access to is freeze framed then brought into the component so when the state update occurs
      // In the real state it changed but the freeze frame is now inaccurate for use.
    }

    // setEndTurnFlag(0) // Takes you to screen with result of the play.
    else {
      // Handle second hand
    }
  }
  // useEffect(() => {
  //   // This executes all the time but doesn't show until a flag has been triggered.
  //   if (
  //     localDealerCards.map(x => x.value).reduce((x, y) => x + y) <
  //     yourCards.map(x => x.value).reduce((x, y) => x + y)
  //   ) {
  //     setRoundResult("You won")
  //   } else if (
  //     localDealerCards.map(x => x.value).reduce((x, y) => x + y) >
  //     yourCards.map(x => x.value).reduce((x, y) => x + y)
  //   ) {
  //     if (localDealerCards.map(x => x.value).reduce((x, y) => x + y) < 22) {
  //       setRoundResult("You lost")
  //     } else {
  //       setRoundResult("Dealer Bust. You win")
  //     }
  //   } else setRoundResult("It's a tie")
  // })

  useEffect(() => {
    if (endTurnFlag === 0) {
      if (
        localDealerCards.map(x => x.value).reduce((x, y) => x + y) <
        yourCards.map(x => x.value).reduce((x, y) => x + y)
      ) {
        yourMoneyValue(yourMoney + playerBet * 2)
        setRoundResult(`You won ${playerBet * 2}`)
      } else if (
        localDealerCards.map(x => x.value).reduce((x, y) => x + y) >
        yourCards.map(x => x.value).reduce((x, y) => x + y)
      ) {
        if (localDealerCards.map(x => x.value).reduce((x, y) => x + y) < 22) {
          setRoundResult("You lost")
        } else {
          yourMoneyValue(yourMoney + playerBet * 2)
          setRoundResult(`Dealer Bust. You win ${playerBet * 2}`)
        }
      } else {
        yourMoneyValue(yourMoney + playerBet)
        setRoundResult("It's a tie")
      }
    }
  }, [endTurnFlag])

  useEffect(() => {
    if (yourCards.map(x => x.value).reduce((x, y) => x + y) > 21) {
      setBust(1)
    }
  }, [yourCards])

  // }, [input])

  if (bust) {
    return (
      <div>
        <button onClick={roundStartFlagReset}>Continue</button>
        <br></br>
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
          Dealer Card: {localDealerCards[0].name}
          <br></br>
          Value: {localDealerCards[0].value}
        </p>
        <h1>You bust</h1>
      </div>
    )
  } else if (endTurnFlag) {
    return (
      <div>
        <button onClick={playerHit}>Hit</button>
        <br></br>
        <button onClick={doubleDown}>Double Down</button>
        <br></br>
        <button onClick={splitting}>Split</button>
        <br></br>
        <button onClick={stand}>Stand</button>
        <br></br>
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
          Dealer Card: {localDealerCards[0].name}
          <br></br>
          Value: {localDealerCards[0].value}
        </p>
      </div>
    )
  } else {
    return (
      <div>
        <button onClick={roundStartFlagReset}>Continue</button>
        <br></br>
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
          Dealer Cards: {localDealerCards.map(x => x.name).join(", ")}
          <br></br>
          Value: {localDealerCards.map(x => x.value).reduce((x, y) => x + y)}
        </p>
        <h1>{roundResult}</h1>
      </div>
    )
  }
}

function DealerBlackJack({ roundStartFlagReset, yourMoney }) {
  return (
    <div>
      <p>Money: {yourMoney}</p>
      <p>Dealer blackjack</p>
      <button onClick={roundStartFlagReset}>Continue</button>
    </div>
  )
}

// later create a validation so that if the entered input is not acceptable it lets them know, but also prompts a button to continue with default options.
function App() {
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
  }
  // How many decks are being used.
  const [deckCount, setDeckCount] = useState(1)

  // If there is a state we want children to modify we use this structure of function and pass it down.
  const theDeckCountValue = count => {
    // This is a function that is being passed to the child of start screen so that deckCount in the parent can be modified from there.
    setDeckCount(count)
  }

  //   // How many hands have been delt.
  //   const [handCount, setHandCount] = useState(0)

  const [yourCards, setYourCards] = useState([])

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

  if (deckCount != 1) {
    let localDeck = deck
    for (let i = 1; i < deckCount; i++) {
      deck.push(...localDeck.slice(0, 52))
    }
  }
  console.log(deck)

  // For starters only going to use 1 player then figure out how to simulate other hands.
  // Only deals once for now BTW
  const playerDeal = () => {
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
    setYourCards([card, card2])
    // An issue for seeing the results I had was that after setYourCards was finished viewing yourCards through the console wasn't correctly updated until the next update.
  }

  const [discardPile, setDiscardPile] = useState([]) // discardPile is not iterable // Objects are outside the array
  const discardPileUpdate = value => {
    discardPile.push(value)
  }

  useEffect(() => {
    console.log(discardPile)
  }, [discardPile])

  const [playerBet, setPlayerBet] = useState(1)
  const playerBetUpdate = value => {
    setPlayerBet(value)
  }

  const playerHit = () => {
    let thisDeck = deck
    let cardIndex = Math.floor(Math.random() * thisDeck.length)
    let card = thisDeck[cardIndex]
    thisDeck.splice(cardIndex, 1)
    setDiscardPile([...discardPile, card])
    setDeck(thisDeck)
    // Now update hand
    setYourCards([...yourCards, card])
  }

  const doubleDown = () => {
    // hit one time, double the bet, then end player turn.
    setPlayerBet(playerBet * 2)
    playerHit()
    //Turn end function
  }

  const splitting = () => {
    setPlayerBet(playerBet * 2)
    let splitCard1 = yourCards.slice(0, 1)
    let splitCard2 = yourCards.slice(1)
    setYourCards(splitCard1)
    setYourCards2(splitCard2)
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

  const shuffleDeck = () => {
    // Shuffle percentage 1 player to 5 hands for 1 deck,
    let deck = [...discardPile, ...deck]
    setDeck(deck)
  }

  const [yourMoney, setYourMoney] = useState(100)

  const yourMoneyValue = value => {
    setYourMoney(value)
  }

  const [result, setResult] = useState([])

  const [pastResults, setPastResults] = useState([])

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
      doubleDown={doubleDown}
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
    ></LoadOrder>
  )
}

export default App
