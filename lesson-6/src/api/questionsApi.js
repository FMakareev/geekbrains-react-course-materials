
const data = {
  "response_code": 0,
  "results": [
    {
      "category": "Entertainment: Film",
      "type": "multiple",
      "difficulty": "medium",
      "question": "In which 1955 film does Frank Sinatra play Nathan Detroit?",
      "correct_answer": "Guys and Dolls",
      "incorrect_answers": [
        "Anchors Aweigh",
        "From Here to Eternity",
        "High Society"
      ]
    },
    {
      "category": "Entertainment: Video Games",
      "type": "multiple",
      "difficulty": "medium",
      "question": "&quot;Rollercoaster Tycoon&quot; was programmed mostly entirely in...",
      "correct_answer": "x86 Assembly",
      "incorrect_answers": [
        "C++",
        "C",
        "ALGOL"
      ]
    },
    {
      "category": "Entertainment: Video Games",
      "type": "multiple",
      "difficulty": "easy",
      "question": "In Dota 2, Wraith King was previously known as...",
      "correct_answer": "Skeleton King",
      "incorrect_answers": [
        "Reaper King",
        "Skull King",
        "Hell King"
      ]
    },
    {
      "category": "Entertainment: Video Games",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Which of the following Elite Four members from the 6th Generation of Pok&eacute;mon was a member of Team Flare?",
      "correct_answer": "Malva",
      "incorrect_answers": [
        "Siebold",
        "Wikstrom",
        "Drasna"
      ]
    },
    {
      "category": "Politics",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Who was the 45th President of the United States?",
      "correct_answer": "Donald Trump",
      "incorrect_answers": [
        "Barack Obama",
        "Bill Clinton",
        "George Bush"
      ]
    },
    {
      "category": "Entertainment: Music",
      "type": "multiple",
      "difficulty": "medium",
      "question": "Who is the vocalist and frontman of rock band &quot;Guns N&#039; Roses&quot;?",
      "correct_answer": "Axl Rose",
      "incorrect_answers": [
        "Kurt Cobain",
        "Slash",
        "Bono"
      ]
    },
    {
      "category": "Entertainment: Board Games",
      "type": "multiple",
      "difficulty": "hard",
      "question": "Which character class in Dungeons and Dragons 5th edition gains it&#039;s powers from making a pact with a being of higher power?",
      "correct_answer": "Warlock",
      "incorrect_answers": [
        "Wizard",
        "Sorceror",
        "Cleric"
      ]
    },
    {
      "category": "Science & Nature",
      "type": "multiple",
      "difficulty": "medium",
      "question": "In human biology, a circadium rhythm relates to a period of roughly how many hours?",
      "correct_answer": "24",
      "incorrect_answers": [
        "8",
        "16",
        "32"
      ]
    },
    {
      "category": "General Knowledge",
      "type": "multiple",
      "difficulty": "hard",
      "question": "What is the weight of a Gold Bar in Fallout: New Vegas?",
      "correct_answer": "35 Pounds",
      "incorrect_answers": [
        "30 Pounds",
        "40 Pounds",
        "32.50 Pounds"
      ]
    },
    {
      "category": "Entertainment: Video Games",
      "type": "multiple",
      "difficulty": "medium",
      "question": "Which soccer player is featured on the cover of EA Sport&#039;s FIFA 18?",
      "correct_answer": "Cristiano Ronaldo",
      "incorrect_answers": [
        "Lionel Messi",
        "Neymar",
        "Harry Kane"
      ]
    }
  ]
}



const delay = () => new Promise((resolve) => {

  setTimeout(() => resolve(data), 1000);
})


export const questionsApi = {
  getList: async () => {
    try {
      const result = await delay();
      return [null, result];
    } catch (e) {
      console.error(e);
      return [e, null];
    }
  }
}