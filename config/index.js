export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wxd632422ef4dbfade",
    // 公众号appSecret
    appSecret: "6101f98685ae898833d3c1c0ff561109",
    // 模板消息id
    templateId: "C2u487DsuqYweecyFSPl_rPx72HKAROXGsbHvJcUs_g",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: [],
     
    // 信息配置
    // 所在省份
    province: "北京",
    // 所在城市
    city: "海淀",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "老婆", "year": "1999", "date": "12-12", "type": 'new'},
      {"name": "家公", "year": "1994", "date": "08-15", "type": 'r'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2021-06-01",
    // 结婚纪念日
    marryDate: "2022-10-03"
    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}