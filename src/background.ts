import { Action } from '@/types'

function getAction(beforeAction: Action, newState: string): Action {
  switch (newState) {
    case 'idle':
      return Action.Idle
    case 'locked':
      return Action.Locked
  }
  if (beforeAction === Action.Idle) {
    return Action.Forcused
  }
  return Action.UnLocked
}

let id: number = 0
let beforeAction: Action = Action.Start

chrome.idle.onStateChanged.addListener((newState: string) => {
  let timestamps = JSON.parse(localStorage.getItem('timestamps'))
  if (timestamps === null) {
    timestamps = []
  }
  console.log(timestamps)

  const action = getAction(beforeAction, newState)
  const time = new Date()
  const timestamp = {
    id: id,
    action: action,
    time: time,
  }
  timestamps.push(timestamp)
  console.log(timestamps, timestamp.action)
  localStorage.setItem('timestamps', JSON.stringify(timestamps))

  id++
  beforeAction = action
})
