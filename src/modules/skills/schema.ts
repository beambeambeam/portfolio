export type Skill =
  | 'davinci'
  | 'figma'
  | 'typescript'
  | 'next'
  | 'react'
  | 'tailwind'
  | 'nodejs'
  | 'sql'
  | 'react_native'
  | 'expo'
  | 'python'
  | 'pytorch'
  | 'keras'
  | 'huggingface'
  | 'none'

export const colorMapSkill: Record<Skill, string> = {
  davinci: '#12F0FB',
  figma: '#F24E1E',
  typescript: '#007ACC',
  next: '#FFFFFF',
  react: '#61DAFB',
  tailwind: '#38B2AC',
  nodejs: '#339933',
  sql: '#003B57',
  react_native: '#61DAFB',
  expo: '#FFFFFF',
  python: '#3776AB',
  pytorch: '#EE4C2C',
  keras: '#D00000',
  huggingface: '#FDD21F',
  none: '#FFFFFF',
}
