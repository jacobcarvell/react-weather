// function getTempPromise (location) {
//   return new Promise(function(resolve, reject) {
//     resolve(20);
//     reject('City not found');
//   });
// }
//
// getTempPromise('Brisbane').then(function (temp) {
//   console.log('Promise success', temp);
// }, function (err) {
//   console.log('Error in promise', err)
// });

function addPromise (a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('Not a number!');
    }
  });
}

addPromise(5, 5).then(function (result) {
  console.log('Promise success', result);
}, function (err) {
  console.log('Error in promise', err)
});

addPromise(5, undefined).then(function (result) {
  console.log('Promise success', result);
}, function (err) {
  console.log('Error in promise', err)
});

addPromise('a', 'b').then(function (result) {
  console.log('Promise success', result);
}, function (err) {
  console.log('Error in promise', err)
});
