document.ontouchmove = e => { e.preventDefault() }

const onclick = async (e) => {
  document.alert('click')
}

document.getElementById('circle-button').addEventListener('click', onclick)
