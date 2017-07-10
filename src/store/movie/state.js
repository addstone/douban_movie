export const state = {
  title: 'douban_movie', // App 标题
  movingList: {  // 正在上映列表
    subjects: []
  },
  searchList: {  // 搜索列表
    subjects: []
  },
  searchText: '', // 搜索内容
  pageload: false, // 是否正在加载分页
  upcomBody: {  // 即将上映的电影列表
    start: -1
  },
  ranking250: {
    // subjects: []
  }, // top 250列表
  city: '广州',
  movieDetail: { // 电影详情
    rating: {},
    images: {}
  },
  id: '', // 电影ID
  start: 0, // top 250分页起点
  celebrityId: '',
  celebrityDetail: {

  },
  us_boxList: {

  }
}
