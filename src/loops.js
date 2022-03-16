const testDelayFn = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('a');
    }, 1000);
  });
};

// this will always be blank
export const runOnceUsingForEach = async (someObj) => {
  let arr = [];
  Object.keys(someObj).forEach(async (obj, indx) => {
    // console.log(indx, ' (1-forEach) obj:', obj);
    arr = [
      ...arr,
      {
        indx: indx,
        key: obj,
        value: someObj[obj],
        additional: await testDelayFn(),
      },
    ];
  });
  console.log('arr:', arr);
};

export const runOnceUsingFor = async (someObj) => {
  let arr2 = [];

  // this will always be blank
  for (var i = 0; i < Object.keys(someObj).length; i++) {
    // console.log(i, ' (2-for) obj:', Object.keys(someObj)[i]);
    arr2 = [
      ...arr2,
      {
        indx: i,
        key: Object.keys(someObj)[i],
        value: someObj[Object.keys(someObj)[i]],
        additional: await testDelayFn(),
      },
    ];
  }
  console.log('arr2:', arr2);
};

const makeArrayComplete = async (someObj, obj, indx) => {
  return new Promise(async (resolve, reject) => {
    const someVal = await testDelayFn();
    resolve({
      indx: indx,
      key: obj,
      value: someObj[obj],
      additional: someVal,
    });
  });
};

export const runWithForEach = async (someObj) => {
  let arr3 = [];
  Object.keys(someObj).forEach(async (obj, indx) => {
    console.log('newObj:', newObj);
    const newObj = await makeArrayComplete(someObj, obj, indx);
    arr3 = [...arr3, newObj];
  });
  console.log('arr3:', arr3);
};
