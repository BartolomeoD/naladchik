const setResult = result=>document.getElementById('result').innerHTML=`Результат:${result}`;

const add=(a,b)=>{
	const promise = fetch(`http://localhost:3000/addition?a=${a}&b=${b}`);
	promise.then(res => {
		if (res.status !== 200) {
			console.log(`Looks like there was a problem. Status Code: ${res.status}`);
			return;
		}
		res.json().then(({ result }) => setResult(`${a}+${b}=${result}`));
	}).catch(err => console.log(`Fetch error: ${err}`))
};



const sub=(a,b)=>{
	const promise = fetch(`http://localhost:3000/subtraction?a=${a}&b=${b}`);
	promise.then(res => {
		if (res.status !== 200) {
			console.log(`Looks like there was a problem. Status Code: ${res.status}`);
			return;
		}
		res.json().then(({ result }) => setResult(`${a}+${b}=${result}`));
	}).catch(err => console.log(`Fetch error: ${err}`))
};
const mul=(a,b)=>{
	const promise = fetch(`http://localhost:3000/multiple?a=${a}&b=${b}`);
	promise.then(res => {
		if (res.status !== 200) {
			console.log(`Looks like there was a problem. Status Code: ${res.status}`);
			return;
		}
		res.json().then(({ result }) => setResult(`${a}+${b}=${result}`));
	}).catch(err => console.log(`Fetch error: ${err}`))
};
const div=(a,b)=>{
	const promise = fetch(`http://localhost:3000/divide?a=${a}&b=${b}`);
	promise.then(res => {
		if (res.status !== 200) {
			console.log(`Looks like there was a problem. Status Code: ${res.status}`);
			return;
		}
		res.json().then(({ result }) => setResult(`${a}+${b}=${result}`));
	}).catch(err => console.log(`Fetch error: ${err}`))
};