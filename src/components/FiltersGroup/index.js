import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }
  const onEnterSearchInput = event => {
    const {onFilterSearchInput} = props
    if (event.key === 'Enter') {
      onFilterSearchInput()
    }
  }
  const renderSearchInput = () => {
    const {searchInput} = props
    return (
      <div className="search-input-container">
        <input
          type="search"
          value={searchInput}
          className="search-input"
          placeholder="Search"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }

  const renderCategoriesList = () => {
    const {categoryOptions} = props

    return categoryOptions.map(eachCategory => {
      const {changeCategory, activeCategoryId} = props
      const activeClassName =
        activeCategoryId === eachCategory.categoryId
          ? 'filter-item active-filter'
          : 'filter-item'
      const onClickChangeCategory = () => {
        changeCategory(eachCategory.categoryId)
      }
      return (
        <li
          key={eachCategory.categoryId}
          className="category-list"
          onClick={onClickChangeCategory}
        >
          <p className={activeClassName}>{eachCategory.name}</p>
        </li>
      )
    })
  }

  const renderCategoryFilter = () => (
    <div>
      <h1 className="filter-heading">Category</h1>
      <ul className="category-list-items">{renderCategoriesList()}</ul>
    </div>
  )

  const renderRatingsList = () => {
    const {ratingsList} = props
    return ratingsList.map(eachRating => {
      const {changeRating, activeRatingId} = props
      const activeFilterClass =
        activeRatingId === eachRating.ratingId
          ? 'filter-item active-filter'
          : 'filter-item'
      const onClickChangeRating = () => changeRating(eachRating.ratingId)
      return (
        <li
          className="rating-list-container"
          key={eachRating.ratingId}
          onClick={onClickChangeRating}
        >
          <img
            className="rating-img"
            src={eachRating.imageUrl}
            alt={`rating ${eachRating.ratingId}`}
          />
          <p className={activeFilterClass}>& up</p>
        </li>
      )
    })
  }

  const renderRatingFilter = () => (
    <>
      <h1 className="filter-heading">Rating</h1>
      <ul>{renderRatingsList()}</ul>
    </>
  )

  const {clearFilters} = props
  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderCategoryFilter()}
      {renderRatingFilter()}
      <button
        type="button"
        className="clear-filters-btn"
        onClick={clearFilters}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
