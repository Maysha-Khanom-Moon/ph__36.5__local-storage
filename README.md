### Storage
1. ##### local storage
    - uses, pattern information
    - user behaivior
        - suppose ami ekta website a dhuke shopping cart a kono product add korle (without singin). Dekha jabe aita thiki local storage a theke jabe, jodio amr nam a information ta store hocche nah.
    - ai computer er ai browser er info store kore rakhbo(without login)
    - key-value hishebe store kore
    - esc --> console
        - localStorage.setItem(key, value)
        - localStorage.getItem(key)
        - localStorage.removeItem(key)

        - local storage a setItem korle shob kuchu as a string store hoy
            - key and value ---> both as string
            - localStorage.setItem(key, array)
            - ai array tao as a string store hobe

            - localStorage.setItem(key, {key, value, ...})
            - localStorage.getItem(key)
                - '[object Object]'
    - local storage only can store the strings
    <br>

##### how to set and get Objects in local storage
const person = {name: 'Lal Mia', age: 13, profession: 'painter'}

1. person.toString()
    - '[object Object]'

2. JSON.stringify(person)
    - '{"name": "Lal Mia", "age": 13, "profession": "painter"}'

-  so before setItem() --> JSON.stringyfy the object

- let personString = JSON.stringyfy(person)

- localStorage.setItem('person', personString)

- JSON string to object: JSON.perse(personString)

- Object ----- JSON.stringyfy(object) -----> String ----- JSON.perse(objectString) ------> Object
<br>

* Local Storage does not works on Local machine, it only works on browser
* so you js file connect with html file and go live