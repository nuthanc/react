# Redux Exercise
* In buttonSelected function of reducer, count=0 is not like default parameter. If nothing is given, it takes its previous value

* Tried to remove count in reducers. It was causing error. So kept it
* I think if argument is present in action, reducers should also have one if it keeps changing and the next argument should be action

### Instructor's implementation
* In action, he used only type without payload
* In reducers, he isn't using action.payload since it's not there