export default function bubble_sort(arr: number[]): void {
    let temp: number = 0;
    let swap: boolean;
    do {
        swap = false;
        for (let index = 0; index < arr.length - 1; index++) {
            if (arr[index] > arr[index + 1]) {
                temp = arr[index];
                arr[index] = arr[index + 1];
                arr[index + 1] = temp;
                swap = true;
            }
        }
    } while(swap)
}