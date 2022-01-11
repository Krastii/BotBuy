const puppeteer = require('puppeteer')

console.log('work')

let page = null
let browser = null

browser = puppeteer
	.launch({ headless: false })
	.then(async (browser) => {
		page = await browser.newPage()

		page.setViewport({
			width: 1280,
			height: 800,
			isMobile: false,
		})

		page.goto('https://eberegit.github.io/Geo-Search/index.html', {
			waitUntil: 'networkidle2',
		})
	})
	.catch((error) => {
		console.log(error)
	})
