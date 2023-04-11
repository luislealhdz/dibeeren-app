import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

	transform(value: any, arg: any): any {
		if(arg === ''){
			return value;
		}
		const filterResult = [];
		for(const product of value){
			if(product.productName.toLowerCase().indexOf(arg.toLowerCase()) > -1){
				filterResult.push(product);
			}
		}
		return filterResult;
	}

}
