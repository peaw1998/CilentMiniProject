const convert = (data) => {
  let ret = [];
  let arr = [];
  data.forEach((item, index) => {
    arr.push(item);
    if (index !== 0 && (index + 1) % 4 === 0) {
      //   console.log([].concat(arr))
      ret.push([].concat(arr));
      arr = [];
    } else if (index === data.length - 1) {
      //   console.log([].concat(arr))
      ret.push([].concat(arr));
      arr = [];
    }
  });
  return ret;
};

export default convert;
