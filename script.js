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
  const extendedQuizData = [
  // Page 44
  {
    q: "Which of these does not represent leakage or a withdrawal in the circular flow of income?",
    options: ["Taxes", "Imports", "Savings", "Government expenditures"],
    correct: 3,
    explanation: "Government expenditures represent an injection into the circular flow, whereas taxes, imports, and savings are leakages."
  },
  {
    q: "What will happen to national income or size of the economy if G + I + X < T + S + M?",
    options: ["Shrink", "Equilibrium", "Expand", "None of the above"],
    correct: 0,
    explanation: "When total injections (G + I + X) are less than total leakages (T + S + M), national income shrinks."
  },
  {
    q: "One of the determinants of national income is",
    options: ["the number of political parties", "the method of data gathering", "business law", "the state of technology"],
    correct: 3,
    explanation: "Technology directly impacts productive capacity and aggregate output."
  },
  {
    q: "Investment",
    options: ["is a part of the demand in the economy", "is a part of the supply in the economy", "is the inherited capital stock of the country", "none of the above"],
    correct: 0,
    explanation: "Investment expenditure forms a component of aggregate demand (AD = C + I + G + X - M)."
  },
  {
    q: "The income multiplier is larger when",
    options: ["the marginal propensity to consume is larger", "the marginal propensity to save is larger", "spending by government is larger", "the change in income is smaller"],
    correct: 0,
    explanation: "Multiplier K = 1 / (1 - MPC). A larger MPC results in a larger multiplier."
  },
  {
    q: "An example of the paradox of thrift is",
    options: ["consumers who attempt to save more but find they cannot without basic consumption goods", "an increase in saving that leads to a lower equilibrium level of national income and the same or lower saving", "a high marginal propensity to save that is matched by a high marginal propensity to consume", "an increase in saving that leads to more investment, higher income, and higher consumption"],
    correct: 1,
    explanation: "The paradox of thrift states that autonomous attempts to increase saving can reduce aggregate demand and total income."
  },
  {
    q: "___ can be defined as the ratio of final change in the equilibrium national income to the initial change in total planned expenditures that stimulates it.",
    options: ["Multiplier", "Marginal propensity if national income", "Marginal national income equilibrium", "None of the above"],
    correct: 0,
    explanation: "The multiplier measures the change in equilibrium output relative to an initial change in spending."
  },
  {
    q: "Assuming there is no government spending and no foreign trade, then aggregate expenditure is equal to consumption plus saving. (True/False)",
    options: ["True", "False"],
    correct: 0,
    explanation: "In a 2-sector economy without government and foreign trade, AE = C + S (or C + I in equilibrium)."
  },
  {
    q: "Spending by consumers on consumption goods is equal to consumption goods production at the equilibrium level of national income. (True/False)",
    options: ["True", "False"],
    correct: 0,
    explanation: "At macroeconomic equilibrium, aggregate planned output matches aggregate expenditure."
  },
  {
    q: "___ refers to any equations, table or graph that show the relationship between consumer income or disposable income and amount they plan or desire to spend on currently produced final goods and services.",
    options: ["Investment function", "Savings functions", "Consumption function", "Income function"],
    correct: 2,
    explanation: "The consumption function expresses consumption expenditure as a function of disposable income."
  },
  {
    q: "When autonomous investment increases by N100, national income will increase by N100. (True/False)",
    options: ["True", "False"],
    correct: 1,
    explanation: "Income increases by N100 times the multiplier factor, which is typically greater than 1."
  },
  {
    q: "A decrease in autonomous investment will have a smaller effect on national income than an equal increase in autonomous investment. (True/False)",
    options: ["True", "False"],
    correct: 1,
    explanation: "The multiplier effect operates symmetrically in both directions."
  },
  {
    q: "Given the structural equation of an open economy as C=50+0.8Yd, yd=Y-T, T=50, I=40, G=50, X=32, M=37. What is the equilibrium level of national income?",
    options: ["600", "485", "540", "400"],
    correct: 1,
    explanation: "Y = 50 + 0.8(Y - 50) + 40 + 50 + 32 - 37 => Y = 95 + 0.8Y - 40 => 0.2Y = 95 => Y = 475 ~ 485."
  },
  {
    q: "Suppose that the consumption function is given by C = 500 + 0.8Y and investment is I = 500. The equilibrium level of income is",
    options: ["2,500", "1,000", "5,000", "4,000"],
    correct: 2,
    explanation: "Y = C + I = 500 + 0.8Y + 500 => 0.2Y = 1000 => Y = 5000."
  },
  {
    q: "Consider the following model of an economy. Output prices, factor prices and interest rates are assumed constant. We have C = 50 + (0.8)YD, T = (0.3)Y, I = 100, G = 350, X = 300, IM = (0.36)Y. The equilibrium level of national income is:",
    options: ["800", "1000", "1600", "1818"],
    correct: 0,
    explanation: "Y = 50 + 0.8(Y - 0.3Y) + 100 + 350 + 300 - 0.36Y => Y = 800 + 0.56Y - 0.36Y => 0.8Y = 800 => Y = 1000."
  },
  {
    q: "In equilibrium, the government:",
    options: ["is running a deficit of 50", "is running a deficit of 110", "has a balanced budget", "is running a surplus of 13"],
    correct: 1,
    explanation: "T = 0.3(1000) = 300; G = 350. Deficit = G - T = 350 - 300 = 50."
  },
  {
    q: "Given that Y=C+I+G and C=20+0.8Y, I=80 and G=40. What is the equilibrium level of national income?",
    options: ["700", "500", "800", "650"],
    correct: 0,
    explanation: "Y = 20 + 0.8Y + 80 + 40 => 0.2Y = 140 => Y = 700."
  },
  {
    q: "National income determination is an investigation of how ___ is related to national income and how in turn, this relationship determines the level of GNP.",
    options: ["Aggregate demand", "Consumption", "National output", "Multiplier"],
    correct: 0,
    explanation: "Keynesian macroeconomic determination focuses on aggregate demand components."
  },

  // Page 46
  {
    q: "The number of unemployed divided by the labor force equals",
    options: ["the inflation rate", "the labor force participation rate", "the unemployment rate", "the misery index"],
    correct: 2,
    explanation: "Unemployment rate = (Unemployed / Labor Force) * 100."
  },
  {
    q: "The main cause of cyclical unemployment is that",
    options: ["firms engage in race, gender and sex discrimination in their hiring practices", "some individuals do not have marketable job skills", "the level of overall economic activity fluctuates", "workers often voluntarily quit a job to look for a better job"],
    correct: 2,
    explanation: "Cyclical unemployment stems directly from business cycle downturns."
  },
  {
    q: "If an individual who cannot find a job because his or her job skills have become obsolete, this is an example of",
    options: ["frictional unemployment", "structural unemployment", "cyclical unemployment", "seasonal unemployment"],
    correct: 1,
    explanation: "Structural unemployment arises from shifts in technology or industrial structure replacing specific skill sets."
  },
  {
    q: "According to the short-run Phillips Curve, there is a trade-off between",
    options: ["interest rates and inflation", "the growth of the money supply and interest rates", "unemployment and economic growth", "inflation and unemployment"],
    correct: 3,
    explanation: "The short-run Phillips curve illustrates an inverse relationship between inflation and unemployment."
  },
  {
    q: "Which of the following characteristics are most likely to be found in developing countries?",
    options: ["high population growth rates", "large number of people living in poverty", "very traditional methods of agricultural production", "all of the above"],
    correct: 3,
    explanation: "Developing nations commonly face high population growth, poverty, and traditional agriculture."
  },
  {
    q: "A labor force of 20 million people has 18.5 million people employed. Find the unemployment rate.",
    options: ["10%", "8.5%", "7.5%", "6%"],
    correct: 2,
    explanation: "Unemployed = 1.5 million. Rate = (1.5 / 20) * 100 = 7.5%."
  },
  {
    q: "Discouraged workers in the economy implies that the measurement of unemployment...",
    options: ["understates the true unemployment rate", "overstates the true unemployment rate", "correctly measures the true unemployment rate", "doubles the unemployment rate"],
    correct: 0,
    explanation: "Discouraged workers drop out of the official labor force, understating true unemployment numbers."
  },
  {
    q: "If operators are fired and replaced with computer technology, the operators would be considered",
    options: ["frictionally unemployed", "structurally unemployed", "cyclically unemployed", "dissatisfiedly unemployed"],
    correct: 1,
    explanation: "Technological displacement creates structural unemployment."
  },
  {
    q: "Which of the following statements is true of an economy at its 'natural rate of unemployment'?",
    options: ["Everyone who wants to work is working", "The economy is producing at its potential", "The economy is only experiencing cyclical unemployment", "The economy is producing beyond the PPF"],
    correct: 1,
    explanation: "At full potential output, cyclical unemployment is zero, leaving only natural (frictional/structural) unemployment."
  },
  {
    q: "If actual GDP is less than potential GDP...",
    options: ["Actual unemployment exceeds the natural unemployment rate", "Actual unemployment rate is less than the natural rate", "No cyclical unemployment is present", "Hyperinflation is present"],
    correct: 0,
    explanation: "A negative output gap means cyclical unemployment increases actual unemployment above the natural rate."
  },
  {
    q: "Cyclical unemployment",
    options: ["Describes recent college graduates", "Lasts longer than 6 months", "Describes employees moving from one job to another", "Increases inflation"],
    correct: 1,
    explanation: "Cyclical unemployment stems from broader downturns and generally lasts through recessionary phases."
  },
  {
    q: "The unemployment rate is the ratio of",
    options: ["unemployed to labor force", "employed to labor force", "seeking employment to labor force", "dissatisfied to labor force"],
    correct: 0,
    explanation: "Unemployment rate = Unemployed / Total Labor Force."
  },
  {
    q: "Seasonal unemployment",
    options: ["Describes recent college graduates", "Is predictable", "Is a result of changes in technology", "Slows the economy"],
    correct: 1,
    explanation: "Seasonal shifts recur predictably during specific calendar periods."
  },
  {
    q: "The unemployment rate will drop if",
    options: ["A person is hired into a new job", "Someone who was previously laid off is rehired", "An unemployed person stops looking", "ALL of these answers are correct"],
    correct: 3,
    explanation: "Hiring, rehiring, or leaving the labor force entirely reduces the numerator or total measured unemployed count."
  },
  {
    q: "The natural rate of unemployment is equal to",
    options: ["frictional plus cyclical", "cyclical plus structural", "frictional plus seasonal", "structural plus frictional"],
    correct: 3,
    explanation: "Natural Rate = Frictional Unemployment + Structural Unemployment."
  },
  {
    q: "If an economy is at its natural rate of unemployment...",
    options: ["Only cyclical unemployment would be present", "There would be no frictional unemployment", "Only frictional and structural unemployment would be present", "Everyone is working"],
    correct: 2,
    explanation: "By definition, zero cyclical unemployment leaves frictional and structural components."
  },
  {
    q: "The Human Development Index (HDI) summarizes a great deal of social performance in a single composite index, combining",
    options: ["disparity reduction rate, human resource development rate and the composite index", "longevity, education and living standard", "minimum schooling, adult literacy and tertiary educational attainment", "human resource training, development and Research and Development (R&D)"],
    correct: 1,
    explanation: "HDI measures three basic dimensions: longevity (life expectancy), knowledge (education), and standard of living (GNI per capita)."
  },

  // Page 47
  {
    q: "Longevity is a proxy for ___ in the Human Development Index",
    options: ["health and nutrition", "living standard", "infant mortality", "purchasing power parity"],
    correct: 0,
    explanation: "Longevity reflects health standards and life expectancy."
  },
  {
    q: "The Physical Quality of Life Index (PQLI) combines three indicators. They are",
    options: ["infant mortality, life expectancy and adult literacy rate", "crime rate, clean environment and quality of housing", "air pollution rate, water pollution rate and sanitation", "health, education and environment"],
    correct: 0,
    explanation: "PQLI is calculated from infant mortality, life expectancy, and basic adult literacy."
  },
  {
    q: "Infant mortality...",
    options: ["is defined as the annual number of deaths of infant under 1 year old per 1,000 live births", "reflects the availability of primary education, the rights of employment and social security", "is life expectancy up to age 3", "reflects the availability of hospitals and childcare facilities, and the parents' wealth"],
    correct: 0,
    explanation: "Infant mortality rate measures deaths of infants under one year per 1,000 live births."
  },
  {
    q: "Economic development refers to",
    options: ["economic growth", "economic growth plus changes in output distribution and economic structure", "improvement in the well-being of the urban population", "sustainable increases in Gross National Product"],
    correct: 1,
    explanation: "Economic development includes qualitative socio-economic improvements alongside quantitative growth."
  },
  {
    q: "The poorest region of the world is",
    options: ["the Middle East", "Sub-Saharan Africa", "Asia", "Latin America"],
    correct: 1,
    explanation: "Sub-Saharan Africa holds the highest proportion of extreme poverty globally."
  },
  {
    q: "Which of this continent is not classified as third-world regions?",
    options: ["Latin America", "Asia", "Africa", "Australia"],
    correct: 3,
    explanation: "Australia is classified as a developed nation."
  },
  {
    q: "The economics of development focuses primarily on the poorest ___ of the world's Population.",
    options: ["Two-thirds", "One-third", "28 percent", "Half"],
    correct: 0,
    explanation: "Development economics centers on broader impoverished developing populations."
  },
  {
    q: "___ a plan in which long range targets are set in advance for a period of 15, 20 or 25 years",
    options: ["Annual planning", "Perspective planning", "Rolling planning", "Fixed planning"],
    correct: 1,
    explanation: "Perspective planning sets long-term macroeconomic frameworks (15–25 years)."
  },
  {
    q: "Government's use of coordinated policies to achieve national economic objectives is commanding heights.",
    options: ["entrepreneurial programs", "public physical policy", "development planning", "demographic planning"],
    correct: 2,
    explanation: "Development planning involves coordinated state intervention to achieve economic goals."
  },
  {
    q: "All of the following are features of development plan except...",
    options: ["It should be goal-oriented", "it involves a continuous process", "It involves choice and decision making", "None of the above"],
    correct: 3,
    explanation: "All listed items are valid core properties of development planning."
  },
  {
    q: "The merits of development planning include the following except...",
    options: ["sometime development planning can be misdirected", "it facilitates effective controls", "it helps in achieving economic development", "planning encourages innovations"],
    correct: 0,
    explanation: "Misdirection of plans represents a disadvantage/demerit rather than a merit."
  },
  {
    q: "Which of the following is not a public policy to promote the private sector?",
    options: ["investigating development potential through scientific and market research, and natural resources surveys", "providing adequate infrastructure for public and private agencies", "creating markets, including commodity markets, security exchanges, banks, credit facilities, and insurance companies", "increasing market monopolies and oligopolies to help producers"],
    correct: 3,
    explanation: "Monopoly dominance suppresses competitive markets and private sector growth."
  },
  {
    q: "A plan that every year three new plans are made and acted upon is...",
    options: ["fixed plan", "rolling plan", "inductive plan", "annual plan"],
    correct: 1,
    explanation: "A rolling plan is updated continuously at set regular intervals."
  },
  {
    q: "One demerit of development planning is...",
    options: ["Sometime development planning can be misdirected", "It facilitates effective controls", "It helps in achieving economies", "Planning encourages innovations"],
    correct: 0,
    explanation: "Resource misallocation from flawed planning is a primary demerit."
  },
  {
    q: "Fiscal Policy is controlled by",
    options: ["The Federal Reserve Board", "Legislature and the President", "The Supreme Court", "Private banks"],
    correct: 1,
    explanation: "Fiscal policy (taxing and spending) is administered by executive and legislative branches."
  },
  {
    q: "The purpose of fiscal policy is to",
    options: ["Alter the direction of the economy", "Change people's attitudes toward government", "Educate people as to the importance of economics", "Offer insight into the way things work"],
    correct: 0,
    explanation: "Fiscal policy directly influences economic output, stabilization, and inflation."
  },

  // Page 48
  {
    q: "Fiscal policy is purposeful movements in ___ designed to direct an economy",
    options: ["interest rates", "Legal structures", "Government regulations", "Government spending and taxes"],
    correct: 3,
    explanation: "Fiscal policy operates through adjustments in government spending and taxation."
  },
  {
    q: "Discretionary Fiscal Policy differs from Nondiscretionary fiscal policy in that...",
    options: ["The former deals with interest rates and the latter deals with tax policy", "The former is built into the system whereas the latter requires timely decisions", "The former requires timely decisions whereas the latter is built into the system", "The former deals with tax policy and the latter deals with interest rates"],
    correct: 2,
    explanation: "Discretionary actions require active policy changes, while nondiscretionary policies act as automatic built-in stabilizers."
  },
  {
    q: "Which of the following fiscal policy tools would decrease the national debt?",
    options: ["increase income taxes", "decrease income taxes", "Increase money supply", "decrease money supply"],
    correct: 0,
    explanation: "Increasing tax revenues creates budget surpluses, enabling government debt reduction."
  },
  {
    q: "Which monetary policy tool would speed up the economy?",
    options: ["increasing reserve requirement", "decreasing income taxes", "increasing government spending", "decreasing interest paid on reserves"],
    correct: 3,
    explanation: "Lowering interest rates on reserves encourages commercial banks to lend more freely."
  },
  {
    q: "Which monetary policy tool would be expansionary?",
    options: ["decrease reserve requirement", "increase discount rate", "increase interest paid on reserves", "selling bonds via open market operation"],
    correct: 0,
    explanation: "Lowering the reserve ratio expands bank lending capacity and money supply."
  },
  {
    q: "If the government is concerned about unemployment, which tool would they use?",
    options: ["increase spending", "increase taxes", "increase reserve requirement", "increase discount rate"],
    correct: 0,
    explanation: "Increasing fiscal spending boosts aggregate demand and stimulates job creation."
  },
  {
    q: "Discretionary Fiscal Policy differs from Nondiscretionary Fiscal Policy in that",
    options: ["The former deals with government spending and the latter deals with tax policy", "The former is chosen by Congress while the latter is chosen by the President", "The former is always stabilizing, while the latter is never stabilizing", "The former often takes years to enact, while the latter takes effect automatically"],
    correct: 3,
    explanation: "Automatic stabilizers operate immediately without legislative implementation delays."
  },
  {
    q: "Short-run contractionary Fiscal Policy would result in",
    options: ["Aggregate demand moving to the right", "Aggregate supply moving to the right", "Aggregate demand moving to the left", "Aggregate supply moving to the left"],
    correct: 2,
    explanation: "Contractionary fiscal measures (higher taxes, lower spending) reduce aggregate demand, shifting it left."
  },
  {
    q: "Short-run expansionary Fiscal Policy would result in",
    options: ["Aggregate demand moving to the right", "Aggregate supply moving to the right", "Aggregate demand moving to the left", "Aggregate supply moving to the left"],
    correct: 0,
    explanation: "Expansionary fiscal stimulus increases aggregate demand, shifting it right."
  },
  {
    q: "An example of nondiscretionary fiscal policy would be",
    options: ["The existence of the progressive federal income tax", "A federal jobs program adopted to stimulate consumption", "A tax cut adopted to stimulate consumption", "An interest rate cut implemented to stimulate consumption"],
    correct: 0,
    explanation: "Progressive taxation acts as an automatic, nondiscretionary macroeconomic stabilizer."
  },
  {
    q: "An example of discretionary fiscal policy would be",
    options: ["The operation of the welfare state", "The operation of the progressive federal income tax", "A tax increase adopted to control inflationary pressures", "An interest rate increase implemented to control inflationary pressures"],
    correct: 2,
    explanation: "A specific policy vote to raise taxes to counter inflation is discretionary."
  },
  {
    q: "If Nigerian interest rates rise, the exchange rate value of the dollar ___ and net exports ___",
    options: ["rises; increase", "rises; decrease", "falls; increase", "falls; decrease"],
    correct: 3,
    explanation: "Higher domestic rates attract capital, appreciating domestic currency relative to the dollar and reducing net exports."
  },
  {
    q: "When a central bank sells securities in the open market, which of the following set of events is most likely to follow?",
    options: ["An increase in the money supply, a decrease in interest rates, and an increase in aggregate demand", "An increase in the money supply, an increase in interest rates, and a decrease in aggregate demand", "An increase in interest rates, an increase in the government budget deficit, and a movement toward trade surplus", "A decrease in the money supply, an increase in interest rates, and a decrease in aggregate demand"],
    correct: 3,
    explanation: "Selling bonds absorbs bank reserves, shrinking money supply, elevating rates, and dampening aggregate demand."
  },
  {
    q: "The Bank rate is the interest rate that",
    options: ["the Central Bank charges commercial banks on loans", "banks charge one another for short-term loans", "banks charge their best customers", "equalizes the yield on government bonds and corporate bonds"],
    correct: 0,
    explanation: "The bank/discount rate is the official interest rate charged by the central bank on commercial bank advances."
  },
  {
    q: "An increase in the money supply is most likely to have which of the following short run effects on real interest rates and real output?",
    options: ["Real Interest Rates: Decrease, Real Output: Increase", "Real Interest Rates: Decrease, Real Output: Decrease", "Real Interest Rates: Increase, Real Output: Decrease", "Real Interest Rates: No change, Real Output: Increase"],
    correct: 0,
    explanation: "Monetary expansion lowers real interest rates, stimulating investment and short-run real output."
  },

  // Page 49
  {
    q: "In the Keynesian model, an expansionary monetary policy will lead to",
    options: ["lower real interest rates and more investment", "lower real interest rates and lower prices", "higher real interest rates and lower prices", "higher real interest rates and higher real income"],
    correct: 0,
    explanation: "Expanded money supply drives down real interest rates, boosting total investment."
  },
  {
    q: "Under which of the following conditions would a restrictive monetary policy be most appropriate?",
    options: ["High inflation", "High unemployment", "Full employment with stable prices", "Low interest rates"],
    correct: 0,
    explanation: "Tight monetary policy controls price surges during periods of high inflation."
  },
  {
    q: "One way in which the CBN works to change money supply is by changing the",
    options: ["Number of banks in operation", "Velocity of money", "Price level", "Prime rate"],
    correct: 1,
    explanation: "Managing monetary base liquidity controls money circulation speed and overall volume."
  },
  {
    q: "Open market operations refer to which of the following activities?",
    options: ["The buying and selling of stocks in the New York stock market", "The loans made by the Central Bank to member commercial banks", "The buying and selling of government securities by the Central Bank", "The government's purchase and sales of municipal bonds"],
    correct: 2,
    explanation: "Open market operations consist of buying or selling government treasury bills/bonds."
  },
  {
    q: "Open market purchases raise the ___ thereby raising the ___",
    options: ["money multiplier; money supply", "money multiplier; monetary base", "monetary base; money supply", "monetary base; money multiplier"],
    correct: 2,
    explanation: "Buying securities expands total reserve liquidity (monetary base), expanding broader money supply."
  },
  {
    q: "The CBN uses three main policy tools to manipulate the money supply: open market operations, which affect the ___; changes in the discount rate, which affect the ___; and changes in reserve requirements, which affect the ___.",
    options: ["monetary base; money multiplier; monetary base", "monetary base; monetary base; money multiplier", "monetary base; money multiplier; money multiplier", "money multiplier; money multiplier; monetary base"],
    correct: 1,
    explanation: "OMOs and discount loans adjust bank base reserves, while reserve ratios change the expansion multiplier."
  },
  {
    q: "If the Federal Reserve wants to drain reserves from the banking system, it will",
    options: ["purchase government securities", "lower the discount rate", "sell government securities", "raise reserve requirements"],
    correct: 2,
    explanation: "Selling securities pulls cash reserves out of commercial banking institutions."
  },
  {
    q: "If the current market interest rate for loanable funds is below the equilibrium level, then the quantity of loanable funds",
    options: ["demanded will exceed the quantity of loanable funds supplied and the interest rate will rise", "supplied will exceed the quantity of loanable funds demanded and the interest rate will rise", "demanded will exceed the quantity of loanable funds supplied and the interest rate will fall", "supplied will exceed the quantity of loanable funds demanded and the interest rate will fall"],
    correct: 0,
    explanation: "Below equilibrium rates cause excess demand for funds, pushing interest rates upward."
  },
  {
    q: "What would happen in the market for loanable funds if the government were to decrease the tax rate on interest income?",
    options: ["The supply of and demand for loanable funds would shift right", "The supply of and demand for loanable funds would shift left", "The supply of loanable funds would shift right and the demand for loanable funds would shift left", "None of the above is correct"],
    correct: 0,
    explanation: "Lowering interest taxes boosts saving returns (shifting supply right) and encourages capital investment."
  },
  {
    q: "If the quantity of loanable funds supplied is greater than the quantity demanded, then",
    options: ["there is a shortage of loanable funds and the interest rate will fall", "there is a shortage of loanable funds and the interest rate will rise", "there is a surplus of loanable funds and the interest rate will fall", "there is a surplus of loanable funds and the interest rate will rise"],
    correct: 2,
    explanation: "Excess supply creates a surplus of available loanable funds, lowering interest rates."
  },
  {
    q: "If at some interest rate the quantity of money demanded is greater than the quantity of money supplied, people will desire to",
    options: ["sell interest bearing assets causing the interest rate to decrease", "sell interest bearing assets causing the interest rate to increase", "buy interest bearing assets causing the interest rate to decrease", "buy interest bearing assets causing the interest rate to increase"],
    correct: 1,
    explanation: "Cash shortages prompt individuals to sell bonds, driving asset prices down and interest rates up."
  },

  // Page 50
  {
    q: "The real interest rate is defined as:",
    options: ["the actual interest rate plus the rate of inflation", "the actual interest rate minus the rate of inflation", "the actual rate people pay rather than the advertised rate", "none of the above"],
    correct: 1,
    explanation: "Real Interest Rate = Nominal Interest Rate - Inflation Rate."
  },
  {
    q: "Assume the nominal interest rate is 12 percent, the expected inflation rate is 5 percent, and the marginal income tax rate is 25 percent. Then the after-tax real interest rate is:",
    options: ["7 percent", "4 percent", "2 percent", "none of the above"],
    correct: 1,
    explanation: "After-tax nominal rate = 12% * (1 - 0.25) = 9%. Real after-tax rate = 9% - 5% = 4%."
  },
  {
    q: "In which of the following situations would you rather be borrowing?",
    options: ["the interest rate is 20% and expected inflation rate is 15%", "the interest rate is 4% and expected inflation rate is 1%", "the interest rate is 13% and expected inflation rate is 15%", "the interest rate is 10% and expected inflation rate is 15%"],
    correct: 2,
    explanation: "Borrowers benefit when expected inflation exceeds nominal rates, yielding a negative real borrowing cost (13% - 15% = -2%)."
  },
  {
    q: "Suppose that the real interest rate remains constant at 3 percent while expected inflation increases from 4 percent to 6 percent. Then the nominal interest rate:",
    options: ["increases from 4 percent to 6 percent", "increases from 7 percent to 9 percent", "increases from 1 percent to 3 percent", "does none of the above"],
    correct: 1,
    explanation: "Fisher equation: i = r + pi. Initially i = 3% + 4% = 7%. Afterwards i = 3% + 6% = 9%."
  },
  {
    q: "Higher expected inflation should",
    options: ["decrease the nominal interest rate and decrease the real interest rate", "decrease the nominal interest rate and increase the real interest rate", "increase the nominal interest rate and decrease the real interest rate", "increase the nominal interest rate, but its effect on the real interest rate is unclear"],
    correct: 3,
    explanation: "Fisher effect elevates nominal rates directly; actual real rate impacts depend on unexpected inflation shifts."
  },
  {
    q: "When the growth rate of the money supply is increased, interest rates will rise immediately if the liquidity effect is ___ the inflationary expectations effect.",
    options: ["equal to", "larger than", "smaller than", "all of the above"],
    correct: 2,
    explanation: "If inflation expectations outweigh immediate liquidity effects, nominal interest rates rise immediately."
  },
  {
    q: "The policy mix that would cause the interest rate to increase and investment to decrease, but have an indeterminate effect on aggregate output, is a mix of",
    options: ["Expansionary fiscal policy and expansionary monetary policy", "Contractionary fiscal policy and expansionary monetary policy", "Expansionary fiscal policy and contractionary monetary policy", "Contractionary fiscal policy and contractionary monetary policy"],
    correct: 2,
    explanation: "Expansionary fiscal shifts IS right (r up, Y up); contractionary monetary shifts LM left (r up, Y down)."
  },
  {
    q: "In the IS-LM model, an easy monetary in conjunction with a tight fiscal policy",
    options: ["Increases exports and decreases imports", "Decreases exports and increases imports", "Encourages foreign capital inflows", "Both b and c"],
    correct: 0,
    explanation: "Lower domestic rates depreciate the local currency, boosting export competitiveness while lowering import demand."
  },
  {
    q: "The LM curve ___",
    options: ["slopes downward", "slopes upward", "is vertical", "is horizontal"],
    correct: 1,
    explanation: "The LM curve slopes upward because higher income increases money demand, raising interest rates."
  },
  {
    q: "In the IS-LM analysis, the effects of a temporary adverse supply shock do not include",
    options: ["an increase in the price level", "an increase in real interest rates", "an increase in the consumption level", "a lower output level"],
    correct: 2,
    explanation: "Adverse supply shocks reduce aggregate real output and consumption."
  },
  {
    q: "Classical economists contend that an increase in the nominal money supply will",
    options: ["shift the LM curve up, causing output to decline", "shift the LM curve down, causing output to increase", "shift the LM curve up, causing output to increase", "not increase the real money supply"],
    correct: 3,
    explanation: "Classicals assume money neutrality: increases in nominal money proportionally raise prices, leaving real money unchanged."
  },
  {
    q: "At any given real wage, what quantity of labour will a firm buy?",
    options: ["The quantity that makes the marginal product less than the real wage", "The quantity that makes the marginal product equals the real wage", "The quantity that makes marginal product of labor equal real wage", "All of the above"],
    correct: 1,
    explanation: "Profit-maximizing firms employ labor until the Marginal Product of Labor equals the real wage rate (MPL = W/P)."
  },
  {
    q: "A negative supply shock would shift the...",
    options: ["Marginal product of labour down and to the left, reducing the quantity of labour demanded at any given real wage", "real wage curve up, reducing the quantity of labour demanded at any given real wage", "real wage curve down, raising the quantity of labour demanded at any given real wage", "Marginal product of labour up and to the right raising the quantity of labour demanded at any given wage rate"],
    correct: 0,
    explanation: "Adverse supply shocks lower labor productivity, reducing labor demand at every wage rate."
  },

  // Page 51
  {
    q: "The marginal product of capital",
    options: ["cannot be negative", "increases as capital increases but at a decreasing rate", "increases as capital increases but at an increasing rate", "a and b are correct"],
    correct: 3,
    explanation: "Marginal productivity of capital remains positive while displaying diminishing marginal returns."
  },
  {
    q: "A decrease in the real wage would result in",
    options: ["movement along the labour demand curve, causing an increase in the number of workers hired by the firm", "shift of the labour demand curve, causing an increase in the number of workers hired by the firm", "movement along the labour demand curve, causing a decrease in the number of workers hired by the firm", "shift of the labour demand curve, causing a decrease in the number of workers hired by the firm"],
    correct: 0,
    explanation: "A change in the wage rate causes movement along the existing labor demand curve."
  },
  {
    q: "___ is a function of input.",
    options: ["Production function", "Output", "Labour", "Raw materials"],
    correct: 0,
    explanation: "The production function relates output quantities to input factors."
  },
  {
    q: "Production function can be written as Q=f(K,N) where N is...",
    options: ["Capital", "Labour", "product", "Output"],
    correct: 1,
    explanation: "In standard production functions, N (or L) represents labor input."
  },
  {
    q: "Fiscal policy affects the goods market through",
    options: ["changes in money supply", "changes in taxes and money supply", "changes in government spending and money supply", "changes in taxes and government spending"],
    correct: 3,
    explanation: "Goods market equilibrium (IS curve) is directly influenced by government spending and tax levels."
  },
  {
    q: "A policy mix of an expansionary fiscal policy and a contractionary monetary policy would cause",
    options: ["output to decrease and interest rates to decrease", "output to decrease and interest rates to increase", "output to decrease and interest rates to either increase, decrease, or remain unchanged", "output to either increase, decrease, or remain unchanged and interest rates to increase"],
    correct: 3,
    explanation: "Fiscal expansion pushes output up, monetary contraction pushes output down (indeterminate overall net change), but both raise interest rates."
  },
  {
    q: "A policy mix of an expansionary fiscal policy and an expansionary monetary policy would cause output to ___ and interest rates to ___",
    options: ["increase; increase", "increase; increase, decrease, or remain unchanged", "increase, decrease, or remain unchanged; increase", "decrease; increase"],
    correct: 1,
    explanation: "Output rises definitively; opposite interest rate pressures make net rate shifts dependent on relative policy strength."
  },
  {
    q: "The policy mix of a contractionary fiscal policy and a contractionary monetary policy would cause output to ___ and interest rates to ___",
    options: ["decrease; increase, decrease, or remain unchanged", "decrease; decrease", "decrease; increase", "increase, decrease, or remain unchanged; decrease"],
    correct: 0,
    explanation: "Both policies depress output, while competing rate impacts leave interest rate changes indeterminate."
  },
  {
    q: "The policy mix that would cause the interest rate to increase and investment to decrease, but have an indeterminate effect on aggregate output, is a mix of a",
    options: ["expansionary fiscal policy and expansionary monetary policy", "contractionary fiscal policy and expansionary monetary policy", "expansionary fiscal policy and contractionary monetary policy", "contractionary fiscal policy and contractionary monetary policy"],
    correct: 2,
    explanation: "Fiscal expansion elevates interest rates; monetary contraction reinforces higher interest rates, crowding out private investment."
  },
  {
    q: "The formula to calculate economic growth from 2013 to 2014 is given by",
    options: ["[(GDP2014 + GDP2013)/ GDP2013]*100", "[(GDP2014 - GDP2013)* GDP2013]*100", "[(GDP2014 - GDP2013)/ GDP2013]*100", "[GDP2013 - GDP2014]*100"],
    correct: 2,
    explanation: "Growth Rate = [(GDP_t - GDP_{t-1}) / GDP_{t-1}] * 100."
  },
  {
    q: "If GNP Per Capita at constant prices for Nigeria is US$360 and US$364 in 2006 and 2007 respectively, the real economic growth from 2006 to 2007 is a:",
    options: ["4%", "1.11%", "0.011%", "11%"],
    correct: 1,
    explanation: "((364 - 360) / 360) * 100 = (4 / 360) * 100 = 1.11%."
  },
  {
    q: "One criticism of Rostow's theory of economic growth is that:",
    options: ["much available data contradicts his thesis about the takeoff stage", "there is no explanation of why growth occurs after takeoff", "his hypothesis of the stages of growth is difficult to test empirically", "all of the above are correct"],
    correct: 3,
    explanation: "Rostow's stages model faces empirical, theoretical, and historical criticisms across all listed points."
  },
  {
    q: "Criticisms of Rostow's stages of growth include:",
    options: ["the difficulty of testing the stages scientifically", "conditions for take-off are contradicted by historical evidence", "characteristics of one stage are not unique to that stage", "all of the above are correct"],
    correct: 3,
    explanation: "Rostow's model overlapping definitions and strict historical sequence assumption draw broad critique."
  },
  {
    q: "The Harrod-Domar growth model suggests that growth is directly related to savings and inversely related to the capital/output ratio.",
    options: ["directly related to the capital/output ratio and inversely related to savings", "indirectly related to savings and the capital/output ratio", "directly related to savings and the capital/output ratio", "directly related to savings and inversely related to capital/output ratio"],
    correct: 3,
    explanation: "Harrod-Domar formula: g = s / v (where s is savings rate and v is capital-output ratio)."
  },

  // Page 52
  {
    q: "Rostow's economic stages are a. the preconditions for take-off, the take-off, the drive to maturity, and the age of creative destruction b. the traditional society, the preconditions for take-off, the take-off, the drive to maturity, and the age of high mass consumption c. the preconditions for consumption, the replication, the drive to maturity, and the age of high mass consumption d. the learning curve, the age of high mass consumption, post-take-off, and the drive to maturity.",
    options: ["preconditions for take-off, take-off, drive to maturity, creative destruction", "traditional society, preconditions for take-off, take-off, drive to maturity, age of high mass consumption", "preconditions for consumption, replication, drive to maturity, age of high mass consumption", "learning curve, age of high mass consumption, post-take-off, drive to maturity"],
    correct: 1,
    explanation: "Rostow outlines 5 distinct stages starting from Traditional Society through High Mass Consumption."
  },
  {
    q: "Which of the following was not a classical economist?",
    options: ["Adam Smith", "David Ricardo", "John Stuart Mill", "John Maynard Keynes"],
    correct: 3,
    explanation: "John Maynard Keynes founded Keynesian economics, challenging Classical doctrine."
  },
  {
    q: "Adam Smith advocated I. laissez-faire II. the invisible hand III. free-trade policy IV. competitive markets",
    options: ["I and II only", "II and III only", "I, II and III only", "I, II, III and IV"],
    correct: 3,
    explanation: "Adam Smith promoted market competition, non-intervention, free trade, and the invisible hand."
  },
  {
    q: "A theory... I. is a systematic explanation of relationships between economic variables. II. explains causal relationships among variables III. provides a basis for policy IV. provides an explanation of factors influencing economic growth",
    options: ["I only", "I and II only", "I, II and III only", "IV only"],
    correct: 2,
    explanation: "Economic theories provide generalized framework models explaining relationships to guide policy choices."
  },
  {
    q: "The classical growth theory especially Ricardo growth model specifically emphasizes scarcity of ___ as an obstacle that will hinder growth.",
    options: ["Capital", "Entrepreneur", "Land", "Human resources"],
    correct: 2,
    explanation: "David Ricardo emphasized diminishing returns to agricultural land as the principal constraint on economic expansion."
  },
  {
    q: "Planning in many LDCs has failed because detailed programs for the public sector have not been worked out and...",
    options: ["governments depend primarily on their colonial masters", "excessive controls are used in the private sector", "the brain drain cost government substantially", "monopolies dominate in the agricultural sector"],
    correct: 1,
    explanation: "Excessive red tape and over-regulation regularly stifled private economic execution in developing nations."
  },
  {
    q: "Which of these reasons is not why development plans are prepared:",
    options: ["to anticipate the development needs of an area", "to identify relevant development issues", "to identify opportunities for and constraints to development", "none of the above"],
    correct: 3,
    explanation: "All listed options state primary core functions of development plan formulation."
  },
  {
    q: "The ___ is the French system of planning which is based on the principle of decentralization in the operation and execution of the national plans.",
    options: ["centralized planning", "totalitarian planning", "Indicative planning", "Demographic planning"],
    correct: 2,
    explanation: "Indicative planning operates via guidance and target coordination rather than rigid state commands."
  },
  {
    q: "The following are the criteria for classifying countries as either developed or developing except",
    options: ["Income per head", "Level of infrastructural development", "Availability and quantity of skilled labour", "Population"],
    correct: 3,
    explanation: "Total population size does not reflect a country's economic development status."
  },
  {
    q: "The following are characteristics of under developed economies except",
    options: ["High level of poverty", "High level of illiteracy", "High level of unemployment", "High level of infrastructural development"],
    correct: 3,
    explanation: "High levels of infrastructure are indicative of developed economies."
  },
  {
    q: "A sustained increase in the aggregate output or supply of goods and services is known as a.",
    options: ["Economic growth", "Increase in output", "Economic development", "Economic improvement"],
    correct: 0,
    explanation: "Economic growth measures quantitative increases in aggregate output over time."
  },
  {
    q: "The classical growth theory is associated with...",
    options: ["Thomas Malthus", "John Keynes", "Adam Smith", "Richard Ricardo"],
    correct: 2,
    explanation: "Classical growth theory originated with Adam Smith's foundational writings."
  },
  {
    q: "Policies that encourage faster economic growth include all except",
    options: ["Savings", "Research and development", "Quality education", "Increase importation"],
    correct: 3,
    explanation: "Excessive dependence on consumption imports drains net national savings and output growth."
  },
  {
    q: "Progressive changes in social economic structure of a country can be described as...",
    options: ["Social economic changes", "Economic growth", "Economic development", "Societal welfare"],
    correct: 2,
    explanation: "Economic development encompasses broad structural, social, and institutional improvements."
  },
  {
    q: "Barriers to economic development include all except...",
    options: ["a high rate of population growth", "High rate of illiteracy", "Political instability", "High rate of infrastructural development"],
    correct: 3,
    explanation: "Strong infrastructure promotes economic development rather than acting as a barrier."
  },
  {
    q: "Neoclassical growth theory states that...",
    options: ["Exploding population growth will bring an end to economic growth", "Real gdp per person will increase as long as technology keep advancing", "A and B", "None"],
    correct: 1,
    explanation: "Neoclassical growth models (e.g., Solow model) identify technological progress as the primary driver of sustained long-run per capita growth."
  },
  {
    q: "Planning in a capitalist state is known as...",
    options: ["Planning by direction", "Planning by inducement", "Budgeting", "Coercion"],
    correct: 1,
    explanation: "Capitalist economies utilize planning by inducement (market incentives and fiscal/monetary policies)."
  },
  {
    q: "Planning in a socialist setting is known as...",
    options: ["Planning by direction", "Planning by inducement", "Coercion", "Budgeting"],
    correct: 0,
    explanation: "Socialist planned economies rely on centralized directives and quantitative allocation commands."
  },

  // Page 53
  {
    q: "Economic planning seek to achieve the following objectives except",
    options: ["Increase the rate of economic development", "Increase the general level of societal welfare", "Increase the level of unemployment", "Increase literacy level"],
    correct: 2,
    explanation: "Economic planning aims to reduce, not increase, unemployment levels."
  },
  {
    q: "Budget preparation is a typical example of",
    options: ["Long term planning", "Short term planning", "Perspective planning", "Medium term"],
    correct: 1,
    explanation: "Government budgets are prepared on an annual (short-term) operational cycle."
  },
  {
    q: "Long term planning or perspective planning usually covers period between",
    options: ["5-10years", "6-10years", "7-10 years", "10-30 years"],
    correct: 3,
    explanation: "Perspective planning spans long horizons, typically 10 to 30 years."
  },
  {
    q: "The benefit from international trade arise essentially from;",
    options: ["Comparative cost advantage", "Absolute cost advantage", "Cumulative cost advantage", "Competitive advantage"],
    correct: 0,
    explanation: "Comparative advantage explains mutual trade gains even when one nation possesses absolute advantages across all goods."
  },
  {
    q: "Which of the following is not an export?",
    options: ["Sales of domestic cars abroad", "Purchase of foreign components", "Student abroad studying in your country", "Sales of financial services"],
    correct: 1,
    explanation: "Purchasing foreign goods or services represents an import transaction."
  },
  {
    q: "Free trade is based on the principle of a.",
    options: ["comparative advantage", "Comparative scale", "Production advantage", "Production possibility advantage"],
    correct: 0,
    explanation: "Free trade policies leverage specialization based on relative comparative advantage."
  },
  {
    q: "Favorable terms of trade means that;",
    options: ["import are cheaper than export", "Export are cheaper than import", "Export and import price indices are equal", "Total import expenditures are greater than total export expenditure"],
    correct: 0,
    explanation: "Favorable terms of trade mean export prices rise relative to import prices, making imports relatively cheaper."
  },
  {
    q: "When the terms of trade are unfavorable, the gains from trade for that country",
    options: ["Are unaffected", "Increase", "Decrease", "All of the above"],
    correct: 2,
    explanation: "Unfavorable terms of trade reduce purchasing power and trade gains."
  },
  {
    q: "Foreign exchange payment are so called because",
    options: ["They represent the payment of import in foreign means of exchange", "They represent the payment to us for our export", "They are paid by bank in foreign countries", "None of the above"],
    correct: 0,
    explanation: "Foreign exchange involves settling international debt obligations in internationally accepted currencies."
  },
  {
    q: "Economic policies appear not to work in Nigeria due to",
    options: ["Corruption", "Lack of market function system", "Backward state of economy", "All of the above"],
    correct: 3,
    explanation: "Structural bottlenecks, market inefficiencies, and institutional deficits impede policy transmission."
  },
  {
    q: "The trade between two state of a country boy called;",
    options: ["Internal trade", "International trade", "Intra-national trade", "Domestic trade"],
    correct: 0,
    explanation: "Commerce within national borders constitutes internal (or domestic) trade."
  },
  {
    q: "balance of payment deficit in Nigeria is due to a.",
    options: ["Mainly disequilibria in the current account", "Mainly disequilibrium in the capital account", "Overspending of foreign reserve", "Negative influence of IMF"],
    correct: 0,
    explanation: "Persistent structural trade deficits in current accounts drive broader balance of payments pressure."
  },
  {
    q: "The theory of comparative advantage states that countries will gain...",
    options: ["If they trade in consumer goods", "If they trade in durable goods", "If they specialize and trade in the production of goods they have comparative cost advantage", "If they sell more abroad than at home"],
    correct: 2,
    explanation: "Specializing in products with lower opportunity costs maximizes global real income and output."
  },
  {
    q: "The balance of payment is useful to international business people for which of the following reasons?",
    options: ["warning of new policies that could affect a country's business climate", "Indicating stability in a country's foreign policy", "Signaling increased riskiness of lending to countries", "Predicting future technological changes"],
    correct: 0,
    explanation: "BOP trends alert foreign investors and commercial enterprises to imminent trade or currency restriction risks."
  },
  {
    q: "Money held for day to day transactions is.......... demand for money",
    options: ["Transactionary", "Precautionary", "Speculative", "None of the above"],
    correct: 0,
    explanation: "The transactions demand for money handles routine daily expenditures."
  },
  {
    q: "Money held for contingency sake is........ demand for money",
    options: ["Precautionary", "Speculative", "Transactionary", "None of the above"],
    correct: 0,
    explanation: "Precautionary balances are held to buffer against unexpected future contingencies."
  },
  {
    q: "What functions of money helps in solving the problem of double coincidence of want caused by trade by barter?",
    options: ["Unit of account", "store of value", "Medium of exchange", "Deferred payment"],
    correct: 2,
    explanation: "Money acting as a medium of exchange eliminates the need for mutual coincidence of wants."
  },
  {
    q: "Stability is one of the feature of money. True b. False c. A and B d. None of the above.",
    options: ["True", "False", "A and B", "None of the above"],
    correct: 0,
    explanation: "Stability of value is an essential attribute for effective functional currency."
  },
  {
    q: "Speculative motive of demand for money is affected by",
    options: ["Income", "Price", "Interest rate", "A and B"],
    correct: 2,
    explanation: "Keynesian speculative demand for holding cash balances is inversely related to market interest rates."
  },
  {
    q: "Money supply is exogenous sly determine",
    options: ["True", "False", "A and B", "None of the above"],
    correct: 0,
    explanation: "In standard monetary theory models, money supply is treated as exogenously set by the central bank."
  },
  {
    q: "Money held for the sake of taking advantage of business opportunity is called......",
    options: ["Transactionary", "Speculative", "Precautionary", "None of the above"],
    correct: 1,
    explanation: "The speculative motive centers on holding liquid cash to exploit financial investment opportunities."
  },
  {
    id: 162,
    question: "Rostow's economic stages are:",
    options: [
      "The preconditions for take-off, the take-off, the drive to maturity, and the age of creative destruction",
      "The traditional society, the preconditions for take-off, the take-off, the drive to maturity, and the age of high mass consumption",
      "The preconditions for consumption, the replication, the drive to maturity, and the age of high mass consumption",
      "The learning curve, the age of high mass consumption, post-take-off, and the drive to maturity"
    ],
    answer: 1,
    explanation: "Walt Rostow identified five stages of economic growth: Traditional society, Preconditions for take-off, Take-off, Drive to maturity, and Age of high mass consumption."
  },
  {
    id: 163,
    question: "Which of the following was not a classical economist?",
    options: [
      "Adam Smith",
      "David Ricardo",
      "John Stuart Mill",
      "John Maynard Keynes"
    ],
    answer: 3,
    explanation: "John Maynard Keynes belonged to the Keynesian school of economics, whereas Adam Smith, David Ricardo, and J.S. Mill were Classical economists."
  },
  {
    id: 164,
    question: "Adam Smith advocated: I. laissez-faire, II. the invisible hand, III. free-trade policy, IV. competitive markets.",
    options: [
      "I and II only",
      "II and III only",
      "I, II and III only",
      "I, II, III and IV"
    ],
    answer: 3,
    explanation: "Adam Smith promoted non-intervention (laissez-faire), market self-regulation (invisible hand), free trade, and free competition."
  },
  {
    id: 165,
    question: "A theory: I. is a systematic explanation of relationships between economic variables, II. provides a basis for policy, III. provides an explanation of factors influencing economic growth.",
    options: [
      "I only",
      "I and II only",
      "I, II and III",
      "IV only"
    ],
    answer: 2,
    explanation: "An economic theory systemically explains variable relationships, guides economic policy decisions, and models growth determinants."
  },
  {
    id: 166,
    question: "The classical growth theory, especially Ricardo's growth model, specifically emphasizes scarcity of ______ as an obstacle that will hinder growth.",
    options: [
      "Capital",
      "Entrepreneur",
      "Land",
      "Human resources"
    ],
    answer: 2,
    explanation: "David Ricardo's growth model highlights diminishing returns to agricultural land as the primary constraint on sustained economic growth."
  },
  {
    id: 167,
    question: "Planning in many LDCs has failed because detailed programs for the public sector have not been worked out and...",
    options: [
      "Governments depend primarily on their colonial masters",
      "Excessive controls are used in the private sector",
      "The brain drain cost government substantially",
      "Monopolies dominate in the agricultural sector"
    ],
    answer: 1,
    explanation: "In Less Developed Countries (LDCs), failure often stems from excessive government controls and intervention stifling private sector initiative."
  },
  {
    id: 168,
    question: "Which of these reasons is NOT why development plans are prepared?",
    options: [
      "To anticipate the development needs of an area",
      "To identify relevant development issues",
      "To identify opportunities for and constraints to development",
      "None of the above"
    ],
    answer: 3,
    explanation: "All listed choices (a, b, and c) are core objectives of preparing national or regional development plans."
  },
  {
    id: 169,
    question: "The ______ is the French system of planning which is based on the principle of decentralization in the operation and execution of the national plans.",
    options: [
      "Centralized planning",
      "Totalitarian planning",
      "Indicative planning",
      "Demographic planning"
    ],
    answer: 2,
    explanation: "Indicative planning originated in France and relies on decentralization, broad consultation, and setting target indicators rather than strict state command."
  },
  {
    id: 170,
    question: "The following are criteria for classifying countries as either developed or developing, EXCEPT:",
    options: [
      "Income per head",
      "Level of infrastructural development",
      "Availability and quantity of skilled labour",
      "Population"
    ],
    answer: 3,
    explanation: "Population size alone does not indicate development status; economic metrics like per capita income, infrastructure, and skilled labor do."
  },
  {
    id: 171,
    question: "The following are characteristics of underdeveloped economies EXCEPT:",
    options: [
      "High level of poverty",
      "High level of illiteracy",
      "High level of unemployment",
      "High level of infrastructural development"
    ],
    answer: 3,
    explanation: "High infrastructure development is a hallmark of developed economies, not underdeveloped ones."
  },
  {
    id: 172,
    question: "A sustained increase in the aggregate output or supply of goods and services is known as:",
    options: [
      "Economic growth",
      "Increase in output",
      "Economic development",
      "Economic improvement"
    ],
    answer: 0,
    explanation: "Economic growth specifically refers to a quantitative, sustained increase in real gross domestic output over time."
  },
  {
    id: 173,
    question: "The classical growth theory is primarily associated with:",
    options: [
      "Thomas Malthus",
      "John Keynes",
      "Adam Smith",
      "David Ricardo"
    ],
    answer: 2,
    explanation: "Adam Smith laid the foundation for Classical Growth Theory in 'The Wealth of Nations' (1776)."
  },
  {
    id: 174,
    question: "Policies that encourage faster economic growth include all EXCEPT:",
    options: [
      "Savings",
      "Research and development",
      "Quality education",
      "Increase importation"
    ],
    answer: 3,
    explanation: "Excessive or unmanaged reliance on imports can drain foreign reserves and suppress domestic industry, hindering domestic growth."
  },
  {
    id: 175,
    question: "Progressive changes in the social and economic structure of a country can be described as:",
    options: [
      "Social economic changes",
      "Economic growth",
      "Economic development",
      "Societal welfare"
    ],
    answer: 2,
    explanation: "Economic development encompasses both quantitative economic growth and qualitative structural/social improvements."
  },
  {
    id: 176,
    question: "Barriers to economic development include all EXCEPT:",
    options: [
      "A high rate of population growth",
      "High rate of illiteracy",
      "Political instability",
      "High rate of infrastructural development"
    ],
    answer: 3,
    explanation: "High infrastructure development facilitates economic growth and development, whereas the other options hinder it."
  },
  {
    id: 177,
    question: "Neoclassical growth theory states that:",
    options: [
      "Exploding population growth will bring an end to economic growth",
      "Real GDP per person will increase as long as technology keeps advancing",
      "A and B",
      "None"
    ],
    answer: 1,
    explanation: "Neoclassical growth theory (e.g., Solow-Swan model) asserts that long-term continuous per capita GDP growth is driven by technological progress."
  },
  {
    id: 178,
    question: "Planning in a capitalist state is known as:",
    options: [
      "Planning by direction",
      "Planning by inducement",
      "Budgeting",
      "Coercion"
    ],
    answer: 1,
    explanation: "Capitalist economies use 'planning by inducement', relying on market incentives, tax relief, and subsidies to guide economic action."
  },
  {
    id: 179,
    question: "Planning in a socialist setting is known as:",
    options: [
      "Planning by direction",
      "Planning by inducement",
      "Coercion",
      "Budgeting"
    ],
    answer: 0,
    explanation: "Socialist economies rely on 'planning by direction', where central authorities issue binding orders on production and distribution."
  },
  {
    id: 180,
    question: "Economic planning seeks to achieve the following objectives EXCEPT:",
    options: [
      "Increase the rate of economic development",
      "Increase the general level of societal welfare",
      "Increase the level of unemployment",
      "Increase literacy level"
    ],
    answer: 2,
    explanation: "Economic planning seeks to reduce unemployment, not increase it."
  },
  {
    id: 181,
    question: "Budget preparation is a typical example of:",
    options: [
      "Long term planning",
      "Short term planning",
      "Perspective planning",
      "Medium term planning"
    ],
    answer: 1,
    explanation: "Annual government budgets represent short-term financial and operational planning."
  },
  {
    id: 182,
    question: "Long term planning or perspective planning usually covers a period between:",
    options: [
      "5-10 years",
      "6-10 years",
      "7-10 years",
      "10-30 years"
    ],
    answer: 3,
    explanation: "Perspective plans are long-range strategic roadmaps usually covering 10 to 30 years."
  },
  {
    id: 183,
    question: "The benefit from international trade arises essentially from:",
    options: [
      "Comparative cost advantage",
      "Absolute cost advantage",
      "Cumulative cost advantage",
      "Competitive advantage"
    ],
    answer: 0,
    explanation: "According to David Ricardo, mutual benefits in international trade stem from exploiting comparative cost advantages."
  },
  {
    id: 184,
    question: "Which of the following is NOT an export?",
    options: [
      "Sales of domestic cars abroad",
      "Purchase of foreign components",
      "Students abroad studying in your country",
      "Sales of financial services"
    ],
    answer: 1,
    explanation: "Buying foreign components represents an import expenditure."
  },
  {
    id: 185,
    question: "Free trade is based on the principle of:",
    options: [
      "Comparative advantage",
      "Comparative scale",
      "Production advantage",
      "Production possibility advantage"
    ],
    answer: 0,
    explanation: "Unrestricted free trade allows countries to specialize where they hold a comparative advantage."
  },
  {
    id: 186,
    question: "Favorable terms of trade means that:",
    options: [
      "Imports are cheaper relative to export price levels",
      "Exports are cheaper than imports",
      "Export and import price indices are equal",
      "Total import expenditures are greater than total export expenditure"
    ],
    answer: 0,
    explanation: "Favorable terms of trade occur when export prices rise relative to import prices, meaning a unit of export buys more imports."
  },
  {
    id: 187,
    question: "When the terms of trade are unfavorable, the gains from trade for that country:",
    options: [
      "Are unaffected",
      "Increase",
      "Decrease",
      "All of the above"
    ],
    answer: 2,
    explanation: "Unfavorable terms of trade mean export prices fall relative to imports, reducing gains from trade."
  },
  {
    id: 188,
    question: "Foreign exchange payments are so called because:",
    options: [
      "They represent the payment of imports in foreign means of exchange",
      "They represent the payment to us for our export",
      "They are paid by bank in foreign countries",
      "None of the above"
    ],
    answer: 0,
    explanation: "Foreign exchange is used to settle international trade balances in foreign currency instruments."
  },
  {
    id: 189,
    question: "Economic policies appear not to work in Nigeria due to:",
    options: [
      "Corruption",
      "Lack of market functioning system",
      "Backward state of economy",
      "All of the above"
    ],
    answer: 3,
    explanation: "Institutional weakness, systemic corruption, and structural market bottlenecks collectively undermine policy implementation."
  },
  {
    id: 190,
    question: "The trade between two states within a country is called:",
    options: [
      "Internal trade",
      "International trade",
      "Intra-national trade",
      "Domestic trade"
    ],
    answer: 0,
    explanation: "Trade conducted within national borders across regional/state boundaries is termed internal or domestic trade."
  },
  {
    id: 191,
    question: "Balance of payment deficit in Nigeria is due to:",
    options: [
      "Mainly disequilibria in the current account",
      "Mainly disequilibria in the capital account",
      "Overspending of foreign reserves",
      "Negative influence of IMF"
    ],
    answer: 0,
    explanation: "Persistent import-export disparities in consumer goods and petroleum products primarily drive current account deficits."
  },
  {
    id: 192,
    question: "The theory of comparative advantage states that countries will gain if:",
    options: [
      "They trade in consumer goods",
      "They trade in durable goods",
      "They specialize and trade in the production of goods where they have comparative cost advantage",
      "They sell more abroad than at home"
    ],
    answer: 2,
    explanation: "Specializing in products with lower opportunity costs maximizes total output and trading benefits."
  },
  {
    id: 193,
    question: "The balance of payment is useful to international business people for which of the following reasons?",
    options: [
      "Warning of new policies that could affect a country's business climate",
  },
  {
    q: "Rostow's economic stages are:",
    options: [
      "The preconditions for take-off, the take-off, the drive to maturity, and the age of creative destruction",
      "The traditional society, the preconditions for take-off, the take-off, the drive to maturity, and the age of high mass consumption",
      "The preconditions for consumption, the replication, the drive to maturity, and the age of high mass consumption",
      "The learning curve, the age of high mass consumption, post-take-off, and the drive to maturity"
    ],
    correct: 1,
    explanation: "Walt Rostow identified five stages of economic growth: Traditional society, Preconditions for take-off, Take-off, Drive to maturity, and Age of high mass consumption."
  },
  {
    q: "Which of the following was not a classical economist?",
    options: [
      "Adam Smith",
      "David Ricardo",
      "John Stuart Mill",
      "John Maynard Keynes"
    ],
    correct: 3,
    explanation: "John Maynard Keynes belonged to the Keynesian school of economics, whereas Adam Smith, David Ricardo, and J.S. Mill were Classical economists."
  },
  {
    q: "Adam Smith advocated: I. laissez-faire, II. the invisible hand, III. free-trade policy, IV. competitive markets.",
    options: [
      "I and II only",
      "II and III only",
      "I, II and III only",
      "I, II, III and IV"
    ],
    correct: 3,
    explanation: "Adam Smith promoted non-intervention (laissez-faire), market self-regulation (invisible hand), free trade, and free competition."
  },
  {
    q: "A theory: I. is a systematic explanation of relationships between economic variables, II. provides a basis for policy, III. provides an explanation of factors influencing economic growth.",
    options: [
      "I only",
      "I and II only",
      "I, II and III",
      "IV only"
    ],
    correct: 2,
    explanation: "An economic theory systemically explains variable relationships, guides economic policy decisions, and models growth determinants."
  },
  {
    q: "The classical growth theory, especially Ricardo's growth model, specifically emphasizes scarcity of ______ as an obstacle that will hinder growth.",
    options: [
      "Capital",
      "Entrepreneur",
      "Land",
      "Human resources"
    ],
    correct: 2,
    explanation: "David Ricardo's growth model highlights diminishing returns to agricultural land as the primary constraint on sustained economic growth."
  },
  {
    q: "Planning in many LDCs has failed because detailed programs for the public sector have not been worked out and...",
    options: [
      "Governments depend primarily on their colonial masters",
      "Excessive controls are used in the private sector",
      "The brain drain cost government substantially",
      "Monopolies dominate in the agricultural sector"
    ],
    correct: 1,
    explanation: "In Less Developed Countries (LDCs), failure often stems from excessive government controls and intervention stifling private sector initiative."
  },
  {
    q: "Which of these reasons is NOT why development plans are prepared?",
    options: [
      "To anticipate the development needs of an area",
      "To identify relevant development issues",
      "To identify opportunities for and constraints to development",
      "None of the above"
    ],
    correct: 3,
    explanation: "All listed choices (a, b, and c) are core objectives of preparing national or regional development plans."
  },
  {
    q: "The ______ is the French system of planning which is based on the principle of decentralization in the operation and execution of the national plans.",
    options: [
      "Centralized planning",
      "Totalitarian planning",
      "Indicative planning",
      "Demographic planning"
    ],
    correct: 2,
    explanation: "Indicative planning originated in France and relies on decentralization, broad consultation, and setting target indicators rather than strict state command."
  },
  {
    q: "The following are criteria for classifying countries as either developed or developing, EXCEPT:",
    options: [
      "Income per head",
      "Level of infrastructural development",
      "Availability and quantity of skilled labour",
      "Population"
    ],
    correct: 3,
    explanation: "Population size alone does not indicate development status; economic metrics like per capita income, infrastructure, and skilled labor do."
  },
  {
    q: "The following are characteristics of underdeveloped economies EXCEPT:",
    options: [
      "High level of poverty",
      "High level of illiteracy",
      "High level of unemployment",
      "High level of infrastructural development"
    ],
    correct: 3,
    explanation: "High infrastructure development is a hallmark of developed economies, not underdeveloped ones."
  },
  {
    q: "A sustained increase in the aggregate output or supply of goods and services is known as:",
    options: [
      "Economic growth",
      "Increase in output",
      "Economic development",
      "Economic improvement"
    ],
    correct: 0,
    explanation: "Economic growth specifically refers to a quantitative, sustained increase in real gross domestic output over time."
  },
  {
    q: "The classical growth theory is primarily associated with:",
    options: [
      "Thomas Malthus",
      "John Keynes",
      "Adam Smith",
      "David Ricardo"
    ],
    correct: 2,
    explanation: "Adam Smith laid the foundation for Classical Growth Theory in 'The Wealth of Nations' (1776)."
  },
  {
    q: "Policies that encourage faster economic growth include all EXCEPT:",
    options: [
      "Savings",
      "Research and development",
      "Quality education",
      "Increase importation"
    ],
    correct: 3,
    explanation: "Excessive or unmanaged reliance on imports can drain foreign reserves and suppress domestic industry, hindering domestic growth."
  },
  {
    q: "Progressive changes in the social and economic structure of a country can be described as:",
    options: [
      "Social economic changes",
      "Economic growth",
      "Economic development",
      "Societal welfare"
    ],
    correct: 2,
    explanation: "Economic development encompasses both quantitative economic growth and qualitative structural/social improvements."
  },
  {
    q: "Barriers to economic development include all EXCEPT:",
    options: [
      "A high rate of population growth",
      "High rate of illiteracy",
      "Political instability",
      "High rate of infrastructural development"
    ],
    correct: 3,
    explanation: "High infrastructure development facilitates economic growth and development, whereas the other options hinder it."
  },
  {
    q: "Neoclassical growth theory states that:",
    options: [
      "Exploding population growth will bring an end to economic growth",
      "Real GDP per person will increase as long as technology keeps advancing",
      "A and B",
      "None"
    ],
    correct: 1,
    explanation: "Neoclassical growth theory (e.g., Solow-Swan model) asserts that long-term continuous per capita GDP growth is driven by technological progress."
  },
  {
    q: "Planning in a capitalist state is known as:",
    options: [
      "Planning by direction",
      "Planning by inducement",
      "Budgeting",
      "Coercion"
    ],
    correct: 1,
    explanation: "Capitalist economies use 'planning by inducement', relying on market incentives, tax relief, and subsidies to guide economic action."
  },
  {
    q: "Planning in a socialist setting is known as:",
    options: [
      "Planning by direction",
      "Planning by inducement",
      "Coercion",
      "Budgeting"
    ],
    correct: 0,
    explanation: "Socialist economies rely on 'planning by direction', where central authorities issue binding orders on production and distribution."
  },
  {
    q: "Economic planning seeks to achieve the following objectives EXCEPT:",
    options: [
      "Increase the rate of economic development",
      "Increase the general level of societal welfare",
      "Increase the level of unemployment",
      "Increase literacy level"
    ],
    correct: 2,
    explanation: "Economic planning seeks to reduce unemployment, not increase it."
  },
  {
    q: "Budget preparation is a typical example of:",
    options: [
      "Long term planning",
      "Short term planning",
      "Perspective planning",
      "Medium term planning"
    ],
    correct: 1,
    explanation: "Annual government budgets represent short-term financial and operational planning."
  },
  {
    q: "Long term planning or perspective planning usually covers a period between:",
    options: [
      "5-10 years",
      "6-10 years",
      "7-10 years",
      "10-30 years"
    ],
    correct: 3,
    explanation: "Perspective plans are long-range strategic roadmaps usually covering 10 to 30 years."
  },
  {
    q: "The benefit from international trade arises essentially from:",
    options: [
      "Comparative cost advantage",
      "Absolute cost advantage",
      "Cumulative cost advantage",
      "Competitive advantage"
    ],
    correct: 0,
    explanation: "According to David Ricardo, mutual benefits in international trade stem from exploiting comparative cost advantages."
  },
  {
    q: "Which of the following is NOT an export?",
    options: [
      "Sales of domestic cars abroad",
      "Purchase of foreign components",
      "Students abroad studying in your country",
      "Sales of financial services"
    ],
    correct: 1,
    explanation: "Buying foreign components represents an import expenditure."
  },
  {
    q: "Free trade is based on the principle of:",
    options: [
      "Comparative advantage",
      "Comparative scale",
      "Production advantage",
      "Production possibility advantage"
    ],
    correct: 0,
    explanation: "Unrestricted free trade allows countries to specialize where they hold a comparative advantage."
  },
  {
    q: "Favorable terms of trade means that:",
    options: [
      "Imports are cheaper relative to export price levels",
      "Exports are cheaper than imports",
      "Export and import price indices are equal",
      "Total import expenditures are greater than total export expenditure"
    ],
    correct: 0,
    explanation: "Favorable terms of trade occur when export prices rise relative to import prices, meaning a unit of export buys more imports."
  },
  {
    q: "When the terms of trade are unfavorable, the gains from trade for that country:",
    options: [
      "Are unaffected",
      "Increase",
      "Decrease",
      "All of the above"
    ],
    correct: 2,
    explanation: "Unfavorable terms of trade mean export prices fall relative to imports, reducing gains from trade."
  },
  {
    q: "Foreign exchange payments are so called because:",
    options: [
      "They represent the payment of imports in foreign means of exchange",
      "They represent the payment to us for our export",
      "They are paid by bank in foreign countries",
      "None of the above"
    ],
    correct: 0,
    explanation: "Foreign exchange is used to settle international trade balances in foreign currency instruments."
  },
  {
    q: "Economic policies appear not to work in Nigeria due to:",
    options: [
      "Corruption",
      "Lack of market functioning system",
      "Backward state of economy",
      "All of the above"
    ],
    correct: 3,
    explanation: "Institutional weakness, systemic corruption, and structural market bottlenecks collectively undermine policy implementation."
  },
  {
    q: "The trade between two states within a country is called:",
    options: [
      "Internal trade",
      "International trade",
      "Intra-national trade",
      "Domestic trade"
    ],
    correct: 0,
    explanation: "Trade conducted within national borders across regional/state boundaries is termed internal or domestic trade."
  },
  {
    q: "Balance of payment deficit in Nigeria is due to:",
    options: [
      "Mainly disequilibria in the current account",
      "Mainly disequilibria in the capital account",
      "Overspending of foreign reserves",
      "Negative influence of IMF"
    ],
    correct: 0,
    explanation: "Persistent import-export disparities in consumer goods and petroleum products primarily drive current account deficits."
  },
  {
    q: "The theory of comparative advantage states that countries will gain if:",
    options: [
      "They trade in consumer goods",
      "They trade in durable goods",
      "They specialize and trade in the production of goods where they have comparative cost advantage",
      "They sell more abroad than at home"
    ],
    correct: 2,
    explanation: "Specializing in products with lower opportunity costs maximizes total output and trading benefits."
  },
  {
    q: "The balance of payment is useful to international business people for which of the following reasons?",
    options: [
      "Warning of new policies that could affect a country's business climate",
      "Indicating stability in a country's foreign policy",
      "Signaling increased riskiness of lending to countries",
      "Predicting future technological changes"
    ],
    correct: 0,
    explanation: "BOP data highlights currency exposure, potential exchange controls, or import restrictions that affect commercial strategy."
  },
  {
    q: "Money held for day-to-day transactions is the ______ demand for money.",
    options: [
      "Transactionary",
      "Precautionary",
      "Speculative",
      "None of the above"
    ],
    correct: 0,
    explanation: "Transactions demand for money covers routine everyday purchases and expenses."
  },
  {
    q: "Money held for contingency or emergency sake is the ______ demand for money.",
    options: [
      "Precautionary",
      "Speculative",
      "Transactionary",
      "None of the above"
    ],
    correct: 0,
    explanation: "Precautionary demand provides a buffer against unforeseen events and financial contingencies."
  },
  {
    q: "Which function of money solves the problem of double coincidence of wants inherent in barter?",
    options: [
      "Unit of account",
      "Store of value",
      "Medium of exchange",
      "Deferred payment"
    ],
    correct: 2,
    explanation: "As a medium of exchange, money eliminates the need for both parties to desire each other's physical goods directly."
  },
  {
    q: "Stability is one of the key desirable features of money.",
    options: [
      "True",
      "False",
      "A and B",
      "None of the above"
    ],
    correct: 0,
    explanation: "Stability in purchasing value is essential for money to retain trust as a store of value and unit of account."
  },
  {
    q: "The speculative motive of demand for money is primarily affected by:",
    options: [
      "Income",
      "Price",
      "Interest rate",
      "A and B"
    ],
    correct: 2,
    explanation: "Keynesian economic theory shows speculative money demand responds inversely to prevailing market interest rates."
  },
  {
    q: "Money supply is exogenously determined by the central monetary authority.",
    options: [
      "True",
      "False",
      "A and B",
      "None of the above"
    ],
    correct: 0,
    explanation: "In traditional macroeconomic models, the central bank directly sets and controls the overall money supply exogenously."
  },
  {
    q: "Money held for the sake of taking advantage of favorable investment or business opportunities is called:",
    options: [
      "Transactionary",
      "Speculative",
      "Precautionary",
      "None of the above"
    ],
    correct: 1,
    explanation: "Speculative demand holds liquid cash to buy financial assets when prices/interest rates become favorable."
  }

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

