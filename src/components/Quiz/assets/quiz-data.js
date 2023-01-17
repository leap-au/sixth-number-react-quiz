const quizData = {
  title: 'LEAPing into Mathematics: Number Systems',
  description:
    'Number systems is the mathematical notation of representing numbers that provides a unique representation of every number and represents the arithmetic and algebraic structure of the figures. This interactive, multiple-choice quiz is great to test your knowledge in a fun way.  Press START to LEAP into the fun!',
  img: 'leap-orange-navy-brand.png',
  questions: [
    {
      id: 1,
      text: 'Find the difference: 2/3 - 1/2',
      alternatives: [
        {
          id: 1,
          text: '1/3',
          isCorrect: false,
        },
        {
          id: 2,
          text: '1/2',
          isCorrect: false,
        },
		{
          id: 3,
          text: '1/6',
          isCorrect: true,
        },
		{
          id: 4,
          text: '1/12',
          isCorrect: false,
        },
      ],
    },
    {
      id: 2,
      text: 'Multiply the following rational numbers: 5.45(1)',
      alternatives: [
        {
          id: 1,
          text: '5.45',
          isCorrect: true,
        },
        {
          id: 2,
          text: '0',
          isCorrect: false,
        },        
		{
          id: 3,
          text: '1',
          isCorrect: false,
        },
		        {
          id: 4,
          text: '5',
          isCorrect: false,
        },
      ],
    },
    {
      id: 3,
      text: 'Evaluate the expression: 750 / 25 = ?',
      alternatives: [
        {
          id: 1,
          text: '35',
          isCorrect: false,
        },
        {
          id: 2,
          text: '75',
          isCorrect: false,
        },
        {
          id: 3,
          text: '25',
          isCorrect: false,
        },
        {
          id: 4,
          text: '30',
          isCorrect: true,
        },
      ],
    },
    {
      id: 4,
      text: 'Evaluate the expression: 624 / 13',
      alternatives: [
        {
          id: 1,
          text: '42',
          isCorrect: false,
        },
        {
          id: 2,
          text: '13',
          isCorrect: false,
        },
        {
          id: 3,
          text: '48',
          isCorrect: true,
        },
        {
          id: 4,
          text: '45',
          isCorrect: false,
        },      
      ],
    },
	{
      id: 5,
    text: 'Evaluate the expression: 0.5268 / 12',
      alternatives: [
        {
          id: 1,
          text: '0.0439',
          isCorrect: true,
        },
        {
          id: 2,
          text: 'undefined',
          isCorrect: false,
        },
        {
          id: 3,
          text: '0.25',
          isCorrect: false,
        },
        {
          id: 4,
          text: '0.5',
          isCorrect: false,
        },
      ],
    },
	{
      id: 6,
      text: 'Find the product: 2(5.825)',
      alternatives: [
        {
          id: 1,
          text: '11',
          isCorrect: false,
        },
        {
          id: 2,
          text: '11.65',
          isCorrect: true,
        },
		{
          id: 3,
          text: '12',
          isCorrect: false,
        },
		{
          id: 4,
          text: '0.1165',
          isCorrect: false,
        },
      ],
    },
	{
      id: 7,
    text: 'Find the quotient: 5.4 / 4.5',
      alternatives: [
        {
          id: 1,
          text: '1.5',
          isCorrect: false,
        },
        {
          id: 2,
          text: '0.9',
          isCorrect: false,
        },
		{
          id: 3,
          text: '1.2',
          isCorrect: true,
        },
		{
          id: 4,
          text: '9.9',
          isCorrect: false,
        },
      ],
    },
	{
      id: 8,
      text: 'Compare 12/15 to 13/30. Choose >, <, or =',
      alternatives: [
        {
          id: 1,
          text: '>',
          isCorrect: true,
        },
        {
          id: 2,
          text: '<',
          isCorrect: false,
        },
		{
          id: 3,
          text: '=',
          isCorrect: false,
        }
      ],
    },
	{
      id: 9,
      text: 'Factor the following number into its prime factors: 66',
      alternatives: [
        {
          id: 1,
          text: '2 * 3 * 12',
          isCorrect: false,
        },
        {
          id: 2,
          text: '2 * 3 * 5 * 11',
          isCorrect: false,
        },
		{
          id: 3,
          text: '2 * 3 * 11',
          isCorrect: true,
        },
		{
          id: 4,
          text: '1 * 2 * 3 * 11 * 22 * 66',
          isCorrect: false,
        },
      ],
    },
	{
      id: 10,
    text: 'List all the factors of 35.',
      alternatives: [
        {
          id: 1,
          text: '1, 35',
          isCorrect: false,
        },
        {
          id: 2,
          text: '1, 5, 7, 35',
          isCorrect: true,
        },
		{
          id: 3,
          text: '1, 5, 7, 15, 35',
          isCorrect: false,
        },
		{
          id: 4,
          text: '1, 3, 5, 35',
          isCorrect: false,
        },
      ],
    },
  ],
  results: [
    {
      id: 1,
      range: {
        from: 0,
        to: 6,
      },
      title: 'You only got a few questions right.',
      description:
        'Please restart the Quiz to achieve 70% or higher.',
	  img: 'result-example.jpg',
    },
	{
      id: 2,
      range: {
        from: 7,
        to: 7,
      },
      title: 'Congratulations, you scored 70%!',
      description:
        'Please accelerate to the next quiz.',
	  img: 'result-example.jpg',
    },
	{
      id: 3,
      range: {
        from: 8,
        to: 8,
      },
      title: 'Congratulations, you scored 80%!',
      description:
        'Please accelerate to the next quiz.',
	  img: 'result-example.jpg',
    },
    {
      id: 4,
      range: {
        from: 9,
        to: 9,
      },
      title: 'Congratulations, you scored 90%!',
      description:
        'Please accelerate to the next quiz.',
	  img: 'result-example.jpg',
    },
    {
      id: 5,
      range: {
        from: 10,
        to: 10,
      },
      title: 'Congratulations, you got everything right!',
      description:
        'Please accelerate to the next quiz.',
      img: 'result-example.jpg',
    },
  ],
};

export default quizData;