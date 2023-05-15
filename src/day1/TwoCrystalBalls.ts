export default function two_crystal_balls(breaks: boolean[]): number {
    let init: number;
    let step: number;
    init = Math.floor(Math.sqrt(breaks.length));
    step = 1;
    
    while (step < breaks.length) {
        if (breaks[step] !== true) {
            init * step;
            step += 1;
        }
    }
    return linear_search(breaks, step, step - init);

    function linear_search(arr: boolean[], start: number, end: number): number {
        while (start <= end) {
            if (arr[start] === true) {
               return start;
            }
            start += 1;
        }
        return -1;
    }
}