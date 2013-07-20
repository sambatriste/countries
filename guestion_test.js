var data = [
  { 
    name: "germany",
    answer: "ドイツ",
    options: [
      { option:"フランス" },
      { option:"オランダ" }
    ]
  }
];
test("選択肢", function() {
  var target = new COUNTRIES.Question(data[0], 0),
  actual = target.generateOptions(),
  sorted = actual.sort();
  equal(actual.length, 3, "要素数は３");
  deepEqual(sorted, ["ドイツ", "フランス", "オランダ"].sort(),
            "元の選択肢の要素がすべて含まれていること");
});
test("答えの判定ができること", function() {

  var target = new COUNTRIES.Questions(data);
  var q = target.nextQuestion();
  
  ok(target.isCorrect("ドイツ"));
  ok(!target.isCorrect("フランス"));

  ok(q.isCorrect("ドイツ"));
  ok(!q.isCorrect("フランス"));
  

});

