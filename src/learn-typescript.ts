type StringOrNumber = string | number
let myName: StringOrNumber = 'myName'
function listen(port: StringOrNumber) {
  if(typeof port === 'string') {
    port = parseInt(port, 10) ;
  }
}

listen(1)
listen('1')

function merge<T1, T2>(o1: T1, o2: T2): T1 & T2 {
  return { ...o1, ...o2 }
}
let result = merge({ a: 1 }, { b: 2 })


type ObjectDictionary<T> = { [key: string]: T }
type ArrayDicitionary<T> = { [key: number]: T[] }
export type Dictionary<T> = T extends [] ? ArrayDicitionary<T[number]> : ObjectDictionary<T>

type StringDictionary = Dictionary<string>
type NumberArrayDictionary = Dictionary<number[]>
type UserEntity = ObjectDictionary<string | number>


const entity: UserEntity = {
  foo: 'foo',
  bar: 1
}
// Loại bỏ những thuộc tính có trong U ra khỏi T
type Exclude<T, U> = T extends U ? never : T
// Loại bỏ những thuộc tính trong kiểu T mà có thể gán được cho kiểu U
type Extract<T, U> = T extends U ? T : never
// loại bỏ null và undefined khỏi kiểu T
type NonNullable<T> = T extends null | undefined ? never : T
// làm cho tất cả các thuộc tính trong kiểu T chỉ có thể đọc được
type ReadOnly<T> = { readonly [P in keyof T]: T[P] }
// làm cho tất cả các thuộc tính trong kiểu T thành optional
type Partial<T> = { [P in keyof T]?: T[P] }
// trả về một kiểu mới chỉ chứa các thuộc tính được chỉ định K từ kiểu gốc T.
type Pick<T, K extends keyof T> = { [P in K]: T[P] }
// tạo một kiểu mới bằng cách ánh xạ mỗi khóa K từ tập khóa đã cho đến kiểu giá trị T
type Record<K extends keyof any, T> = { [P in K]: T }
// Required làm cho tất cả các thuộc tính trong kiểu T bắt buộc
type Required<T> = { [P in keyof T]-?: T[P] }
// trích xuất kiểu trả về từ một loại hàm T
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any
// tạo một kiểu mới bằng cách loại bỏ các thuộc tính K từ kiểu gốc T
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>

interface User {
  firstName: string;
  lastName: string;
  password: string;
}

type a = keyof User


type SomeDiff = Exclude<keyof User, 'password'>
type SomeExtract = Extract<keyof User, 'password' | 'a' | 'b'>




