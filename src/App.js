import React, { useState } from "react"
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
  yourCards
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
      ></RoundStart>
    )
  } else {
    return (
      <TableOptions playerHit={playerHit} yourCards={yourCards}></TableOptions>
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

  const [YourMoney, setYourMoney] = useState("")

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
    if (!YourMoney) return
    console.log(YourMoney)
    yourMoneyValue(YourMoney)
    setYourMoney("")
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
          value={YourMoney}
          onChange={e => setYourMoney(e.target.value)}
        />
      </form>
      <button onClick={startFlagSwitch}>Continue</button>
    </div>
  )
}

function RoundStart({ playerDeal, roundStartFlagSwitch }) {
  // So it appears that even when thr function is called from the child it still executes in the location it was defined (the parent) and had access to everything it would normally.
  const test = e => {
    e.preventDefault()
    playerDeal()
    roundStartFlagSwitch()
  }
  return (
    <form onSubmit={test}>
      <button>Deal</button>
    </form>
  )
}

function TableOptions({ playerHit, yourCards }) {
  console.log(yourCards)
  return <p>It has been delt.</p>
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
  // How many decks are being used.
  const [deckCount, setDeckCount] = useState(1)

  // If there is a state we want children to modify we use this structure of function and pass it down.
  const theDeckCountValue = count => {
    // This is a function that is being passed to the child of start screen so that deckCount in the parent can be modified from there.
    setDeckCount(count)
  }

  // How many hands have been delt.
  const [handCount, setHandCount] = useState(0)

  const [yourCards, setYourCards] = useState([])

  const [dealerCards, setDealerCards] = useState([])
  // The number of additional players
  const [otherPlayers, setOtherPlayers] = useState(0)

  const otherPlayersValue = value => {
    setOtherPlayers(value)
  }

  // For here use a function to generate a new state for each otherPlayer
  const [otherPlayerHands, setOtherPlayerHands] = useState([])

  const [deck, setDeck] = useState([
    {
      value: 1,
      value2: 11,
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
      value: 1,
      value2: 11,
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
      value: 1,
      value2: 11,
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
      value: 1,
      value2: 11,
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

  // For starters only going to use 1 player then figure out how to simulate other hands.
  // Only deals once for now BTW
  const playerDeal = () => {
    let thisDeck = deck
    let cardIndex = Math.floor(Math.random() * thisDeck.length)
    let card = thisDeck[cardIndex]
    thisDeck.splice(cardIndex, 1)
    let cardIndex2 = Math.floor(Math.random() * thisDeck.length)
    let card2 = thisDeck[cardIndex2]
    thisDeck.splice(cardIndex2, 1)
    setDeck(thisDeck)
    setYourCards([card, card2])
    // An issue for seeing the results I had was that after setYourCards was finished viewing yourCards through the console wasn't correctly updated until the next update.
  }

  const [discardPile, setDiscardPile] = useState([])

  const playerHit = () => {
    let thisDeck = deck
    let cardIndex = Math.floor(Math.random() * thisDeck.length)
    let card = thisDeck[cardIndex]
    thisDeck.splice(cardIndex, 1)
    setDeck(thisDeck)
    // Now update hand
    setYourCards([...yourCards, card])
  }

  const doubleDown = () => {
    // hit one time, double the bet, then end player turn.
  }

  const splitting = () => {
    // Research
  }

  const shuffleDeck = () => {
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
    ></LoadOrder>
  )
}

export default App
