import { useSelector } from "react-redux";

//capitalize function: This function capitalizes the first letter of a string.
export const capitalize = (str) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

//truncate function: This function truncates a string to a given length and adds ellipsis at the end if necessary.
export const truncate = (str, maxLength = 100) => {
	if (str.length > maxLength) {
		return str.substring(0, maxLength) + "...";
	}

	return str;
};

//isEmpty function: This function checks whether an object or array is empty or not.
export const isEmpty = (obj) => {
	return (
		obj === null ||
		obj === undefined ||
		(typeof obj === "string" && obj.trim().length === 0) ||
		(Array.isArray(obj) && obj.length === 0) ||
		(typeof obj === "object" && Object.keys(obj).length === 0)
	);
};

//formatDate function: This function formats a date object to a string in a specified format.
export const formatDate = (date, format = "YYYY-MM-DD") => {
	const year = date.getFullYear();
	const month = `0${date.getMonth() + 1}`.slice(-2);
	const day = `0${date.getDate()}`.slice(-2);

	return format.replace("DD", day).replace("MM", month).replace("YYYY", year);
};

///Here is a function in JavaScript that can format a date string into MMM DD, YYYY format
export function stringFormatDate(dateString) {
	const options = { day: "numeric", month: "short", year: "numeric" };
	return new Date(dateString).toLocaleDateString("en-US", options);
}

// debounce function: This function debounces a given function and delays its execution for a given number of milliseconds.
export const debounce = (func, delay = 300) => {
	let timerId;

	return (...args) => {
		clearTimeout(timerId);

		timerId = setTimeout(() => {
			func.apply(this, args);
		}, delay);
	};
};

//groupBy() function: This function can be used to group an array of objects by a specific property.
export function groupBy(list, keyGetter) {
	const map = new Map();
	list.forEach((item) => {
		const key = keyGetter(item);
		const collection = map.get(key);
		if (!collection) {
			map.set(key, [item]);
		} else {
			collection.push(item);
		}
	});
	return map;
}

//flatten() function: This function can be used to flatten a nested array.
export function flatten(arr) {
	return arr.reduce(function (flat, toFlatten) {
		return flat.concat(
			Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
		);
	}, []);
}

//formatCurrency() function: This function can be used to format a number as currency.
export function formatCurrency(num, currency = "USD") {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency,
	}).format(num);
}

//isAuthenticated helper function in JavaScript for React that checks if a user is authenticated:
export const IsAuthenticated = () => {
	const userData = useSelector((state) => state.user?.userData); // get the token from localstorage, assuming it was saved there
	const is_login = userData?.is_logged_in;

	if (!is_login) return false; // if token doesn't exist, return false
	else {
		try {
			return true;
			// eslint-disable-next-line no-unreachable
		} catch (err) {
			console.log(err);
		}
	}
};

export function greetUser() {
	const now = new Date();
	const hour = now.getHours();

	let greeting;

	if (hour >= 5 && hour < 12) {
		greeting = "Good morning!";
	} else if (hour >= 12 && hour < 17) {
		greeting = "Good afternoon!";
	} else if (hour >= 17 && hour < 22) {
		greeting = "Good evening!";
	} else {
		greeting = "Good night!";
	}

	return greeting;
}
export const isNOTNullOrUndefined = (value) => {
	return !isNullOrUndefined(value);
};
export const isNullOrUndefined = (value) => {
	return (
		value === null ||
		value === undefined ||
		value === "" ||
		value === "null" ||
		value === "undefined"
	);
};
