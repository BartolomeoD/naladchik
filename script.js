const setResult = result=>document.getElementById('result').innerHTML=`Результат:${result}`;

const add=(a,b)=>{
	result=parseInt(a)+parseInt(b);
	setResult(`${a}+${b}=${result}`);
};

const sub=(a,b)=>{
	result=parseInt(a)-parseInt(b);
	setResult(`${a}-${b}=${result}`);
};
const mul=(a,b)=>{
	result=parseInt(a)*parseInt(b);
	setResult(`${a}*${b}=${result}`);
};
const div=(a,b)=>{
	result=parseInt(a)/parseInt(b);
	setResult(`${a}/${b}=${result}`);
};