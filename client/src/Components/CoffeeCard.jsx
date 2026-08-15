function coffeeCard({ coffee }) {
  return (
    <div className="coffee-card">
      <h3>{coffee.name}</h3>
      <p>{coffee.description}</p>
      <p>Origin: {coffee.origin}</p>
      <p>Price: ${coffee.price.toFixed(2)}</p>
    </div>
  )
}

export default coffeeCard;