
const daysamount = () =>{
    fetch("./data.json")
    .then(res =>res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res=>res.json())
    .then(res => {
        const week = document.getElementById('spending__week')
        const fragment = document.createDocumentFragment()
        for(const days of res){
            const item = document.createElement('P')
            item.textContent = ` day ${days.day} and amount ${days.amount}`
            fragment.appendChild(item)
        }
        week.appendChild(fragment)
    })
    
}


a = daysamount()
console.log(a)