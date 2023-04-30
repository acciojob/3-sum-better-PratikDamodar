function threeSum(arr, target) {
// write your code here
	arr.sort((ab)=>a-b);
	let closetSum = Infinity;
	for(let i=0;i<arr.length-2;i++){
		let j =i+1;
		while(j<k){
			const sum =arr[i]+arr[j]+arr[k];
			if(Math.abs(sum-target)< Math.abs(closetSum-target)){
				closetSum=sum;
			}
			if(sum<target){
				j++;
			}
			else{
				k--;
			}
		}
	}
	
  return closetSum;
}

module.exports = threeSum;
