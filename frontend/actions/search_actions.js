import * as SearchAPIUtil from '../utils/search_utils'

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS"

const receiveSearchResults = (searchResults) => ({
    type: RECEIVE_SEARCH_RESULTS,
    searchResults
})

export const getSearchResults = searchString => dispatch =>
    SearchAPIUtil.getSearchResults(searchString)
    .then(results => dispatch(receiveSearchResults(results)))