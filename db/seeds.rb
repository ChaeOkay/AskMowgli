a = User.create(email: 'demo@demo.com', password: 'password', name: 'Demo Man')
b = User.create(email: 'wolverine@derp.com', password: 'password', name: 'The Wolverine')
c = User.create(email: 'dagget@derp.com', password: 'password', name: 'Dagget')
d = User.create(email: 'fake1@email.com', password: 'password', name: 'Fake1')
e = User.create(email: 'fake2@email.com', password: 'password', name: 'Fake2')
f = User.create(email: 'fake3@email.com', password: 'password', name: 'Fake3')
g = User.create(email: 'fake4@email.com', password: 'password', name: 'Fake4')


survey1 = Survey.create(name: "Condiments", user: a)
survey2 = Survey.create(name: "Woodland Creatures", user: b)
survey3 = Survey.create(name: "Rocks", user: c)

question1= Question.create(question_type: 'text', description: 'For use on burgers or sandwiches; for instance, mayo, mustard, relish, ketchup, etc...', prompt: 'Favorite condiment?', survey: survey1)
question2= Question.create(question_type: 'text', description: 'For combat? For instance, perhaps the mighty wolverine...', prompt: 'Which woodland creature is best?', survey: survey2)
question3= Question.create(question_type: 'text', description: 'Start with type, such as igneous, sedimentary, or metamorphic. Need not be of terrestrial origin, either (i.e. moon rocks, meteorites, etc.', prompt: 'What is your favorite rock?', survey: survey3)
question4= Question.create(question_type: 'text', description: "It's okay to be honest here", prompt: 'How many rocks have you ever loved?', survey: survey3)
question5= Question.create(question_type: 'text', description: 'How much of a rock lover are you?', prompt: 'Did you have a pet rock?', survey: survey3)



reply1 = Reply.create(value: 'mustard', question: question1, user: a)
reply2 = Reply.create(value: 'mustard', question: question1, user: b)
reply3 = Reply.create(value: 'chili sauce', question: question1, user: c)
reply4 = Reply.create(value: 'ketchup', question: question1, user: d)
reply5 = Reply.create(value: 'ketchup', question: question1, user: e)
reply6 = Reply.create(value: 'ketchup', question: question1, user: f)
reply7 = Reply.create(value: 'mayo', question: question1, user: g)
reply8 = Reply.create(value: 'elk', question: question2, user: a)
reply9 = Reply.create(value: 'vole', question: question2, user: b)
reply10 = Reply.create(value: 'opal', question: question3, user: a)
reply11 = Reply.create(value: 'skipping stones', question: question3, user: b)
reply12 = Reply.create(value: '20', question: question4, user: a)
reply13 = Reply.create(value: '1', question: question4, user: b)
reply14 = Reply.create(value: 'yes', question: question5, user: a)
reply15 = Reply.create(value: 'yes', question: question5, user: c)
reply16 = Reply.create(value: 'yes', question: question5, user: d)
reply17 = Reply.create(value: 'yes', question: question5, user: e)
reply18 = Reply.create(value: '20', question: question4, user: c)
reply11 = Reply.create(value: 'boulders', question: question3, user: c)
reply11 = Reply.create(value: 'skipping stones', question: question3, user: d)
reply11 = Reply.create(value: 'skipping stones', question: question3, user: e)