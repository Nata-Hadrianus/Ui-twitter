import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react';
import { Link } from 'react-router-dom';
import './Tweet.css';

interface TweetProps {
  user?: string;
  tweet: string;  
  content? : string;
  
}
 export function Tweet(props: TweetProps) {
   return (
     <Link to="/Status" className="tweet">
       <img src="https://avatars.githubusercontent.com/u/95093095?s=48&v=4" alt="" />
       <div className="tweet-content">
         <div className="tweet-content-header">
           <strong className="User">{props.user}</strong>
           <span>@natahadrianus</span>
        </div>
        <div className="tweet-content-footer">
            <button type="button">
              <ChatCircle />
                28
             </button>
             <button type="button">
              <ArrowsClockwise />
                10
            </button>
          <button type="button">
            <Heart />
            59
          </button>
        </div>
      </div>
    </Link>
  );
}
