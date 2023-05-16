export default function two_crystal_balls(breaks: boolean[]): number {
    let initial_step: number;
    let step: number = 0;
    let start: number = 0;
    let end: number = breaks.length;

    initial_step = Math.floor(Math.sqrt(breaks.length));
    for (let index = 1; step < breaks.length; index++) {
        step = index * initial_step;
        if (step >= breaks.length) {
            break;
        }
        if (breaks[step]) {
            start = (index - 1) * initial_step;
            end = step;
            break;
        } else {
            start = step;
        }
    }

    return linear_search(breaks, start, end);

    function linear_search(arr: boolean[], start: number, end: number): number {
        for (let index = start; index < end; index++) {
            if (arr[index]) {
                return index;
            }
        }
        return -1;
    }
}
