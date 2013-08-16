a = User.create(email: 'derp@derp.com', password: 'password', name: 'Derp')
b = User.create(email: 'wolverine@derp.com', password: 'snarl', name: 'The Wolverine')
c = User.create(email: 'dagget@derp.com', password: 'jalapeno', name: 'Dagget')

survey1 = Survey.create(name: "Condiments", user: a)
survey2 = Survey.create(name: "Woodland Creatures", user: b)
survey3 = Survey.create(name: "Rocks", user: c)

question1= Question.create(survey_type: 'text', descripton: 'For use on burgers or sandwiches; for instance, mayo, mustard, relish, ketchup, etc...', prompt: 'Favorite condiment?', survey: survey1)
question2= Question.create(survey_type: 'text', descripton: 'For combat? For instance, perhaps the mighty wolverine...', prompt: 'Which woodland creature is best?', survey: survey2)
question3= Question.create(survey_type: 'text', descripton: 'Start with type, such as igneous, sedimentary, or metamorphic. Need not be of terrestrial origin, either (i.e. moon rocks, meteorites, etc.', prompt: 'What is your favorite rock?', survey: survey3)

