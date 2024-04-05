import './Filter.scss';

const Filter = ({ setFilter }) => {
  const handleClick = (e) => {
    let filterSpans = document.querySelectorAll('#filter-option');
    [...filterSpans].forEach(span => span.classList.remove('focus'));
    e.target.classList.add('focus');
    setFilter(e.target.innerHTML.toLowerCase());
  }
  
  return (
    <div className='filter'>
      <span id='filter-option' onClick={handleClick} className='focus'>All</span>
      <span id='filter-option' onClick={handleClick}>Active</span>
      <span id='filter-option' onClick={handleClick}>Completed</span>
    </div>
  )
}

export default Filter
