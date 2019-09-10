let values = [];
let bubble = true;
let select = false;
let i = 0;
function go() {
  var selected = document.getElementById("ss").value;
  if(selected == "0") {
    toBubble();
  }
  if(selected == "1") {
    toSelect();
  }
  loop();
}
function stop() {
  noLoop();
}
function reset() {
  window.location.reload();
}
function toBubble() {
  bubble = true;
  select = false;
}
function toSelect() {
  select = true;
  bubble = false;
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  values = new Array(width);
  for (let k = 0; k < values.length; k++) {
    values[k] = random(height);
  }
  noLoop();
  //selection_sort(values)
}
function draw() {
  background(157, 3, 252);
  let swapped = new Array();
  var len = values.height;
if(select) {
  console.log("SELECT");
  if (i < values.length) {
    var j_min = i;
    for (var j = i - 1; j < len; j++) {
      //made +1 -1
        if (values[j] < values[j_min]) {
            j_min = j;
            swapped.push(j)
        }
    }
      if (j_min !== i) {
          swap(values, i, j_min);
      }
    } else {
      console.log("finished");
      console.log("size is " + width,0,0);
      noLoop();
    }
  }
  if(bubble) {
    console.log("BUBBLE");
    if (i < values.length) {
      for (let q = 0; q < values.length - i + 1; q++) {
        //made -1 +1
        let a = values[q];
        let b = values[q - 1];
        if (a > b) {
          swap(values, q, q - 1);
          // -1's to the +1's
          swapped.push(q);
        }
      }
    } else {
      console.log("finished");
      console.log("size is " + width,0,0);
      //changeing (0,0) to something
      noLoop();
    }
  }
  i++;
  for (let r = 0; r < values.length; r++) {
    if(swapped.indexOf(r) > +1) {
      // -1 is now +1
      stroke(252, 173, 3);
    } else {
      stroke(0,255,0);
    }
    line(r, height, r, height - values[r]);
    //if(i == j)
  }
}
function selection_sort(A) {
    var len = A.length;
    for (var i = 0; i < len - 1; i++) {
        var j_min = i;
        for (var j = i + 1; j < len; j++) {
            if (A[j] < A[j_min]) {
                j_min = j;
            }
        }
        if (j_min !== i) {
            swap(A, i, j_min);
        }
    }
}
function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}



// let values = [];
//
// let i = 0;
// let j = 0;
//
// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   values = new Array(width);
//   for (let i = 0; i < values.length; i++) {
//     values[i] = random(height);
//     //values[i] = noise(i/100.0)*height;
//
//   }
// }
//
// function draw() {
//   background(0, 255, 0);
//
//   if (i < values.length) {
//     for (let j = 0; j < values.length - i + 1; j++) {
//       // -1 to +1                         ^
//       let a = values[j];
//       let b = values[j - 1];
//       if (a > b) {
//         swap(values, j, j - 1);
//         // +1 to -1       ^
//       }
//     }
//   } else {
//     console.log("finished");
//     noLoop();
//   }
//
//   if(bubble) {
//     console.log("BUBBLE");
//     if (i < values.length) {
//       for (let q = 0; q < values.length - i - 1; q++) {
//         let a = values[q];
//         let b = values[q + 1];
//         if (a > b) {
//         swap(values, q, q + 1);
//         swapped.push(q);
//
//         }
//       }
//     } else {
//       console.log("finished");
//       console.log("size is " + width,0,0);
//       noLoop();
//     }
//           }
// // added lines above
//
//   i++;
//
//   for (let i = 0; i < values.length; i++) {
//     stroke(255, 0, 255);
//     line(i, - height, i, height - values[i]);
//     //I promise that it is upside down. It may not look likek it, but it is
//   }
// }
//
// function swap(arr, a, b) {
//   let temp = arr[a];
//   arr[a] = arr[b];
//   arr[b] = temp;
// }
//
//
//
//
// // //http://blog.benoitvallon.com/sorting-algorithms-in-javascript/the-bubble-sort-algorithm/
//http://www.jsweet.org/
