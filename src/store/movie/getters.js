export const getters = {
  movingList: state => {
    for (let subject of state.movingList.subjects) {
      subject.rating.average = subject.rating.average / 2
    }
    return state.movingList
  },
  searchList: state => {
    for (let subject of state.searchList.subjects) {
      subject.rating.average = subject.rating.average / 2
    }
    return state.searchList
  },
  movieDetail: state => {
    state.movieDetail.rating.average = state.movieDetail.rating.average / 2
    return state.movieDetail
  }
}
