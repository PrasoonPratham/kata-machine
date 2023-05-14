export default function two_crystal_balls(breaks: boolean[]): number {
    let step = 0;
    step = Math.floor(Math.sqrt(breaks.length))
    
    while 
    if (breaks[step] != true) {
        step = step + step
    }

    function linear_search(arr: boolean[], start: number, end: number) {
        while (start <= end) {
            if (arr[start] === false) {
                start += 1;
            }
            if (arr[start] === true) {
                return true;
            }        
        }
        return false;
    }
}