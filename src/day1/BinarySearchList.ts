export default function bs_list(haystack: number[], needle: number): boolean {
    let high, low, mid;
    low = 0;
    high = haystack.length - 1;
    while (low <= high) {
        mid = Math.floor((high + low) / 2);
        if (haystack[mid] < needle) {
            low = mid + 1;
        } else if (haystack[mid] > needle) {
            high = mid - 1;
        } else {
            return true;
        }
    }
    return false;
}
