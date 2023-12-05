import './index.css'

const CountryCard = props => {
  const {countryDetails, onDeleteItem} = props
  const {id, name, imageUrl} = countryDetails
  const deleteItem = () => {
    onDeleteItem(id)
  }
  return (
    <li className="country-card" key={id}>
      <img src={imageUrl} alt="thumbnail" className="image" />
      <div className="details">
        <p className="name">{name}</p>
        <button
          className="remove"
          type="button"
          data-testid="remove"
          onClick={deleteItem}
        >
          Remove
        </button>
      </div>
    </li>
  )
}
export default CountryCard
