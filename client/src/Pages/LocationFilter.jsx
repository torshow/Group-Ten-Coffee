function LocationFilter({
  coffees,
  searchText,
  onSearchChange,
  selectedOrigins,
  onOriginToggle
}) {
  
  const uniqueOrigins = [...new Set(coffees.map((coffee) => coffee.origin))]

  return (
    <div className="sidebar">
      <input
        type="text"
        className="search-input"
        placeholder="Search"
        value={searchText}
        onChange={onSearchChange}
      />
      {uniqueOrigins.map((origin) => (
        <label key={origin} className="location-option">
          <input
            type="checkbox"
            checked={selectedOrigins.includes(origin)}
            onChange={() => onOriginToggle(origin)}
          />
          {origin}
        </label>
      ))}
    </div>
  )
}

export default LocationFilter