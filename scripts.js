const daysamount = () =>{
    let amount;
    fetch("./data.json")
    .then(res =>res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res=>res.json())
    .then(res => {
        amount = res;
    })
    console.log(amount)
}


a = daysamount()
console.log(a)