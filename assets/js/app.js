// Initialize
const video  	= document.querySelector('video')
const canvas 	= document.querySelector('canvas')
const context = canvas.getContext('2d')
const tracker = new tracking.ObjectTracker('face') 

// Configure
tracker.setInitialScale(2)
tracker.setStepSize(2)
tracker.setEdgesDensity(0.1)
tracking.track('video', tracker, { camera: true })

// Styling
const css = {
	strokeStyle: 'red',
  lineWidth: 3,
}

tracker.on('track', function(event) {
	context.clearRect(0, 0, canvas.width, canvas.height)
  if (event.data.length === 0) {
  	console.log('No face detected')
  } else {
	  event.data.forEach(function(rect) {
	    context.strokeStyle = css.strokeStyle
	    context.lineWidth = css.lineWidth
	    context.strokeRect(rect.x, rect.y, rect.width, rect.height)
	  })
	}
})

function hide() {
	let el = document.querySelector('.notification')
	el.classList.add('is-hidden')
}