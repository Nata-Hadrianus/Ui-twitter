import { FormEvent, useState } from 'react';
import { Header } from '../componentes/Header';
import { Separator } from '../componentes/Serapator';
import { Tweet } from '../componentes/Tweet';
import './Timeline.css';


export function Timeline() {
  const [newTweet, setNewTweet] = useState ('')
  const [tweets, setTweets] = useState([
        'Bom Diaaaaaaaa',
        'Amoo o Twitter demais',
        'Vem também fazer parte dessa família'
            ])

    function createNewTweet  (event: FormEvent) {
       event.preventDefault()
       setTweets([newTweet, ...tweets]);
       setNewTweet('')
    }
  return (
    <main className="timeline">
      <Header title="Home" />
      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://avatars.githubusercontent.com/u/95093095?v=4" alt="Foto" />
          <textarea
            id="tweet"
            placeholder="What's happening"
            value={newTweet} // Usar o valor do estado
            onChange={(event) => {
              setNewTweet(event.target.value); // Atualizar o estado do novo tweet
            }}
          ></textarea>
        </label>
        <button type="submit">Tweet</button>
      </form>
      <Separator />
      {tweets.map((tweet, index) => {
  return <Tweet key={index} content={tweet} tweet={''} />;
})}



    </main>
  );
}
