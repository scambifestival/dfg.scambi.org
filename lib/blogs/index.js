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
		return 1;
	}
	if (x < y) {
		return -1;
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
