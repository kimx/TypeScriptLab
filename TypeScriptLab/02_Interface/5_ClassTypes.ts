//http://www.typescriptlang.org/Handbook#interfaces-class-types
interface ClockInterface {
    currentTime: Date;
}
class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) { }
    setDate(d: Date) {
        this.currentTime = d;
    }
}