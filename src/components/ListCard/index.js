import './index.css'

const ListCard = props => {
  const {details, onAddItem} = props
  const {id, isVisited, name} = details
  const text = isVisited ? 'Visited' : 'Visit'
  const addItem = () => {
    onAddItem(id)
  }
  return (
    <li className="item" key={id}>
      <p className="country">{name}</p>
      {isVisited === true ? (
        <p className="para">{text}</p>
      ) : (
        <button className="button" type="button" onClick={addItem}>
          {text}
        </button>
      )}
    </li>
  )
}
export default ListCard
