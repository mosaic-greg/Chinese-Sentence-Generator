var cnArr = ["一", "一点儿", "七", "三", "上", "上午", "下", "下午", "下雨", "不", "不客气", "东西", "个", "中午", "中国", "九", "书", "买", "了", "二", "五", "些", "人", "什么", "今天", "他", "会", "住", "你", "做", "儿子", "先生", "八", "六", "再见", "写", "冷", "几", "出租车", "分钟", "前面", "北京", "医生", "医院", "十", "去", "叫", "号", "吃", "同学", "名字", "后面", "吗", "听", "呢", "和", "哪", "哪儿", "商店", "喂", "喜欢", "喝", "四", "回", "在", "坐", "块", "多", "多少", "大", "天气", "太", "女儿", "她", "好", "妈妈", "字", "学习", "学校", "学生", "家", "对不起", "小", "小姐", "少", "岁", "工作", "年", "开", "很", "怎么", "怎么样", "想", "我", "我们", "打电话", "时候", "明天", "星期", "昨天", "是", "月", "有", "朋友", "本", "来", "杯子", "桌子", "椅子", "水", "水果", "汉语", "没关系", "没有", "漂亮", "点", "热", "爱", "爸爸", "狗", "猫", "现在", "电影", "电脑", "电视", "的", "看", "看见", "睡觉", "米饭", "老师", "能", "苹果", "茶", "菜", "衣服", "认识", "说", "请", "读", "谁", "谢谢", "这", "那", "都", "里"]

//add button to play audion from google translate 

//http://translate.google.com/translate_tts?ie=UTF-8&total=1&idx=0&textlen=32&client=tw-ob&q=小姐水果坐中国冷

function pickWord() {
  return cnArr[Math.floor(Math.random() * cnArr.length)];
}

$(document).ready(function() {
  var sentence=pickWord() + pickWord() + pickWord() + pickWord() + pickWord();
  $("s1").append(sentence);
  $(function() {
    $('#btn2').click(function() {
     var url =  "https://translate.google.co.nz/#zh-CN/en/" + sentence;
         window.open(url);
    });
    $('#btn').click(function() {
      $("s1").empty();
      sentence=pickWord() + pickWord() + pickWord() + pickWord() + pickWord();
      $("s1").append(sentence);
    });
  });

  // Handler for .ready() called.
});