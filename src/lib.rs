use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: i32);
}

// O(N)
#[wasm_bindgen]
pub fn sum_of_arr(arr: &JsValue) -> i32 {
    let mut sum = 0;
    let elements: Vec<i32> = arr.into_serde().unwrap();
    for i in 0..elements.len() {
        sum += elements[i];
    }

    return sum;
}

#[wasm_bindgen]
pub fn loop_time_1d_arr() {
    let mut sum = 0;
    for i in 0..440000 {
        sum += i;
    }
}

#[wasm_bindgen]
pub fn malloc_1_d_arr() {
    let mut vec: Vec<i32> = [].to_vec();
    for i in 0..440000 {
        vec.push(i);
    }
}

// O(N2)
#[wasm_bindgen]
pub fn sum_of_n2_arr(arr: &js_sys::Array) -> i64 {
    let mut sum = 0;
    let elements: Vec<Vec<i32>> = arr.into_serde().unwrap();
    for i in 0..elements.len() {
        for j in 0..elements[i].len() {
            sum += elements[i][j];
        }
    }
    return sum.into();
}

#[wasm_bindgen]
pub fn loop_time_2d_arr() {
    let mut sum = 0;
    let length = 6000;
    for _ in 0..length {
        for j in 0..length {
            sum += j;
        }
    }
}

#[wasm_bindgen]
pub fn malloc_2_d_arr() {
    let mut vec: Vec<Vec<i64>> = [].to_vec();
    let length = 6000;
    for i in 0..length {
        vec.push([].to_vec());
        for j in 0..length {
            vec[i].push(j as i64);
        }
    }
}

#[wasm_bindgen]
pub fn generate_arr() -> i64 {
    let length = 20000000;
    let mut sum = 0;
    for _ in 0..length {
        for _ in 0..length {
            for k in 0..length {
                sum += k;
            }
        }
    }

    return sum;
}
