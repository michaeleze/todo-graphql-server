/**
 *  One of my favorite patterns
 *  Code is created by Michael Eze<michaeleze3@gmail.com>
 *  Please do not reproduce
 */
export class Observable {
    private observers = [];

    subscribe (fn: any) {
        // @ts-ignore
        this.observers.push(fn);
    }

    notify (data: any) {
        // @ts-ignore
        this.observers.map(observer => observer(data))
    }

    unsubscribe (fn: any) {
        return this.observers.filter((observer => observer !== fn ))
    }
}