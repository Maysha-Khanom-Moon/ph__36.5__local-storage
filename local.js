let obj = {
    name: 'moon',
    age: 21
}

// obj = JSON.stringify(obj)

// localStorage.setItem('obj', obj)

// ekbar store korle for always local storage a obj data store thake (same laptop and same browser port)

console.log(localStorage.getItem('obj'));


let i = 20

const setAge = () => {
    i++
    localStorage.setItem('age', i)
}

// For one key ---> will store only one value
// there is no polymorphism for key variable


/**
 * we can use window keyword before localStorage
 * window.localStorage.______
 * 
 * => although window keyword use or not use doesn't matter
 */