import { mixinDeep } from './utils'

// English is used as the first language here
export const en = {
  name: 'Teambition',
  slogan: 'Best collaboration tool for team.',
  discription: 'Teambition is an easy and efficient way to work, by creating tasks, sharing posts and documents, keeping track of your calendar and checking everyone\'s progress.',
  location: 'Changxing Building, 888 Bibo Road, Pudong District Shanghai, China',
  website: 'https://www.teambition.com',
  email: 'info@teambition.com',
  industry: 'Internet',
  phone: '400-060-5576',
  founded: '2013',
  founder: {
    name: 'Junyuan Qi',
    birthday: 'Jun 20, 1990',
    twitter: 'qijunyuan',
    linkedin: 'junyuanqi'
  }
}

export const zh = mixinDeep({ founder: {} }, en, {
  name: 'Teambition',
  slogan: '最好用的团队协作工具',
  discription: 'Teambition 是一个简单，高效的项目协作工具，你可以在这里管理项目，跟踪任务进度，存储项目文件，让你的团队协作更高效。',
  industry: '互联网',
  location: '上海市浦东新区碧波路 888 号，畅星大厦',
  founder: {
    name: '齐俊元',
    birthday: '1990年7月20号'
  }
})

export default {
  en,
  zh
}

// TODO: Add more locales
