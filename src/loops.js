const testDelayFn = async () => {
  setTimeout(() => {
    return new Promise((resolve, reject) => {
      resolve('a');
    });
  }, 1000);
};

export const runOnce = async (someObj) => {
  let arr = [],
    arr2 = [];
  // this will always be blank
  Object.keys(someObj).forEach(async (obj, indx) => {
    console.log(indx, ' (1-forEach) obj:', obj);
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

  // this will always be blank
  for (var i = 0; i < Object.keys(someObj).length; i++) {
    console.log(i, ' (2-for) obj:', Object.keys(someObj)[i]);
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
    resolve({
      indx: indx,
      key: obj,
      value: someObj[obj],
      additional: await testDelayFn(),
    });
  });
};

export const runOnceTwo = async (someObj) => {
  let arr3 = [];

  // await Object.keys(someObj).forEach(async (obj, indx) => {
  //   arr3 = [...arr3, await makeArrayComplete(someObj, obj, indx)];
  // });
  console.log('arr3:', arr3);
};
