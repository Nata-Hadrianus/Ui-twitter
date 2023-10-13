 import { Sparkle } from 'phosphor-react';
 import './Header.css';

 interface HeaderProps {
   title: string;
 }

 export function Header(props: HeaderProps) {
   return (
     <div className="timeline-header">
        <span className="title">{props.title}</span>
        <Sparkle />
     </div>
   );
 }
