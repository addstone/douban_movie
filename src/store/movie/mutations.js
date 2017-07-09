export const mutations = {
  MOVING_TITLE (state, {title}) {
    state.title = title
  },
  MOVING_LIST (state, {list}) {
    state.movingList = list
  },
  MOVING_LOADING (state, {loading}) {
    state.loadingMoving = loading
  },
  PAGE_LOAD (state, {pageload}) {
    state.pageload = pageload
  },
  UP_COMBODY (state, {upcomBody}) {
    state.upcomBody = upcomBody
  },
  MOVIE_CITY (state, {city}) {
    state.city = city
    state.loadingMoving = true
  },
  UP_COMING (state, {loading}) {
    state.loadingUpComing = loading
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
  SEARCH_LOADING (state, {loading}) {
    state.searchLoading = loading
  },
  MOVING_ID (state, {id}) {
    state.id = id
  },
  MOVING_DETAIL (state, {movieDetail}) {
    state.movieDetail = movieDetail
  },
  DETAIL_LOADING (state, {loading}) {
    state.loadingDetail = loading
  },
  MOVIE_COMMENT (state, {comment}) {
    state.movieComment = comment
  }
}
