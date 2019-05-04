const Mock = require('mockjs');

// 配置拦截 ajax 的请求时的行为，支持的配置项目有 timeout。
// Mock.setup({
//     timeout: '200 - 400'
// })

// Mock响应模板
let data = Mock.mock({
    "coming": [
        {
            "id": 248172,
            "img": "http://p0.meituan.net/w.h/moviemachine/f7d2ad70eb79d6d9b8a197713db9b8c41711752.jpg",
            "wish": 1775419,
            "wishst": 0,
            "nm": "复仇者联盟4：终局之战",
            "comingTitle": "4月24日 周三"
        },
        {
            "id": 1228776,
            "img": "http://p1.meituan.net/w.h/moviemachine/f64167e6048835e45722984fa2d7699e447000.jpg",
            "wish": 206518,
            "wishst": 0,
            "nm": "下一任：前任",
            "comingTitle": "5月1日 周三"
        },
        {
            "id": 346629,
            "img": "http://p0.meituan.net/w.h/moviemachine/e71112cb427dfbd4254d0847e957ef49415964.jpg",
            "wish": 135110,
            "wishst": 0,
            "nm": "大侦探皮卡丘",
            "comingTitle": "5月10日 周五"
        },
        {
            "id": 345621,
            "img": "http://p1.meituan.net/w.h/movie/cceccfb1b1977263c2356eeb7780e3c73626652.jpg",
            "wish": 130981,
            "wishst": 0,
            "nm": "双生",
            "comingTitle": "5月18日 周六"
        },
        {
            "id": 1218141,
            "img": "http://p1.meituan.net/w.h/moviemachine/ced8d9b1ea941aa333104ce4fa371f05203502.jpg",
            "wish": 50734,
            "wishst": 0,
            "nm": "扫毒2天地对决",
            "comingTitle": "7月12日 周五"
        },
        {
            "id": 1239281,
            "img": "http://p0.meituan.net/w.h/movie/00bbf436b98f1fb96b7d339f0dcb04e22595113.jpg",
            "wish": 32357,
            "wishst": 0,
            "nm": "港珠澳大桥",
            "comingTitle": "5月1日 周三"
        },
        {
            "id": 1213262,
            "img": "http://p1.meituan.net/w.h/movie/b04a9fac1cc78f6a4628d4cc553ea28f3382813.jpg",
            "wish": 31899,
            "wishst": 0,
            "nm": "素人特工",
            "comingTitle": "7月5日 周五"
        },
        {
            "id": 346172,
            "img": "http://p0.meituan.net/w.h/movie/ad9a0a9eb898d48f7548ef2f3934e5c12680736.jpg",
            "wish": 26986,
            "wishst": 0,
            "nm": "九龙不败",
            "comingTitle": "5月1日 周三"
        },
        {
            "id": 672279,
            "img": "http://p0.meituan.net/w.h/movie/cbafcbd509c89ce04ead9c535bf91ee66230084.jpg",
            "wish": 17353,
            "wishst": 0,
            "nm": "雪暴",
            "comingTitle": "4月30日 周二"
        },
        {
            "id": 1243904,
            "img": "http://p0.meituan.net/w.h/moviemachine/90258899534b9cca44f2e9b9a6246504248749.jpg",
            "wish": 14038,
            "wishst": 0,
            "nm": "动物出击",
            "comingTitle": "4月30日 周二"
        }
    ],
    "paging": {
        "hasMore": true,
        "limit": 10,
        "offset": 0,
        "total": 57
    }
})

module.exports = {
    [`GET /mock/hot`](req,res){
        setTimeout(() => {
            res.json({
                status:200,
                data
            })
        }, 200);
    }
}