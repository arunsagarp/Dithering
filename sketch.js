let arr;
let slider;
function setup() {
	createCanvas(600, 600);
	arr = chandu;
	console.log(arr.length);
	slider = createSlider(0,50,10);
}
counter=0;

function draw() {
	background(255);
	translate(10,10);
	beginShape();

	for (let i=0;i<arr.length;i++)
	{
		stroke(0);
		strokeWeight(0.25);
		point(arr[i][1],arr[i][0]);
	}
	counter+=slider.value();
	endShape();


}