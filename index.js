const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.get('/hello', (req, res) => {res.send('hello world gym assistant')})

app.post('/', (req, res) => {
	let coursecategory = "";
	let userlocation = "";
	var feedback = ''
	if (typeof req.body.queryResult.parameters.coursecategory !== 'undefined') {
		coursecategory = req.body.queryResult.parameters.coursecategory;
		if (coursecategory == '有氧'){
	        feedback =
	        `我們有以下有氧團體課程:
	        每周一 飛輪,
	        每週三 壺鈴,
	        每周五 Tabata,
	        價格皆為一堂$1000/人,
	        每堂課程一小時,
	        歡迎來店免費諮詢或體驗課程`
	    } else if (coursecategory == '瑜珈') {
	        feedback =
	        `我們有以下瑜珈團體課程：
	        每周二 瑜珈,
	        每週四 空中瑜珈,
	        價格皆為一堂$1200/人,
	        每堂課程一小時,
	        歡迎來店免費諮詢或體驗課程`
	    } else if (coursecategory == '格鬥') {
	        feedback =
	        `我們有以下格鬥課程：
	        拳擊、散打、搏擊,
	        時間可與私人教練協調安排,
	        價格皆為一堂$1200/人,
	        每堂課程一小時
	        歡迎來店免費諮詢或體驗課程`
	    } else if (coursecategory == '重訓') {
	        feedback =
	        `我們有以下重訓課程：
	        健美、健力、健體,
	        私人教練：每堂$1500/人,
	        團體課程：每堂$1000/人,
	        每堂課程一小時,
	        會有專業的教練幫您安排飲食和課表,
	        歡迎來店免費諮詢或體驗課程`
	    }
	}

	if (typeof req.body.queryResult.parameters.UserLocation !== 'undefined') {
		UserLocation = req.body.queryResult.parameters.UserLocation;
		if (UserLocation == '北部'){
	        feedback = `北部旗艦店位於士林官邸深山處，歡迎蒞臨體驗！`
	    } else if (UserLocation == '中部') {
	        feedback = `中部旗艦店位於慶記的街對角，讓您每次健身後都體驗可能被瑪莎拉蒂 +9 攔車的風險！立馬感受健身成果`
	    } else if (UserLocation == '南部') {
	        feedback = `南部旗艦店位於台南市區，包您糖吃得再多，也能健身瘦回來，歡迎蒞臨體驗！`
	    } else if (UserLocation == '東部') {
	        feedback = `東部旗艦店是我們阿美族的啦，每次光顧都送您一瓶小米酒的啦，歡迎蒞臨體驗！`
	    }
	}
    
    obj = {
        'fulfillmentText': feedback
    }
    res.send(JSON.stringify(obj));
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
