# Exercício de classe 🏫

## So, is it still open?

A certain store is open from 8:00 am (already open) to 6:00 pm (still open, closed at 6:01 pm) from Monday to Friday, and on Saturdays from 8:00 am to 12:00 pm only. Make a function that receives a JS Date object as an argument, representing the moment when the customer arrives at the store. Your function should return `true` if the store is open and `false` if the store is closed.

You can consider UTC time zone for everything.

```
isOpen(newDate(2021,3,25,12)); //return false, because is Sunday

isOpen(newDate(2021,3,26,12)); //return true, because is Monday

isOpen(newDate(2021,3,26,7,59)); //return false, because it's too early (7h59)

isOpen(newDate(2021,3,24,9,30)); // returns true because it's Saturday morning (9h30)
```

---

###### tags: `nodeJS` `datas`
