import Mock from 'mockjs';

// Mock.setup({timeout: '100-300'});
//影厅座位信息
const data = Mock.mock({
    "data": [
        [0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
        [1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0],
        [1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0],
        [1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0]
    ]
});

//电影信息
const result = Mock.mock({
    "data":{
        filmId:1,
        name: "复仇者联盟3：无限战争",
        type: "动作，冒险，科幻",
        duration: "150分钟",
        cinema: "万达影院",
        filmRoom: "2号影厅",
        version: "英语3D",
        arrange: "今天 5月22 20:00",
        price: "32.5",
        poster: "../../assets/img/1.jpg"
    }
})

module.exports = {
    [`Get /api/roomInfo`](req,res){
        setTimeout(()=>{
            res.json({
                status:200,
                data
            })
        },200)
    },
    [`Get /api/filmInfo`](req,res){
        setTimeout(()=>{
            res.json({
                status:200,
                result
            })
        },200)
    }
}
