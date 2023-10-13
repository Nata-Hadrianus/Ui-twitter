 import { FormEvent, useState } from "react";
 import { Header } from "../componentes/Header";
 import { Separator } from "../componentes/Serapator";
 import { Tweet } from "../componentes/Tweet";
 import './Routine.css';

    export function Status(){
      const [newAnswer, setNewAnswer] = useState ('')
      const [answer, setAnswer] = useState([
            'Bom Diaaaaaaaa',
            'Amoo o Twitter demais',
            'Vem também fazer parte dessa família'
                ])
    
        function createNewAnswer  (event: FormEvent) {
           event.preventDefault()
           setAnswer([newAnswer, ...answer]);
           setNewAnswer('')
        }
        return(
         <main className="Status" >
          <Header title="Tweet" />
             <Tweet tweet="O mundo é um lugar perigoso de se viver, não por causa daqueles que fazem o mal. mas sim por causa daqueles que observam e deixam o mal acontecer"/>
                <Separator/>
                   <form onSubmit={createNewAnswer} className="answer-tweet-form">
                      <label htmlFor="tweet">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo_wB41JoZF5qe3xuOEf3b8wX8kY8mMxvBOg&usqp=CAU" alt="Foto" />
                      <textarea id="tweet" 
                      placeholder="Tweet your answer"
                         value={newAnswer} 
                         onChange={(event) => {
                     setNewAnswer(event.target.value)
            }}
                      ></textarea>
                   </label>
                   <button type="submit">Answer</button>
               </form>
              {answer.map(answer => (
             <Tweet key={answer} content={answer} user={""} tweet={""} />
              ))}
       </main>
      )
    }
    
    