import {utils} from '../../../src/axios/index'
// console.log(Utils)

export const actions = {
  getSearchList ({commit, state}) {
    utils.get('/movie/search', {
      params: {
        q: state.searchText
      }
    }).then(res => {
      commit('SEARCH_LIST', {searchList: res})
      // console.log(state.searchList)
    })
  },
  getIn_theaters ({commit, state}) {
    utils.get('/movie/in_theaters', {
      params: {
        city: state.city
      }
    }).then(res => {
      // console.log(res)
      commit('MOVING_LIST', {list: res})
    })
  },
  getComing_soon ({commit, state}) {
    utils.get('/movie/coming_soon', {
      params: {
        city: state.city,
        start: state.upcomBody.start + 1,
        count: 8
      }
    }).then(res => {
      if (state.upcomBody.subjects && state.upcomBody.subjects.length) {
        res.subjects = state.upcomBody.subjects.concat(res.subjects);
        commit('PAGE_LOAD', {pageload: false})
      }
      commit('UP_COMBODY', {upcomBody: res});
      // console.log(res)
    })
  },
  getTop250 ({commit, state}) {
    utils.get('/movie/top250', {
      params: {
        start: state.start,
        count: 10
      }
    }).then(res => {
      let subject = state.ranking250.subjects
      for (let subject of res.subjects) {
        subject.rating.average = subject.rating.average / 2;
      }
      // 将每次请求返回的res的rating.average / 2后再追加到原有数据上，
      // 在这里操作是为了避免之前已经/2的数据再/2
      if (subject !== undefined) {
        res.subjects = subject.concat(res.subjects)
      }
      commit('LOAD_TOP250', {ranking250: res})
    })
  },
  getMovieDetail ({commit, state}) {
    utils.get(`/movie/subject/${state.id}`, {}).then(res => {
      commit('MOVING_DETAIL', {movieDetail: res})
    })
  },
  getCelebrityDetail ({commit, state}) {
    utils.get(`/movie/celebrity/${state.celebrityId}`, {}).then(res => {
      commit('CELEBRITY_DETAIL', {celebrityDetail: res})
    })
  },
  getUs_box ({commit, state}) {
    utils.get('/movie/us_box', {}).then(res => {
      for (let item of res.subjects) {
        item.subject.rating.average = item.subject.rating.average / 2;
      }
      commit('US_BOX_LIST', {us_boxList: res})
    })
  }
};
