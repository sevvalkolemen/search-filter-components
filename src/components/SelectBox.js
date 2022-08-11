import React from 'react'
import "../style.scss";

function SelectBox() {
  return (
    <div className='component-selectbox'>
        <div className='component-filter'>
            <form action="">
                <ul>
                    <li>
                        <div className="key">Country</div>
                        <div className="value">
                            <select name="" id="">
                                <option value="">Norway</option>
                                <option value="">Turkey</option>
                            </select>
                        </div>
                    </li>
                    <li>
                        <div className="key">City</div>
                        <div className="value">
                            <input type="text" value="Bergen" />
                        </div>
                    </li>
                    <li className='filter-button'>
                        <a href="">Cancel</a>
                        <button type='submit'>Apply Filters</button>
                    </li>
                </ul>
            </form>
        </div>
    </div>
  )
}

export default SelectBox