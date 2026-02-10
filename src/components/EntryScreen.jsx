function EntryScreen({ onSelect }) {
  return (
    <div className="entry-screen">
      <h1>What are you in the mood for? 🤔</h1>

      <div className="cards">
        <button
          className="card interactive"
          onClick={() => onSelect('food')}
        >
          <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D" alt="Food" />
          <p>🍔 Food</p>
        </button>

        <button
          className="card interactive"
          onClick={() => onSelect('drink')}
        >
          <img src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Drink" />
          <p>🥤 Drink</p>
        </button>
      </div>
    </div>
  )
}

export default EntryScreen
