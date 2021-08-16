import {useState} from "react";


const Headline = (props) => <h1>{props.text}</h1>

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const Statistics = ({good, neutral, bad}) => {

    const total = good + neutral + bad;
    const average = ((good - bad) / total).toFixed(2);
    const positive = (good / total).toFixed(2)


    if (good || neutral || bad) {
        return (
            <div>
                <StatisticLine text="Good" value={good}/>
                <StatisticLine text="Neutral" value={neutral}/>
                <StatisticLine text="Bad" value={bad}/>
                <StatisticLine text="All" value={total}/>
                <StatisticLine text="Average" value={average}/>
                <StatisticLine text="Positive" value={positive + `${"%"}`}/>
            </div>
        )
    } else {
        return (
            <div>No feedback given</div>
        )
    }
}

const StatisticLine = ({text, value}) => {
    return (
        <div>{text} {value}</div>
    )
}


const App = () => {

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0)

    const setGoodValue = () => {
        setGood(good + 1)
    }

    const setNeutralValue = () => {
        setNeutral(neutral + 1);
    }

    const setBadValue = () => {
        setBad(bad + 1);
    }


    return (
        <div>
            <Headline text="give feedback"/>
            <Button handleClick={setGoodValue} text="good"/>
            <Button handleClick={setNeutralValue} text="neutral"/>
            <Button handleClick={setBadValue} text="bad"/>
            <Headline text="statistics"/>
            <Statistics text="positive" good={good} bad={bad} neutral={neutral}/>
        </div>
    )
}

export default App;
