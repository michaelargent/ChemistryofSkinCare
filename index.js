function startTest() {
    $('#startButton').on('click', function(event) {
      render();
    });
  };
  
  
  function askQuestion(){};
  
  
  
  $('.view').on('submit', function(event) {
    event.preventDefault();
  });
  
  
  
  
  //  THE STATE OF THE UNION
  let store = {
    currentQuestion: 0,
    //will implement this again - view: "question", 
  
  }; 
  
  const questions = [
    {
      question: "What is L-Ascorbic Acid?",
      answers: [
        "Vitamin C",
        "Vitamin A",
        "A Retinoid",
        "Vitamin E"
      ],
      correctAnswer: "Vitamin C" 
    },
  
    {
      question: "Which type of exfoliators are best for oily skin types?",
      answers: [
        "Manual exfoliation (scrubs, brushes, and etc.)",
        "Salicylic Acid",
        "Lactic Acid",
        "Glycolic acid"
      ],
      correctAnswer: "Salicylic Acid"
    },
  
    {
      question: "Fill in the blank: Hyaluronic Acid can bind up to ___ times its weight in water?",
      answers: [
        "50",
        "75",
        "100",
        "200"
      ],
      correctAnswer: "100"
    },
  
  {
      question:
        "Which of the below is NOT an example of a 'chemical' sunscreen?",
      answers: [
        "Avobenzone",
        "Octocrylene",
        "Oxybenzone",
        "Zinc Oxide"
      ],
      correctAnswer:
        "Zinc Oxide"
    },
  
  {
      question:
        "Which of the follow has the smallest molecular size?",
      answers: [
        "Glycolic Acid",
        "Lactic Acid",
        "Salicylic Acid",
        "Mandelic Acid"
      ],
      correctAnswer:
        "Glycolic Acid"
    }
  ];
  function render(store){
    $(".view").hide();
    console.log($(".view")); 
      switch(store.view){
        case "starter": 
          $("#starterPage").show(); 
          break;
       case "question": 
        $("#question").html(questions[store.currentQuestion].question);
        $("#questionPage").show(); 
        break;
      case "confirmation": 
        $("#confirmationPage").show(); 
        break; 
      case "final": 
        $("#finalPage").show(); 
        break; 
      default: 
          $("#starterPage").show(); 
     }
  }
  
// Will bring this back   $(function() {
//       render(store); 
//   });

  let score = 0;
  
  let questionNumber = 0;