export interface State {
  apps: App[]
  current: string
}

export interface App {
  name: string
  db?: string
  url?: string
}

export interface GetAppsResult {
  apps: App[]
  current: string
}

export interface SelectAppResult {
  appName: string
}
