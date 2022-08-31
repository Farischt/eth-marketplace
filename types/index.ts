export type CourseBaseData = {
  id: string
  type: string
  title: string
  description: string
  coverImage: string
  author: string
  link: string
  slug: string
  wsl: string[]
  createdAt: string
}

export type CourseMap = {
  [key: string]: CourseBaseData
}

export type CourseFullData = {
  data: CourseBaseData[]
  courseMap: CourseMap
}
