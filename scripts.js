
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
            divitem.classList.add('spending__amount')
            amount.style.margin = "0"
            amount.style.height = `${days.amount * 1.3}%`
            amount.style.borderRadius = "3px" 
            console.log(typeof(days.amount))
            if (days.amount>=50) {
                amount.style.backgroundColor = "hsl(186, 34%, 60%)"
            }
            else{
                amount.style.backgroundColor = "hsl(10, 79%, 65%)"
            }

            day.style.marginBottom = "0"
            divitem.appendChild(amount)
            divitem.appendChild(day)

            
            fragment.appendChild(divitem)
        }
        week.appendChild(fragment)
    })
    
}


a = daysamount()
console.log(a)