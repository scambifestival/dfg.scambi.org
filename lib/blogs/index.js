import fs from 'fs';
import path from 'path';

const blogDir = path.join(process.cwd(), 'blogs');

function extractFileName(name) {
	return name.slice(11).toLowerCase();
}

function sortByDate(x, y) {
	x = x.slice(0, 10);
	y = y.slice(0, 10);
	if (x > y) {
		return -1;
	}
	if (x < y) {
		return 1;
	}
	return 0;
}

export function getAllBlogs() {
	try {
		let files = fs.readdirSync(blogDir);
		files.sort(sortByDate);
		return files;
	} catch (err) {
		return null;
	}
}

export function getABlog(name) {
	const files = fs.readdirSync(blogDir);
	let blog = files.filter((file) => extractFileName(file) === name)[0];

	try {
		blog = fs.readFileSync(path.join(blogDir, blog), 'utf-8');
		return blog;
	} catch (err) {
		return null;
	}
}

export function getBlogFile(file) {
	let blog = null;
	try {
		blog = fs.readFileSync(path.join(blogDir, file), 'utf-8');
		return blog;
	} catch (err) {
		return null;
	}
}

export function getDate(value) {
	let temp = value;
	switch (temp.getMonth()) {
		case 0:
			temp = 'January ';
			break;
		case 1:
			temp = 'February, ';
			break;
		case 2:
			temp = 'March, ';
			break;
		case 3:
			temp = 'April ';
			break;
		case 4:
			temp = 'May ';
			break;
		case 5:
			temp = 'June ';
			break;
		case 6:
			temp = 'July ';
			break;
		case 7:
			temp = 'August ';
			break;
		case 8:
			temp = 'September ';
			break;
		case 9:
			temp = 'October ';
			break;
		case 10:
			temp = 'November ';
			break;
		case 11:
			temp = 'December ';
			break;
	}

	value = temp + value.getDay() + ', ' + value.getFullYear();
	return value;
}
