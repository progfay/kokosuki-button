document.ontouchmove = e => { e.preventDefault() }

const AudioContext = window.AudioContext || window.webkitAudioContext
const audioContext = new AudioContext()

const decodeAudioData = (arrayBuffer) => (
  new Promise((resolve, reject) => {
    audioContext.decodeAudioData(arrayBuffer, resolve)
  })
)

const getAudioBuffer = (url) => (
  new Promise((resolve, reject) => {
    window.fetch(url)
      .then(response => response.arrayBuffer())
      .then(decodeAudioData)
      .then(resolve)
      .catch(reject)
  })
)

const buffer = getAudioBuffer('/kokosuki.wav')

const onclick = async (e) => {
  const audioBufferSourceNode = audioContext.createBufferSource()
  audioBufferSourceNode.buffer = await buffer
  const gainNode = audioContext.createGain()
  gainNode.gain.setValueAtTime(10, 0)
  audioBufferSourceNode.connect(gainNode).connect(audioContext.destination)
  audioBufferSourceNode.start()
}

document.getElementById('heart-button').addEventListener('click', onclick)
