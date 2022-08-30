const quotesDB = [
  {
    quote:
      "Too many people spend money they earned..to buy things they don't want..to impress people that they don't like.",
    author: "Will Rogers",
  },
  {
    quote:
      "A wise person should have money in their head, but not in their heart.",
    author: "Jonathan Swift",
  },
  {
    quote:
      "Wealth consists not in having great possessions, but in having few wants",
    author: "Epictetus",
  },
  {
    quote: "Money often costs too much",
    author: "Ralph Waldo Emerson",
  },
  {
    quote:
      "Everyday is a bank account, and time is our currency. No one is rich, no one is poor, we've got 24 hours each",
    author: "Christopher Rice",
  },
  {
    quote:
      "It's how you deal with failure that determines how you achieve success",
    author: "David Feherty",
  },
  {
    quote: "Frugality includes all the other virtues",
    author: "Cicero",
  },
  {
    quote:
      "I love money. I love everything about it. I bought some pretty good stuff. Got me a $300 pair of socks. Got a fur sink. An electric dog polisher. A gasoline powered turtleneck sweater. And, of course, I bought some dumb stuff, too",
    author: "Steve Martin",
  },
  {
    quote: "An investment in knowledge pays the best interest",
    author: "Benjamin Franklin",
  },
  {
    quote:
      "I will tell you the secret to getting rich on Wall Street. You try to be greedy when others are fearful. And you try to be fearful when others are greedy",
    author: "Warren Buffett",
  },
  {
    quote:
      "Annual income twenty pounds, annual expenditure nineteen six, result happiness. Annual income twenty pounds, annual expenditure twenty pound ought and six, result misery",
    author: "Charles Dickens",
  },
  {
    quote:
      "Opportunity is missed by most people because it is dressed in overalls and looks like work",
    author: "Thomas Edison",
  },
  {
    quote:
      "What we really want to do is what we are really meant to do. When we do what we are meant to do, money comes to us, doors open for us, we feel useful, and the work we do feels like play to us",
    author: "Julia Cameron",
  },
  {
    quote:
      "I never attempt to make money on the stock market. I buy on the assumption that they could close the market the next day and not reopen it for ten years",
    author: "Warren Buffett",
  },
  {
    quote: "A nickel ain't worth a dime anymore",
    author: "Yogi Berra",
  },
  {
    quote:
      "Money never made a man happy yet, nor will it. The more a man has, the more he wants. Instead of filling a vacuum, it makes one",
    author: "Benjamin Franklin",
  },
  {
    quote:
      "Many people take no care of their money till they come nearly to the end of it, and others do just the same with their time",
    author: "Johann Wolfgang von Goethe",
  },
  {
    quote:
      "Formal education will make you a living; self-education will make you a fortune",
    author: "Jim Rohn",
  },
  {
    quote:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver",
    author: "Ayn Rand",
  },
  {
    quote:
      "Financial peace isn't the acquisition of stuff. It's learning to live on less than you make, so you can give money back and have money to invest. You can't win until you do this",
    author: "Dave Ramsey",
  },
  {
    quote:
      "It is not the man who has too little, but the man who craves more, that is poor",
    author: "Seneca",
  },
  {
    quote:
      "It’s not the employer who pays the wages. Employers only handle the money. It’s the customer who pays the wages",
    author: "Henry Ford",
  },
  {
    quote:
      "He who loses money, loses much; He who loses a friend, loses much more; He who loses faith, loses all",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "Happiness is not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort",
    author: "Franklin D. Roosevelt",
  },
  {
    quote:
      "Empty pockets never held anyone back. Only empty heads and empty hearts can do that",
    author: "Norman Vincent Peale",
  },
  {
    quote:
      "It’s good to have money and the things that money can buy, but it’s good, too, to check up once in a while and make sure that you haven’t lost the things that money can’t buy",
    author: "George Lorimer",
  },
  {
    quote:
      "You can only become truly accomplished at something you love. Don’t make money your goal. Instead, pursue the things you love doing, and then do them so well that people can’t take their eyes off you",
    author: "Maya Angelou",
  },
  {
    quote:
      "Buy when everyone else is selling and hold until everyone else is buying. That’s not just a catchy slogan. It’s the very essence of successful investing",
    author: "J. Paul Getty",
  },
  {
    quote:
      "If money is your hope for independence you will never have it. The only real security that a man will have in this world is a reserve of knowledge, experience, and ability",
    author: "Henry Ford",
  },
  {
    quote:
      "If all the economists were laid end to end, they’d never reach a conclusion",
    author: "George Bernard Shaw",
  },
  {
    quote:
      "How many millionaires do you know who have become wealthy by investing in savings accounts? I rest my case",
    author: "Robert G. Allen",
  },
  {
    quote:
      "I made my money the old-fashioned way. I was very nice to a wealthy relative right before he died",
    author: "Malcolm Forbes",
  },
  {
    quote: "Innovation distinguishes between a leader and a follower",
    author: "Steve Jobs",
  },
  {
    quote:
      "The real measure of your wealth is how much you'd be worth if you lost all your money",
    author: "Anonymous",
  },
  {
    quote: "Money is a terrible master but an excellent servant",
    author: "P.T. Barnum",
  },
  {
    quote:
      "Try to save something while your salary is small; it’s impossible to save after you begin to earn more",
    author: "Jack Benny",
  },
  {
    quote: "Wealth is the ability to fully experience life",
    author: "Henry David Thoreau",
  },
  {
    quote:
      "The individual investor should act consistently as an investor and not as a speculator",
    author: "Ben Graham",
  },
  {
    quote:
      "I’m a great believer in luck, and I find the harder I work the more I have of it",
    author: "Thomas Jefferson",
  },
  {
    quote:
      "You must gain control over your money or the lack of it will forever control you",
    author: "Dave Ramsey",
  },
  {
    quote:
      "Investing should be more like watching paint dry or watching grass grow. If you want excitement, take $800 and go to Las Vegas",
    author: "Paul Samuelson",
  },
  {
    quote: "Every time you borrow money, you're robbing your future self",
    author: "Nathan W. Morris",
  },
  {
    quote:
      "Rich people have small TVs and big libraries, and poor people have small libraries and big TVs",
    author: "Zig Ziglar",
  },
  {
    quote: "Never spend your money before you have it",
    author: "Thomas Jefferson",
  },
  {
    quote:
      "The stock market is filled with individuals who know the price of everything, but the value of nothing",
    author: "Phillip Fisher",
  },
  {
    quote: "Wealth is not his that has it, but his that enjoys it",
    author: "Benjamin Franklin",
  },
  {
    quote:
      "It's not how much money you make, but how much money you keep, how hard it works for you, and how many generations you keep it for",
    author: "Robert Kiyosaki",
  },
  {
    quote: "I have not failed. I’ve just found 10,000 ways that won’t work",
    author: "Thomas A. Edison",
  },
  {
    quote:
      "If you don’t value your time, neither will others. Stop giving away your time and talents. Value what you know & start charging for it",
    author: "Kim Garst",
  },
  {
    quote:
      "Here’s to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They’re not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can’t do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do",
    author: "Steve Jobs",
  },
  {
    quote:
      "The habit of saving is itself an education; it fosters every virtue, teaches self-denial, cultivates the sense of order, trains to forethought, and so broadens the mind",
    author: "T.T. Munger",
  },
  {
    quote:
      "Don't tell me what you value, show me your budget, and I'll tell you what you value",
    author: "Joe Biden",
  },
  {
    quote: "If you live for having it all, what you have is never enough",
    author: "Vicki Robin",
  },
  {
    quote:
      "Before you speak, listen. Before you write, think. Before you spend, earn. Before you invest, investigate. Before you criticize, wait. Before you pray, forgive. Before you quit, try. Before you retire, save. Before you die, give",
    author: "William A. Ward",
  },
  {
    quote:
      "We make a living by what we get, but we make a life by what we give",
    author: "Winston Churchill",
  },
  {
    quote:
      "Wealth after all is a relative thing since he that has little and wants less is richer than he that has much and wants more",
    author: "Charles Caleb Colton",
  },
  {
    quote:
      "Not everything that can be counted counts, and not everything that counts can be counted",
    author: "Albert Einstein",
  },
  {
    quote:
      "It is time for us to stand and cheer for the doer, the achiever, the one who recognizes the challenge and does something about it",
    author: "Vince Lombardi",
  },
  {
    quote:
      "It's not the situation, but whether we react (negative) or respond (positive) to the situation that's important",
    author: "Zig Ziglar",
  },
  {
    quote:
      "A successful man is one who can lay a firm foundation with the bricks others have thrown at him",
    author: "David Brinkley",
  },
  {
    quote: "Let him who would enjoy a good future waste none of his present",
    author: "Roger Babson",
  },
  {
    quote: "Courage is being scared to death, but saddling up anyway",
    author: "John Wayne",
  },
  {
    quote:
      "Live as if you were to die tomorrow. Learn as if you were to live forever",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do",
    author: "Mark Twain",
  },
  {
    quote:
      "t is our choices, that show what we truly are, far more than our abilities",
    author: "J. K Rowling",
  },
  {
    quote: "The successful warrior is the average man, with laser-like focus",
    author: "Bruce Lee",
  },
  {
    quote:
      "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success",
    author: "Dale Carnegie",
  },
  {
    quote:
      "The question isn’t who is going to let me; it’s who is going to stop me",
    author: "Ayn Rand",
  },
  {
    quote:
      "Don’t let the fear of losing be greater than the excitement of winning",
    author: "Robert Kiyosaki",
  },
  {
    quote:
      "You can’t connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future. You have to trust in something – your gut, destiny, life, karma, whatever. This approach has never let me down, and it has made all the difference in my life",
    author: "Steve Jobs",
  },
  {
    quote:
      "Let no feeling of discouragement prey upon you, and in the end you are sure to succeed",
    author: "Abraham Lincoln",
  },
  {
    quote: "Screw it, Let’s do it!",
    author: "Richard Branson",
  },
  {
    quote: "If your ship doesn’t come in, swim out to meet it!",
    author: "Jonathan Winters",
  },
  {
    quote:
      "People often say that motivation doesn’t last. Well, neither does bathing – that’s why we recommend it daily",
    author: "Zig Ziglar",
  },
  {
    quote:
      "A real entrepreneur is somebody who has no safety net underneath them",
    author: "Henry Kravis",
  },
  {
    quote: "As long as you’re going to be thinking anyway, think big",
    author: "Donald Trump",
  },
  {
    quote:
      "The only place where success comes before work is in the dictionary",
    author: "Vidal Sassoon",
  },
  {
    quote:
      "Success is walking from failure to failure with no loss of enthusiasm",
    author: "Winston Churchill",
  },
  {
    quote:
      "Without continual growth and progress, such words as improvement, achievement, and success have no meaning",
    author: "Benjamin Franklin",
  },
  {
    quote: "If plan A fails, remember there are 25 more letters",
    author: "Chris Guillebeau",
  },
  {
    quote:
      "Do not go where the path may lead, go instead where there is no path and leave a trail",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "A journey of a thousand miles must begin with a single step",
    author: "Lao Tzu",
  },
  {
    quote:
      "Do the one thing you think you cannot do. Fail at it. Try again. Do better the second time. The only people who never tumble are those who never mount the high wire. This is your moment. Own it",
    author: "Oprah Winfrey",
  },
  {
    quote: "Believe you can and you’re halfway there",
    author: "Theodore Roosevelt",
  },
  {
    quote:
      "The Stock Market is designed to transfer money from the Active to the Patient",
    author: "Warren Buffett",
  },
  {
    quote:
      "I’m only rich because I know when I’m wrong…I basically have survived by recognizing my mistakes",
    author: "George Soros",
  },
  {
    quote:
      "Persist – don’t take no for an answer. If you’re happy to sit at your desk and not take any risk, you’ll be sitting at your desk for the next 20 years",
    author: "David Rubenstein",
  },
  {
    quote:
      "If you took our top fifteen decisions out, we’d have a pretty average record. It wasn’t hyperactivity, but a hell of a lot of patience. You stuck to your principles and when opportunities came along, you pounced on them with vigor",
    author: "Charlie Munger",
  },
  {
    quote: "When buying shares, ask yourself, would you buy the whole company?",
    author: "Rene Rivkin",
  },
  {
    quote:
      "If you have trouble imagining a 20% loss in the stock market, you shouldn’t be in stocks",
    author: "John Bogle",
  },
  {
    quote:
      "My old father used to have a saying:  If you make a bad bargain, hug it all the tighter",
    author: "Abraham Lincoln",
  },
  {
    quote: "It takes as much energy to wish as it does to plan",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "The four most expensive words in the English language are, ‘This time it’s different",
    author: "Sir John Templeton",
  },
  {
    quote: "I'd like to live as a poor man with lots of money",
    author: "Pablo Picasso",
  },
  {
    quote: "Fortune sides with him who dares",
    author: "Virgil",
  },
  {
    quote:
      "Wealth is like sea-water; the more we drink, the thirstier we become; and the same is true of fame",
    author: "Arthur Schopenhauer",
  },
  {
    quote:
      "If we command our wealth, we shall be rich and free. If our wealth commands us, we are poor indeed",
    author: "Edmund Burke",
  },
  {
    quote: "No wealth can ever make a bad man at peace with himself",
    author: "Plato",
  },
  {
    quote: "My formula for success is rise early, work late and strike oil",
    author: "JP Getty",
  },
  {
    quote: "The best thing money can buy is financial freedom and others",
    author: "John Raphael",
  },
];

export default quotesDB;
