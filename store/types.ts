export interface Breeds {
  [key: string]: string[]
}

export interface Dog {
  [key: string]: string[]
}

export interface BreedState {
  breeds: Breeds
  dogs: Dog
}

export interface RootState {
  version: string
}

export interface App {
  name: string
  db: string
  url?: string
}

export interface AppState {
  apps: App[]
}
