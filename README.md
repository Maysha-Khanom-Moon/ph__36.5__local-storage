#### Storage
1. local storage
    - uses, pattern information
    - user behaivior
        - suppose ami ekta website a dhuke shopping cart a kono product add korle (without singin). Dekha jabe aita thiki local storage a theke jabe, jodio amr nam a information ta store hocche nah.
    - ai computer er ai browser er info store kore rakhbo(without login)
    - key-value hishebe store kore
    - esc --> localStorage
        - localStorage.setItem(key, value)
        - localStorage.getItem(key)
        - localStorage.removeItem(key)

        - local storage a setItem korle shob kuchu as a string store hoy
            - localStorage.setItem(key, array)
            - ai array tao as a string store hobe

            - localStorage.setItem(key, {key, value, ...})
            - localStorage.getItem(key)
                - '[object Object]'

2. session storage: