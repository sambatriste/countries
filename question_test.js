var data = [
  { "area":"asia", "map":"map01.gif", "name":"india",         "answer":"インド"          ,"options":["パキスタン","スリランカ"] }
];

test("random", function() {
  var actual,
      i;
  for (i = 0; i < 10; i++) {
    actual = COUNTRIES.utils.random(3);
    ok(0 <=actual);
    ok(actual < 3);
  }
});

test("sequence", function() {
  var actual = COUNTRIES.utils.generateSequence(10);
  equal(actual.length, 10);
  deepEqual(actual,  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test("randomNumbers", function() {
  var actual = COUNTRIES.utils.randomNumbers(10);
  deepEqual(actual.sort(), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].sort());
});

test("View", function() {
  var question = new COUNTRIES.Question(data[0], 0);
  var target = new COUNTRIES.QuestionView(question);

  equal(target.no, 1);
  equal(target.idx, 0);
  equal(target.page, "page0");
  equal(target.btn, "btn0");
  equal(target.answerCountry, "インド");
  equal(target.answerMap, "http://www.mofa.go.jp/mofaj/area/india/image/map.gif");
  equal(target.questionMap, "http://www.mofa.go.jp/mofaj/area/asia/image/map01.gif");
  
});
test("選択肢", function() {
  var target = new COUNTRIES.Question(data[0], 0),
      actual = target.generateOptions(),
      sorted = actual.sort();
  equal(actual.length, 3, "要素数は３");
  deepEqual(sorted, ["インド", "パキスタン", "スリランカ"].sort(),
            "元の選択肢の要素がすべて含まれていること");
});
test("答えの判定ができること", function() {

  var target = new COUNTRIES.Questions(data);
  var q = target.nextQuestion();
  
  ok(target.isCorrect("インド"));
  ok(!target.isCorrect("パキスタン"));

  ok(q.isCorrect("インド"));
  ok(!q.isCorrect("パキスタン"));

});

