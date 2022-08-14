import React from 'react'
import './FilterCheckbox.css'

function FilterCheckbox({ onChange, isChecked }) {

  function handleCheckboxChange (evt) {
    onChange(evt.target.checked)
    localStorage.setItem('userCheckedState', JSON.stringify(evt.target.checked))
  }

  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__container">
        <input className="filter-checkbox__input" type="checkbox" onClick={handleCheckboxChange} checked={isChecked ? true : false}/>
        <span className="filter-checkbox__checkmark"></span>
      </label>
      <p className="filter-checkbox__title">Короткометражки</p>
    </div>
  )
}

export default FilterCheckbox
