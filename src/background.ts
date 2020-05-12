let id = 0

chrome.idle.onStateChanged.addListener(newState =>{
  let timestamps = JSON.parse(localStorage.getItem('timestamps'))
  if (timestamps === null) {
    timestamps = []
  }
  console.log(timestamps)

  const time = new Date()
  const timestamp = {
    id: id,
    action: newState,
    time: time,
  }
  timestamps.push(timestamp)
  console.log(timestamps, timestamp.action)
  localStorage.setItem('timestamps', JSON.stringify(timestamps))
  id++
})
