
const daysamount = () =>{
    fetch("./data.json")
    .then(res =>res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res=>res.json())
    .then(res => {
        const week = document.getElementById('spending__week')
        const fragment = document.createDocumentFragment()
        for(const days of res){
            const divitem = document.createElement('DIV')
            const day = document.createElement('P')
            const amount = document.createElement('P')
            day.textContent = `${days.day}`
            amount.textContent = `${days.amount}`
            divitem.appendChild(amount)
            divitem.appendChild(day)
            fragment.appendChild(divitem)
        }
        week.appendChild(fragment)
    })
    
}


a = daysamount()
console.log(a)