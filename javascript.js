function exercise1() {
    let result = "";
    let arr = [
        [1, 2, 1, 24],
        [8, 11, 9, 4],
        [7, 0, 7, 27],
        [7, 4, 28, 14],
        [3, 10, 26, 7]
    ];
    for (let i = 0; i < arr.length; i++) {
        result += "row " + i + "<br>";
        for (let j in arr[i]) {
            result += arr[i][j] + "<br>";
        }
    }
    document.getElementById("exr1_result").innerHTML = "Array: " + arr + "<br>" + result;
}

function exercise2() {
    let result = "";
    let arr = ['c', 's', 'c', '2', '6', '1'];
    let arrBase = ['c', 's', 'c', '2', '6', '1'];
    arr.reverse();
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    document.getElementById("exr2_result").innerHTML = "Array before: " + arrBase + "<br>Array reverse: " + arr + "<br>String reverse: " + result;
}

function exercise3() {
    let arr = ['c', 's', 'c', '2', '6', '1'];
    let NUMBER = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (NUMBER.indexOf(parseInt(arr[i])) !== -1) {  //number regular expression mdn js: different method
            count++;
        }
    }
    document.getElementById("exr3_result").innerHTML = "Array: " + arr + "<br>Have " + count + " number";
}

function exercise4() {
    let str = "Doc1 lap2 tu3 do4hanh5phuc6";
    let arr = str.split("");
    let NUMBER = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (NUMBER.indexOf(parseInt(arr[i])) !== -1) {  //number regular expression mdn js: different method
            count++;
        }
    }
    document.getElementById("exr4_result").innerHTML = "String: " + str + "<br>Have " + count + " number";
}

function exercise5() {
    let flag = 1;
    let result = "";
    let str1 = "Doc1 lap2 tu3 do4hnsw5phuc6";
    let str2 = "Doc1 lap2 tu3 do4hanh5phuc6";
    let arr1 = str1.split("");
    let arr2 = str2.split("");
    if (arr1.length === arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                flag = 0;
                break;
            }
        }
    } else {
        flag = 0;
    }
    if (flag === 1) {
        result = "Two strings same";
    } else {
        result = "Two strings not same";
    }
    document.getElementById("exr5_result").innerHTML = "String 1: " + str1 + "<br>String 2 " + str2 + "<br>" + result;
}

function exercise6() {
    let arrBase = ['c', '-', 'c', '2', '-', '1'];
    let arr = ['c', '-', 'c', '2', '-', '1'];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "-") {
            arr[i] = "_"
        }
    }
    document.getElementById("exr6_result").innerHTML = "Array before: " + arrBase + "<br>Array after: " + arr;
}