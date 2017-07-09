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
  }
};
