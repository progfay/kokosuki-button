document.ontouchmove = e => { e.preventDefault() }

const onclick = async (e) => {
  alert('click')
}

document.getElementById('heart-button').addEventListener('click', onclick)
