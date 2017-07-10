export const mutations = {
  MOVING_TITLE (state, {title}) {
    state.title = title
  },
  MOVING_LIST (state, {list}) {
    state.movingList = list
  },
  PAGE_LOAD (state, {pageload}) {
    state.pageload = pageload
  },
  UP_COMBODY (state, {upcomBody}) {
    state.upcomBody = upcomBody
  },
  MOVIE_CITY (state, {city}) {
    state.city = city
  },
  LOAD_TOP250 (state, {ranking250}) {
    state.ranking250 = ranking250
  },
  PAGE_START (state, {start}) {
    state.start = start
  },
  SEARCH_TEXT (state, {searchText}) {
    state.searchText = searchText
  },
  SEARCH_LIST (state, {searchList}) {
    state.searchList = searchList
  },
  MOVING_ID (state, {id}) {
    state.id = id
  },
  MOVING_DETAIL (state, {movieDetail}) {
    state.movieDetail = movieDetail
  },
  CELEBRITY_ID (state, {id}) {
    state.celebrityId = id
  },
  CELEBRITY_DETAIL (state, {celebrityDetail}) {
    state.celebrityDetail = celebrityDetail
  },
  US_BOX_LIST (state, {us_boxList}) {
    state.us_boxList = us_boxList
  }
}
