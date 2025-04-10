const arr = [];
// const n = document.getElementById("textfield");
const n = 70;

console.log(n);

Randomize(arr, n);

function Randomize(arr, n){
    for (let i=0; i<n; i++){
        arr[i] = Math.random();
    }
    showBars(arr);
}
function showBars(arr, current){

    const bars = document.getElementById("container");
    bars.innerHTML = "";


    for (let i=0; i<n; i++){
        const bar = document.createElement('div');
        bar.style.height = arr[i]*100+'%' ;
        bar.classList.add("bar");
        if (i==current){
            bar.style.backgroundColor = "red";
        }
        container.appendChild(bar);
    }

}
function sortBubble(arr, n){
    const copy = [...arr];
    const swaps = BubbleSort(copy, n);
    animateBubble(swaps, arr);
}
function animateBubble(swaps, arr){
    if (swaps.length==0){ 
        showBars(arr);
        return; }

    const [i, j] = swaps.shift();
    [arr[i], arr[j]] = [arr[j], arr[i]];
    showBars(arr, j); 
    setTimeout(function(){
        animateBubble(swaps, arr)
    }, 20);

}

function BubbleSort(arr, n){
    const swaps = []
    for (let i=0; i<n; i++){
        for (let j=0; j<(n-i-1); j++){
            if (arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp; 
                swaps.push([j, j+1]);
            }
        }
    }
    return swaps
}

// function animateMerge(swaps, arr){   
//     if  (swaps.length==0) { 
//         showBars(arr); 
//         return; 
//     }

//     const [i, j] = swaps.shift();
//     arr[i] = j;
//     showBars(arr, j);
//     setTimeout(function(){
//         animateMerge(swaps, arr);
//     }, 50);

//     return;
// }
// function sortMerge(arr, n){
//     const copy = [...arr];
//     let swaps = [];
//     swaps = mergeSort(copy, 0, n-1, swaps);
//     showBars(copy)
//     animateMerge(swaps, arr);
// }
// function merge(arr, low, mid, high, swaps) {
//     const temp = []; 
//     let left = low;      
//     let right = mid + 1;   

//     while (left <= mid && right <= high) {
//         if (arr[left] <= arr[right]) {
//             temp.push(arr[left]);
//             left++;
//         }
//         else {
//             temp.push(arr[right]);
//             right++;
//         }
//     }

//     while (left <= mid) {
//         temp.push(arr[left]);
//         left++;
//     }


//     while (right <= high) {
//         temp.push(arr[right]);
//         right++;
//     }


//     for (let i = low; i <= high; i++) {
//         arr[i] = temp[i - low];
//         swaps.push( [i, temp[i-low]] );
//     }
//     return swaps;
    
// }

// function mergeSort(arr, low, high, swaps) {
//     if (low >= high) return swaps;
//     let mid = Math.floor((low + high) / 2) ;
//     swaps = mergeSort(arr, low, mid, swaps);  
//     swaps = mergeSort(arr, mid + 1, high, swaps);
//     return merge(arr, low, mid, high, swaps);  

// }


