const clock = document.querySelector('.clock')

// Function to update time
const time = () => {
    const now = new Date()
    const hour = now.getHours()
    const min = now.getMinutes()
    const sec = now.getSeconds()
    // Template to display in the DOM
    const html = `
        <div>
            <span>${hour}</span>
              &nbsp;  &nbsp;:
            <h4><small>Hour</small></h4>
        </div>
        
        <div>
            <span>${min}</span> 
              &nbsp;  &nbsp;:
            <h4><small>Minutes</small></h4>
        </div>
        
        <div>
            <span>${sec}</span>
            <h4><small>Seconds</small></h4>
        </div>
    
    `;

    clock.innerHTML = html
}

// Interval to update every 1s
setInterval(time, 1000)