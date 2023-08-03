import { of } from "rxjs"

const observer = {
  next: (value: unknown) => console.log(value),
  error: (error: unknown) => console.log(error),
  complete: () => console.log('complete'),
}

of('hello').subscribe(observer)
