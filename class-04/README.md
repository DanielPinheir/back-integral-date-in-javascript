# Exercício de classe 🏫

## Is it still open?

A certain store is open from 8:00 am (already open) to 6:00 pm (still open, closed at 6:01 pm), but only from Monday to Friday. Make a function that receives a JS Date object as an argument, representing the moment when the customer arrives at the store. Your function should return `true` if the store is open and `false` if the store is closed.

You can consider UTC time zone for everything.

```
isOpen(newDate(2021,3,25,12)); //return false, because is Sunday

isOpen(newDate(2021,3,26,12)); //return true, because is Monday

isOpen(newDate(2021,3,26,7,59)); //return false, because is too early (7h59)
```

---

###### tags: `nodeJS` `datas`
