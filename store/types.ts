interface Message {
  affenpinscher: string[]
  shiba: string[]
}

export interface Breeds {
  status?: string
  message?: Message
}

export interface Dog {
  status?: string
  message?: Message
}

export interface BreedState {
  breeds: Breeds
  dogs: Dog
}

export interface RootState {
  version: string
}
