
document.addEventListener("DOMContentLoaded", () => {
  // ✅ PASTE YOUR FULL QUOTES ARRAY HERE
  // Format: { text: "...", author: "...", category: "..." }
  const quotes = [
            // Success & Achievement (1-30)
            { text: "The only way to do great work is to love what you do.", author: "Steve Jobs", category: "Success" },
            { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill", category: "Success" },
            { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney", category: "Action" },
            { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson", category: "Perseverance" },
            { text: "The future depends on what you do today.", author: "Mahatma Gandhi", category: "Action" },
            { text: "Everything you've ever wanted is on the other side of fear.", author: "George Addair", category: "Courage" },
            { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau", category: "Success" },
            { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins", category: "Action" },
            { text: "Opportunities don't happen. You create them.", author: "Chris Grosser", category: "Opportunity" },
            { text: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller", category: "Excellence" },
            { text: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson", category: "Work" },
            { text: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill", category: "Success" },
            { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt", category: "Belief" },
            { text: "Do what you can with all you have, wherever you are.", author: "Theodore Roosevelt", category: "Action" },
            { text: "It is never too late to be what you might have been.", author: "George Eliot", category: "Potential" },
            { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar", category: "Growth" },
            { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis", category: "Dreams" },
            { text: "Try not to become a man of success. Rather become a man of value.", author: "Albert Einstein", category: "Values" },
            { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius", category: "Perseverance" },
            { text: "Everything has beauty, but not everyone sees it.", author: "Confucius", category: "Beauty" },
            { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein", category: "Purpose" },
            { text: "The secret of success is to do the common thing uncommonly well.", author: "John D. Rockefeller Jr.", category: "Excellence" },
            { text: "I never dreamed about success, I worked for it.", author: "Estée Lauder", category: "Work" },
            { text: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett", category: "Impact" },
            { text: "The distance between insanity and genius is measured only by success.", author: "Bruce Feirstein", category: "Success" },
            { text: "Don't let yesterday take up too much of today.", author: "Will Rogers", category: "Present" },
            { text: "You learn more from failure than from success. Don't let it stop you.", author: "Unknown", category: "Failure" },
            { text: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi", category: "Resilience" },
            { text: "If you are working on something that you really care about, you don't have to be pushed.", author: "Steve Jobs", category: "Passion" },
            { text: "People who are crazy enough to think they can change the world, are the ones who do.", author: "Rob Siltanen", category: "Vision" },

            // Wisdom & Life (31-60)
            { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein", category: "Wisdom" },
            { text: "Life is what happens when you're busy making other plans.", author: "John Lennon", category: "Life" },
            { text: "The unexamined life is not worth living.", author: "Socrates", category: "Wisdom" },
            { text: "Life is really simple, but we insist on making it complicated.", author: "Confucius", category: "Simplicity" },
            { text: "May you live every day of your life.", author: "Jonathan Swift", category: "Life" },
            { text: "Life itself is the most wonderful fairy tale.", author: "Hans Christian Andersen", category: "Wonder" },
            { text: "Do not let making a living prevent you from making a life.", author: "John Wooden", category: "Balance" },
            { text: "Life is ours to be spent, not to be saved.", author: "D.H. Lawrence", category: "Living" },
            { text: "Keep smiling, because life is a beautiful thing and there's so much to smile about.", author: "Marilyn Monroe", category: "Joy" },
            { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost", category: "Life" },
            { text: "The purpose of our lives is to be happy.", author: "Dalai Lama", category: "Happiness" },
            { text: "Life is a succession of lessons which must be lived to be understood.", author: "Helen Keller", category: "Learning" },
            { text: "You only live once, but if you do it right, once is enough.", author: "Mae West", category: "Life" },
            { text: "The biggest adventure you can take is to live the life of your dreams.", author: "Oprah Winfrey", category: "Dreams" },
            { text: "Life is made of ever so many partings welded together.", author: "Charles Dickens", category: "Change" },
            { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs", category: "Authenticity" },
            { text: "Life is trying things to see if they work.", author: "Ray Bradbury", category: "Experimentation" },
            { text: "Many of life's failures are people who did not realize how close they were to success when they gave up.", author: "Thomas Edison", category: "Persistence" },
            { text: "The whole secret of a successful life is to find out what is one's destiny to do, and then do it.", author: "Henry Ford", category: "Purpose" },
            { text: "Life is never fair, and perhaps it is a good thing for most of us that it is not.", author: "Oscar Wilde", category: "Wisdom" },
            { text: "Good friends, good books, and a sleepy conscience: this is the ideal life.", author: "Mark Twain", category: "Contentment" },
            { text: "Life would be tragic if it weren't funny.", author: "Stephen Hawking", category: "Humor" },
            { text: "Live in the sunshine, swim the sea, drink the wild air.", author: "Ralph Waldo Emerson", category: "Nature" },
            { text: "Not how long, but how well you have lived is the main thing.", author: "Seneca", category: "Quality" },
            { text: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt", category: "Uncertainty" },
            { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb", category: "Wisdom" },
            { text: "An unexamined life is not worth living.", author: "Socrates", category: "Reflection" },
            { text: "The whole of life is just like watching a film. Only it's as though you always get in ten minutes after the big picture has started.", author: "Terry Pratchett", category: "Perspective" },
            { text: "Life is like riding a bicycle. To keep your balance, you must keep moving.", author: "Albert Einstein", category: "Progress" },
            { text: "In the end, it's not the years in your life that count. It's the life in your years.", author: "Abraham Lincoln", category: "Quality" },

            // Love & Relationships (61-90)
            { text: "In this life we cannot do great things. We can only do small things with great love.", author: "Mother Teresa", category: "Love" },
            { text: "The best thing to hold onto in life is each other.", author: "Audrey Hepburn", category: "Love" },
            { text: "Where there is love there is life.", author: "Mahatma Gandhi", category: "Love" },
            { text: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.", author: "Dr. Seuss", category: "Love" },
            { text: "Love is composed of a single soul inhabiting two bodies.", author: "Aristotle", category: "Love" },
            { text: "The greatest happiness of life is the conviction that we are loved.", author: "Victor Hugo", category: "Love" },
            { text: "To love and be loved is to feel the sun from both sides.", author: "David Viscott", category: "Love" },
            { text: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.", author: "Lao Tzu", category: "Love" },
            { text: "The only thing we never get enough of is love; and the only thing we never give enough of is love.", author: "Henry Miller", category: "Love" },
            { text: "Love recognizes no barriers.", author: "Maya Angelou", category: "Love" },
            { text: "We are most alive when we're in love.", author: "John Updike", category: "Love" },
            { text: "The heart wants what it wants.", author: "Woody Allen", category: "Desire" },
            { text: "Love cures people - both the ones who give it and the ones who receive it.", author: "Karl Menninger", category: "Healing" },
            { text: "Keep love in your heart. A life without it is like a sunless garden when the flowers are dead.", author: "Oscar Wilde", category: "Love" },
            { text: "Love is that condition in which the happiness of another person is essential to your own.", author: "Robert A. Heinlein", category: "Love" },
            { text: "The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart.", author: "Helen Keller", category: "Emotion" },
            { text: "Love all, trust a few, do wrong to none.", author: "William Shakespeare", category: "Wisdom" },
            { text: "We accept the love we think we deserve.", author: "Stephen Chbosky", category: "Self-Worth" },
            { text: "There is always some madness in love. But there is also always some reason in madness.", author: "Friedrich Nietzsche", category: "Love" },
            { text: "Love is friendship that has caught fire.", author: "Ann Landers", category: "Love" },
            { text: "The giving of love is an education in itself.", author: "Eleanor Roosevelt", category: "Learning" },
            { text: "One word frees us of all the weight and pain of life: That word is love.", author: "Sophocles", category: "Love" },
            { text: "Love looks not with the eyes, but with the mind.", author: "William Shakespeare", category: "Perception" },
            { text: "To be brave is to love someone unconditionally, without expecting anything in return.", author: "Madonna", category: "Courage" },
            { text: "Love yourself first and everything else falls into line.", author: "Lucille Ball", category: "Self-Love" },
            { text: "There is no remedy for love but to love more.", author: "Henry David Thoreau", category: "Love" },
            { text: "Life without love is like a tree without blossoms or fruit.", author: "Khalil Gibran", category: "Love" },
            { text: "Love is the only force capable of transforming an enemy into a friend.", author: "Martin Luther King Jr.", category: "Transformation" },
            { text: "Whatever our souls are made of, his and mine are the same.", author: "Emily Brontë", category: "Connection" },
            { text: "Love is a canvas furnished by nature and embroidered by imagination.", author: "Voltaire", category: "Love" },

            // Courage & Strength (91-120)
            { text: "Courage is not the absence of fear, but rather the assessment that something else is more important than fear.", author: "Franklin D. Roosevelt", category: "Courage" },
            { text: "It takes courage to grow up and become who you really are.", author: "E.E. Cummings", category: "Authenticity" },
            { text: "Courage is grace under pressure.", author: "Ernest Hemingway", category: "Courage" },
            { text: "You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face.", author: "Eleanor Roosevelt", category: "Growth" },
            { text: "Courage doesn't always roar. Sometimes courage is the quiet voice at the end of the day saying, 'I will try again tomorrow.'", author: "Mary Anne Radmacher", category: "Courage" },
            { text: "With the new day comes new strength and new thoughts.", author: "Eleanor Roosevelt", category: "Renewal" },
            { text: "Strength does not come from physical capacity. It comes from an indomitable will.", author: "Mahatma Gandhi", category: "Strength" },
            { text: "We must build dikes of courage to hold back the flood of fear.", author: "Martin Luther King Jr.", category: "Courage" },
            { text: "Courage is resistance to fear, mastery of fear - not absence of fear.", author: "Mark Twain", category: "Courage" },
            { text: "He who is not courageous enough to take risks will accomplish nothing in life.", author: "Muhammad Ali", category: "Risk" },
            { text: "Fear is only as deep as the mind allows.", author: "Japanese Proverb", category: "Fear" },
            { text: "A hero is no braver than an ordinary man, but he is brave five minutes longer.", author: "Ralph Waldo Emerson", category: "Bravery" },
            { text: "Courage is what it takes to stand up and speak; courage is also what it takes to sit down and listen.", author: "Winston Churchill", category: "Courage" },
            { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill", category: "Perseverance" },
            { text: "The brave man is not he who does not feel afraid, but he who conquers that fear.", author: "Nelson Mandela", category: "Bravery" },
            { text: "Courage is found in unlikely places.", author: "J.R.R. Tolkien", category: "Courage" },
            { text: "Have the courage to follow your heart and intuition.", author: "Steve Jobs", category: "Intuition" },
            { text: "It is curious that physical courage should be so common in the world and moral courage so rare.", author: "Mark Twain", category: "Morality" },
            { text: "Courage is like a muscle. We strengthen it by use.", author: "Ruth Gordon", category: "Practice" },
            { text: "Without fear there cannot be courage.", author: "Christopher Paolini", category: "Balance" },
            { text: "Inaction breeds doubt and fear. Action breeds confidence and courage.", author: "Dale Carnegie", category: "Action" },
            { text: "The greatest test of courage on earth is to bear defeat without losing heart.", author: "Robert Green Ingersoll", category: "Resilience" },
            { text: "Perfect courage is to do without witnesses what one would be capable of doing with the world looking on.", author: "François de La Rochefoucauld", category: "Integrity" },
            { text: "Courage is the most important of all the virtues because without courage, you can't practice any other virtue consistently.", author: "Maya Angelou", category: "Virtue" },
            { text: "One isn't necessarily born with courage, but one is born with potential.", author: "Maya Angelou", category: "Potential" },
            { text: "Courage is knowing what not to fear.", author: "Plato", category: "Wisdom" },
            { text: "All our dreams can come true, if we have the courage to pursue them.", author: "Walt Disney", category: "Dreams" },
            { text: "Courage is the first of human qualities because it is the quality which guarantees the others.", author: "Aristotle", category: "Character" },
            { text: "Only those who will risk going too far can possibly find out how far one can go.", author: "T.S. Eliot", category: "Risk" },
            { text: "Bran thought about it. 'Can a man still be brave if he's afraid?' 'That is the only time a man can be brave,' his father told him.", author: "George R.R. Martin", category: "Fear" },

            // Happiness & Joy (121-150)
            { text: "Whoever is happy will make others happy too.", author: "Anne Frank", category: "Happiness" },
            { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama", category: "Happiness" },
            { text: "For every minute you are angry you lose sixty seconds of happiness.", author: "Ralph Waldo Emerson", category: "Happiness" },
            { text: "Happiness is when what you think, what you say, and what you do are in harmony.", author: "Mahatma Gandhi", category: "Harmony" },
            { text: "Count your age by friends, not years. Count your life by smiles, not tears.", author: "John Lennon", category: "Joy" },
            { text: "The most important thing is to enjoy your life—to be happy—it's all that matters.", author: "Audrey Hepburn", category: "Happiness" },
            { text: "Happiness is not a goal; it is a by-product.", author: "Eleanor Roosevelt", category: "Happiness" },
            { text: "The only joy in the world is to begin.", author: "Cesare Pavese", category: "Beginning" },
            { text: "Happiness is the secret to all beauty. There is no beauty without happiness.", author: "Christian Dior", category: "Beauty" },
            { text: "Be happy for this moment. This moment is your life.", author: "Omar Khayyam", category: "Present" },
            { text: "Most folks are as happy as they make up their minds to be.", author: "Abraham Lincoln", category: "Mindset" },
            { text: "Happiness lies in the joy of achievement and the thrill of creative effort.", author: "Franklin D. Roosevelt", category: "Achievement" },
            { text: "The happiness of your life depends upon the quality of your thoughts.", author: "Marcus Aurelius", category: "Mindset" },
            { text: "Happiness is not by chance, but by choice.", author: "Jim Rohn", category: "Choice" },
            { text: "Let us be grateful to the people who make us happy; they are the charming gardeners who make our souls blossom.", author: "Marcel Proust", category: "Gratitude" },
            { text: "The foolish man seeks happiness in the distance, the wise grows it under his feet.", author: "James Oppenheim", category: "Wisdom" },
            { text: "Doing what you like is freedom. Liking what you do is happiness.", author: "Frank Tyger", category: "Freedom" },
            { text: "Happiness is not something you postpone for the future; it is something you design for the present.", author: "Jim Rohn", category: "Present" },
            { text: "The secret of happiness is freedom, the secret of freedom is courage.", author: "Carrie Jones", category: "Freedom" },
            { text: "There is only one happiness in this life, to love and be loved.", author: "George Sand", category: "Love" },
            { text: "Be kind whenever possible. It is always possible.", author: "Dalai Lama", category: "Kindness" },
            { text: "Happiness is a warm puppy.", author: "Charles M. Schulz", category: "Simple Joy" },
            { text: "The purpose of our lives is to be happy.", author: "Dalai Lama", category: "Purpose" },
            { text: "Happiness is found in doing, not merely possessing.", author: "Napoleon Hill", category: "Action" },
            { text: "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.", author: "Marcus Aurelius", category: "Mindset" },
            { text: "Happiness depends upon ourselves.", author: "Aristotle", category: "Self-Reliance" },
            { text: "Time you enjoy wasting is not wasted time.", author: "Marthe Troly-Curtin", category: "Enjoyment" },
            { text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", author: "Mother Teresa", category: "Love" },
            { text: "The greatest happiness you can have is knowing that you do not necessarily require happiness.", author: "William Saroyan", category: "Contentment" },
            { text: "Enjoy the little things, for one day you may look back and realize they were the big things.", author: "Robert Brault", category: "Appreciation" },

            // Dreams & Hope (151-180)
            { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt", category: "Dreams" },
            { text: "Hope is being able to see that there is light despite all of the darkness.", author: "Desmond Tutu", category: "Hope" },
            { text: "A dream you dream alone is only a dream. A dream you dream together is reality.", author: "Yoko Ono", category: "Collaboration" },
            { text: "All our dreams can come true, if we have the courage to pursue them.", author: "Walt Disney", category: "Dreams" },
            { text: "The biggest adventure you can take is to live the life of your dreams.", author: "Oprah Winfrey", category: "Adventure" },
            { text: "Dream big and dare to fail.", author: "Norman Vaughan", category: "Ambition" },
            { text: "The only thing worse than starting something and failing is not starting something.", author: "Seth Godin", category: "Initiative" },
            { text: "If you can dream it, you can do it.", author: "Walt Disney", category: "Belief" },
            { text: "Go confidently in the direction of your dreams. Live the life you have imagined.", author: "Henry David Thoreau", category: "Dreams" },
            { text: "A man is not old until regrets take the place of dreams.", author: "John Barrymore", category: "Regret" },
            { text: "Hope is a waking dream.", author: "Aristotle", category: "Hope" },
            { text: "What is not started today is never finished tomorrow.", author: "Johann Wolfgang von Goethe", category: "Action" },
            { text: "The future starts today, not tomorrow.", author: "Pope John Paul II", category: "Present" },
            { text: "Your goals are the road maps that guide you and show you what is possible for your life.", author: "Les Brown", category: "Goals" },
            { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis", category: "Dreams" },
            { text: "Don't give it five minutes if you're not going to give it five years.", author: "Meghan Markle", category: "Commitment" },
            { text: "Hope is important because it can make the present moment less difficult to bear.", author: "Thich Nhat Hanh", category: "Hope" },
            { text: "The only limit to the height of your achievements is the reach of your dreams and your willingness to work for them.", author: "Michelle Obama", category: "Achievement" },
            { text: "We all have dreams. But in order to make dreams come into reality, it takes an awful lot of determination, dedication, self-discipline, and effort.", author: "Jesse Owens", category: "Determination" },
            { text: "A hope in dreams is better than the real thing.", author: "Haruki Murakami", category: "Dreams" },
            { text: "Hope is the thing with feathers that perches in the soul.", author: "Emily Dickinson", category: "Hope" },
            { text: "Learn from yesterday, live for today, hope for tomorrow.", author: "Albert Einstein", category: "Balance" },
            { text: "Hold fast to dreams, for if dreams die, life is a broken-winged bird that cannot fly.", author: "Langston Hughes", category: "Dreams" },
            { text: "The best way to make your dreams come true is to wake up.", author: "Paul Valéry", category: "Action" },
            { text: "Everything is possible. The impossible just takes longer.", author: "Dan Brown", category: "Possibility" },
            { text: "We must accept finite disappointment, but never lose infinite hope.", author: "Martin Luther King Jr.", category: "Hope" },
            { text: "If you want to make your dreams come true, the first thing you have to do is wake up.", author: "J.M. Power", category: "Awareness" },
            { text: "When you cease to dream you cease to live.", author: "Malcolm Forbes", category: "Dreams" },
            { text: "Dreams are today's answers to tomorrow's questions.", author: "Edgar Cayce", category: "Vision" },
            { text: "Every great dream begins with a dreamer.", author: "Harriet Tubman", category: "Vision" },

            // Resilience & Perseverance (181-210)
            { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela", category: "Resilience" },
            { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle", category: "Hope" },
            { text: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.", author: "Thomas Edison", category: "Persistence" },
            { text: "Fall seven times and stand up eight.", author: "Japanese Proverb", category: "Resilience" },
            { text: "I am not what happened to me, I am what I choose to become.", author: "Carl Jung", category: "Choice" },
            { text: "The oak fought the wind and was broken, the willow bent when it must and survived.", author: "Robert Jordan", category: "Adaptability" },
            { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson", category: "Inner Strength" },
            { text: "Life doesn't get easier or more forgiving, we get stronger and more resilient.", author: "Steve Maraboli", category: "Strength" },
            { text: "Rock bottom became the solid foundation on which I rebuilt my life.", author: "J.K. Rowling", category: "Rebuilding" },
            { text: "I can be changed by what happens to me. But I refuse to be reduced by it.", author: "Maya Angelou", category: "Resilience" },
            { text: "A river cuts through rock, not because of its power, but because of its persistence.", author: "Jim Watkins", category: "Persistence" },
            { text: "When we are no longer able to change a situation, we are challenged to change ourselves.", author: "Viktor Frankl", category: "Adaptation" },
            { text: "Out of difficulties grow miracles.", author: "Jean de La Bruyère", category: "Transformation" },
            { text: "The human capacity for burden is like bamboo - far more flexible than you'd ever believe at first glance.", author: "Jodi Picoult", category: "Strength" },
            { text: "Difficulties in life are intended to make us better, not bitter.", author: "Dan Reeves", category: "Growth" },
            { text: "The only way out is through.", author: "Robert Frost", category: "Perseverance" },
            { text: "Strength grows in the moments when you think you can't go on but you keep going anyway.", author: "Unknown", category: "Endurance" },
            { text: "Stars can't shine without darkness.", author: "Unknown", category: "Contrast" },
            { text: "What doesn't kill you makes you stronger.", author: "Friedrich Nietzsche", category: "Resilience" },
            { text: "The gem cannot be polished without friction, nor man perfected without trials.", author: "Chinese Proverb", category: "Adversity" },
            { text: "It's not the load that breaks you down, it's the way you carry it.", author: "Lou Holtz", category: "Attitude" },
            { text: "Hard times don't create heroes. It is during the hard times when the 'hero' within us is revealed.", author: "Bob Riley", category: "Character" },
            { text: "Resilience is accepting your new reality, even if it's less good than the one you had before.", author: "Elizabeth Edwards", category: "Acceptance" },
            { text: "Do not judge me by my success, judge me by how many times I fell down and got back up again.", author: "Nelson Mandela", category: "Persistence" },
            { text: "The moment you're ready to quit is usually the moment right before a miracle happens.", author: "Unknown", category: "Persistence" },
            { text: "Sometimes you don't realize your own strength until you come face to face with your greatest weakness.", author: "Susan Gale", category: "Self-Discovery" },
            { text: "You may encounter many defeats, but you must not be defeated.", author: "Maya Angelou", category: "Determination" },
            { text: "Every strike brings me closer to the next home run.", author: "Babe Ruth", category: "Progress" },
            { text: "He who has a why to live can bear almost any how.", author: "Friedrich Nietzsche", category: "Purpose" },
            { text: "Perseverance is not a long race; it is many short races one after the other.", author: "Walter Elliot", category: "Persistence" },

            // Mindfulness & Presence (211-240)
            { text: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", author: "Buddha", category: "Mindfulness" },
            { text: "The present moment is the only time over which we have dominion.", author: "Thích Nhất Hạnh", category: "Present" },
            { text: "Wherever you are, be all there.", author: "Jim Elliot", category: "Presence" },
            { text: "Life is a dance. Mindfulness is witnessing that dance.", author: "Amit Ray", category: "Mindfulness" },
            { text: "The ability to be in the present moment is a major component of mental wellness.", author: "Abraham Maslow", category: "Mental Health" },
            { text: "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.", author: "Bill Keane", category: "Present" },
            { text: "Realize deeply that the present moment is all you ever have.", author: "Eckhart Tolle", category: "Awareness" },
            { text: "The secret of health for both mind and body is not to mourn for the past, nor to worry about the future, but to live the present moment wisely.", author: "Buddha", category: "Wellness" },
            { text: "Be present in all things and thankful for all things.", author: "Maya Angelou", category: "Gratitude" },
            { text: "The little things? The little moments? They aren't little.", author: "Jon Kabat-Zinn", category: "Appreciation" },
            { text: "Life is available only in the present moment.", author: "Thích Nhất Hạnh", category: "Mindfulness" },
            { text: "Drink your tea slowly and reverently, as if it is the axis on which the world earth revolves.", author: "Thích Nhất Hạnh", category: "Mindfulness" },
            { text: "If you are depressed you are living in the past. If you are anxious you are living in the future. If you are at peace you are living in the present.", author: "Lao Tzu", category: "Peace" },
            { text: "The best way to capture moments is to pay attention. This is how we cultivate mindfulness.", author: "Jon Kabat-Zinn", category: "Attention" },
            { text: "Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor.", author: "Thích Nhất Hạnh", category: "Breathing" },
            { text: "Mindfulness isn't difficult, we just need to remember to do it.", author: "Sharon Salzberg", category: "Practice" },
            { text: "In today's rush, we all think too much — seek too much — want too much — and forget about the joy of just being.", author: "Eckhart Tolle", category: "Being" },
            { text: "The only way to live is by accepting each minute as an unrepeatable miracle.", author: "Tara Brach", category: "Acceptance" },
            { text: "When you realize nothing is lacking, the whole world belongs to you.", author: "Lao Tzu", category: "Contentment" },
            { text: "Mindfulness means being awake. It means knowing what you are doing.", author: "Jon Kabat-Zinn", category: "Awareness" },
            { text: "Peace comes from within. Do not seek it without.", author: "Buddha", category: "Inner Peace" },
            { text: "The mind is everything. What you think you become.", author: "Buddha", category: "Thoughts" },
            { text: "Each morning we are born again. What we do today is what matters most.", author: "Buddha", category: "Renewal" },
            { text: "Let go of the thoughts that don't make you strong.", author: "Karen Salmansohn", category: "Mental Strength" },
            { text: "Paradise is not a place; it's a state of consciousness.", author: "Sri Chinmoy", category: "Consciousness" },
            { text: "Breathing in, I calm body and mind. Breathing out, I smile.", author: "Thích Nhất Hạnh", category: "Calm" },
            { text: "The present moment is filled with joy and happiness. If you are attentive, you will see it.", author: "Thích Nhất Hạnh", category: "Joy" },
            { text: "You can't stop the waves, but you can learn to surf.", author: "Jon Kabat-Zinn", category: "Acceptance" },
            { text: "Smile, breathe, and go slowly.", author: "Thích Nhất Hạnh", category: "Peace" },
            { text: "In the midst of movement and chaos, keep stillness inside of you.", author: "Deepak Chopra", category: "Inner Calm" },

            // Change & Growth (241-270)
            { text: "Change is the only constant in life.", author: "Heraclitus", category: "Change" },
            { text: "The only way to make sense out of change is to plunge into it, move with it, and join the dance.", author: "Alan Watts", category: "Adaptation" },
            { text: "Progress is impossible without change, and those who cannot change their minds cannot change anything.", author: "George Bernard Shaw", category: "Progress" },
            { text: "Education is the most powerful weapon which you can use to change the world.", author: "Nelson Mandela", category: "Education" },
            { text: "If you don't like something, change it. If you can't change it, change your attitude.", author: "Maya Angelou", category: "Attitude" },
            { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi", category: "Action" },
            { text: "Growth is painful. Change is painful. But nothing is as painful as staying stuck somewhere you don't belong.", author: "Mandy Hale", category: "Growth" },
            { text: "There is nothing permanent except change.", author: "Heraclitus", category: "Change" },
            { text: "Change will not come if we wait for some other person or some other time.", author: "Barack Obama", category: "Initiative" },
            { text: "The measure of intelligence is the ability to change.", author: "Albert Einstein", category: "Intelligence" },
            { text: "Change before you have to.", author: "Jack Welch", category: "Proactivity" },
            { text: "To improve is to change; to be perfect is to change often.", author: "Winston Churchill", category: "Improvement" },
            { text: "Everyone thinks of changing the world, but no one thinks of changing himself.", author: "Leo Tolstoy", category: "Self-Change" },
            { text: "They always say time changes things, but you actually have to change them yourself.", author: "Andy Warhol", category: "Agency" },
            { text: "Without change, something sleeps inside us, and seldom awakens.", author: "Duke Leto Atreides", category: "Awakening" },
            { text: "Life is a series of natural and spontaneous changes. Don't resist them; that only creates sorrow.", author: "Lao Tzu", category: "Acceptance" },
            { text: "The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.", author: "Albert Einstein", category: "Mindset" },
            { text: "Change is hardest at the beginning, messiest in the middle and best at the end.", author: "Robin Sharma", category: "Process" },
            { text: "Taking a new step, uttering a new word, is what people fear most.", author: "Fyodor Dostoevsky", category: "Fear" },
            { text: "Some changes look negative on the surface but you will soon realize that space is being created in your life for something new to emerge.", author: "Eckhart Tolle", category: "Transformation" },
            { text: "He who rejects change is the architect of decay.", author: "Harold Wilson", category: "Progress" },
            { text: "Things change. And friends leave. Life doesn't stop for anybody.", author: "Stephen Chbosky", category: "Life" },
            { text: "Play to your strengths. If you aren't great at something, do more of what you're great at.", author: "Jason Lemkin", category: "Strategy" },
            { text: "Don't be afraid of change. You may lose something good, but you may gain something better.", author: "Unknown", category: "Opportunity" },
            { text: "Change the way you look at things and the things you look at change.", author: "Wayne Dyer", category: "Perspective" },
            { text: "Growth and comfort do not coexist.", author: "Ginni Rometty", category: "Discomfort" },
            { text: "Life is about change. Sometimes it's painful. Sometimes it's beautiful. But most of the time, it's both.", author: "Lana Lang", category: "Duality" },
            { text: "You never change your life until you step out of your comfort zone.", author: "Roy T. Bennett", category: "Comfort Zone" },
            { text: "Step out of the history that is holding you back. Step into the new story you are willing to create.", author: "Oprah Winfrey", category: "Transformation" },
            { text: "Change your thoughts and you change your world.", author: "Norman Vincent Peale", category: "Mindset" },

            // Knowledge & Learning (271-300)
            { text: "The only true wisdom is in knowing you know nothing.", author: "Socrates", category: "Wisdom" },
            { text: "The beautiful thing about learning is that no one can take it away from you.", author: "B.B. King", category: "Learning" },
            { text: "An investment in knowledge pays the best interest.", author: "Benjamin Franklin", category: "Education" },
            { text: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi", category: "Learning" },
            { text: "The more that you read, the more things you will know. The more that you learn, the more places you'll go.", author: "Dr. Seuss", category: "Reading" },
            { text: "I am still learning.", author: "Michelangelo", category: "Humility" },
            { text: "In learning you will teach, and in teaching you will learn.", author: "Phil Collins", category: "Teaching" },
            { text: "Learning never exhausts the mind.", author: "Leonardo da Vinci", category: "Learning" },
            { text: "Tell me and I forget. Teach me and I remember. Involve me and I learn.", author: "Benjamin Franklin", category: "Experience" },
            { text: "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice.", author: "Brian Herbert", category: "Choice" },
            { text: "Education is not the filling of a pail, but the lighting of a fire.", author: "W.B. Yeats", category: "Inspiration" },
            { text: "The expert in anything was once a beginner.", author: "Helen Hayes", category: "Mastery" },
            { text: "The mind is not a vessel to be filled, but a fire to be kindled.", author: "Plutarch", category: "Curiosity" },
            { text: "Anyone who stops learning is old, whether at twenty or eighty.", author: "Henry Ford", category: "Youth" },
            { text: "Develop a passion for learning. If you do, you will never cease to grow.", author: "Anthony J. D'Angelo", category: "Passion" },
            { text: "Real knowledge is to know the extent of one's ignorance.", author: "Confucius", category: "Self-Awareness" },
            { text: "I hear and I forget. I see and I remember. I do and I understand.", author: "Confucius", category: "Understanding" },
            { text: "Wisdom is not a product of schooling but of the lifelong attempt to acquire it.", author: "Albert Einstein", category: "Wisdom" },
            { text: "The roots of education are bitter, but the fruit is sweet.", author: "Aristotle", category: "Perseverance" },
            { text: "Knowledge speaks, but wisdom listens.", author: "Jimi Hendrix", category: "Wisdom" },
            { text: "It is the mark of an educated mind to be able to entertain a thought without accepting it.", author: "Aristotle", category: "Critical Thinking" },
            { text: "The only person who is educated is the one who has learned how to learn and change.", author: "Carl Rogers", category: "Adaptability" },
            { text: "Intelligence plus character—that is the goal of true education.", author: "Martin Luther King Jr.", category: "Character" },
            { text: "The function of education is to teach one to think intensively and to think critically.", author: "Martin Luther King Jr.", category: "Thinking" },
            { text: "Education is what remains after one has forgotten what one has learned in school.", author: "Albert Einstein", category: "Retention" },
            { text: "You can never be overdressed or overeducated.", author: "Oscar Wilde", category: "Excellence" },
            { text: "Learning is a treasure that will follow its owner everywhere.", author: "Chinese Proverb", category: "Value" },
            { text: "The beautiful thing about learning is nobody can take it away from you.", author: "B.B. King", category: "Permanence" },
            { text: "Knowledge is power. Information is liberating.", author: "Kofi Annan", category: "Power" },
            { text: "Wisdom begins in wonder.", author: "Socrates", category: "Wonder" }
        ];
  /* -------------------------
     Helpers / Storage
  ------------------------- */
  const el = (id) => document.getElementById(id);

  const LS = {
    theme: "dwTheme",
    favs: "dwFavsV3",
    hist: "dwHistV3",
    category: "dwCategory",
    autoOn: "dwAutoOn",
    autoSec: "dwAutoSec",
    musicOn: "dwMusicOn",
    musicVol: "dwMusicVol"
  };

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function safeJSONParse(value, fallback) {
    try { return JSON.parse(value); } catch { return fallback; }
  }
  function loadJSON(key, fallback) {
    return safeJSONParse(localStorage.getItem(key), fallback);
  }
  function saveJSON(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  function clamp(n, a, b){ return Math.max(a, Math.min(b, n)); }

  function formatDate() {
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    return new Date().toLocaleDateString("en-US", options);
  }

  function hashStr(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return (h >>> 0).toString(16);
  }
  function makeId(q) {
    return hashStr(`${q.text}||${q.author}||${q.category}`);
  }

  function escapeHTML(s) {
    return String(s)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  /* -------------------------
     Build quote list + maps
  ------------------------- */
  const quoteList = quotes.map((q) => ({ ...q, id: makeId(q) }));
  const quoteById = new Map(quoteList.map(q => [q.id, q]));

  function getCategories() {
    const set = new Set();
    for (const q of quoteList) set.add(q.category || "Uncategorized");
    return ["All", ...Array.from(set).sort((a,b)=>a.localeCompare(b))];
  }

  function eligibleIds(category) {
    if (!category || category === "All") return quoteList.map(q => q.id);
    return quoteList.filter(q => (q.category || "Uncategorized") === category).map(q => q.id);
  }

  function isEligible(id, category) {
    if (!quoteById.has(id)) return false;
    if (!category || category === "All") return true;
    const q = quoteById.get(id);
    return (q.category || "Uncategorized") === category;
  }

  /* -------------------------
     UI elements
  ------------------------- */
  const card = el("card");
  const quoteTextSpan = el("quoteText");
  const quoteAuthorEl = el("quoteAuthor");
  const quoteCategoryEl = el("quoteCategory");
  const dateEl = el("currentDate");

  const categorySelect = el("categorySelect");
  const newBtn = el("newBtn");
  const favBtn = el("favBtn");
  const shareBtn = el("shareBtn");
  const copyBtn = el("copyBtn");

  const themeBtn = el("themeBtn");
  const libraryBtn = el("libraryBtn");

  const autoToggle = el("autoToggle");
  const autoLabel = el("autoLabel");
  const autoSecondsInput = el("autoSeconds");
  const autoIconPath = el("autoIconPath");

  const toast = el("toast");
  const toastText = el("toastText");

  const overlay = el("overlay");
  const drawer = el("drawer");
  const drawerClose = el("drawerClose");
  const tabFav = el("tabFav");
  const tabHist = el("tabHist");
  const drawerActions = el("drawerActions");
  const drawerList = el("drawerList");

  const footerYear = el("footerYear");
  const footerStatus = el("footerStatus");

  // Music UI
  const bgm = el("bgm");
  const musicBtn = el("musicBtn");
  const musicLabel = el("musicLabel");
  const musicIconPath = el("musicIconPath");
  const musicWaves = el("musicWaves");
  const musicVol = el("musicVol");

  /* -------------------------
     State
  ------------------------- */
  let currentId = null;
  let usedPool = [];
  let typingToken = 0;

  let favIds = loadJSON(LS.favs, []);
  favIds = Array.isArray(favIds) ? favIds.filter(id => quoteById.has(id)) : [];

  let history = loadJSON(LS.hist, []);
  history = Array.isArray(history) ? history.filter(x => x && quoteById.has(x.id)).slice(0, 120) : [];

  let currentCategory = localStorage.getItem(LS.category) || "All";

  let autoOn = localStorage.getItem(LS.autoOn) === "1";
  let autoSec = parseInt(localStorage.getItem(LS.autoSec) || "20", 10);
  if (Number.isNaN(autoSec)) autoSec = 20;
  autoSec = clamp(autoSec, 5, 600);
  let autoTimer = null;

  let drawerTab = "fav"; // fav | hist

  /* -------------------------
     Toast
  ------------------------- */
  let toastTimer = null;
  function showToast(message, ok=true) {
    toastText.textContent = message;
    toast.querySelector(".badge").style.background = ok ? "var(--good)" : "var(--danger)";
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 1700);
  }
  function setFooterStatus(text){ footerStatus.textContent = text; }

  /* -------------------------
     Theme
  ------------------------- */
  function loadTheme() {
    const saved = localStorage.getItem(LS.theme);
    if (saved === "light" || saved === "dark") {
      document.documentElement.setAttribute("data-theme", saved);
    }
  }
  function toggleTheme() {
    const cur = document.documentElement.getAttribute("data-theme") || "dark";
    const next = cur === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem(LS.theme, next);
    showToast(next === "light" ? "Light theme" : "Dark theme");
  }

  /* -------------------------
     Typewriter
  ------------------------- */
  async function typewriter(text) {
    typingToken++;
    const token = typingToken;

    if (reduceMotion) {
      card.classList.remove("is-typing");
      quoteTextSpan.textContent = text;
      return;
    }

    card.classList.add("is-typing");
    quoteTextSpan.textContent = "";

    const len = Math.max(1, text.length);
    const cps = clamp(Math.floor(70 - Math.sqrt(len) * 3), 24, 60);
    const start = performance.now();

    return new Promise((resolve) => {
      function tick(now) {
        if (token !== typingToken) return resolve();
        const elapsed = (now - start) / 1000;
        const count = Math.min(len, Math.floor(elapsed * cps));
        quoteTextSpan.textContent = text.slice(0, count);
        if (count >= len) {
          card.classList.remove("is-typing");
          return resolve();
        }
        requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }

  /* -------------------------
     Daily quote per category
  ------------------------- */
  function getDailyId(category) {
    const today = new Date().toDateString();
    const key = `dwDaily:${today}:${category || "All"}`;

    let id = localStorage.getItem(key);
    if (id && isEligible(id, category)) return id;

    const pool = eligibleIds(category);
    if (!pool.length) return quoteList[0]?.id || null;

    id = pool[Math.floor(Math.random() * pool.length)];
    localStorage.setItem(key, id);
    return id;
  }

  function pickFreshId() {
    const pool = eligibleIds(currentCategory);
    if (!pool.length) return quoteList[0]?.id || null;

    if (usedPool.length >= pool.length) usedPool = [];

    let id;
    let guard = 0;
    do {
      id = pool[Math.floor(Math.random() * pool.length)];
      guard++;
    } while (usedPool.includes(id) && guard < 800);

    usedPool.push(id);
    return id;
  }

  /* -------------------------
     Favorites & History
  ------------------------- */
  function isFav(id){ return favIds.includes(id); }

  function toggleFavorite(id) {
    if (!id) return;

    const idx = favIds.indexOf(id);
    if (idx >= 0) {
      favIds.splice(idx, 1);
      saveJSON(LS.favs, favIds);
      showToast("Removed from favorites");
    } else {
      favIds.unshift(id);
      favIds = favIds.slice(0, 300);
      saveJSON(LS.favs, favIds);
      showToast("Added to favorites");
    }

    syncFavButton();
    if (drawer.classList.contains("open")) renderDrawer();
  }

  function pushHistory(id) {
    if (!id) return;
    history = history.filter(x => x.id !== id);
    history.unshift({ id, ts: Date.now() });
    history = history.slice(0, 120);
    saveJSON(LS.hist, history);
    if (drawer.classList.contains("open")) renderDrawer();
  }

  function clearHistory() {
    history = [];
    saveJSON(LS.hist, history);
    showToast("History cleared");
    renderDrawer();
  }

  function clearFavorites() {
    favIds = [];
    saveJSON(LS.favs, favIds);
    showToast("Favorites cleared");
    syncFavButton();
    renderDrawer();
  }

  /* -------------------------
     Display quote
  ------------------------- */
  function setPill(category) {
    const cat = category || "Uncategorized";
    quoteCategoryEl.innerHTML = `<span class="dot"></span><span>${escapeHTML(cat)}</span>`;
  }

  function syncFavButton() {
    const on = currentId && isFav(currentId);
    favBtn.classList.toggle("fav-on", !!on);
    favBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="${on ? "currentColor" : "none"}" aria-hidden="true">
        <path d="M12 21s-7-4.35-9.3-9.02C1.5 9.45 3.2 6.5 6.6 6.2c1.9-.17 3.2.78 4.1 1.95.9-1.17 2.2-2.12 4.1-1.95 3.4.3 5.1 3.25 3.9 5.78C19 16.65 12 21 12 21Z"
              stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
      </svg>
      ${on ? "Favorited" : "Favorite"}
    `;
  }

  async function displayQuote(id, opts = { pushHist: true }) {
    if (!id || !quoteById.has(id)) return;

    const q = quoteById.get(id);

    // swap animation
    card.classList.remove("enter");
    card.classList.add("swap");

    // cancel typing
    typingToken++;

    setFooterStatus("Changing quote…");

    window.setTimeout(async () => {
      quoteAuthorEl.textContent = q.author || "Unknown";
      setPill(q.category);
      currentId = id;
      syncFavButton();

      card.classList.remove("swap");
      card.classList.add("enter");

      await typewriter(q.text || "");

      if (opts.pushHist) pushHistory(id);
      setFooterStatus(buildStatusLine());
    }, 190);
  }

  /* -------------------------
     Copy / Share
  ------------------------- */
  async function copyCurrent() {
    if (!currentId) return;
    const q = quoteById.get(currentId);
    const text = `"${q.text}" — ${q.author}`;

    try {
      await navigator.clipboard.writeText(text);
      showToast("Copied to clipboard");
    } catch {
      showToast("Copy failed (blocked)", false);
    }
  }

  async function shareCurrent() {
    if (!currentId) return;
    const q = quoteById.get(currentId);
    const text = `"${q.text}" — ${q.author}`;

    if (navigator.share) {
      try {
        await navigator.share({ title: "Daily Wisdom", text });
        showToast("Shared");
      } catch {
        // cancelled
      }
    } else {
      await copyCurrent();
    }
  }

  /* -------------------------
     Drawer
  ------------------------- */
  function openDrawer() {
    overlay.classList.add("open");
    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
    renderDrawer();
  }
  function closeDrawer() {
    overlay.classList.remove("open");
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
  }
  function setTab(tab) {
    drawerTab = tab;
    tabFav.classList.toggle("active", tab === "fav");
    tabHist.classList.toggle("active", tab === "hist");
    renderDrawer();
  }

  function renderDrawer() {
    drawerActions.innerHTML = "";
    drawerList.innerHTML = "";

    if (drawerTab === "fav") {
      drawerActions.innerHTML = `
        <button class="mini" id="btnClearFav">
          <svg viewBox="0 0 24 24" fill="none"><path d="M6 7h12M9 7V5h6v2m-7 3v9m8-9v9M8 7l1 14h6l1-14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
          Clear Favorites
        </button>
      `;

      const list = favIds.map(id => quoteById.get(id)).filter(Boolean);

      if (!list.length) {
        drawerList.innerHTML = `<div class="empty">No favorites yet. Click <b>Favorite</b> on a quote to save it.</div>`;
      } else {
        for (const q of list) {
          const snippet = (q.text || "").slice(0, 120) + ((q.text || "").length > 120 ? "…" : "");
          const on = isFav(q.id);

          const item = document.createElement("div");
          item.className = "item";
          item.innerHTML = `
            <div class="item-top">
              <div class="item-snippet">
                ${escapeHTML(snippet)}
                <small>${escapeHTML(q.author || "Unknown")} · ${escapeHTML(q.category || "Uncategorized")}</small>
              </div>
              <button class="star ${on ? "on" : ""}" title="Toggle favorite" aria-label="Toggle favorite">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 21s-7-4.35-9.3-9.02C1.5 9.45 3.2 6.5 6.6 6.2c1.9-.17 3.2.78 4.1 1.95.9-1.17 2.2-2.12 4.1-1.95 3.4.3 5.1 3.25 3.9 5.78C19 16.65 12 21 12 21Z"
                        stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          `;

          const star = item.querySelector(".star");
          star.addEventListener("click", (e) => {
            e.stopPropagation();
            toggleFavorite(q.id);
          });

          item.addEventListener("click", () => {
            closeDrawer();
            displayQuote(q.id, { pushHist: true });
          });

          drawerList.appendChild(item);
        }
      }

      el("btnClearFav")?.addEventListener("click", clearFavorites);

    } else {
      drawerActions.innerHTML = `
        <button class="mini" id="btnClearHist">
          <svg viewBox="0 0 24 24" fill="none"><path d="M3 6h18M9 6V4h6v2m-7 3v9m8-9v9M8 6l1 14h6l1-14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
          Clear History
        </button>
      `;

      if (!history.length) {
        drawerList.innerHTML = `<div class="empty">History is empty. Open new quotes and they will appear here.</div>`;
      } else {
        for (const h of history) {
          const q = quoteById.get(h.id);
          if (!q) continue;

          const snippet = (q.text || "").slice(0, 120) + ((q.text || "").length > 120 ? "…" : "");
          const on = isFav(q.id);
          const when = new Date(h.ts).toLocaleString();

          const item = document.createElement("div");
          item.className = "item";
          item.innerHTML = `
            <div class="item-top">
              <div class="item-snippet">
                ${escapeHTML(snippet)}
                <small>${escapeHTML(q.author || "Unknown")} · ${escapeHTML(q.category || "Uncategorized")}</small>
                <small style="opacity:.7; letter-spacing:.08em;">${escapeHTML(when)}</small>
              </div>
              <button class="star ${on ? "on" : ""}" title="Toggle favorite" aria-label="Toggle favorite">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 21s-7-4.35-9.3-9.02C1.5 9.45 3.2 6.5 6.6 6.2c1.9-.17 3.2.78 4.1 1.95.9-1.17 2.2-2.12 4.1-1.95 3.4.3 5.1 3.25 3.9 5.78C19 16.65 12 21 12 21Z"
                        stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          `;

          const star = item.querySelector(".star");
          star.addEventListener("click", (e) => {
            e.stopPropagation();
            toggleFavorite(q.id);
          });

          item.addEventListener("click", () => {
            closeDrawer();
            displayQuote(q.id, { pushHist: true });
          });

          drawerList.appendChild(item);
        }
      }

      el("btnClearHist")?.addEventListener("click", clearHistory);
    }
  }

  /* -------------------------
     Category Dropdown
  ------------------------- */
  function initCategoryDropdown() {
    const cats = getCategories();
    categorySelect.innerHTML = cats.map(c => `<option value="${escapeHTML(c)}">${escapeHTML(c)}</option>`).join("");

    if (!cats.includes(currentCategory)) currentCategory = "All";
    categorySelect.value = currentCategory;

    categorySelect.addEventListener("change", () => {
      currentCategory = categorySelect.value || "All";
      localStorage.setItem(LS.category, currentCategory);
      usedPool = [];

      const dailyId = getDailyId(currentCategory);
      displayQuote(dailyId, { pushHist: true });
      showToast(`Filter: ${currentCategory}`);
    });
  }

  /* -------------------------
     Auto-play
  ------------------------- */
  function updateAutoUI() {
    autoLabel.textContent = autoOn ? "Stop" : "Start";
    autoIconPath.setAttribute(
      "d",
      autoOn
        ? "M7 6h3v12H7V6Zm7 0h3v12h-3V6Z" // pause
        : "M9 6v12l10-6-10-6Z"           // play
    );
    autoSecondsInput.value = String(autoSec);
    localStorage.setItem(LS.autoOn, autoOn ? "1" : "0");
    localStorage.setItem(LS.autoSec, String(autoSec));
  }

  function startAuto() {
    stopAuto();
    autoTimer = setInterval(() => {
      const next = pickFreshId();
      displayQuote(next, { pushHist: true });
    }, autoSec * 1000);
  }

  function stopAuto() {
    if (autoTimer) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
  }

  function setAuto(on) {
    autoOn = !!on;
    updateAutoUI();
    if (autoOn) startAuto();
    else stopAuto();
    setFooterStatus(buildStatusLine());
  }

  autoToggle.addEventListener("click", () => setAuto(!autoOn));

  autoSecondsInput.addEventListener("change", () => {
    let v = parseInt(autoSecondsInput.value, 10);
    if (Number.isNaN(v)) v = 20;
    autoSec = clamp(v, 5, 600);
    updateAutoUI();
    if (autoOn) startAuto();
    showToast(`Auto every ${autoSec}s`);
    setFooterStatus(buildStatusLine());
  });

  /* -------------------------
     Background Music (BGM)
  ------------------------- */
  let musicOn = localStorage.getItem(LS.musicOn) === "1";
  let musicVolValue = parseFloat(localStorage.getItem(LS.musicVol) || "0.35");
  if (Number.isNaN(musicVolValue)) musicVolValue = 0.35;
  musicVolValue = clamp(musicVolValue, 0, 1);

  let pendingMusicStart = false; // need user gesture

  function updateMusicUI() {
    musicLabel.textContent = musicOn ? "On" : "Off";
    musicWaves.style.opacity = musicOn ? "0.9" : "0.0";
    musicIconPath.setAttribute("d", musicOn ? "M11 5 6 9H3v6h3l5 4V5Z" : "M11 5 6 9H3v6h3l5 4V5Z");
    musicVol.value = String(Math.round(musicVolValue * 100));
    localStorage.setItem(LS.musicOn, musicOn ? "1" : "0");
    localStorage.setItem(LS.musicVol, String(musicVolValue));
  }

  function fadeTo(target, ms = 450) {
    const start = bgm.volume;
    const diff = target - start;
    const steps = 18;
    const stepMs = Math.max(12, Math.floor(ms / steps));
    let i = 0;

    const t = setInterval(() => {
      i++;
      const p = i / steps;
      bgm.volume = clamp(start + diff * p, 0, 1);
      if (i >= steps) clearInterval(t);
    }, stepMs);
  }

  async function tryPlayMusic() {
    // Some browsers require gesture. We'll try; if fail, wait for user click.
    try {
      await bgm.play();
      return true;
    } catch {
      return false;
    }
  }

  async function startMusic(userInitiated = false) {
    // if no music file, show error
    if (!bgm || !bgm.querySelector("source")?.getAttribute("src")) {
      showToast("No music source", false);
      return;
    }

    bgm.loop = true;
    bgm.muted = false;

    const ok = await tryPlayMusic();
    if (!ok) {
      pendingMusicStart = true;
      if (userInitiated) showToast("Tap anywhere to enable sound", false);
      return;
    }

    pendingMusicStart = false;
    fadeTo(musicVolValue, 520);
  }

  function stopMusic() {
    pendingMusicStart = false;
    fadeTo(0, 350);
    setTimeout(() => {
      try { bgm.pause(); } catch {}
    }, 380);
  }

  function setMusic(on, userInitiated = false) {
    musicOn = !!on;
    updateMusicUI();

    if (musicOn) startMusic(userInitiated);
    else stopMusic();

    setFooterStatus(buildStatusLine());
  }

  // Prepare autoplay muted (allowed in many browsers), then user enables sound
  (async () => {
    try {
      bgm.loop = true;
      bgm.volume = 0;
      bgm.muted = true;
      await bgm.play().catch(()=>{});
      bgm.pause(); // keep ready; user click will start
    } catch {}
  })();

  // First user gesture handler (only once)
  function onFirstGesture() {
    if (pendingMusicStart && musicOn) {
      startMusic(true);
    }
    document.removeEventListener("pointerdown", onFirstGesture);
    document.removeEventListener("keydown", onFirstGesture);
  }
  document.addEventListener("pointerdown", onFirstGesture, { once: false });
  document.addEventListener("keydown", onFirstGesture, { once: false });

  musicBtn.addEventListener("click", () => setMusic(!musicOn, true));

  musicVol.addEventListener("input", () => {
    const v = clamp(parseInt(musicVol.value, 10) / 100, 0, 1);
    musicVolValue = v;
    localStorage.setItem(LS.musicVol, String(musicVolValue));
    if (musicOn && !bgm.paused) {
      fadeTo(musicVolValue, 200);
    }
    setFooterStatus(buildStatusLine());
  });

  /* -------------------------
     Status line
  ------------------------- */
  function buildStatusLine() {
    const a = autoOn ? `Auto ON (${autoSec}s)` : "Auto OFF";
    const m = musicOn ? `Music ON (${Math.round(musicVolValue*100)}%)` : "Music OFF";
    return `${a} · ${m}`;
  }

  /* -------------------------
     Parallax (optional)
  ------------------------- */
  if (!reduceMotion) {
    let raf = null;
    window.addEventListener("mousemove", (e) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        const rect = card.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) / rect.width;
        const dy = (e.clientY - cy) / rect.height;
        card.style.transform = `perspective(900px) rotateX(${(-dy * 4).toFixed(2)}deg) rotateY(${(dx * 6).toFixed(2)}deg)`;
      });
    });
    window.addEventListener("mouseleave", () => { card.style.transform = ""; });
  }

  /* -------------------------
     Events / Shortcuts
  ------------------------- */
  newBtn.addEventListener("click", () => displayQuote(pickFreshId(), { pushHist: true }));
  favBtn.addEventListener("click", () => toggleFavorite(currentId));
  shareBtn.addEventListener("click", shareCurrent);
  copyBtn.addEventListener("click", copyCurrent);

  themeBtn.addEventListener("click", toggleTheme);

  libraryBtn.addEventListener("click", openDrawer);
  drawerClose.addEventListener("click", closeDrawer);
  overlay.addEventListener("click", closeDrawer);

  tabFav.addEventListener("click", () => setTab("fav"));
  tabHist.addEventListener("click", () => setTab("hist"));

  window.addEventListener("keydown", (e) => {
    if (e.target && ["INPUT", "TEXTAREA", "SELECT"].includes(e.target.tagName)) return;

    if (e.key === "n" || e.key === "N") displayQuote(pickFreshId(), { pushHist: true });
    if (e.key === "f" || e.key === "F") toggleFavorite(currentId);
    if (e.key === "s" || e.key === "S") shareCurrent();
    if (e.key === "c" || e.key === "C") copyCurrent();
    if (e.key === "t" || e.key === "T") toggleTheme();
    if (e.key === "m" || e.key === "M") setMusic(!musicOn, true);
    if (e.key === "l" || e.key === "L") {
      if (drawer.classList.contains("open")) closeDrawer();
      else openDrawer();
    }
    if (e.key === "Escape" && drawer.classList.contains("open")) closeDrawer();
  });

  /* -------------------------
     Init
  ------------------------- */
  function init() {
    if (!quoteList.length) {
      quoteTextSpan.textContent = "No quotes found. Please add quotes array.";
      quoteAuthorEl.textContent = "";
      setPill("—");
      return;
    }

    loadTheme();

    dateEl.textContent = formatDate();
    footerYear.textContent = String(new Date().getFullYear());

    initCategoryDropdown();

    // auto
    autoSecondsInput.value = String(autoSec);
    updateAutoUI();
    if (autoOn) startAuto();

    // music
    updateMusicUI();
    if (musicOn) {
      // try start; will wait for gesture if blocked
      startMusic(false);
    }

    // daily quote
    const dailyId = getDailyId(currentCategory);
    usedPool = [dailyId];
    displayQuote(dailyId, { pushHist: true });

    setFooterStatus(buildStatusLine());
  }

  init();
});
