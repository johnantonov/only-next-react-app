export const formatPrice = (num: number | undefined) => {
  if (typeof num === 'number') {
    let x = num.toString()
    switch (x.length) {
      case 1: case 2: case 3: return x;
      case 4: return x.slice(0, 1) + ' ' + x.slice(1);
      case 5: return x.slice(0, 2) + ' ' + x.slice(2);
      case 6: return x.slice(0, 3) + ' ' + x.slice(3);
      case 7: return x.slice(0, 1) + ' ' + x.slice(1);
      case 8: return x.slice(0, 2) + ' ' + x.slice(2,5) + ' ' + x.slice(5);
      default: return x;
    }
  }
}


