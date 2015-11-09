import {Observable} from 'rx';

/* Using a function */
var source = Observable.create( (observer) => {
    observer.onNext(42);
    observer.onNext(42);
    observer.onCompleted();

    // Note that this is optional, you do not have to return this if you require no cleanup
    return () => { console.log('disposed'); };
});

var subscription = source.subscribe(
    function (x) { console.log('Next: ' + x); },
    function (err) { console.log('Error: ' + err); },
    function () { console.log('Completed'); });