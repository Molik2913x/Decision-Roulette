import { useState, useEffect } from 'react'
import Cursor from './components/Cursor'
import ProTip from './components/ProTip'
import EntryScreen from './components/EntryScreen'
import CategoryStep from './components/CategoryStep'
import ResultCard from './components/ResultCard'
import foodData from './data/food.json'
import drinkData from './data/drink.json'
import Footer from './components/Footer'


const tips = [
  "Water is always the best 💧",
  "Trust your first instinct after the spin 🎯",
  "If you’re disappointed by the result… you already know the answer 😉",
  "Comfort food beats fancy food on bad days 🍕❤️",
  "Hydration first, indulgence second 🥤✨",
  "Overthinking ruins good decisions 🧠💭",
  "You don’t need the perfect option — just a good one ✨",
  "Blame the wheel, not yourself 🎡😌",
  "The wheel has spoken 🔮",
  "Late-night decisions hit differently 🌙✨",
  "Take a breath before you spin 😮‍💨",
  "Yes, this tip is random too 🤷‍♂️🎲",
  "Still reading? The wheel is waiting 👀🎡",
  "Clarity comes after commitment ✨🪞",
  "Small spins, real outcomes 🎯",
  "Mom’s food is always OG ❤️",
  "Try something spicy for a kick 🔥",
  "Balance your meal with veggies 🥦",
  "Hydrate before you decide 🥤"
]

function App() {
  const [step, setStep] = useState('entry') // 'entry', 'category', 'result'
  const [type, setType] = useState(null) // 'food' or 'drink'
  const [category, setCategory] = useState(null)
  const [dark, setDark] = useState(false)
  const [isSpinning, setIsSpinning] = useState(false)
  const [result, setResult] = useState(null)
  const [tip, setTip] = useState(tips[Math.floor(Math.random() * tips.length)])

  // Change tip on step change
  useEffect(() => {
    setTip(tips[Math.floor(Math.random() * tips.length)])
  }, [step])

  useEffect(() => {
  document.body.classList.toggle('dark', dark)
  }, [dark])

  const handleTypeSelect = (selectedType) => {
    setType(selectedType)
    setStep('category')
  }

  const handleCategorySelect = (selectedCategory) => {
  setCategory(selectedCategory)
  setIsSpinning(true)
  setStep('result')

  const data = type === 'food'
    ? foodData[selectedCategory]
    : drinkData[selectedCategory]

  setTimeout(() => {
    const randomItem = data[Math.floor(Math.random() * data.length)]
    setResult(randomItem)
    setIsSpinning(false)
  }, 900)
}

  const handleDecideAgain = () => {
    setStep('entry')
    setType(null)
    setCategory(null)
    setResult(null)
  }

  return (
    <div className={`app ${dark ? 'dark' : ''}`}>
      <Cursor />
      <ProTip tip={tip} />

      <button className='float'
        onClick={() => setDark(!dark)}
        style={{
          position: 'fixed',
          height: 40, 
          width: 40,
          top: 20,
          right: 20,
          borderRadius: '50%',
          padding: 0,
          margin: 0,
                  
        }}
      >
      {dark ? '☀️' : '🌙'}
    </button>

    <main className="content">
      {step === 'entry' && <EntryScreen onSelect={handleTypeSelect} />}
      {step === 'category' && (
        <CategoryStep type={type} onSelect={handleCategorySelect} />
      )}
      {step === 'result' && (
        <ResultCard
          item={result}
          spinning={isSpinning}
          onDecideAgain={handleDecideAgain}
        />
      )}
      <Footer />
    </main>
  </div>
  )
}

export default App