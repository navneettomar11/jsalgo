
function mixin(original, obj){
	if(obj === undefined || obj === null){
		return;
	}
	Object.keys(obj).forEach(function(prop){
		if(!original.hasOwnProperty(prop)){
			original[prop] = obj[prop];
		}
	});
}