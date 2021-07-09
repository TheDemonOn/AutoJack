import React, { useState, useEffect, useLayoutEffect } from "react"
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
import PreviousMoney from "./MinorComponents/PreviousMoney.js"
import PreviousCardTotals from "./MinorComponents/PreviousCardTotals.js"
import PreviousBet from "./MinorComponents/PreviousBet.js"
import AddAnimation from "./MinorComponents/AddAnimation.js"

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

import { motion } from "framer-motion"

// Important thing perhaps is don't setState in a useEffect that I intend to use for a calculation in the same cycle

// At roundStart for automated just have there be a check for 2 buttons one that just uses basic strategy and another one
//that brings you to a modified version of the bet screen that has a section for how many rounds to run

function LoadOrder({
	startFlag,
	theDeckCountValue,
	otherPlayersValue,
	yourMoneyValue,
	playerDeal,
	startFlagSwitch,
	startFlagSwitch1,
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
	cutPosition,
	tableStart,
	tableStartZero,
	tableStartOne,
	setDiscardPile,
	realDiscardPileUpdate,
	deckUpdate,
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
	cardThemeNum,
	automateFlagSwitch,
	automateFlag,
	automateFlagSwitch0,
	autoFlag,
	roundsLeft,
	updateRounds,
	decrementRounds,
	cancelAuto,
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
				automateFlagSwitch={automateFlagSwitch}
				automateFlagSwitch0={automateFlagSwitch0}
				autoFlag={autoFlag}
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
				startFlagSwitch1={startFlagSwitch1}
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
				cardThemeNum={cardThemeNum}
				automateFlag={automateFlag}
				roundsLeft={roundsLeft}
				updateRounds={updateRounds}
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
				cutPosition={cutPosition}
				setDiscardPile={setDiscardPile}
				realDiscardPileUpdate={realDiscardPileUpdate}
				deckUpdate={deckUpdate}
				buttonTheme={buttonTheme}
				iconTheme={iconTheme}
				textColor={textColor}
				settingsFlagSwitch={settingsFlagSwitch}
				cardThemeNum={cardThemeNum}
				automateFlag={automateFlag}
				autoFlag={autoFlag}
				decrementRounds={decrementRounds}
				cancelAuto={cancelAuto}
			></TableOptions>
		)
	}
}

function Home({
	homeFlagSwitch,
	automateFlagSwitch,
	buttonTheme,
	iconTheme,
	textColor,
	settingsFlagSwitch,
	automateFlagSwitch0,
	homeFlagSwitch1,
	startFlagSwitch,
	autoFlag,
}) {
	// useEffect(() => {
	//   window.history.replaceState("Home", null, "http://localhost:3000/Home")
	// }, [])

	const [subText, setSubText] = useState(
		<h2 style={textColor}>The Blackjack that plays itself.</h2>
	)

	useEffect(() => {
		automateFlagSwitch0()
	}, [])

	useEffect(() => {
		let random = Math.random()
		if (random > 0.66) {
			setSubText(<h2 style={textColor}>The Blackjack that plays itself.</h2>)
		} else if (random < 0.33) {
			setSubText(<h2 style={textColor}>It plays itself so you don't have to.</h2>)
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
					<Button buttonTheme={buttonTheme} content={"Manual"} func={homeFlagSwitch}></Button>
				</div>
				<div id="automated">
					<Button
						buttonTheme={buttonTheme}
						content={"Automated"}
						func={automateFlagSwitch}
					></Button>
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
				<a href="https://github.com/TheDemonOn/AutoJack" target="_blank" rel="noopener">
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
	settingsFlagSwitch0,
}) {
	// useEffect(() => {
	//   if (
	//     window.history.state === "Home" ||
	//     window.history.state === "StartScreen" ||
	//     window.history.state === "Automate"
	//   ) {
	//     window.history.pushState(
	//       "ThemeSettings",
	//       null,
	//       "http://localhost:3000/ThemeSettings"
	//     )
	//   }
	// }, [])

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
						<img src={Button_Theme1} height="150px" width="150px" alt="Blue and gold theme."></img>
					</a>

					<a className="hoverHover" onClick={t2ThemeChange}>
						<img src={Button_Theme2} height="150px" width="150px" alt="Purple theme."></img>
					</a>

					<a className="hoverHover" onClick={t3ThemeChange}>
						<img src={Button_Theme3} height="150px" width="150px" alt="White and red theme."></img>
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
				<Button buttonTheme={buttonTheme} content={"Back"} func={settingsFlagSwitch0}></Button>
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
	minBet,
}) {
	// useEffect(() => {
	//   window.history.pushState(
	//     "StartScreen",
	//     null,
	//     "http://localhost:3000/StartScreen"
	//   )
	// }, [])

	useEffect(() => {
		theDeckCountValue(8)
		yourMoneyValue(500)
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

	const goldColor = {
		color: "#e7bd52",
	}

	const purpleColor = {
		color: "#392950",
	}

	const redColor = {
		color: "#c12f2f",
	}

	const greenColor = {
		color: "#48b74d",
	}

	const inputFunction0 = () => {
		document.getElementsByClassName("inputThing")[0].style.border = "2px solid #555"
	}
	const inputFunction1 = () => {
		document.getElementsByClassName("inputThing")[1].style.border = "2px solid #555"
	}
	const inputFunction2 = () => {
		document.getElementsByClassName("inputThing")[2].style.border = "2px solid #555"
	}
	const inputFunction3 = () => {
		document.getElementsByClassName("inputThing")[3].style.border = "2px solid #555"
	}

	const inputFunctionOff = () => {
		for (let i = 0; i < document.getElementsByClassName("inputThing").length; i++) {
			switch (textColor.color) {
				case goldColor.color:
					document.getElementsByClassName("inputThing")[i].style.border = "2px solid #e7bd52"
					break
				case purpleColor.color:
					document.getElementsByClassName("inputThing")[i].style.border = "2px solid #392950"
					break
				case redColor.color:
					document.getElementsByClassName("inputThing")[i].style.border = "2px solid #c12f2f"
					break
				case greenColor.color:
					document.getElementsByClassName("inputThing")[i].style.border = "2px solid #48b74d"
					break
			}
		}
	}

	useLayoutEffect(() => {
		for (let i = 0; i < document.getElementsByClassName("inputThing").length; i++) {
			switch (textColor.color) {
				case goldColor.color:
					document.getElementsByClassName("inputThing")[i].style.border = "2px solid #e7bd52"
					break
				case purpleColor.color:
					document.getElementsByClassName("inputThing")[i].style.border = "2px solid #392950"
					break
				case redColor.color:
					document.getElementsByClassName("inputThing")[i].style.border = "2px solid #c12f2f"
					break
				case greenColor.color:
					document.getElementsByClassName("inputThing")[i].style.border = "2px solid #48b74d"
					break
			}
		}
	}, [parameterSection])

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
		theDeckCountValue(1)
		yourMoneyValue(100)
		playerBetUpdate(5)
		betRange("min", 5)
		betRange("max", 100)

		setParameterSection(
			<div className="parameterBox">
				<h4 style={textColor}>Table Rules</h4>
				<div className="inputWrapper">
					<div>
						<h5 style={textColor}>Decks Used: </h5>
						{/* Figure out if type="number" can use maxLength or a variant */}
						{/* Also figure out if you can restrict the input value being higher than the max */}
						<input
							className="inputThing"
							type="text"
							onFocus={inputFunction0}
							onBlur={inputFunctionOff}
							// min="1"
							// max="100"
							maxLength="3"
							placeholder="1"
							value={deckValue}
							onChange={(e) => theDeckCountValue(e.target.value)}
							// onChange={e => theDeckCountValue(e.target.value)}
						></input>
					</div>
					<div>
						<h5 style={textColor}>Min Bet: </h5>
						<input
							className="inputThing"
							type="number"
							min="1"
							placeholder="5"
							onFocus={inputFunction1}
							onBlur={inputFunctionOff}
							onChange={(e) => betRange("min", e.target.value)}
						></input>
					</div>
					<div>
						<h5 style={textColor}>Max Bet: </h5>
						<input
							className="inputThing"
							type="number"
							min="1"
							placeholder="100"
							onFocus={inputFunction2}
							onBlur={inputFunctionOff}
							onChange={(e) => betRange("max", e.target.value)}
						></input>
					</div>
					<div>
						<h5 style={textColor}>Money: </h5>
						<input
							className="inputThing"
							type="number"
							min="1"
							placeholder="100"
							onFocus={inputFunction3}
							onBlur={inputFunctionOff}
							onChange={(e) => yourMoneyValue(e.target.value)}
						></input>
					</div>
				</div>
			</div>
		)
	}

	useEffect(() => {
		// If the custom min is set higher than the max, update the max to be the min
		if (minBet > maxBet) {
			betRange("max", minBet)
		}
	}, [minBet])

	useEffect(() => {
		playerBetUpdate(minBet)
	}, [minBet])

	const startAndUpdateDeck = () => {
		homeFlagSwitch1()
		theDeckCountValue(deckSize)
	}

	// The section below is for updating the size of the svg table icons to be responsive
	const [windowFlag, setWindowFlag] = useState(0)

	useLayoutEffect(() => {
		console.log(windowFlag)
		if (window.innerWidth <= 750) {
			setTableIconSize("90px")
		} else {
			setTableIconSize("130px")
		}
	}, [windowFlag])

	const updateSize = () => {
		setWindowFlag((prevCount) => prevCount + 1)
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
				<Button buttonTheme={buttonTheme} content={"Back"} func={startAndUpdateDeck}></Button>
			</div>
			<div className="secondTitle">
				<h6 style={textColor}>Autojack</h6>
			</div>
			<div className="tableWrapper">
				{/* These should go down to 9em for the responsitivity */}
				<a tabIndex="0" className="hoverHover" onClick={lowEnd}>
					<TableLow iconTheme={iconTheme} tableIconSize={tableIconSize}></TableLow>
				</a>

				<a tabIndex="0" className="hoverHover" onClick={midEnd}>
					<TableMid iconTheme={iconTheme} tableIconSize={tableIconSize}></TableMid>
				</a>

				<a tabIndex="0" className="hoverHover" onClick={highEnd}>
					<TableHigh iconTheme={iconTheme} tableIconSize={tableIconSize}></TableHigh>
				</a>

				<a tabIndex="0" className="hoverHover" onClick={custom}>
					<TableCustom iconTheme={iconTheme} tableIconSize={tableIconSize}></TableCustom>
				</a>
			</div>

			{parameterSection}

			<div className="tablePlay">
				<Button buttonTheme={buttonTheme} content={"Play"} func={startFlagSwitch}></Button>
			</div>
			<a
				className="one"
				href="https://github.com/TheDemonOn/AutoJack"
				target="_blank"
				rel="noopener"
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
	startFlagSwitch,
	startFlagSwitch1,
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
	minBet,
	cardThemeNum,
	automateFlag,
	roundsLeft,
	updateRounds,
}) {
	// useEffect(() => {
	//   window.history.pushState(
	//     "RoundStart",
	//     null,
	//     "http://localhost:3000/RoundStart"
	//   )
	// }, [])

	const auto = {
		display: "none",
	}

	const [automatedVersion, setAutomatedVersion] = useState(auto)

	const [manualVersion, setManualVersion] = useState(auto)

	useLayoutEffect(() => {
		// Basically it starts off as being off then uses this check to turn the betting screen back on
		if (!automateFlag) {
			setManualVersion()
		} else {
			setAutomatedVersion()
		}
	}, [])

	// So it appears that even when thr function is called from the child it still executes in the location it was defined (the parent) and had access to everything it would normally.

	const deal = (e) => {
		yourMoneyValue(yourMoney - playerBet)
		playerDeal()
		dealerDeal()
		roundStartFlagSwitch()
	}

	useEffect(() => {
		console.log(roundsLeft)
	}, [])

	useEffect(() => {
		if (roundsLeft > 0) {
			deal()
		}
	}, [])

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
	const rangeCheckMax = (value) => {
		if (playerBet + value > maxBet) {
			playerBetUpdate(maxBet)
		}
	}

	const rangeCheckMin = (value) => {
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

	const [cardBack, setCardBack] = useState()

	// Sets card back
	useEffect(() => {
		switch (cardThemeNum) {
			case "t1":
				setCardBack("./Cards/CardBacks/back1.png")
				break
			case "t2":
				setCardBack("./Cards/CardBacks/back2.png")
				break
			case "t3":
				setCardBack("./Cards/CardBacks/back3.png")
				break
			case "t4":
				setCardBack("./Cards/CardBacks/back4.png")
				break
		}
	}, [])

	const [inputBorderColor, setInputBorderColor] = useState({
		border: "2px solid rgb(0, 255, 0)",
	})

	// const purpleTheme = {
	//   borderColor: "#392950",
	//   backgroundColor: "#392950",
	//   color: "white",
	// }

	// var input = document.getElementById("inputThing")
	// input.addEventListener("focus", function () {
	//   this.style.border = "2px solid #555"
	// })

	const goldColor = {
		color: "#e7bd52",
	}

	const purpleColor = {
		color: "#392950",
	}

	const redColor = {
		color: "#c12f2f",
	}

	const greenColor = {
		color: "#48b74d",
	}

	const inputFunction = () => {
		document.getElementById("inputThing").style.border = "2px solid #555"
	}

	const inputFunctionOff = () => {
		switch (textColor.color) {
			case goldColor.color:
				document.getElementById("inputThing").style.border = "2px solid #e7bd52"
				break
			case purpleColor.color:
				document.getElementById("inputThing").style.border = "2px solid #392950"
				break
			case redColor.color:
				document.getElementById("inputThing").style.border = "2px solid #c12f2f"
				break
			case greenColor.color:
				document.getElementById("inputThing").style.border = "2px solid #48b74d"
				break
		}
	}

	useLayoutEffect(() => {
		switch (textColor.color) {
			case goldColor.color:
				document.getElementById("inputThing").style.border = "2px solid #e7bd52"
				break
			case purpleColor.color:
				document.getElementById("inputThing").style.border = "2px solid #392950"
				break
			case redColor.color:
				document.getElementById("inputThing").style.border = "2px solid #c12f2f"
				break
			case greenColor.color:
				document.getElementById("inputThing").style.border = "2px solid #48b74d"
				break
		}
	}, [])

	// let autoInput = document.getElementById('inputThing')

	let roundSubmit = (e) => {
		if (e.key === "Enter") {
			deal()
		}
	}

	useEffect(() => {
		document.getElementById("inputThing").addEventListener("keydown", roundSubmit)
		return () => {
			document.getElementById("inputThing").removeEventListener("keydown", roundSubmit)
		}
	}, [])

	return (
		<div>
			<div className="tableBack">
				<Button buttonTheme={buttonTheme} content={"Back"} func={startFlagSwitch1}></Button>
			</div>
			<div style={manualVersion}>
				<div className="block">
					<div className="remainingCards">
						<div>
							<img
								className="drawPile"
								src={process.env.PUBLIC_URL + cardBack}
								height="153.576px"
								width="104.976px"
								alt="Ace of spades card."
							></img>
						</div>
						<div className="cardCount">{cardsLeft}</div>
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
				</div>
			</div>
			<div style={automatedVersion}>
				<div className="boo">
					<h2 style={textColor}>How many rounds?</h2>
					<div className="barDeal">
						<input
							id="inputThing"
							onFocus={inputFunction}
							onBlur={inputFunctionOff}
							style={inputBorderColor}
							type="text"
							maxLength="2"
							placeholder="1"
							onChange={(e) => updateRounds(e.target.value)}
						></input>
						<Button
							buttonTheme={buttonTheme}
							func={deal}
							content={"Deal"}
							ID={"mobileDeal"}
						></Button>
					</div>
				</div>
				<div className="one">
					<a href="https://github.com/TheDemonOn/AutoJack" target="_blank" rel="noopener">
						<GithubSVG iconTheme={iconTheme}></GithubSVG>
					</a>
				</div>

				<div className="two">
					<a className="hoverHover" onClick={settingsFlagSwitch}>
						<ThemesIcon iconTheme={iconTheme}></ThemesIcon>
					</a>
				</div>
			</div>
		</div>
	)
}

function TableOptions({
	playerHit,
	yourCards,
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
	yourCardsValue2,
	setYourCards,
	setYourCards2,
	playerHit2,
	setSplitFlag,
	roundStartFlag,
	shoeCount,
	remainingCards,
	discardPile,
	cutPosition,
	tableStart,
	setDiscardPile,
	realDiscardPileUpdate,
	deckUpdate,
	buttonTheme,
	iconTheme,
	textColor,
	settingsFlagSwitch,
	cardThemeNum,
	autoFlag,
	automateFlag,
	decrementRounds,
	cancelAuto,
}) {
	// useEffect(() => {
	//   window.history.replaceState("Table", null, "http://localhost:3000/Table")
	// }, [])

	useEffect(() => {
		console.log("//////////////////////////////////")
	}, [])

	useEffect(() => {
		if (yourCards2[0]) {
			yourCards2.length = 0
			setYourCards2([])
			console.log("CLEAED YOURCARDS2")
		}
	}, [])

	useEffect(() => {
		decrementRounds()
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

	const [handOnePush, setHandOnePush] = useState(0)

	const [handTwoPush, setHandTwoPush] = useState(0)

	const [totalWithAce, setTotalWithAce] = useState()

	const [cardTotal, setCardTotal] = useState(yourCards.map((x) => x.value).reduce((x, y) => x + y))

	const [cardTotal2, setCardTotal2] = useState(0)

	const [dealerCardTotal, setDealerCardTotal] = useState(
		localDealerCards.map((x) => x.value).reduce((x, y) => x + y)
	)

	const [endPlayerTurn, setEndPlayerTurn] = useState(0)

	const [secondHand, setSecondHand] = useState(0)

	//////////////////////////////////////////////////////

	// This checks to see if the bet value changed during the gameplay, and resets it back to the original value after
	let betDoubled = 0
	let prevBet = PreviousBet(playerBet)

	const [originalBet, setOriginalBet] = useState()

	useEffect(() => {
		setOriginalBet(playerBet)
	}, [])

	useEffect(() => {
		if (prevBet !== playerBet && prevBet) {
			betDoubled = 1
		}
		return () => {
			// cleanup functions fire when the component is unmounted
			if (betDoubled) {
				// playerBetUpdate(playerBet / 2)
				playerBetUpdate(originalBet)
			}
		}
	}, [playerBet])

	const splitting = () => {
		// splitting should only be available on the deal no other times
		// Need to add functions of splitting that occur before standing

		// So all the state it receives stays the same through the entire operation

		yourMoneyValue((m) => m - playerBet)

		let splitCard1 = yourCards.slice(0, 1)
		let splitCard2 = yourCards.slice(1, 2)

		let thisDeck = deck

		let cardIndex = Math.floor(Math.random() * thisDeck.length)
		let card = thisDeck[cardIndex]
		thisDeck.splice(cardIndex, 1)

		let cardIndex2 = Math.floor(Math.random() * thisDeck.length)
		let card2 = thisDeck[cardIndex2]
		thisDeck.splice(cardIndex2, 1)

		setDiscardPile((discardPile) => [...discardPile, card, card2])
		setDeck(thisDeck)

		yourCards.length = 0
		yourCards2.length = 0

		yourCards.push(...splitCard1, card)
		setYourCards([...splitCard1, card]) // The reason it needs to be spread out is that the split is an object

		// setYourCards(splitCard1 => [...splitCard1, card])

		yourCards2.push(...splitCard2, card2)
		setYourCards2([...splitCard2, card2])
		// setYourCards2(splitCard2 => [...splitCard2, card2])
		// console.log(yourCards)
		// console.log(yourCards2)
	}

	const [doubleSplit, setDoubleSplit] = useState(0)

	if (cutPosition === "none") {
		// If the position is not set then set it to a random point between 70% and 85% of the total deck unless it is a small deck like
		// 1 or 2 decks in which case it will be 65% to 45%
		// console.log(deck.length)
		if (deck.length <= 104) {
			shoeCount(Math.floor((Math.floor(Math.random() * (65 - 45 + 1) + 45) / 100) * deck.length))
		} else {
			shoeCount(Math.floor((Math.floor(Math.random() * (85 - 70 + 1) + 70) / 100) * deck.length))
		}
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
		// Focus on solving the playerBet and using playerBet2
		yourMoneyValue((m) => m - playerBet)

		if (secondHand) {
			// Hand 2
			console.log("PlayerBet2 is: " + playerBet2)
			setPlayerBet2(playerBet2 * 2)
		} else {
			// Hand 1
			console.log("PlayerBet is: " + playerBet)
			playerBetUpdate(playerBet * 2)
		}

		if (splitFlag) {
			setYourMoneyUpdater((m) => m - playerBet)
		}

		// Because of issues with the transfer of state we are drawing the card from within function manually; this did not work
		let thisDeck = deck
		let cardIndex = Math.floor(Math.random() * thisDeck.length)
		let card = thisDeck[cardIndex]
		deck.splice(cardIndex, 1)
		setDiscardPile((discardPile) => [...discardPile, card])
		// The card is being pushed here so that yourCards is accurate for the local calculations below
		// Do note that if it was just the push then the display of cards from the state would not include the drawn card
		// The state has to be set at the end for it to update in the list
		yourCards.push(card)
		// Because drawing a card then ending the turn happens in one cycle I have to do a local calculation that checks for Aces
		// because otherwise the cardTotal is set too late for the final evaluation

		let end = () => {}
		if (secondHand) {
			end = () => {
				stand2()
			}
		} else {
			end = () => {
				stand()
			}
		}

		if (yourCards.map((x) => x.value).filter((x) => x === 11)[0] > 0) {
			// Checking for Aces in yourCards
			let aceCards = yourCards.filter((x) => x.value2 === 1)
			if (
				// Checks for bust with Aces reduced to 1
				yourCards.map((x) => x.value).reduce((x, y) => x + y) -
					aceCards.length * 11 +
					aceCards.length >
				21
			) {
				setCardTotal(
					yourCards.map((x) => x.value).reduce((x, y) => x + y) -
						aceCards.length * 11 +
						aceCards.length
				)
				setBust((p) => p + 1)
			} else if (yourCards.map((x) => x.value).reduce((x, y) => x + y) <= 21) {
				// Normal draw calculation with Ace being 11 if not busting
				setCardTotal(yourCards.map((x) => x.value).reduce((x, y) => x + y))
				end()
			} else {
				// Draw but with reduced Aces
				setCardTotal(
					yourCards.map((x) => x.value).reduce((x, y) => x + y) -
						aceCards.length * 11 +
						aceCards.length
				)
				end()
			}
		} else if (yourCards.map((x) => x.value).reduce((x, y) => x + y) > 21) {
			// Checks for bust with no Aces
			setCardTotal(yourCards.map((x) => x.value).reduce((x, y) => x + y))
			setBust((p) => p + 1)
		} else {
			// Normal draw calculation without Aces
			setCardTotal(yourCards.map((x) => x.value).reduce((x, y) => x + y))
			end()
		}
		// This actually sets the state to what it should be because otherwise the "yourCards" locally would not be the same as the global yourCards
		// yourCardsValue(yourCards)
		if (yourCards2.length) {
			// This fixes the card from going to the wrong hand as well
			if (secondHand) {
				// Second hand
				setYourCards([...yourCards])
			} else {
				// First hand
			}
		} else {
			setYourCards([...yourCards])
		}
	}

	// Money is being added even if busting

	// From set's perspective state is not

	//////////////////////////////////////////
	// See explanation above

	let dealerHitLostCards = []

	const dealerHit = () => {
		if (yourCards2.length === 0 && bust) {
		} else {
			console.log("Dealer Hitting")
			if (localDealerCards.map((x) => x.value).reduce((x, y) => x + y) < 17) {
				let thisDeck = deck
				let cardIndex = Math.floor(Math.random() * thisDeck.length)
				let card = thisDeck[cardIndex]
				thisDeck.splice(cardIndex, 1)
				realDiscardPileUpdate(card)
				dealerHitLostCards.push(card)
				if (localDealerCards.map((x) => x.value).reduce((x, y) => x + y) + card.value < 17) {
					let cardIndex2 = Math.floor(Math.random() * thisDeck.length)
					let card2 = thisDeck[cardIndex2]
					thisDeck.splice(cardIndex2, 1)
					realDiscardPileUpdate(card2)
					dealerHitLostCards.push(card2)
					if (
						localDealerCards.map((x) => x.value).reduce((x, y) => x + y) +
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
							localDealerCards.map((x) => x.value).reduce((x, y) => x + y) +
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
								localDealerCards.map((x) => x.value).reduce((x, y) => x + y) +
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
	}

	// Evaluates dealerCardTotal and draws additional cards if necessary with Aces
	function dealerCardTotalEvaluation() {
		console.log("Evaluating dealer cards")
		if (localDealerCards.map((x) => x.value).filter((x) => x === 11)[0] > 0) {
			// Checking for Aces in dealerCards
			let aceCards = localDealerCards.filter((x) => x.value2 === 1)
			// For the dealer a bust flag does not need to trigger, if the dealer busts then no more cards are drawn and the result is calculated
			if (localDealerCards.map((x) => x.value).reduce((x, y) => x + y) <= 21) {
				// Normal draw calculation with Ace being 11 if not busting, no additional card check needed
				console.log(
					"Total is:",
					localDealerCards.map((x) => x.value).reduce((x, y) => x + y)
				)
				setDealerCardTotal(localDealerCards.map((x) => x.value).reduce((x, y) => x + y))
				endTurnFlagSwitch() // The draw is done and conditions met; end turn
				console.log("End: Aces, but reduced not needed")
			} else if (
				localDealerCards.map((x) => x.value).reduce((x, y) => x + y) -
					aceCards.length * 11 +
					aceCards.length <
				17
			) {
				// The total with normal Aces is greater than 21, this checks to see if the reduced Aces put it below its goal.
				// If so draw a card, if the total is at 17 or greater then an additional card draw is not needed.

				let initialReducedAceValue =
					localDealerCards.map((x) => x.value).reduce((x, y) => x + y) -
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

					let aceCardsLocal = localDealerCards.filter((x) => x.value2 === 1)

					let localTotal =
						localDealerCards.map((x) => x.value).reduce((x, y) => x + y) -
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
					localDealerCards.map((x) => x.value).reduce((x, y) => x + y) -
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
				localDealerCards.map((x) => x.value).reduce((x, y) => x + y)
			)
			if (localDealerCards.map((x) => x.value).reduce((x, y) => x + y) >= 17) {
				setDealerCardTotal(localDealerCards.map((x) => x.value).reduce((x, y) => x + y))
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

		let together = deck.length + discardPile.length
		let bothLost = dealerHitLostCards.length + doubleLostCards.length
		if (cutPosition - discardPile.length <= 0) {
			console.log("Your Cards: " + yourCards.length)
			console.log("Dealer cards: " + localDealerCards.length)

			discardPile.push(...dealerHitLostCards)
			discardPile.push(...doubleLostCards)
			let placeHolderDeck = [...deck, ...discardPile]
			// let localDiscardPile = discardPile
			console.log("Deck Shuffling")

			if (deck.length <= 104) {
				shoeCount(
					Math.floor(
						(Math.floor(Math.random() * (65 - 45 + 1) + 45) / 100) *
							(deck.length + discardPile.length)
					)
				)
			} else {
				shoeCount(
					Math.floor(
						(Math.floor(Math.random() * (85 - 70 + 1) + 70) / 100) *
							(deck.length + discardPile.length)
					)
				)
			}

			deck.length = 0
			deckUpdate(placeHolderDeck)
			discardPile.length = 0
			setDiscardPile([])
		}
	}

	//
	const [splitCard1Display, setSplitCard1Display] = useState({
		display: "none",
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
		setSplitCard1(
			splitCard1Flag ||
				cards[cardThemeNum][yourCards2[0].suit][yourCards2[0].card].src + "#" + new Date().getTime()
		)
		if (splitCard1Flag !== "//:0") {
			console.log("SPLITCARD TRIGGERED")
			setSplitCard1Display({ display: "block" })
			setSplitCard1Alt(cards[cardThemeNum][yourCards2[0].suit][yourCards2[0].card].alt)
		}
	}, [splitCard1Flag])

	//
	const [splitCard2Display, setSplitCard2Display] = useState({
		display: "none",
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
				cards[cardThemeNum][yourCards2[1].suit][yourCards2[1].card].src + "#" + new Date().getTime()
		)
		if (splitCard2Flag !== "//:0") {
			setSplitCard2Display({ display: "block" })
			setSplitCard2Alt(cards[cardThemeNum][yourCards2[1].suit][yourCards2[1].card].alt)
		}
	}, [splitCard2Flag])

	// I need to move all the cards from the main hand to the side pile and vice versa, BEFORE yourCards actually switched
	// Then when they do switch I need their initial values to be set to the default with no animation or transitions so it looks like nothing
	// has changed.

	let stand = () => {
		if (yourCards2.length === 0) {
			// If split is not triggered
			console.log("THERE WAS NO SPLIT")
			dealerHit()
			dealerCardTotalEvaluation()
			deckShuffleFunction()
			setEndPlayerTurn(1)
		} else {
			// instead of setting the card total just set it from the calculating right here
			if (yourCards.map((x) => x.value).filter((x) => x === 11)[0] > 0) {
				// Checking for Aces in yourCards
				let aceCards = yourCards.filter((x) => x.value2 === 1)
				if (
					// Checks for bust with Aces reduced to 1
					yourCards.map((x) => x.value).reduce((x, y) => x + y) -
						aceCards.length * 11 +
						aceCards.length >
					21
				) {
					setCardTotal2(
						yourCards.map((x) => x.value).reduce((x, y) => x + y) -
							aceCards.length * 11 +
							aceCards.length
					)
				} else if (yourCards.map((x) => x.value).reduce((x, y) => x + y) <= 21) {
					// Normal draw calculation with Ace being 11 if not busting
					setCardTotal2(yourCards.map((x) => x.value).reduce((x, y) => x + y))
				} else {
					// Draw but with reduced Aces
					setCardTotal2(
						yourCards.map((x) => x.value).reduce((x, y) => x + y) -
							aceCards.length * 11 +
							aceCards.length
					)
				}
			} else if (yourCards.map((x) => x.value).reduce((x, y) => x + y) > 21) {
				// Checks for bust with no Aces
				setCardTotal2(yourCards.map((x) => x.value).reduce((x, y) => x + y))
			} else {
				// Normal draw calculation without Aces
				setCardTotal2(yourCards.map((x) => x.value).reduce((x, y) => x + y))
			}

			// {
			//   translateY: 0,
			//   translateX: 0,
			//   scale: 1,
			//   rotateZ: Math.random() * -3,
			// }
			// {
			// duration: 0.4,
			// ease: "easeOut",
			// }
			//
			// translateY: -310,
			// translateX: -115,

			// INITIAL: doesn't do anything other than when it enters existence. Can only be used by turning the div off then on again
			// HOWEVER IN THE NEXT STEP NEW CARDS COME INTO EXISTENCE CAUSING THE INITIAL TO MATTER AGAIN
			// ANIMATE: This will update to affect them. Therefore if I want to put them all back I want to animate to position 0 and
			// set the transition to 0 seconds so it is instant

			// These were -34 y

			// Use a system similar to the below for variable

			// 286 - 1536  ratio 0.1861979166666667

			let viewportWidth = window.innerWidth

			let stackx = viewportWidth * -0.1861979166666667

			// lets try incr of 33

			// Also try higher y

			let stackY = -44 // Keep going up till about right

			setCard1Animate({
				translateX: stackx, // 286
				translateY: stackY,
				scale: 0.49,
				rotateZ: 0,
			}) // 44
			setCard2Animate({
				translateX: stackx - 44, // 330
				translateY: stackY,
				scale: 0.49,
				rotateZ: 0,
			}) // 47
			setCard3Animate({
				translateX: stackx - 91, // 377
				translateY: stackY,
				scale: 0.49,
				rotateZ: 0,
			}) // 33
			setCard4Animate({
				translateX: stackx - 124, // 410
				translateY: stackY,
				scale: 0.49,
				rotateZ: 0,
			})
			setCard5Animate({
				translateX: stackx - 157, // 443
				translateY: stackY,
				scale: 0.49,
				rotateZ: 0,
			})
			setCard6Animate({
				translateX: stackx - 190, // 476
				translateY: stackY,
				scale: 0.49,
				rotateZ: 0,
			}) // 33
			setCard7Animate({
				translateX: stackx - 223, // 509
				translateY: stackY,
				scale: 0.49,
				rotateZ: 0,
			})

			// So the first part animates correctly always because it is animating to a position 0 as opposed to the faking we are doing

			let card1x = viewportWidth * 0.193359375

			// Mine at full screen gave me 1536 so I can base the proportions around that for both smaller and larger
			// 297 - 1536  A 0.193359375 ratio

			// This works alright as is
			setHand2Card1Animate({
				translateY: 46,
				translateX: card1x, // These are what control the incorrect movement // 297
				scale: 2,
			})
			setHand2Card2Animate({
				translateY: 46,
				translateX: card1x + 22, // 319
				scale: 2,
			})

			//////

			const doEverything = () => {
				// setInitial({
				//   translateY: 0,
				//   translateX: 0,
				// })
				setInitialSetting({
					translateY: 0,
					translateX: 0,
				})
				// setTransition({
				//   duration: 99,
				// }) // this doesn't do anything I think?
				setCard1Transition({
					duration: 0,
				})
				setCard2Transition({
					duration: 0,
				})
				setCard3Transition({
					duration: 0,
				})

				setHand2Card1Transition({
					duration: 0,
				})
				setHand2Card2Transition({
					duration: 0,
				})
				setHand2Card1Initial({
					translateY: 0,
					translateX: 0,
				})
				setHand2Card2Initial({
					translateY: 0,
					translateX: 0,
				})
				setCard1Animate({
					translateX: 0,
					translateY: 0,
					scale: 1,
					rotateZ: 0,
				})
				setCard2Animate({
					translateX: 0,
					translateY: 0,
					scale: 1,
					rotateZ: 0,
				})
				setCard3Animate({
					translateX: 0,
					translateY: 0,
					scale: 1,
					rotateZ: 0,
				})
				setCard4Animate({
					translateX: 0,
					translateY: 0,
					scale: 1,
					rotateZ: 0,
				})
				setCard5Animate({
					translateX: 0,
					translateY: 0,
					scale: 1,
					rotateZ: 0,
				})
				setCard6Animate({
					translateX: 0,
					translateY: 0,
					scale: 1,
					rotateZ: 0,
				})
				setCard7Animate({
					translateX: 0,
					translateY: 0,
					scale: 1,
					rotateZ: 0,
				})

				setHand2Card1Animate({
					translateY: 0,
					translateX: 0,
					scale: 1,
				})
				setHand2Card2Animate({
					translateY: 0,
					translateX: 0,
					scale: 1,
				})

				let cards1 = []
				let cards2 = []
				cards1.push(...yourCards)
				cards2.push(...yourCards2)
				// This swaps the hands
				setYourCards2(cards1)
				setYourCards(cards2)
				setSplitCard2("//:0")
				setSplitCard2Display({
					display: "none",
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
				let newHit = () => {
					let thisDeck = deck
					let cardIndex = Math.floor(Math.random() * thisDeck.length)
					let card = thisDeck[cardIndex]
					thisDeck.splice(cardIndex, 1)
					setDiscardPile((discardPile) => [...discardPile, card])
					setDeck(thisDeck)
					cards2.push(card) // cards 2 is what is being used as yourCards
					setYourCards([...cards2])
				}
				setSplitCard2Alt()
				setStandElement(
					<a className="hoverHover" onClick={stand2}>
						<StandIcon iconTheme={iconTheme}></StandIcon>
					</a>
				)
				setHitElement(
					<a className="hoverHover" onClick={newHit}>
						<HitIcon iconTheme={iconTheme}></HitIcon>
					</a>
				)
				setSecondHand(1)
			}
			setTimeout(doEverything, 450)
		}
	}

	let stand2 = () => {
		console.log("SPLIT STAND")
		dealerHit()
		dealerCardTotalEvaluation()
		deckShuffleFunction()
		setEndPlayerTurn(2)
	}

	///////////
	// Bug with calculation of cardTotal after blackjack from drawn card off of split
	// I suspect that when the cardTotal useEffect activated the blackjack check passed so it standed and the cardTotal was just the same
	// total it had before the useEffect triggered because it wasn't updated

	// Solution: have the blackjack check ensure that there is no split

	// sets yourCards to totalCards
	useEffect(() => {
		console.log(
			"Was two Aces drawn initially?: " + yourCards[0].value === 11 &&
				yourCards[1].value === 11 &&
				yourCards.length === 2
		)
		if (yourCards[0].value === 11 && yourCards[1].value === 11 && yourCards.length === 2) {
			setCardTotal(2)
		} else {
			if (yourCards[0].value + yourCards[1].value === 21 && yourCards2.length === 0) {
				// Blackjack check
				stand()
			} else if (dealerCards[0].value + dealerCards[1].value === 21) {
				console.log("DEALER BLACKJACK")
				stand()
			} else {
				if (yourCards.map((x) => x.value).filter((x) => x === 11)[0] > 0) {
					// Checking for Aces in yourCards
					let aceCards = yourCards.filter((x) => x.value2 === 1)
					if (
						// Checks for bust with Aces reduced to 1
						yourCards.map((x) => x.value).reduce((x, y) => x + y) -
							aceCards.length * 11 +
							aceCards.length >
						21
					) {
						setCardTotal(
							yourCards.map((x) => x.value).reduce((x, y) => x + y) -
								aceCards.length * 11 +
								aceCards.length
						)
						setBust((p) => p + 1)
					} else if (yourCards.map((x) => x.value).reduce((x, y) => x + y) <= 21) {
						// Normal draw calculation with Ace being 11 if not busting
						setCardTotal(yourCards.map((x) => x.value).reduce((x, y) => x + y))
					} else {
						// Draw but with reduced Aces
						// console.log("This is where we are")
						setCardTotal(
							yourCards.map((x) => x.value).reduce((x, y) => x + y) -
								aceCards.length * 11 +
								aceCards.length
						)
					}
				} else if (yourCards.map((x) => x.value).reduce((x, y) => x + y) > 21) {
					// Checks for bust with no Aces
					setCardTotal(yourCards.map((x) => x.value).reduce((x, y) => x + y))
					setBust((p) => p + 1)
				} else {
					// Normal draw calculation without Aces
					setCardTotal(yourCards.map((x) => x.value).reduce((x, y) => x + y))
				}
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

	useEffect(() => {
		if (typeof playerBet === "string") {
			playerBetUpdate(parseInt(playerBet, 10))
		} else if (typeof playerBet2 === "string") {
			setPlayerBet2(parseInt(playerBet2, 10))
		}
	}, [playerBet, playerBet2])

	// Creates round result
	// The issue here is that does having this run twice matter
	// This generates resultKeys for both 1 and 2

	// What if I just run it once after the second hand if the second hand exists
	useEffect(() => {
		setDrawDelay(dealerCards.length)
		if (delayKey[0] > 15) {
			setDelayScaling(1200)
		} else if (delayKey[0] > 5) {
			setDelayScaling(600)
		} else {
			setDelayScaling(300)
		}

		setTimeout(() => {
			console.log("EndplayerTurn: " + endPlayerTurn)
			if ((endPlayerTurn === 1 && yourCards2.length === 0) || endPlayerTurn === 2) {
				console.log("cardTotal:", cardTotal)
				console.log("cardTotal2:", cardTotal2)
				console.log("dealerCardTotal:", dealerCardTotal)
				if (cardTotal > 21 && cardTotal2 === 0) {
					//
					console.log("This should be a bust.")
					return
				} else {
					console.log("Calculating final round result")
					if (yourCards2.length === 0) {
						// If turn has ended and it has not split
						if (dealerCardTotal === cardTotal) {
							console.log(playerBet)
							// Why is playerBet a string here?

							// It was always a string that got converted from the math operation to a number

							// parseInt()

							yourMoneyValue((m) => m + parseInt(playerBet, 10))
							setRoundResultKey("push")
						}
						if (dealerCardTotal < cardTotal) {
							if (cardTotal > 21) {
								return
							} else if (yourCards[0].value + yourCards[1].value === 21) {
								yourMoneyValue((m) => m + playerBet + Math.round(playerBet * 1.5))
								setRoundResultKey("blackjack")
							} else {
								yourMoneyValue((m) => m + playerBet * 2)
								setRoundResultKey("won")
							}
						} else if (dealerCardTotal > cardTotal) {
							if (dealerCards[0].value + dealerCards[1].value === 21) {
								setRoundResultKey("DealerBlackjack")
							} else if (dealerCardTotal < 22) {
								setRoundResultKey("lost")
							} else if (yourCards[0].value + yourCards[1].value === 21) {
								yourMoneyValue((m) => m + playerBet + Math.round(playerBet * 1.5))
								setRoundResultKey("blackjack")
							} else {
								yourMoneyValue((m) => m + playerBet * 2)
								setRoundResultKey("dealerBust")
							}
						}
					} else {
						// This will evaluate both the first and second hand sequentially at once
						// First hand
						if (cardTotal > 21) {
							setRoundResultKey("bust")
						} else if (dealerCardTotal < cardTotal) {
							if (cardTotal > 21) {
								// busted
								setRoundResultKey("bust")
							} else {
								yourMoneyValue((m) => m + playerBet2 * 2)
								setRoundResultKey("won")
								setHandOneWin(1)
							}
						} else if (dealerCardTotal > cardTotal) {
							if (dealerCardTotal < 22) {
								setRoundResultKey("lost")
							} else {
								yourMoneyValue((m) => m + playerBet2 * 2)
								setRoundResultKey("dealerBust")
								setHandOneWin(1)
							}
						} else {
							yourMoneyValue((m) => m + parseInt(playerBet2, 10))
							setRoundResultKey("push")
							setHandOnePush(1)
						}
						// Second hand
						if (cardTotal2 > 21) {
							setRoundResultKey2("bust")
						} else if (dealerCardTotal < cardTotal2) {
							if (cardTotal2 > 21) {
								setRoundResultKey2("bust")
							} else {
								yourMoneyValue((m) => m + playerBet * 2)
								setRoundResultKey2("won")
								setHandTwoWin(1)
							}
						} else if (dealerCardTotal > cardTotal2) {
							if (dealerCardTotal < 22) {
								setRoundResultKey2("lost")
							} else {
								yourMoneyValue((m) => m + playerBet * 2)
								setRoundResultKey2("dealerBust")
								setHandTwoWin(1)
							}
						} else {
							yourMoneyValue((m) => m + parseInt(playerBet, 10))
							setRoundResultKey2("push")
							setHandTwoPush(1)
						}
					}
				}
			}
		}, 1)
	}, [endPlayerTurn])

	useEffect(() => {
		console.log("Current money is:" + yourMoney)
	}, [yourMoney])

	// Checks for busting on second hand and ends turn
	// The bust below is determined as the cardTotal is being calculated, meaning after it has triggered once we just reset is then it
	// should all work as planned

	// Checks for bust on split for both hands
	const [bustAnimate, setBustAnimate] = useState(0)
	useEffect(() => {
		if (yourCards2.length) {
			if (bust && cardTotal2 === 0) {
				if (roundResultKey2) {
				} else {
					console.log("Bust 2")
					setBustAnimate((v) => v + 1)
					let go = () => {
						setRoundResultKey2("bust")
						stand()
						setBustAnimate(0)
					}
					setTimeout(go, 1500) // This will delay for the drawn animation to finish before busting // But then you could still draw
				}
			} else if (bust && cardTotal2) {
				if (roundResultKey) {
				} else {
					console.log("Bust 1")
					setBustAnimate((v) => v + 1)
					let gogo = () => {
						setRoundResultKey("bust")
						stand2()
						setBustAnimate(0)
					}
					setTimeout(gogo, 1500)
				}
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
		} else if (yourCards2.length) {
			setSplitElement(
				<a>
					<SplitIcon iconTheme={iconTheme} opacity={"50%"}></SplitIcon>
				</a>
			)
			setThemesButtonToggle(
				<a className="hoverHover">
					<ThemesIcon iconTheme={iconTheme}></ThemesIcon>
				</a>
			)
		} else if (
			yourCards[0].value === yourCards[1].value &&
			playerBet <= yourMoney &&
			yourCards[2] === undefined
		) {
			setSplitElement(
				// Normal split element
				<a className="hoverHover">
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
		} else if (bustAnimate) {
			setDoubleDownElement(
				<a>
					<DoubleIcon iconTheme={iconTheme} opacity={"50%"}></DoubleIcon>
				</a>
			)
		} else if (bustAnimate === 0) {
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
	}, [yourCards, endPlayerTurn, bustAnimate])

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
			switch (playerThirdCardFlag) {
				case undefined:
					setPlayerThirdCardFlag(null)
					break
				case null:
					setPlayerThirdCardFlag(undefined)
					break
				default:
					setPlayerThirdCardFlag(undefined)
			}
		} else {
			setPlayerThirdCardFlag("//:0")
		}
	}, [yourCards])

	const [playerThird, setPlayerThird] = useState(playerThirdCardFlag)

	useEffect(() => {
		setPlayerThird(
			playerThirdCardFlag ||
				cards[cardThemeNum][yourCards[2].suit][yourCards[2].card].src + "#" + new Date().getTime()
		)
		if (playerThirdCardFlag !== "//:0") {
			setThirdDisplay({ display: "block" })
			setPlayerThirdAlt(cards[cardThemeNum][yourCards[2].suit][yourCards[2].card].alt)
		} else {
			setThirdDisplay({ display: "none" })
		}
	}, [playerThirdCardFlag]) // This will update with yourCards or yourCards2 to turn display: none when split swaps

	//

	const [fourthDisplay, setFourthDisplay] = useState({ display: "none" })
	const [playerFourthCardFlag, setPlayerFourthCardFlag] = useState("//:0")
	const [playerFourthAlt, setPlayerFourthAlt] = useState()
	useEffect(() => {
		if (yourCards[3]) {
			switch (playerFourthCardFlag) {
				case undefined:
					setPlayerFourthCardFlag(null)
					break
				case null:
					setPlayerFourthCardFlag(undefined)
					break
				default:
					setPlayerFourthCardFlag(undefined)
			}
		} else {
			setPlayerFourthCardFlag("//:0")
		}
	}, [yourCards])

	const [playerFourth, setPlayerFourth] = useState(playerFourthCardFlag)

	useEffect(() => {
		setPlayerFourth(
			playerFourthCardFlag ||
				cards[cardThemeNum][yourCards[3].suit][yourCards[3].card].src + "#" + new Date().getTime()
		)
		if (playerFourthCardFlag !== "//:0") {
			setFourthDisplay({ display: "block" })
			setPlayerFourthAlt(cards[cardThemeNum][yourCards[3].suit][yourCards[3].card].alt)
		} else {
			setFourthDisplay({ display: "none" })
		}
	}, [playerFourthCardFlag])

	//
	const [fifthDisplay, setFifthDisplay] = useState({ display: "none" })
	const [playerFifthCardFlag, setPlayerFifthCardFlag] = useState("//:0")
	const [playerFifthAlt, setPlayerFifthAlt] = useState()
	useEffect(() => {
		if (yourCards[4]) {
			switch (playerFifthCardFlag) {
				case undefined:
					setPlayerFifthCardFlag(null)
					break
				case null:
					setPlayerFifthCardFlag(undefined)
					break
				default:
					setPlayerFifthCardFlag(undefined)
			}
		} else {
			setPlayerFifthCardFlag("//:0")
		}
	}, [yourCards])

	const [playerFifth, setPlayerFifth] = useState(playerFifthCardFlag)

	useEffect(() => {
		setPlayerFifth(
			playerFifthCardFlag ||
				cards[cardThemeNum][yourCards[4].suit][yourCards[4].card].src + "#" + new Date().getTime()
		)
		if (playerFifthCardFlag !== "//:0") {
			setFifthDisplay({ display: "block" })
			setPlayerFifthAlt(cards[cardThemeNum][yourCards[4].suit][yourCards[4].card].alt)
		} else {
			setFifthDisplay({ display: "none" })
		}
	}, [playerFifthCardFlag])

	//
	const [sixthDisplay, setSixthDisplay] = useState({ display: "none" })
	const [playerSixthCardFlag, setPlayerSixthCardFlag] = useState("//:0")
	const [playerSixthAlt, setPlayerSixthAlt] = useState()
	useEffect(() => {
		if (yourCards[5]) {
			switch (playerSixthCardFlag) {
				case undefined:
					setPlayerSixthCardFlag(null)
					break
				case null:
					setPlayerSixthCardFlag(undefined)
					break
				default:
					setPlayerSixthCardFlag(undefined)
			}
		} else {
			setPlayerSixthCardFlag("//:0")
		}
	}, [yourCards])

	const [playerSixth, setPlayerSixth] = useState(playerSixthCardFlag)

	useEffect(() => {
		setPlayerSixth(
			playerSixthCardFlag ||
				cards[cardThemeNum][yourCards[5].suit][yourCards[5].card].src + "#" + new Date().getTime()
		)
		if (playerSixthCardFlag !== "//:0") {
			setSixthDisplay({ display: "block" })
			setPlayerSixthAlt(cards[cardThemeNum][yourCards[5].suit][yourCards[5].card].alt)
		} else {
			setSixthDisplay({ display: "none" })
		}
	}, [playerSixthCardFlag])

	//
	const [seventhDisplay, setSeventhDisplay] = useState({ display: "none" })
	const [playerSeventhCardFlag, setPlayerSeventhCardFlag] = useState("//:0")
	const [playerSeventhAlt, setPlayerSeventhAlt] = useState()
	useEffect(() => {
		if (yourCards[6]) {
			switch (playerSeventhCardFlag) {
				case undefined:
					setPlayerSeventhCardFlag(null)
					break
				case null:
					setPlayerSeventhCardFlag(undefined)
					break
				default:
					setPlayerSeventhCardFlag(undefined)
			}
		} else {
			setPlayerSeventhCardFlag("//:0")
		}
	}, [yourCards])

	const [playerSeventh, setPlayerSeventh] = useState(playerSeventhCardFlag)

	useEffect(() => {
		setPlayerSeventh(
			playerSeventhCardFlag ||
				cards[cardThemeNum][yourCards[6].suit][yourCards[6].card].src + "#" + new Date().getTime()
		)
		if (playerSeventhCardFlag !== "//:0") {
			setSeventhDisplay({ display: "block" })
			setPlayerSeventhAlt(cards[cardThemeNum][yourCards[6].suit][yourCards[6].card].alt)
		} else {
			setSeventhDisplay({ display: "none" })
		}
	}, [playerSeventhCardFlag])

	//
	//
	//
	const [thirdDealerDisplay, setThirdDealerDisplay] = useState({
		display: "none",
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
				cards[cardThemeNum][localDealerCards[2].suit][localDealerCards[2].card].src +
					"#" +
					new Date().getTime()
		)
		if (dealerThirdCardFlag !== "//:0") {
			setThirdDealerDisplay({ display: "block" })
			setDealerThirdAlt(cards[cardThemeNum][localDealerCards[2].suit][localDealerCards[2].card].alt)
		}
	}, [dealerThirdCardFlag])

	//
	const [fourthDealerDisplay, setFourthDealerDisplay] = useState({
		display: "none",
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
		if (dealerFourthCardFlag !== "//:0") {
			setFourthDealerDisplay({ display: "block" })
			setDealerFourthAlt(cards[cardThemeNum][dealerCards[3].suit][dealerCards[3].card].alt)
		}
	}, [dealerFourthCardFlag])

	//
	const [fifthDealerDisplay, setFifthDealerDisplay] = useState({
		display: "none",
	})
	const [dealerFifthCardFlag, setDealerFifthCardFlag] = useState("//:0")
	const [dealerFifthAlt, setDealerFifthAlt] = useState()
	useEffect(() => {
		if (dealerCards[4]) {
			// console.log(dealerCards[4])
			setDealerFifthCardFlag()
		}
	}, [dealerCards, localDealerCards, endPlayerTurn])

	const [dealerFifth, setDealerFifth] = useState(dealerFifthCardFlag)

	useEffect(() => {
		// console.log(dealerCards[4])
		if (dealerCards[4]) {
			setDealerFifth(
				dealerFifthCardFlag ||
					cards[cardThemeNum][dealerCards[4].suit][dealerCards[4].card].src +
						"#" +
						new Date().getTime()
			)
			if (dealerFifthCardFlag !== "//:0") {
				setFifthDealerDisplay({ display: "block" })
				setDealerFifthAlt(cards[cardThemeNum][dealerCards[4].suit][dealerCards[4].card].alt)
			}
		}
	}, [dealerFifthCardFlag])

	//
	const [sixthDealerDisplay, setSixthDealerDisplay] = useState({
		display: "none",
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
		if (dealerSixthCardFlag !== "//:0") {
			setSixthDealerDisplay({ display: "block" })
			setDealerSixthAlt(cards[cardThemeNum][dealerCards[5].suit][dealerCards[5].card].alt)
		}
	}, [dealerSixthCardFlag])

	//
	const [seventhDealerDisplay, setSeventhDealerDisplay] = useState({
		display: "none",
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
		if (dealerSeventhCardFlag !== "//:0") {
			setSeventhDealerDisplay({ display: "block" })
			setDealerSeventhAlt(cards[cardThemeNum][dealerCards[6].suit][dealerCards[6].card].alt)
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

	const [drawDelay, setDrawDelay] = useState()

	const [delayScaling, setDelayScaling] = useState()

	let z = document.getElementsByClassName("block")

	const backgroundBlur = () => {
		z[0].style.filter = "blur(4px) grayscale(85%)"
	}

	const roundEndAuto = (dealerNum) => {
		setTimeout(roundStartFlagReset, 2600 + dealerNum * 200)
	}
	const roundEndAuto2 = () => {
		setTimeout(roundStartFlagReset, 4000)
	}

	const [outcomeContent, setOutcomeContent] = useState()

	const [outcomeEffect, setOutcomeEffect] = useState("")

	const blur = () => {
		setTimeout(backgroundBlur, 1000)
	}

	const secondOutcome = (effect, content) => {
		setOutcomeComponent(
			<Outcome
				textColor={textColor}
				outcomeContent={content}
				outcomeEffect={effect}
				iconTheme={iconTheme}
			></Outcome>
		)
	}

	const splitHandleTimeout = () => {
		// When this triggers
		setTimeout(splitHandle, 4000)
	}

	const splitHandle = () => {
		// When splitHandle Occurs endPlayerTurn needs to have triggered for both of the roundKeys to be created
		// The roundResultKeys are using old state on the first pass
		console.log("Split Handle Starting")
		console.log("Round ResultKey:" + roundResultKey)
		console.log("Round ResultKey2: " + roundResultKey2)
		switch (roundResultKey) {
			case "push":
				setAnimationComponent(
					<div className="addAnimation">
						<AddAnimation playerBet={playerBet} textColor={textColor}></AddAnimation>
					</div>
				)
				break
			default:
				setAnimationComponent(
					<div className="addAnimation">
						<AddAnimation playerBet={playerBet * 2} textColor={textColor}></AddAnimation>
					</div>
				)
		}
		// console.log(yourCards)
		// console.log(yourCards2)

		// This executes twice sometimes
		const switchState = () => {
			// when this executes the round will end
			console.log("resultKey2 Resolving End")
			// So i can update it manually only if both are positive change; win or push
			switch (roundResultKey2) {
				case "won":
					setTimeout(function () {
						secondOutcome("positive")
					}, 1500)
					animateAdd(playerBet * 2)
					setYourMoneyUpdater(yourMoney)
					blur()
					roundEndAuto2()
					break
				case "lost":
					setTimeout(function () {
						secondOutcome("negative")
					}, 1500)
					setYourMoneyUpdater(yourMoney)
					blur()
					roundEndAuto2()
					break
				case "push":
					setTimeout(function () {
						secondOutcome("neutral")
					}, 1500)
					animateAdd(playerBet)
					setYourMoneyUpdater(yourMoney)
					blur()
					roundEndAuto2()
					break
				case "bust":
					setTimeout(function () {
						secondOutcome("negative", "You bust.")
					}, 1500)
					setYourMoneyUpdater(yourMoney)
					blur()
					roundEndAuto2()
					break
				case "dealerBust":
					setTimeout(function () {
						secondOutcome("positive", "Dealer bust.")
					}, 1500)
					// For double dealerBust yourMoney is inaccurate// Not anymore
					animateAdd(playerBet * 2)
					setYourMoneyUpdater(yourMoney)
					blur()
					roundEndAuto2()
					break
				case "DealerBlackjack":
					setTimeout(function () {
						secondOutcome("negative", "Dealer Blackjack.")
					}, 1500)
					setYourMoneyUpdater(yourMoney)
					blur()
					roundEndAuto2()
			}
		}

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
			display: "none",
		})
		// Here I hope the rest of the triggers for displaying the cards to occur actually display them; DID NOT
		// I don't want to just set it to look like the yourCards2 cards, I want to actually swap them so that the cardTotal is proper
		setCardTotal(cardTotal2)
		// Setting yourCards breaks the function in some way. I suspect it is perhaps no roundResultKey2
		// With the addition of setting cardTotal it worked once
		// It seems to just work now
		setYourCards(yourCards2)

		setSecondHand(0)

		// I suspect that perhaps I may have to swap the roundResultKey to make things simpler

		// With that assuming all the systems work that should have resolved everything and took you back to the bet phase
		setTimeout(switchState, 2000)
	}

	const animateAdd = (bet) => {
		setAnimationComponent(
			<div className="addAnimationEnd">
				<AddAnimation playerBet={bet} textColor={textColor}></AddAnimation>
			</div>
		)
	}

	// Are both roundResultKeys being triggered t the same time?
	useEffect(() => {
		// This is essential  triggers every time
		console.log("Round ResultKey:" + roundResultKey)
		console.log("Round ResultKey2: " + roundResultKey2)

		setTimeout(() => {
			if (yourCards2.length === 0) {
				// There is no split
				switch (roundResultKey) {
					case "won":
						setOutcomeEffect("positive")
						blur()
						roundEndAuto(dealerCards.length)
						animateAdd(playerBet * 2)
						break
					case "lost":
						setOutcomeEffect("negative")
						blur()
						roundEndAuto(dealerCards.length)
						break
					case "push":
						setOutcomeEffect("neutral")
						blur()
						roundEndAuto(dealerCards.length)
						animateAdd(playerBet)
						break
					case "blackjack":
						setOutcomeContent("Blackjack.")
						setOutcomeEffect("positive")
						blur()
						roundEndAuto(dealerCards.length)
						animateAdd(playerBet + Math.round(playerBet * 1.5))
						break
					case "bust":
						setOutcomeContent("You bust.")
						setOutcomeEffect("negative")
						blur()
						roundEndAuto(dealerCards.length)
						break
					case "dealerBust":
						setOutcomeContent("Dealer bust.")
						setOutcomeEffect("positive")
						blur()
						roundEndAuto(dealerCards.length)
						animateAdd(playerBet * 2)
						break
					case "DealerBlackjack":
						setOutcomeContent("Dealer Blackjack.")
						setOutcomeEffect("negative")
						blur()
						roundEndAuto(dealerCards.length)
				}
				// This checks to see if the splitCards exist and that the first roundResultKey was created then swapped into roundResultKey2.
				// It is swapped because it uses the same system that evaluates key 1
			} else if (yourCards2.length && roundResultKey2 !== "" && roundResultKey !== "") {
				console.log("SPLIT SWITCH 1")
				console.log("Round ResultKey:" + roundResultKey)
				console.log("Round ResultKey2: " + roundResultKey2)
				console.log(yourMoney)
				switch (roundResultKey) {
					case "won":
						switch (roundResultKey2) {
							case "won":
								setYourMoneyUpdater(yourMoney - playerBet * 2)
								break
							case "push":
								setYourMoneyUpdater(yourMoney - playerBet)
								break
							case "dealerBust":
								setYourMoneyUpdater(yourMoney - playerBet * 2)
								break
							default:
								// lost
								setYourMoneyUpdater(yourMoney)
								break
						}
						animateAdd(playerBet2 * 2)
						setOutcomeEffect("positive")
						blur()
						break
					case "lost":
						setOutcomeEffect("negative")
						blur()
						break
					case "push":
						switch (roundResultKey2) {
							case "won":
								setYourMoneyUpdater(yourMoney - playerBet * 2)
								animateAdd(playerBet * 2)
								break
							case "push":
								setYourMoneyUpdater(yourMoney - playerBet)
								animateAdd(playerBet)
								break
							case "dealerBust":
								setYourMoneyUpdater(yourMoney - playerBet * 2)
								animateAdd(playerBet * 2)
								break
							default:
								// lost
								setYourMoneyUpdater(yourMoney)
								break
						}
						animateAdd(playerBet2)
						setOutcomeEffect("neutral")
						blur()
						break
					case "bust":
						setOutcomeContent("You bust.")
						setOutcomeEffect("negative")
						blur()
						break
					case "dealerBust":
						switch (roundResultKey2) {
							case "won":
								setYourMoneyUpdater(yourMoney - playerBet * 2)
								break
							case "push":
								setYourMoneyUpdater(yourMoney - playerBet)
								break
							case "blackjack":
								setYourMoneyUpdater(yourMoney - playerBet * 2)
								break
							case "dealerBust":
								setYourMoneyUpdater(yourMoney - playerBet * 2)
								break
							default:
								// lost
								setYourMoneyUpdater(yourMoney)
								break
						}
						animateAdd(playerBet2 * 2)
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
				splitHandleTimeout()
			}
		}, (drawDelay - 2) * delayScaling)
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
			setTimeout(outcomeContainer, 1500)
		}
	}, [outcomeEffect])

	const [standElement, setStandElement] = useState(
		<a tabIndex="0" className="hoverHover" onClick={stand}>
			<StandIcon iconTheme={iconTheme}></StandIcon>
		</a>
	)

	// Sets stand element
	useEffect(() => {
		if (endPlayerTurn) {
			console.log("END PLAYER TURN")
			setStandElement(
				<a tabIndex="0">
					<StandIcon iconTheme={iconTheme} opacity={"50%"}></StandIcon>
				</a>
			)
		} else if (bustAnimate) {
			setStandElement(
				<a tabIndex="0">
					<StandIcon iconTheme={iconTheme} opacity={"50%"}></StandIcon>
				</a>
			)
		} else if (bustAnimate === 0) {
			setStandElement(
				<a tabIndex="0" className="hoverHover" onClick={stand}>
					<StandIcon iconTheme={iconTheme}></StandIcon>
				</a>
			)
		}
	}, [endPlayerTurn])

	const [hitElement, setHitElement] = useState(
		<a tabIndex="0" className="hoverHover" onClick={playerHit}>
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
		} else if (bustAnimate) {
			setHitElement(
				<a>
					<HitIcon iconTheme={iconTheme} opacity={"50%"}></HitIcon>
				</a>
			)
		} else if (bustAnimate === 0) {
			setHitElement(
				<a className="hoverHover" onClick={playerHit}>
					<HitIcon iconTheme={iconTheme}></HitIcon>
				</a>
			)
		}
	}, [endPlayerTurn, bustAnimate])

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

	const [cardBack, setCardBack] = useState()

	useEffect(() => {
		switch (cardThemeNum) {
			case "t1":
				setCardBack("./Cards/CardBacks/back1.png")
				break
			case "t2":
				setCardBack("./Cards/CardBacks/back2.png")
				break
			case "t3":
				setCardBack("./Cards/CardBacks/back3.png")
				break
			case "t4":
				setCardBack("./Cards/CardBacks/back4.png")
				break
		}
	}, [])

	// yourMoneyUpdater is the display value, its initial value is what your money is
	const [yourMoneyUpdater, setYourMoneyUpdater] = useState(yourMoney)
	// Updating for no split
	useEffect(() => {
		if (yourCards2[0]) {
		} else {
			setYourMoneyUpdater(yourMoney)
		}
	}, [yourMoney])

	useEffect(() => {
		if (yourCards2.length === 2) {
			setYourMoneyUpdater(yourMoney)
		}
	}, [yourCards2, splitFlag])

	const prevMoney = PreviousMoney(yourMoneyUpdater)

	useEffect(() => {
		// checks for a change in value and that the previous value exists
		console.log("PrevMoney: " + prevMoney) // This was the money a cycle ago
		console.log("YourMoney: " + yourMoney) // This is the money after both have evaluated
		console.log("Displayed: " + yourMoneyUpdater) // This is what is displayed

		let thing = yourMoneyUpdater - prevMoney
		if (yourMoneyUpdater - prevMoney && prevMoney) {
			if (yourMoneyUpdater - prevMoney > 0) {
				console.log("Increase of")
				console.log(thing)
			} else {
				console.log("Decrease of")
				console.log(thing)
			}
		}
	}, [yourMoneyUpdater])

	const [animationComponent, setAnimationComponent] = useState(
		<div className="addAnimation">
			<AddAnimation playerBet={playerBet} textColor={textColor}></AddAnimation>
		</div>
	)

	useEffect(() => {
		setAnimationComponent(
			<div className="addAnimation">
				<AddAnimation playerBet={playerBet} textColor={textColor}></AddAnimation>
			</div>
		)
	}, [])

	const [bet, setBet] = useState(playerBet)

	useEffect(() => {
		if (secondHand) {
			setBet(playerBet2)
		} else {
			setBet(playerBet)
		}
	}, [secondHand, yourCards, yourCards2])

	// Defined values

	const [initialSetting, setInitialSetting] = useState({
		opacity: 1,
		translateY: -85,
		translateX: -390,
		scale: 0.76,
	})
	const [initialSettingAlt, setInitialSettingAlt] = useState({
		opacity: 1,
		translateY: -360,
		translateX: -390,
		scale: 0.76,
	})

	const [animateSetting, setAnimateSetting] = useState({
		opacity: 1,
		translateY: 0,
		translateX: 0,
		scale: 1,
		rotateZ: Math.random() * -3,
	})
	const [animateSettingAlt, setAnimateSettingAlt] = useState({
		opacity: 1,
		translateY: 0,
		translateX: 0,
		scale: 1,
		rotateZ: Math.random() * 3,
	})

	const [animateSettingPlayer, setAnimateSettingPlayer] = useState({
		opacity: 1,
		translateY: 0,
		translateX: 0,
		scale: 1,
		rotateZ: Math.random() * -3,
	})
	const [animateSettingAltPlayer, setAnimateSettingAltPlayer] = useState({
		opacity: 1,
		translateY: 0,
		translateX: 0,
		scale: 1,
		rotateZ: Math.random() * 3,
	})

	const [transitionSetting, setTransitionSetting] = useState({
		duration: 0.4,
		ease: "easeOut",
	})
	const [transitionSettingAlt, setTransitionSettingAlt] = useState({
		duration: 0.5,
		ease: "easeOut",
	})

	// Animation logic // These should all be player based //

	const [initial, setInitial] = useState(initialSettingAlt) // This is just one // initialSettingAlt

	const [animate, setAnimate] = useState(animateSettingPlayer) // Can be for both // animateSettingPlayer
	const [animateAlt, setAnimateAlt] = useState(animateSettingAltPlayer) // Can be for both // animateSettingAltPlayer

	const [transition, setTransition] = useState(transitionSettingAlt) // These I think will be from scratch

	// I may not need any initial other than default, just animates to send and transition for the speed

	const [card1Animate, setCard1Animate] = useState(animate)
	const [card1Transition, setCard1Transition] = useState(transition)

	const [card2Animate, setCard2Animate] = useState(animateAlt)
	const [card2Transition, setCard2Transition] = useState(transition)

	const [card3Animate, setCard3Animate] = useState(animate)
	const [card3Transition, setCard3Transition] = useState(transition)

	const [card4Animate, setCard4Animate] = useState(animateAlt)
	const [card4Transition, setCard4Transition] = useState(transition)

	const [card5Animate, setCard5Animate] = useState(animate)
	const [card5Transition, setCard5Transition] = useState(transition)

	const [card6Animate, setCard6Animate] = useState(animateAlt)
	const [card6Transition, setCard6Transition] = useState(transition)

	const [card7Animate, setCard7Animate] = useState(animate)
	const [card7Transition, setCard7Transition] = useState(transition)

	// // //

	const [hand2Card1Animate, setHand2Card1Animate] = useState({
		translateY: 0,
		translateX: 0,
		scale: 1,
	})

	const [hand2Card1Transition, setHand2Card1Transition] = useState({
		duration: 0.5,
		ease: "easeOut",
	})
	const [hand2Card1Initial, setHand2Card1Initial] = useState({
		translateY: 35,
		translateX: 345,
		scale: 2,
	})

	const [hand2Card2Animate, setHand2Card2Animate] = useState({
		translateY: 0,
		translateX: 0,
		scale: 1,
	})
	const [hand2Card2Transition, setHand2Card2Transition] = useState({
		duration: 0.5,
		ease: "easeOut",
	})
	const [hand2Card2Initial, setHand2Card2Initial] = useState({
		translateY: -310,
		translateX: -115,
		scale: 1.5,
	})

	//  //  //

	const [playerTimer, setPlayerTimer] = useState(2)

	const [hand2Timer, setHand2Timer] = useState()

	const secondCardDraw = () => {
		setPlayerTimer((t) => t + 1)
	}
	const hand2CardDraw = () => {
		setHand2Timer((t) => t + 1)
	}

	useEffect(() => {
		if (yourCards2.length === 2) {
			// Need to turn off then turn back on
			setPlayerTimer(1)
			setTimeout(secondCardDraw, 10) // This Is the time to draw
			setHand2Timer(1)
			setTimeout(hand2CardDraw, 200) // This draws the hand2Card2
		}
	}, [yourCards2])

	const playPusher = () => {
		setPlayerTimer((t) => t + 1)
	}
	const playPusherAlt = () => {
		setPlayerTimer(1)
	}

	// useEffect(() => {
	//   setTimeout(timePusherAlt, 200)
	//   setTimeout(playPusherAlt, 300)
	//   setTimeout(playPusher, 500)
	// }, [])

	const [additional, setAdditional] = useState()

	const addPlus = () => {
		setAdditional((t) => t + 1)
	}

	useEffect(() => {
		// This entire system may be redundant
		if (thirdDealerDisplay.display === "block") {
			// This runs when the dealer starts drawing cards after stand
			setAdditional(0)
			addPlus()
			setInterval(addPlus, 400)
			// Then here I can just use the dealerCard,length - 2 to determine how much longer the screen should be clear,(before the filters)
			// Also Might want to update the cardTotal that is displayed to work like the money system in splits
		}
	}, [thirdDealerDisplay])

	// useLayoutEffect(() => {
	//   playPusher()
	// }, [yourCards])

	//

	// dealTimer is for the second dealer draw (first is automatic)
	// additional is timer of dealer draw after stand
	// playerTimer is timer for first auto draw of second and subsequent hits

	//

	// The thing about the animation is that it already occurs even if it is display none

	// I need to move all the cards from the main hand to the side pile and vice versa, BEFORE yourCards actually switched
	// Then when they do switch I need their initial values to be set to the default with no animation or transitions so it looks like nothing
	// has changed.

	const [dealerLoad1, setDealerLoad1] = useState()
	const dealLoad1 = () => {
		setDealerLoad1(1)
	}

	const [dealerLoad2, setDealerLoad2] = useState()
	const dealLoad2 = () => {
		setDealerLoad2(1)
	}

	const [cardLoad1, setCardLoad1] = useState()
	const load1 = () => {
		setCardLoad1(1)
	}

	const [cardLoad2, setCardLoad2] = useState()
	const load2 = () => {
		setCardLoad2(1)
	}

	// const [cardLoad3, setCardLoad3] = useState()
	// const load3 = () => {
	//   setCardLoad3(1)
	// }

	// I will have a timer for the functions that determine timing can use to tell how much time has passed.
	// This will be used to tell if they should delay at all for

	const [duration, setDuration] = useState(0)
	const incrDur = () => {
		setDuration((t) => t + 1)
	}

	useEffect(() => {
		let incrDurInterval = setInterval(incrDur, 100)
		return () => {
			clearInterval(incrDurInterval)
		}
	}, [])

	// const [playerTimerInit, setPlayerTimerInit] = useState(1) // Second player card

	const [delayKey, setDelayKey] = useState([])

	// a function to check how much time has passed to see if a delay is necesesary

	const timeCheck = () => {
		// This updates the delayKey to hold the time the first animation starts to play
		delayKey.push(duration)
	}

	const dealLoad2Check = () => {
		if (delayKey[0]) {
			// delayKey[0] being the time when the first card's animation started playing
			if (duration - delayKey[0] >= 2) {
				dealLoad2() // if it takes longer than 2 ticks between the first animating and the second loading, go now
			} else if (duration - delayKey[0] === 1) {
				setTimeout(dealLoad2, 100)
			} else {
				setTimeout(dealLoad2, 200)
			}
		} else {
			setTimeout(dealLoad2, 200)
		}
	}

	const load2Check = () => {
		// This should load the second card
		if (delayKey[1]) {
			// delayKey[0] being the time when the first card's animation started playing
			if (duration - delayKey[1] >= 2) {
				load2() // if it takes longer than 2 ticks between the first animating and the second loading, go now
			} else if (duration - delayKey[1] === 1) {
				setTimeout(load2, 100)
			} else {
				setTimeout(load2, 200)
			}
		} else {
			setTimeout(load2, 200)
		}
	}

	const [dealerDrawKey, setDealerDrawKey] = useState([])
	// What this should do is enforce a 400 millisecond delay between an animation playing and the next one being able to play
	const dealerDrawKeyAdd = () => {
		setTimeout(() => {
			dealerDrawKey.push(1)
		}, 400)
	}

	const timer3 = () => {
		if (playerThird !== "//:0") {
			setPlayerTimer(3)
		}
	}

	const timer4 = () => {
		if (playerFourth !== "//:0") {
			setPlayerTimer(4)
		}
	}
	const timer5 = () => {
		if (playerFifth !== "//:0") {
			setPlayerTimer(5)
		}
	}
	const timer6 = () => {
		if (playerSixth !== "//:0") {
			setPlayerTimer(6)
		}
	}
	const timer7 = () => {
		if (playerSeventh !== "//:0") {
			setPlayerTimer(7)
		}
	}

	// These are working and making sure the dealers cards are loaded before playing the animation
	// I think I need an onload for the animations in order to use the duration and add some timing like with the player's initial draw

	const [dealerThree, setDealerThree] = useState()
	const addThird = () => {
		setDealerThree(1)
	}

	const [dealerFour, setDealerFour] = useState()
	const addFourth = () => {
		setDealerFour(1)
	}

	const [dealerFive, setDealerFive] = useState()
	const addFifth = () => {
		setDealerFive(1)
	}

	const [dealerSix, setDealerSix] = useState()
	const addSixth = () => {
		setDealerSix(1)
	}

	const [dealerSeven, setDealerSeven] = useState()
	const addSeventh = () => {
		setDealerSeven(1)
	}

	const [split2Loaded, setSplit2Loaded] = useState()
	const split2Load = () => {
		setSplit2Loaded(1)
	}

	// useEffect(() => {
	//   console.log(dealerCards.length)
	//   // figure out how long I should delay for each card drawn and see if the ratio needs to dynamically change for any reason i.e internet speed
	//   // Using the dealerDrawKey is too late
	//   // Can maybe use dealerThree to run checks
	//   setDrawDelay(dealerCards.length)
	// }, [dealerThree])

	const auto = {
		display: "none",
	}

	const [manualOrAutomated, setManualOrAutomated] = useState()

	// secondHand BEING 0 OR 1 can tell me what hand we are on potentially
	// newHit
	// stand2

	// useEffect(() => {
	//   effect
	//   return () => {
	//     cleanup
	//   }
	// }, [input])

	const [cardTotalChangerChecker, setCardTotalChangerChecker] = useState(0)

	const prevCardTotals = PreviousCardTotals([cardTotal, cardTotal2])

	// Under non-split gameplay the only way a card is drawn and the total does not change is when an Ace is involved.
	// But for split that is not the case.
	useEffect(() => {
		if (yourCards2.length === 0) {
			// non-split
			if (
				prevCardTotals[0] === cardTotal &&
				prevCardTotals[1] === cardTotal2 &&
				(yourCards.filter((x) => x.value2 === 1).length == true ||
					yourCards2.filter((x) => x.value2 === 1).length == true)
			) {
				console.log("Card Total stayed the same")
				setCardTotalChangerChecker((x) => x + 1)
			} else {
				console.log("Card Total Changed")
			}
		} else {
			// split
			if (prevCardTotals[0] === cardTotal && prevCardTotals[1] === cardTotal2) {
				console.log("Card Totals stayed the same")
				setCardTotalChangerChecker((x) => x + 1)
			} else {
				console.log("Card Totals Changed")
			}
		}
	}, [yourCards, yourCards2])

	const [autoSplitSwitch, setAutoSplitSwitch] = useState(0)

	//
	//   Find out why the split function version is not operating
	//   The double draw visual glitch seems to involve Aces being drawn potentially
	//   It seems that once an Ace is drawn, every card drawn after the Ace including the ace plays its drawing animation
	//   Issue may now be resolved?
	//

	useEffect(() => {
		// THIS WAS BREAKING BECAUSE HAND 2 USES ITS OWN SEPARATE FUNCTIONS
		// Split has occurred // Also we can double, just not after hitting in a hand
		console.log("cards2.length: " + yourCards2.length)
		// console.log(autoSplitSwitch) // is 0
		console.log("dealerTotal: " + dealerCardTotal)
		console.log("EndTurn: " + endPlayerTurn)
		console.log("autoSwitch: " + autoSplitSwitch)
		console.log("SecondHand?: " + secondHand)
		setAutoSplitSwitch(0)
		if (yourCards2.length > 1 && autoSplitSwitch && dealerCardTotal < 21 && endPlayerTurn === 0) {
			console.log("SPLIT FUNCTION SHOULD BE FIRING")
			setTimeout(() => {
				if (
					(yourCards[0].value === 11 || yourCards[1].value === 11) &&
					yourCards.map((x) => x.value).reduce((x, y) => x + y) <= 21 &&
					secondHand === 0
				) {
					// Soft Hands split
					// By ensuring the possible outcomes that could double after hitting are locked behind yourCards.length === 2 ensures that double can only happen at beginning
					switch (cardTotal) {
						case 2:
							playerHit()
							break
						case 13:
						case 14:
							if (yourCards.length === 2) {
								faceUpCard === 5 || faceUpCard === 6 ? doubleDown() : playerHit()
							} else {
								playerHit()
							}
							break
						case 15:
						case 16:
							if (yourCards.length === 2) {
								faceUpCard <= 3 || faceUpCard >= 7 ? playerHit() : doubleDown()
							} else {
								playerHit()
							}
							break
						case 17:
							if (yourCards.length === 2) {
								faceUpCard === 2 || faceUpCard >= 7 ? playerHit() : doubleDown()
							} else {
								playerHit()
							}
							break
						case 18:
							if (yourCards.length === 2) {
								if (faceUpCard === 2 || faceUpCard === 7 || faceUpCard === 8) {
									stand()
								} else if (faceUpCard <= 6) {
									doubleDown()
								} else {
									playerHit()
								}
							} else {
								faceUpCard <= 8 ? stand() : playerHit()
							}
							break
						default:
							stand()
							break
					}
				} else if (secondHand === 0) {
					// Hard Hands split
					switch (cardTotal) {
						case 5:
						case 6:
						case 7:
						case 8:
							playerHit()
							break
						case 9:
							if (yourCards.length === 2) {
								faceUpCard === 9 || faceUpCard >= 7 ? playerHit() : doubleDown()
							} else {
								playerHit()
							}
							break
						case 10:
							if (yourCards.length === 2) {
								faceUpCard <= 9 ? doubleDown() : playerHit()
							} else {
								playerHit()
							}
							break
						case 11:
							if (yourCards.length === 2) {
								faceUpCard <= 10 ? doubleDown() : playerHit()
							} else {
								playerHit()
							}
							break
						case 12:
							faceUpCard <= 3 || faceUpCard >= 7 ? playerHit() : stand()
							break
						case 13:
						case 14:
						case 15:
						case 16:
							faceUpCard <= 6 ? stand() : playerHit()
							break
						default:
							stand()
					}
				} else if (
					(yourCards[0].value === 11 || yourCards[1].value === 11) &&
					yourCards.map((x) => x.value).reduce((x, y) => x + y) <= 21 &&
					secondHand === 1
				) {
					// Second hand
					switch (cardTotal2) {
						// soft
						case 2:
							playerHit2()
							break
						case 13:
						case 14:
							if (yourCards.length === 2) {
								faceUpCard === 5 || faceUpCard === 6 ? doubleDown() : playerHit2()
							} else {
								playerHit2()
							}
							break
						case 15:
						case 16:
							if (yourCards.length === 2) {
								faceUpCard <= 3 || faceUpCard >= 7 ? playerHit2() : doubleDown()
							} else {
								playerHit2()
							}
							break
						case 17:
							if (yourCards.length === 2) {
								faceUpCard === 2 || faceUpCard >= 7 ? playerHit2() : doubleDown()
							} else {
								playerHit2()
							}
							break
						case 18:
							if (yourCards.length === 2) {
								if (faceUpCard === 2 || faceUpCard === 7 || faceUpCard === 8) {
									stand2()
								} else if (faceUpCard <= 6) {
									doubleDown()
								} else {
									playerHit2()
								}
							} else {
								faceUpCard <= 8 ? stand2() : playerHit2()
							}
							break
						default:
							stand2()
							break
					}
				} else if (secondHand === 1) {
					// Hard Hands split
					switch (cardTotal2) {
						case 5:
						case 6:
						case 7:
						case 8:
							playerHit2()
							break
						case 9:
							if (yourCards.length === 2) {
								faceUpCard === 9 || faceUpCard >= 7 ? playerHit2() : doubleDown()
							} else {
								playerHit2()
							}
							break
						case 10:
							if (yourCards.length === 2) {
								faceUpCard <= 9 ? doubleDown() : playerHit2()
							} else {
								playerHit2()
							}
							break
						case 11:
							if (yourCards.length === 2) {
								faceUpCard <= 10 ? doubleDown() : playerHit2()
							} else {
								playerHit2()
							}
							break
						case 12:
							faceUpCard <= 3 || faceUpCard >= 7 ? playerHit2() : stand2()
							break
						case 13:
						case 14:
						case 15:
						case 16:
							faceUpCard <= 6 ? stand2() : playerHit2()
							break
						default:
							stand2()
					}
				}
			}, 1500)
		}
	}, [autoSplitSwitch])

	const [faceUpCard, setFaceUpCard] = useState(dealerCards[1].value)

	// This executes the auto action in non splits.
	useEffect(() => {
		console.log("Endturn: " + endPlayerTurn)
		if (endPlayerTurn > 0) {
			console.log("If this fires does it actually fix anything?")
		} else {
			if (dealerCards[0].value2 === 1 && dealerCards[1].value2 === 1) {
				console.log("THIS SHOULD TELL IF IT BROKE OR NOT: I think this does nothing")
			}
			console.log(
				"Is the dealerCardTotal less than 21 or a product of two Aces: " + dealerCardTotal < 21 ||
					(dealerCards[0].value2 === 1 && dealerCards[1].value2 === 1)
			)
			if (yourCards2[0] && endPlayerTurn === 0) {
				// Split has occurred // Also we can double, just not after hitting in a hand
				console.log("Taking a Split Action")
				setAutoSplitSwitch((t) => t + 1)
			} else if (
				yourCards.length > 1 &&
				(dealerCardTotal < 21 || (dealerCards[0].value2 === 1 && dealerCards[1].value2 === 1)) &&
				endPlayerTurn === 0 &&
				yourCards2.length < 1
			) {
				if (automateFlag && bust === 0) {
					setTimeout(() => {
						// splitting()
						// setAutoSplitSwitch((t) => t + 1)
						// return
						if (yourCards[0].value2 === 1 && yourCards[1].value2 === 1) {
							splitting()
						} else if (
							yourCards[0].value === yourCards[1].value &&
							yourCards.length === 2 &&
							cardTotal < 22
							// Add a condition for two drawn Aces
						) {
							// No split
							// Pair
							console.log("PAIR HAND")
							switch (yourCards[0].value) {
								case 2:
								case 3:
									faceUpCard <= 7 ? splitting() : playerHit()
									break
								case 4:
									faceUpCard === 5 || faceUpCard === 6 ? playerHit() : splitting()
									break
								case 5:
									faceUpCard <= 9 ? doubleDown() : playerHit()
									break
								case 6:
									faceUpCard <= 6 ? splitting() : playerHit()
									break
								case 7:
									faceUpCard <= 7 ? splitting() : playerHit()
									break
								case 8:
									splitting()
									break
								case 9:
									faceUpCard === 7 || faceUpCard >= 10 ? stand() : splitting()
									break
								case 10:
									stand()
									break
							}
						} else if (
							(yourCards[0].value === 11 || yourCards[1].value === 11) &&
							yourCards.map((x) => x.value).reduce((x, y) => x + y) <= 21
						) {
							// Soft Hand and Aces not reduced
							console.log("SOFT HAND")
							switch (cardTotal) {
								case 13:
								case 14:
									faceUpCard === 5 || faceUpCard === 6 ? doubleDown() : playerHit()
									break
								case 15:
								case 16:
									faceUpCard <= 3 || faceUpCard >= 7 ? playerHit() : doubleDown()
									break
								case 17:
									faceUpCard === 2 || faceUpCard >= 7 ? playerHit() : doubleDown()
									break
								case 18:
									if (faceUpCard === 2 || faceUpCard === 7 || faceUpCard === 8) {
										stand()
									} else if (faceUpCard <= 6) {
										doubleDown()
									} else {
										playerHit()
									}
									break
								case 19:
								case 20:
								case 21:
									stand()
									break
							}
						} else {
							// Hard Hands
							console.log("HARD HAND")
							console.log("CardTotal: " + cardTotal)
							switch (cardTotal) {
								case 5:
								case 6:
								case 7:
								case 8:
									playerHit()
									break
								case 9:
									faceUpCard === 9 || faceUpCard >= 7 ? playerHit() : doubleDown()
									break
								case 10:
									faceUpCard <= 9 ? doubleDown() : playerHit()
									break
								case 11:
									faceUpCard <= 10 ? doubleDown() : playerHit()
									break
								case 12:
									faceUpCard <= 3 || faceUpCard >= 7 ? playerHit() : stand()
									break
								case 13:
								case 14:
								case 15:
								case 16:
									faceUpCard <= 6 ? stand() : playerHit()
									break
								default:
									stand()
							}
						}
					}, 1500)
				}
			} else if (dealerCardTotal === 21) {
			}
		}
	}, [cardTotal, cardTotalChangerChecker])

	const actionIfAuto = {
		display: "none",
	}

	const [autoActions, setAutoActions] = useState()
	const [manualAction, setManualAction] = useState(actionIfAuto)

	useLayoutEffect(() => {
		if (automateFlag) {
			setAutoActions(actionIfAuto)
			setManualAction()
		}
	}, [])

	const [hiddedCard, setHiddedCard] = useState(
		process.env.PUBLIC_URL + cards[cardThemeNum].back + "#" + new Date().getTime()
	)

	const [dynamicCardTotal, setdynamicCardTotal] = useState(dealerCards[1].value)

	useEffect(() => {
		if (endPlayerTurn === 1) {
			setHiddedCard(dealerCardOne)
			setdynamicCardTotal(dealerCardTotal)
		}
	}, [endPlayerTurn])

	return (
		<div>
			<div style={manualOrAutomated}>
				<div>{outcomeComponent}</div>
				<div className="block">
					{animationComponent}
					<div className="remainingCards">
						<div>
							<img
								className="drawPile"
								src={process.env.PUBLIC_URL + cardBack}
								height="153.576px"
								width="104.976px"
								alt="Draw pile."
							></img>
						</div>
						<div>{cardsLeft}</div>
					</div>

					<div className="dealerTotal">
						<p style={textColor}>{dynamicCardTotal}</p>
					</div>
					<div className="playerTotal">
						<p style={textColor}>{cardTotal}</p>
					</div>

					<div className="dealerCardsWrap">
						<div className="load">
							<img
								src={process.env.PUBLIC_URL + dealerCardOne}
								// when this onload fires it reveals the real card and its animation
								onLoad={dealLoad1}
								height="199.6488px"
								width="136.4688px"
							></img>
						</div>

						{dealerLoad1 && (
							<motion.div
								initial={initialSetting}
								animate={animateSettingAlt}
								transition={transitionSetting}
								className="firstCard"
							>
								<img
									src={process.env.PUBLIC_URL + hiddedCard}
									onLoad={timeCheck}
									height="199.6488px"
									width="136.4688px"
									alt={cards[cardThemeNum][dealerCards[0].suit][dealerCards[0].card].alt}
								></img>
							</motion.div>
						)}

						<div className="load">
							<img
								src={process.env.PUBLIC_URL + dealerCardTwo}
								// when this onload fires it reveals the real card and its animation
								onLoad={dealLoad2Check}
								height="199.6488px"
								width="136.4688px"
							></img>
						</div>

						{dealerLoad2 && ( // More of this
							<motion.div
								initial={initialSetting}
								animate={animateSetting}
								transition={transitionSetting}
								className="otherCard"
							>
								<img
									src={process.env.PUBLIC_URL + dealerCardTwo}
									height="199.6488px"
									width="136.4688px"
									alt={cards[cardThemeNum][dealerCards[1].suit][dealerCards[1].card].alt}
								></img>
							</motion.div>
						)}

						<div className="load">
							<img
								src={process.env.PUBLIC_URL + dealerThird}
								onLoad={addThird}
								height="199.6488px"
								width="136.4688px"
							></img>
						</div>

						{additional && dealerThree && (
							<motion.div
								initial={initialSetting}
								animate={animateSettingAlt}
								transition={transitionSetting}
								className="thirdCard"
								style={thirdDealerDisplay}
							>
								<img
									src={process.env.PUBLIC_URL + dealerThird}
									height="199.6488px"
									width="136.4688px"
									onLoad={dealerDrawKeyAdd}
									alt={dealerThirdAlt}
								></img>
							</motion.div>
						)}

						<div className="load">
							<img
								src={process.env.PUBLIC_URL + dealerFourth}
								onLoad={addFourth}
								height="199.6488px"
								width="136.4688px"
							></img>
						</div>

						{additional > 1 && dealerFour && dealerDrawKey[0] && (
							<motion.div
								initial={initialSetting}
								animate={animateSetting}
								transition={transitionSetting}
								className="fourthCard"
								style={fourthDealerDisplay}
							>
								<img
									src={process.env.PUBLIC_URL + dealerFourth}
									onLoad={dealerDrawKeyAdd}
									height="199.6488px"
									width="136.4688px"
									alt={dealerFourthAlt}
								></img>
							</motion.div>
						)}

						<div className="load">
							<img
								src={process.env.PUBLIC_URL + dealerFifth}
								onLoad={addFifth}
								height="199.6488px"
								width="136.4688px"
							></img>
						</div>

						{additional > 2 && dealerFive && dealerDrawKey[1] && (
							<motion.div
								initial={initialSetting}
								animate={animateSettingAlt}
								transition={transitionSetting}
								className="fifthCard"
								style={fifthDealerDisplay}
							>
								<img
									src={process.env.PUBLIC_URL + dealerFifth}
									onLoad={dealerDrawKeyAdd}
									height="199.6488px"
									width="136.4688px"
									alt={dealerFifthAlt}
								></img>
							</motion.div>
						)}

						<div className="load">
							<img
								src={process.env.PUBLIC_URL + dealerSixth}
								onLoad={addSixth}
								height="199.6488px"
								width="136.4688px"
							></img>
						</div>

						{additional > 3 && dealerSix && dealerDrawKey[2] && (
							<motion.div
								initial={initialSetting}
								animate={animateSetting}
								transition={transitionSetting}
								className="sixthCard"
								style={sixthDealerDisplay}
							>
								<img
									src={process.env.PUBLIC_URL + dealerSixth}
									onLoad={dealerDrawKeyAdd}
									height="199.6488px"
									width="136.4688px"
									alt={dealerSixthAlt}
								></img>
							</motion.div>
						)}

						<div className="load">
							<img
								src={process.env.PUBLIC_URL + dealerSeventh}
								onLoad={addSeventh}
								height="199.6488px"
								width="136.4688px"
							></img>
						</div>

						{additional > 4 && dealerSeven && dealerDrawKey[3] && (
							<motion.div
								initial={initialSetting}
								animate={animateSettingAlt}
								transition={transitionSetting}
								className="seventhCard"
								style={seventhDealerDisplay}
							>
								<img
									src={process.env.PUBLIC_URL + dealerSeventh}
									height="199.6488px"
									width="136.4688px"
									alt={dealerSeventhAlt}
								></img>
							</motion.div>
						)}
					</div>

					<div className="playerCardsWrap">
						<div className="load">
							<img
								src={process.env.PUBLIC_URL + playerCardOne}
								// when this onload fires it reveals the real card and its animation
								onLoad={load1}
								height="199.6488px"
								width="136.4688px"
							></img>
						</div>

						{cardLoad1 && (
							<motion.div
								initial={initial} // initial
								animate={card1Animate}
								transition={card1Transition}
								className="firstCard"
								// style={card1Style}
							>
								<img
									src={process.env.PUBLIC_URL + playerCardOne}
									onLoad={timeCheck}
									height="199.6488px"
									width="136.4688px"
									alt={cards[cardThemeNum][yourCards[0].suit][yourCards[0].card].alt}
								></img>
							</motion.div>
						)}

						<div className="load">
							<img
								src={process.env.PUBLIC_URL + playerCardTwo}
								// onload={timeCheck}
								onLoad={load2Check} // I want to do another timeCheck to compare times between first and last; the time between
								// the first card animating and the next card loading, if the time is 0 then add 2 ticks if greater than go immidiately
								height="199.6488px"
								width="136.4688px"
							></img>
						</div>

						{cardLoad2 && (
							<motion.div
								initial={initial}
								animate={card2Animate}
								transition={card2Transition}
								className="otherCard"
							>
								<img
									src={process.env.PUBLIC_URL + playerCardTwo}
									// onLoad={timeCheck}
									height="199.6488px"
									width="136.4688px"
									alt={cards[cardThemeNum][yourCards[1].suit][yourCards[1].card].alt}
								></img>
							</motion.div>
						)}

						<div className="load">
							<img
								src={process.env.PUBLIC_URL + playerThird}
								onLoad={timer3}
								height="199.6488px"
								width="136.4688px"
							></img>
						</div>

						{playerTimer > 2 && (
							<motion.div
								initial={initial}
								animate={card3Animate}
								transition={card3Transition}
								className="thirdCard"
								style={thirdDisplay}
							>
								<img
									src={process.env.PUBLIC_URL + playerThird}
									height="199.6488px"
									width="136.4688px"
									alt={playerThirdAlt}
								></img>
							</motion.div>
						)}

						<div className="load">
							<img
								src={process.env.PUBLIC_URL + playerFourth}
								onLoad={timer4}
								height="199.6488px"
								width="136.4688px"
							></img>
						</div>

						{playerTimer > 3 && (
							<motion.div
								initial={initial}
								animate={card4Animate}
								transition={card4Transition}
								className="fourthCard"
								style={fourthDisplay}
							>
								<img
									src={process.env.PUBLIC_URL + playerFourth}
									height="199.6488px"
									width="136.4688px"
									alt={playerFourthAlt}
								></img>
							</motion.div>
						)}

						<div className="load">
							<img
								src={process.env.PUBLIC_URL + playerFifth}
								onLoad={timer5}
								height="199.6488px"
								width="136.4688px"
							></img>
						</div>

						{playerTimer > 4 && (
							<motion.div
								initial={initial}
								animate={card5Animate}
								transition={card5Transition}
								className="fifthCard"
								style={fifthDisplay}
							>
								<img
									src={process.env.PUBLIC_URL + playerFifth}
									height="199.6488px"
									width="136.4688px"
									alt={playerFifthAlt}
								></img>
							</motion.div>
						)}

						<div className="load">
							<img
								src={process.env.PUBLIC_URL + playerSixth}
								onLoad={timer6}
								height="199.6488px"
								width="136.4688px"
							></img>
						</div>

						{playerTimer > 5 && (
							<motion.div
								initial={initial}
								animate={card6Animate}
								transition={card6Transition}
								className="sixthCard"
								style={sixthDisplay}
							>
								<img
									src={process.env.PUBLIC_URL + playerSixth}
									height="199.6488px"
									width="136.4688px"
									alt={playerSixthAlt}
								></img>
							</motion.div>
						)}

						<div className="load">
							<img
								src={process.env.PUBLIC_URL + playerSeventh}
								onLoad={timer7}
								height="199.6488px"
								width="136.4688px"
							></img>
						</div>

						{playerTimer > 6 && (
							<motion.div
								initial={initial}
								animate={card7Animate}
								transition={card7Transition}
								className="seventhCard"
								style={seventhDisplay}
							>
								<img
									src={process.env.PUBLIC_URL + playerSeventh}
									height="199.6488px"
									width="136.4688px"
									alt={playerSeventhAlt}
								></img>
							</motion.div>
						)}
					</div>

					<div className="playerCards2Wrap">
						{hand2Timer > 0 && (
							<motion.div
								initial={hand2Card1Initial}
								animate={hand2Card1Animate}
								transition={hand2Card1Transition}
								className="splitCard1"
								style={splitCard1Display}
							>
								<img
									src={process.env.PUBLIC_URL + splitCard1}
									height="99.8244"
									width="68.2344px"
									alt={splitCard1Alt}
								></img>
							</motion.div>
						)}

						<div className="load">
							<img
								src={process.env.PUBLIC_URL + splitCard2}
								onLoad={split2Load}
								height="199.6488px"
								width="136.4688px"
							></img>
						</div>

						{hand2Timer > 1 && split2Loaded && (
							<motion.div
								initial={hand2Card2Initial}
								animate={hand2Card2Animate}
								transition={hand2Card2Transition}
								className="splitCard2"
								style={splitCard2Display}
							>
								<img
									src={process.env.PUBLIC_URL + splitCard2}
									height="99.8244"
									width="68.2344px"
									alt={splitCard2Alt}
								></img>
							</motion.div>
						)}
					</div>

					<div style={autoActions} className="playerActions">
						{standElement}
						{hitElement}
						{doubleDownElement}
						{splitElement}
					</div>

					<div style={manualAction} className="playerActions">
						<Button buttonTheme={buttonTheme} content={"Cancel"} func={cancelAuto}></Button>
					</div>

					<div className="moneyWrapperTable">
						<p style={textColor} id="bet">
							${yourMoneyUpdater}
						</p>
						<p style={textColor} id="currentBet">
							Your Money
						</p>
					</div>

					<div className="cBet">
						<p style={textColor} id="bet">
							${bet}
						</p>
						<p style={textColor} id="currentBet">
							Current bet
						</p>
					</div>
				</div>

				<div className="one">
					<a href="https://github.com/TheDemonOn/AutoJack" target="_blank" rel="noopener">
						<GithubSVG iconTheme={iconTheme}></GithubSVG>
					</a>
				</div>

				<div className="two">{themesButtonToggle}</div>
			</div>
			<div className="one">
				<a href="https://github.com/TheDemonOn/AutoJack" target="_blank" rel="noopener">
					<GithubSVG iconTheme={iconTheme}></GithubSVG>
				</a>
			</div>
			<div className="two">
				<a onClick={settingsFlagSwitch}>
					<ThemesIcon iconTheme={iconTheme}></ThemesIcon>
				</a>
			</div>
		</div>
	)
}

function App() {
	const [roundsLeft, setRoundsLeft] = useState(0)

	const updateRounds = (rounds) => {
		console.log(rounds)
		setRoundsLeft(rounds)
	}

	const cancelAuto = () => {
		setRoundsLeft(0)
	}

	const decrementRounds = () => {
		setRoundsLeft((x) => x - 1)
	}

	// This is the current/default bodyTheme
	const [bodyTheme, setBodyTheme] = useState("bodyTheme1")

	// Sets the body to the default of bodyTheme2
	useEffect(() => {
		document.body.classList.add(bodyTheme)
	}, [])

	const bodyChange = (newBodyTheme) => {
		document.body.classList.remove(bodyTheme)
		document.body.classList.add(newBodyTheme)
	}

	const goldTheme = {
		borderColor: "#e7bd52",
		backgroundColor: "rgba(40, 47, 93, .5)",
		color: "#e7bd52",
	}

	const goldColor = {
		color: "#e7bd52",
	}
	const goldColorString = "#e7bd52"

	const purpleTheme = {
		borderColor: "#392950",
		backgroundColor: "#392950",
		color: "white",
	}

	const purpleColor = {
		color: "#392950",
	}
	const purpleColorString = "#392950"

	const redTheme = {
		borderColor: "#c12f2f",
		backgroundColor: "rgba(244, 244, 244, .2)",
		color: "#c12f2f",
	}

	const redColor = {
		color: "#c12f2f",
	}
	const redColorString = "#c12f2f"

	const greenTheme = {
		borderColor: "#48b74d",
		backgroundColor: "rgba(42, 31, 73, .5)",
		color: "#48b74d",
	}

	const greenColor = {
		color: "#48b74d",
	}
	const greenColorString = "#48b74d"

	// This is just inserted into buttonTheme
	// const [themeColor, setThemeColor] = useState(purpleTheme)

	// The three states that affect everything are the textColor, buttonTheme(themeColor), and iconTheme
	const [textColor, setTextColor] = useState(goldColor)

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
		outline: "none",
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
		outline: "none",
	}

	// Format: object; This should stay consistent
	const [buttonTheme, setButtonTheme] = useState({
		...buttonSettings,
		...goldTheme,
	})

	const [altButtonTheme, setAltButtonTheme] = useState({
		...altButtonSettings,
		...goldTheme,
	})

	// Need to add the change to the function theme change
	const [altButtonThemeActive, setAltButtonThemeActive] = useState({
		...altButtonSettings,
		...goldTheme,
		backgroundColor: "#e7bd52",
		color: "rgba(40, 47, 93, 1)",
	})

	// Format: string
	const [iconTheme, setIconTheme] = useState(goldColorString)

	const [cardThemeNum, setCardThemeNum] = useState("t1")

	const [displayCard, setDisplayCard] = useState(cards[cardThemeNum].spade.ace.src)

	const t1ThemeChange = () => {
		setDisplayCard(cards.t1.spade.ace.src)
		setButtonTheme({
			...buttonSettings,
			...goldTheme,
		})
		setAltButtonTheme({
			...altButtonSettings,
			...goldTheme,
		})
		setAltButtonThemeActive({
			...altButtonSettings,
			...goldTheme,
			backgroundColor: "#e7bd52",
			color: "rgba(40, 47, 93, 1)",
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
			...purpleTheme,
		})
		setAltButtonTheme({
			...altButtonSettings,
			...purpleTheme,
		})
		setAltButtonThemeActive({
			...altButtonSettings,
			...purpleTheme,
			backgroundColor: "#DBD8DF",
			color: "#392950",
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
			...redTheme,
		})
		setAltButtonTheme({
			...altButtonSettings,
			...redTheme,
		})
		setAltButtonThemeActive({
			...altButtonSettings,
			...redTheme,
			backgroundColor: "#c12f2f",
			color: "#fff",
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
			...greenTheme,
		})
		setAltButtonTheme({
			...altButtonSettings,
			...greenTheme,
		})
		setAltButtonThemeActive({
			...altButtonSettings,
			...greenTheme,
			borderColor: "rgba(42, 31, 73, 1)",
			backgroundColor: "#48b74d",
			color: "rgba(42, 31, 73, 1)",
		})
		setTextColor(greenColor)
		setIconTheme(greenColorString)
		bodyChange("bodyTheme4")
		setBodyTheme("bodyTheme4")
		setCardThemeNum("t4")
	}

	const [storedTheme, setStoredTheme] = useState(localStorage.getItem("theme") || "")

	useEffect(() => {
		localStorage.setItem("theme", bodyTheme)
	}, [bodyTheme])

	useEffect(() => {
		switch (storedTheme) {
			case "bodyTheme1":
				setDisplayCard(cards.t1.spade.ace.src)
				setButtonTheme({
					...buttonSettings,
					...goldTheme,
				})
				setAltButtonTheme({
					...altButtonSettings,
					...goldTheme,
				})
				setAltButtonThemeActive({
					...altButtonSettings,
					...goldTheme,
					backgroundColor: "#e7bd52",
					color: "rgba(40, 47, 93, 1)",
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
					...purpleTheme,
				})
				setAltButtonTheme({
					...altButtonSettings,
					...purpleTheme,
				})
				setAltButtonThemeActive({
					...altButtonSettings,
					...purpleTheme,
					backgroundColor: "#DBD8DF",
					color: "#392950",
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
					...redTheme,
				})
				setAltButtonTheme({
					...altButtonSettings,
					...redTheme,
				})
				setAltButtonThemeActive({
					...altButtonSettings,
					...redTheme,
					backgroundColor: "#c12f2f",
					color: "#fff",
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
					...greenTheme,
				})
				setAltButtonTheme({
					...altButtonSettings,
					...greenTheme,
				})
				setAltButtonThemeActive({
					...altButtonSettings,
					...greenTheme,
					borderColor: "rgba(42, 31, 73, 1)",
					backgroundColor: "#48b74d",
					color: "rgba(42, 31, 73, 1)",
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

	const [automateFlag, setAutomateFlag] = useState(0)
	const automateFlagSwitch = () => {
		setAutomateFlag(1)
		setHomeFlag(0)
	}
	const automateFlagSwitch0 = () => {
		setAutomateFlag(0)
	}

	const [deck, setDeck] = useState([
		{
			value: 11,
			value2: 1,
			name: "Ace of Clubs",
			suit: "club",
			card: "ace",
		},
		{
			value: 2,
			name: "Two of Clubs",
			suit: "club",
			card: "two",
		},
		{
			value: 3,
			name: "Three of Clubs",
			suit: "club",
			card: "three",
		},
		{
			value: 4,
			name: "Four of Clubs",
			suit: "club",
			card: "four",
		},
		{
			value: 5,
			name: "Five of Clubs",
			suit: "club",
			card: "five",
		},
		{
			value: 6,
			name: "Six of Clubs",
			suit: "club",
			card: "six",
		},
		{
			value: 7,
			name: "Seven of Clubs",
			suit: "club",
			card: "seven",
		},
		{
			value: 8,
			name: "Eight of Clubs",
			suit: "club",
			card: "eight",
		},
		{
			value: 9,
			name: "Nine of Clubs",
			suit: "club",
			card: "nine",
		},
		{
			value: 10,
			name: "Ten of Clubs",
			suit: "club",
			card: "ten",
		},
		{
			value: 10,
			name: "Jack of Clubs",
			suit: "club",
			card: "jack",
		},
		{
			value: 10,
			name: "Queen of Clubs",
			suit: "club",
			card: "queen",
		},
		{
			value: 10,
			name: "King of Clubs",
			suit: "club",
			card: "king",
		},
		{
			value: 11,
			value2: 1,
			name: "Ace of Diamonds",
			suit: "diamond",
			card: "ace",
		},
		{
			value: 2,
			name: "Two of Diamonds",
			suit: "diamond",
			card: "two",
		},
		{
			value: 3,
			name: "Three of Diamonds",
			suit: "diamond",
			card: "three",
		},
		{
			value: 4,
			name: "Four of Diamonds",
			suit: "diamond",
			card: "four",
		},
		{
			value: 5,
			name: "Five of Diamonds",
			suit: "diamond",
			card: "five",
		},
		{
			value: 6,
			name: "Six of Diamonds",
			suit: "diamond",
			card: "six",
		},
		{
			value: 7,
			name: "Seven of Diamonds",
			suit: "diamond",
			card: "seven",
		},
		{
			value: 8,
			name: "Eight of Diamonds",
			suit: "diamond",
			card: "eight",
		},
		{
			value: 9,
			name: "Nine of Diamonds",
			suit: "diamond",
			card: "nine",
		},
		{
			value: 10,
			name: "Ten of Diamonds",
			suit: "diamond",
			card: "ten",
		},
		{
			value: 10,
			name: "Jack of Diamonds",
			suit: "diamond",
			card: "jack",
		},
		{
			value: 10,
			name: "Queen of Diamonds",
			suit: "diamond",
			card: "queen",
		},
		{
			value: 10,
			name: "King of Diamonds",
			suit: "diamond",
			card: "king",
		},
		{
			value: 11,
			value2: 1,
			name: "Ace of Hearts",
			suit: "heart",
			card: "ace",
		},
		{
			value: 2,
			name: "Two of Hearts",
			suit: "heart",
			card: "two",
		},
		{
			value: 3,
			name: "Three of Hearts",
			suit: "heart",
			card: "three",
		},
		{
			value: 4,
			name: "Four of Hearts",
			suit: "heart",
			card: "four",
		},
		{
			value: 5,
			name: "Five of Hearts",
			suit: "heart",
			card: "five",
		},
		{
			value: 6,
			name: "Six of Hearts",
			suit: "heart",
			card: "six",
		},
		{
			value: 7,
			name: "Seven of Hearts",
			suit: "heart",
			card: "seven",
		},
		{
			value: 8,
			name: "Eight of Hearts",
			suit: "heart",
			card: "eight",
		},
		{
			value: 9,
			name: "Nine of Hearts",
			suit: "heart",
			card: "nine",
		},
		{
			value: 10,
			name: "Ten of Hearts",
			suit: "heart",
			card: "ten",
		},
		{
			value: 10,
			name: "Jack of Hearts",
			suit: "heart",
			card: "jack",
		},
		{
			value: 10,
			name: "Queen of Hearts",
			suit: "heart",
			card: "queen",
		},
		{
			value: 10,
			name: "King of Hearts",
			suit: "heart",
			card: "king",
		},
		{
			value: 11,
			value2: 1,
			name: "Ace of Spades",
			suit: "spade",
			card: "ace",
		},
		{
			value: 2,
			name: "Two of Spades",
			suit: "spade",
			card: "two",
		},
		{
			value: 3,
			name: "Three of Spades",
			suit: "spade",
			card: "three",
		},
		{
			value: 4,
			name: "Four of Spades",
			suit: "spade",
			card: "four",
		},
		{
			value: 5,
			name: "Five of Spades",
			suit: "spade",
			card: "five",
		},
		{
			value: 6,
			name: "Six of Spades",
			suit: "spade",
			card: "six",
		},
		{
			value: 7,
			name: "Seven of Spades",
			suit: "spade",
			card: "seven",
		},
		{
			value: 8,
			name: "Eight of Spades",
			suit: "spade",
			card: "eight",
		},
		{
			value: 9,
			name: "Nine of Spades",
			suit: "spade",
			card: "nine",
		},
		{
			value: 10,
			name: "Ten of Spades",
			suit: "spade",
			card: "ten",
		},
		{
			value: 10,
			name: "Jack of Spades",
			suit: "spade",
			card: "jack",
		},
		{
			value: 10,
			name: "Queen of Spades",
			suit: "spade",
			card: "queen",
		},
		{
			value: 10,
			name: "King of Spades",
			suit: "spade",
			card: "king",
		},
	])

	const deckUpdate = (value) => {
		setDeck(value)
	}
	// const deckUpdate = value => { This is for iterating state not replacing it
	//   setDeck(deck => [...deck, value])
	// }

	// How many decks are being used.
	const [deckCount, setDeckCount] = useState(1)

	// If there is a state we want children to modify we use this structure of function and pass it down.
	const theDeckCountValue = (count) => {
		// This is a function that is being passed to the child of start screen so that deckCount in the parent can be modified from there.
		setDeckCount(count)
	}

	useEffect(() => {
		// If deck is ever manually updated update the deck
		if (deckCount > 0) {
			let localDeck = deck
			deck.length = 52
			for (let i = 1; i < deckCount; i++) {
				deck.push(...localDeck.slice(0, 52))
			}
		}
		console.log(deck)
	}, [deckCount])

	const [cutPosition, setCutPosition] = useState("none")
	const shoeCount = (amount) => {
		setCutPosition(amount)
	}

	const [discardPile, setDiscardPile] = useState([]) // discardPile is not iterable // Objects are outside the array
	const discardPileUpdate = (value) => {
		discardPile.push(value)
	}
	const realDiscardPileUpdate = (value) => {
		setDiscardPile((discardPile) => [...discardPile, value])
	}

	// Used to determine if the startScreen should load.
	const [startFlag, setStartFlag] = useState(1)
	const startFlagSwitch = () => {
		setStartFlag(0)
	}
	const startFlagSwitch1 = () => {
		setStartFlag(1)
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
	const yourCardsValue = (value) => {
		setYourCards(value)
	}

	// To be used when splitting cards
	const [yourCards2, setYourCards2] = useState([])
	const yourCardsValue2 = (value) => {
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

	const otherPlayersValue = (value) => {
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
	const playerBetUpdate = (value) => {
		setPlayerBet(value)
	}

	function playerBetModify(action, value) {
		if (action === "add") {
			setPlayerBet((prevBet) => prevBet + value)
		} else if (action === "subtract") {
			setPlayerBet((prevBet) => prevBet - value)
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
		setDiscardPile((discardPile) => [...discardPile, card])
		setDeck(thisDeck)
		yourCards.push(card)
		setYourCards([...yourCards])
		console.log(yourCards)
	}

	const playerHit2 = () => {
		let thisDeck = deck
		let cardIndex = Math.floor(Math.random() * thisDeck.length)
		let card = thisDeck[cardIndex]
		thisDeck.splice(cardIndex, 1)
		setDiscardPile((discardPile) => [...discardPile, card]) // We use two ways of doing this need to see if there is a difference
		setDeck(thisDeck)
		yourCards2.push(card)
		// Now update hand
		setYourCards2((yourCards2) => [...yourCards2])
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

	const yourMoneyValue = (value) => {
		setYourMoney(value)
	}

	const [result, setResult] = useState([])

	const [pastResults, setPastResults] = useState([])

	const [tableStart, setTableStart] = useState(1)
	const tableStartZero = () => {
		setTableStart((x) => x + 1)
	}
	const tableStartOne = () => {
		setTableStart(1)
	}

	const [automatedFlag, setAutomatedFlag] = useState(0)
	const autoFlag = () => {
		homeFlagSwitch()
		startFlagSwitch()
		roundStartFlagSwitch()
		setAutomatedFlag(1)
	}

	// Need to figure out why I can't go forward to roundStart when I can go back

	// window.onpopstate = () => {
	//   // console.log(window.history.state)
	//   if (discardPile.length) {
	//   } else {
	//     switch (window.history.state) {
	//       case "Home":
	//         setHomeFlag(1)
	//         setSettingsFlag(0)
	//         setStartFlag(1)
	//         break
	//       case "ThemeSettings":
	//         console.log("setting flag 1")
	//         setSettingsFlag(1)
	//         break
	//       case "StartScreen":
	//         setHomeFlag(0)
	//         setSettingsFlag(0)
	//         setStartFlag(1)
	//         break
	//     }
	//   }
	// }

	return (
		<LoadOrder
			startFlagSwitch={startFlagSwitch}
			startFlagSwitch1={startFlagSwitch1}
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
			cutPosition={cutPosition}
			tableStart={tableStart}
			tableStartZero={tableStartZero}
			tableStartOne={tableStartOne}
			setDiscardPile={setDiscardPile}
			realDiscardPileUpdate={realDiscardPileUpdate}
			deckUpdate={deckUpdate}
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
			automateFlagSwitch={automateFlagSwitch}
			automateFlag={automateFlag}
			automateFlagSwitch0={automateFlagSwitch0}
			autoFlag={autoFlag}
			automatedFlag={automatedFlag}
			roundsLeft={roundsLeft}
			updateRounds={updateRounds}
			decrementRounds={decrementRounds}
			cancelAuto={cancelAuto}
		></LoadOrder>
	)
}

export default App
