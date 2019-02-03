/**
 * https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/special-shop-69904c91/
 */
function specialShop(numOfPots, kindOne, kindTwo) {
	var idx, kindOnePrice, kindTwoPrice, totalCost, minCost;
	if(numOfPots < 1){
		return 0;
	}
	minCost = Number.MAX_VALUE;
	for(idx=0; idx <=numOfPots; idx++) {
		kindOnePrice = kindOne * Math.pow(idx ,2);
		kindTwoPrice = kindTwo * Math.pow(numOfPots - idx, 2);
		totalCost = kindOnePrice + kindTwoPrice;
		if( totalCost < minCost){
			minCost = totalCost;
		}
	}
	return minCost;
}