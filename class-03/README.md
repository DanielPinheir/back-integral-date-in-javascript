# Class Challenge 🏫

## Is open??

A certain store is open from 8:00 am (already open) to 6:00 pm (still open, closed at 6:01 pm). Make a function that receives a JS Date object as an argument, representing the moment when the customer arrives at the store. Your function should return `true` if the store is open and `false` if the store is closed.

You can consider UTC time zone for everything.

```
isOpen(newDate(2015,1,1,12)); //true

isOpen(newDate(2015,1,1,2)); //false
```

---
