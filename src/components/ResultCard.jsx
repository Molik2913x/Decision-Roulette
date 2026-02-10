function ResultCard({ item, spinning, onDecideAgain }) {
  if (!item && !spinning) return null

  return (
    <div className="result-card">
      <h1>
        {spinning ? 'Deciding for you… 🤔' : 'Your decision:'}
      </h1>

      <div className={`card highlight ${spinning ? 'spinning' : 'revealed'}`}>
        {spinning ? (
          <p className="spinner-text">🎡 Spinning the wheel…</p>
        ) : (
          <>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </>
        )}
      </div>

      {!spinning && (
        <button
          className="decide-again interactive"
          onClick={onDecideAgain}
        >
          Decide Again
        </button>
      )}
    </div>
  )
}

export default ResultCard
