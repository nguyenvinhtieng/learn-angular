import { Pipe, PipeTransform } from "@angular/core";
interface Address {
  street: string,
  city: string,
  state: string,
  zip: string
}
@Pipe({
  name: 'formatAddress'
})
export class FormatAdressPipe implements PipeTransform {
  transform(value: Address) {
    return `${value.street}, ${value.city}, ${value.state} ${value.zip}`;
  }
}
