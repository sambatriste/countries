var data = [
  { // 0
    name: "germany",
    options: [
      { no: "1", option:"ドイツ" },
      { no: "2", option:"フランス" },
      { no: "3", option:"オランダ" }
    ],
    correctAnswer: "1"
  },
  { // 1
    name: "uk",
    options: [
      { no: "1", option:"ノルウェー" },
      { no: "2", option:"イギリス" },
      { no: "3", option:"グリーンランド" }
    ],
    correctAnswer: "2"
  },
  { // 2
    name: "azerbaijan",
    options: [
      { no: "1", option:"アゼルバイジャン" },
      { no: "2", option:"ルーマニア" },
      { no: "3", option:"ブルガリア" }
    ],
    correctAnswer: "1"
  }
];

test("答えの判定ができること", function() {

  var target = new Questions(data);
  var q = target.nextQuestion();
  
  ok(target.isCorrect("1"));
  ok(!target.isCorrect("2"));

  ok(q.isCorrect("1"));
  ok(!q.isCorrect("2"));
  

});

