function reverse(x: number): number {
    const reversed = parseInt(`${x}`.split("").reverse().join(""));

    if (2**31 < reversed) return 0;

    return x < 0 ? (reversed * -1) : reversed;
};

reverse(123);
reverse(-123);
reverse(120);

