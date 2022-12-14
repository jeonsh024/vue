import {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchList,
  fetchUserInfo,
  fetchCommentItem
} from '../api/index'

export default {
  // promise
  // FETCH_NEWS(context) {
  //   return fetchNewsList()
  //     .then((response) => {
  //       context.commit('SET_NEWS', response.data)
  //       return response
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // },
  // FETCH_ASK({ commit }) {
  //   return fetchAskList()
  //     .then(({ data }) => {
  //       commit('SET_ASK', data)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // },
  // FETCH_JOBS({ commit }) {
  //   return fetchJobsList()
  //     .then(({ data }) => {
  //       commit('SET_JOBS', data)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // },

  // async
  async FETCH_NEWS(context) {
    const response = await fetchNewsList()
    context.commit('SET_NEWS', response.data)
    return response
  },
  async FETCH_ASK({ commit }) {
    try {
      const response = await fetchAskList()
      commit('SET_ASK', response.data)
      return response
    } catch (error) {
      console.log(error)
    }
  },
  async FETCH_JOBS({ commit }) {
    const response = await fetchJobsList()
    commit('SET_JOBS', response.data)
    return response
  },
  FETCH_USER({ commit }, name) {
    return fetchUserInfo(name)
      .then(({ data }) => {
        commit('SET_USER', data)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  FETCH_ITEM({ commit }, id) {
    return fetchCommentItem(id)
      .then(({ data }) => {
        commit('SET_ITEM', data)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  async FETCH_LIST({ commit }, pageName) {
    const response = await fetchList(pageName)
    commit('SET_LIST', response.data)
    return response
  }
}
