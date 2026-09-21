// ECN 241 Quiz — Batch 1 (Questions 1-38)
// correct: index of correct option (0-based)
const quizData = [
  { q: "1. Which of the following is not a flow?", options: ["Capital", "Income", "Investment", "Depreciation"], correct: 0, explanation: "Capital is a stock (measured at a point in time). Income, investment, and depreciation are all flows measured over a period." },
  { q: "2. Intermediate goods are those goods:", options: ["Which have not yet crossed the boundary line of production", "Which are purchased by one firm from another firm for resale", "Which are not included in the estimation of national products", "All of the above"], correct: 3, explanation: "All three statements describe characteristics of intermediate goods, so 'All of the above' is correct." },
  { q: "3. Study of macroeconomics is concerned with:", options: ["Theory of demand", "Determination of aggregate output", "General price level", "Both (b) and (c)"], correct: 3, explanation: "Macroeconomics studies aggregate output and the general price level, not individual demand theory (that's microeconomics)." },
  { q: "4. Which of the following is a flow?", options: ["Population", "Birth and death", "Water in tank", "None of these"], correct: 1, explanation: "Birth and death rates are measured over a period of time, making them flows. Population and water in a tank are stocks (measured at a point in time)." },
  { q: "5. Goods that are used by producers for several years and are of high value is known as:", options: ["Intermediate good", "Final goods", "Capital goods", "Both (b) and (c)"], correct: 3, explanation: "Capital goods (machinery, equipment) are long-lasting producer goods, and they are classified as final goods since they aren't resold in the same form." },
  { q: "6. In order to study the performance of an economy, macroeconomics focuses on:", options: ["Economic policies and policy variables", "National income", "The public sector", "All of the above"], correct: 3, explanation: "Macroeconomics examines all of these together to assess overall economic performance." },
  { q: "7. Goods that are used up in a single act of consumption are called:", options: ["Durable consumer goods", "Semi-durable consumer goods", "Non-durable consumer goods", "Non-material consumer goods"], correct: 2, explanation: "Non-durable goods (like food) are consumed and used up in a single use, unlike durable goods which last over multiple uses." },
  { q: "8. In a market clearing model:", options: ["The price level always exists at the interaction of AD and AS", "Output is determined by the interaction of AS and AD", "A shift of AD or AS immediately changes price and/or output", "All of the above"], correct: 3, explanation: "In a market-clearing model, prices adjust instantly so all three statements hold true simultaneously." },
  { q: "9. Aggregate expenditure is equal to:", options: ["Spending by consumers on consumption goods", "Spending by businesses on investment goods", "Spending by government", "The sum of (a), (b), (c), and (d)"], correct: 3, explanation: "Aggregate expenditure = C + I + G (+ net exports), the sum of spending by all sectors." },
  { q: "10. Circular flow of income as a model:", options: ["Shows the movement of resources among states", "Shows the movement of funds", "Indicates the flow of human capital", "Shows the movement of resources between firms and households"], correct: 3, explanation: "The circular flow model illustrates how income and resources move between firms and households (and other sectors)." },
  { q: "11. Withdrawals from the income expenditure system is known as:", options: ["Investment", "Savings", "Leakages", "Consumption"], correct: 2, explanation: "Savings, taxes, and imports are all 'leakages' — withdrawals of spending from the circular flow." },
  { q: "12. The equilibrium level of national income in a closed economy is where:", options: ["MPC = APC", "Consumption equals savings", "Aggregate expenditure equals national income", "Unemployment rate is about 3% of labour force"], correct: 2, explanation: "Equilibrium national income occurs where planned aggregate expenditure equals national income (output)." },
  { q: "13. According to the definition, autonomous expenditure will not be affected by a change in:", options: ["Exchange rate", "Interest rate", "Price level", "Real GDP"], correct: 3, explanation: "Autonomous expenditure is, by definition, independent of the level of income/output (real GDP)." },
  { q: "14. If the money value of final goods and services produced by residents of a country in a year is measured at the prices of the current year, it is called:", options: ["Real GDP", "GDP at constant Price", "GDP at constant Price (dup)", "GDP at current price"], correct: 3, explanation: "Valuing output at current-year prices gives Nominal GDP, also called GDP at current price." },
  { q: "15. Consumption in the economy depends on all except:", options: ["Consumer confidence", "Interest rate", "Corporate taxes", "Income tax"], correct: 2, explanation: "Corporate taxes affect business profits/investment decisions, not household consumption directly. Personal income tax, confidence, and interest rates all affect consumption." },
  { q: "16. ____ is a consumption that does not depend on income or disposable income.", options: ["Induced consumption", "Capital consumption", "Autonomous consumption", "None of the above"], correct: 2, explanation: "Autonomous consumption is the baseline consumption that occurs even with zero income." },
  { q: "17. The sum of marginal propensity to consume and marginal propensity to save equals:", options: ["2", "3", "0.5", "1"], correct: 3, explanation: "By definition, MPC + MPS = 1, since any additional income is either consumed or saved." },
  { q: "18. Which of these is not a method of measuring national income?", options: ["Product method", "Profit method", "Income method", "Expenditure method"], correct: 1, explanation: "The three standard methods are the product (output), income, and expenditure methods. 'Profit method' is not a recognized approach." },
  { q: "19. Intermediate goods do not enter the circular flow because they remain within the ____ sector.", options: ["Business", "Government", "Household", "Export"], correct: 0, explanation: "Intermediate goods are used up within the business/production sector before reaching final consumers." },
  { q: "20. Which of the following is an intermediate good?", options: ["Bread", "Leather", "Cloth", "Shoes"], correct: 1, explanation: "Leather is a raw input used to make shoes, making it an intermediate good. Bread, cloth as sold, and shoes are typically final goods." },
  { q: "21. ____ are payments which are not made in return for some productive service.", options: ["Circular income payment", "Transfer payments", "Double counting payment", "Income payment"], correct: 1, explanation: "Transfer payments (e.g., pensions, subsidies) are made without any corresponding production or service in return." },
  { q: "22. Which of the following statements is correct?", options: ["A variable is endogenous when its value is determined by forces outside the model", "A change in an exogenous variable is classified as an autonomous change", "A variable is autonomous when its values are determined by forces within the model", "A variable is exogenous when its value is determined by forces within the model"], correct: 1, explanation: "Exogenous variables are determined outside the model; a change in one is called an 'autonomous' change. The other options reverse the endogenous/exogenous definitions." },
  { q: "23. The objective determinants of consumption are:", options: ["Quantifiable", "Non quantifiable", "Psychological", "Qualitative"], correct: 0, explanation: "Objective determinants (income, prices, interest rates) are measurable/quantifiable, as opposed to psychological (subjective) determinants." },
  { q: "24. Given that S = -50 + 0.4Yd and C = 50 + 0.6Yd, it follows that MPS and MPC are:", options: ["-50 and 50 respectively", "0.6 and 0.4 respectively", "50 and -50 respectively", "0.4 and 0.6 respectively"], correct: 3, explanation: "MPS is the slope of the savings function (0.4), and MPC is the slope of the consumption function (0.6)." },
  { q: "25. In stating that C = F(yd, w):", options: ["It is hypothesized that yd is more important determinant of C than w", "It is hypothesized that w is more important determinant of C than yd", "W and yd are independent variables explaining C", "yd and W are dependent variables which explain C"], correct: 0, explanation: "Disposable income (yd) is hypothesized to be the primary determinant of consumption, more important than wealth (w)." },
  { q: "26. NNP = GNP - ____", options: ["Deduction", "Depreciation", "Investment", "Nit"], correct: 1, explanation: "Net National Product (NNP) equals Gross National Product (GNP) minus depreciation (capital consumption allowance)." },
  { q: "27. The value of GDP at the current prevailing price is:", options: ["Real GDP", "Personal income", "Private income", "NDP"], correct: 0, explanation: "GDP valued using current prices is commonly referred to loosely as GDP at current prices (nominal GDP); among the given options, 'real GDP' is the closest standard GDP measure referenced." },
  { q: "28. ____ are defined at a particular point of time.", options: ["Variable", "Stocks", "Flow", "Income"], correct: 1, explanation: "Stock variables (e.g., wealth, capital) are measured at a specific point in time, unlike flows which are measured over a period." },
  { q: "29. ____ will not pass through any more stages of production.", options: ["Intermediate good", "Final good", "Semi-finished good", "Raw good"], correct: 1, explanation: "A final good has completed the production process and is ready for end use — it won't be processed further." },
  { q: "30. Which of the following would cause business investment spending to rise?", options: ["An increase in real interest rates from 5% to 8%", "A decrease in the corporate profits tax rate from 48% to 34%", "A reduction of the investment tax credit from 10% to 2%", "Sales falling in relation to capacity from 90% to 60%"], correct: 1, explanation: "Lower corporate tax rates increase after-tax returns on investment, encouraging firms to invest more. The other options would discourage investment." },
  { q: "31. National income can be defined as:", options: ["The market value of goods and services produced in a state", "The monetary value of all the goods and services produced in a country during an accounting period", "The company value of all goods and services", "The value of goods and services produced globally"], correct: 1, explanation: "National income is the total monetary value of all goods and services produced within a country over a given accounting period (usually a year)." },
  { q: "32. Circular flow of income as a model:", options: ["Shows the movement of resources among states", "Shows the movement of fund", "Indicates the flow of human capital", "Shows the movement of resources between firms and households"], correct: 3, explanation: "The circular flow model specifically illustrates resource and income movement between firms and households." },
  { q: "33. Depreciation also refers to:", options: ["Capital formation", "Capital destruction", "Net national product", "Capital consumption"], correct: 3, explanation: "Depreciation is also called 'capital consumption' — the wearing out of capital goods used in production." },
  { q: "34. By 'stock' variable, we mean:", options: ["Total amount of existing output at a particular point in time", "The amount of current output", "Value of output produced in a given year", "Excess capacity"], correct: 0, explanation: "A stock variable is measured at one point in time (e.g., total capital stock), unlike a flow which is measured over a period." },
  { q: "35. National income computation by income approach:", options: ["Sums the value of households' expenditure", "Sums all income received by factors of production", "Sums the value added to input", "Takes account of government intervention"], correct: 1, explanation: "The income approach adds up all income earned by factors of production — wages, rent, interest, and profit." },
  { q: "36. What will happen to national income and size of the economy if G+I+X = T+S+M?", options: ["Shrink", "Equilibrium", "Expand", "None of the above"], correct: 1, explanation: "When total injections (G+I+X) equal total leakages (T+S+M), the economy is in equilibrium — no tendency to expand or contract." },
  { q: "37. A four sector economy is referred to as:", options: ["Injection", "Open economy", "Simple economy", "Closed economy"], correct: 1, explanation: "A four-sector economy includes households, firms, government, and the foreign sector — this makes it an open economy." },
  { q: "38. Which one is investment in the economy?", options: ["Building a factory", "Buying shares in stock exchange", "Depositing money in housing society", "Depositing money in the bank"], correct: 0, explanation: "In economics, 'investment' means adding to productive capital (like building a factory), not financial transactions like buying shares or saving money in a bank." }
];

let currentIndex = 0;
let userAnswers = new Array(quizData.length).fill(null);

const questionNumberEl = document.getElementById('questionNumber');
const questionTextEl = document.getElementById('questionText');
const optionsContainerEl = document.getElementById('optionsContainer');
const explanationBoxEl = document.getElementById('explanationBox');
const progressFillEl = document.getElementById('progressFill');
const progressLabelEl = document.getElementById('progressLabel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const scoreDisplayEl = document.getElementById('scoreDisplay');

function renderQuestion() {
  const item = quizData[currentIndex];
  questionNumberEl.textContent = `Question ${currentIndex + 1} of ${quizData.length}`;
  questionTextEl.textContent = item.q;
  optionsContainerEl.innerHTML = '';
  explanationBoxEl.classList.remove('show');
  explanationBoxEl.textContent = '';

  const answered = userAnswers[currentIndex];

  item.options.forEach((optionText, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = optionText;

    if (answered !== null) {
      btn.disabled = true;
      if (idx === item.correct) {
        btn.classList.add('correct');
      } else if (idx === answered) {
        btn.classList.add('incorrect');
      }
      if (idx === answered) {
        btn.classList.add('selected');
      }
    }

    btn.addEventListener('click', () => selectAnswer(idx));
    optionsContainerEl.appendChild(btn);
  });

  if (answered !== null && answered !== item.correct) {
    explanationBoxEl.textContent = item.explanation;
    explanationBoxEl.classList.add('show');
  }

  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === quizData.length - 1;

  updateProgress();
  updateScore();
}

function selectAnswer(idx) {
  if (userAnswers[currentIndex] !== null) return; // already answered
  userAnswers[currentIndex] = idx;
  renderQuestion();
}

function updateProgress() {
  const answeredCount = userAnswers.filter(a => a !== null).length;
  const pct = (answeredCount / quizData.length) * 100;
  progressFillEl.style.width = pct + '%';
  progressLabelEl.textContent = `${answeredCount} / ${quizData.length} answered`;
}

function updateScore() {
  const answeredCount = userAnswers.filter(a => a !== null).length;
  if (answeredCount === 0) {
    scoreDisplayEl.textContent = '';
    return;
  }
  const correctCount = userAnswers.reduce((sum, ans, i) => {
    return sum + (ans !== null && ans === quizData[i].correct ? 1 : 0);
  }, 0);
  scoreDisplayEl.textContent = `Score: ${correctCount} / ${answeredCount}`;
}

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < quizData.length - 1) {
    currentIndex++;
    renderQuestion();
  }
});

renderQuestion();

