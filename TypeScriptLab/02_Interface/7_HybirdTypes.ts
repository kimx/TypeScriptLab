//http://www.typescriptlang.org/Handbook#interfaces-hybrid-types
interface CounterInterface {
  //  (start: number): string;
    interval: number;
    reset(): void;
    Kim(start: number): string;
}
class Counter implements CounterInterface {
    constructor() { }
    //function(start: number): string {
    //    return "Hello";
    //}
    interval: number;
    reset() { }
    Kim(start: number): string {
        return "kim";
    }
}

var counter: Counter;
//counter(10);
counter.reset();
counter.interval = 1.2;
counter.Kim(1);