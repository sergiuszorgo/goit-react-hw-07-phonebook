import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import s from './SearchForm.module.css';
import { phonebookSelectors, changeFilter } from '../../redux/phonebook';

const SearchForm = ({ filter, inputForm }) => {
  return (
    <div className={s.searchForm}>
      <label htmlFor="">
        Find contact by name{' '}
        <input type="text" name="filter" value={filter} onChange={inputForm} />
      </label>
    </div>
  );
};

const mapStateToProps = state => ({
  filter: phonebookSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  inputForm: e => dispatch(changeFilter(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);

SearchForm.propTypes = {
  filter: propTypes.string.isRequired,
  inputForm: propTypes.func.isRequired,
};
