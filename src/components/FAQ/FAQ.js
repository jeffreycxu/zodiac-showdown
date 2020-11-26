import React from 'react';
import Button from 'react-bootstrap/Button';
import './FAQ.css';

export default function FAQ() {
  return (
    <div className="faq section">
       
        <h1 className = "text-center"> Frequently Asked Questions</h1>
         <p className = "question">What is Zodiac Showdown?
</p>
         <p className = "answer">Zodiac Showdown is a social deduction card game suitable for players of all ages. The game is turn-based and forces players to sabotage each other as they try to collect the items they need to win! </p>

         <p className = "question">What was the inspiration for Zodiac Showdown?</p>
         <p className = "answer">Zodiac Showdown is based on the characters of the chinese zodiac, which is a classification scheme for assigning an animal to a person based on their birth year. There are 12 different animal types in the chinese zodiac: Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse, Sheep, Monkey, Rooster, Dog, and Pig. It is believed that all people of a zodiac type share personality attributes that are common to their animal. For example, all people born in the year of the dragon are said to be ambitious, determined, and independent. The cycle of the chinese zodiac follows the lunar calendar, meaning that every 12 years a new cycle starts. According to chinese mythology, the order in which the animals appear in the zodiac was determined by how they were placed in the story of The Great Race. 
</p>

         <p className = "question">Why was this game created?
</p>
         <p className = "answer">This game is based upon the longtime folklore of the Chinese Zodiac Race. 12 animals were pitched into a race against one another as they tried to sabotage each other to cross the finish line. We wanted to create a table top game that was unique in its own design element and was fun/competitive to play.</p>

         <p className = "question">How do I win?</p>
         <p className = "answer">You can win the game by obtaining zodiac items adjacent to your assigned animal’s position in the zodiac order (Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse, Sheep, Monkey, Rooster, Dog, and Pig). This means that each character will always have the same win condition. Ex) The player assigned the role of the Horse needs to possess the Snake’s and the Sheep’s zodiac items, in addition to its own zodiac item to win.</p>

         <p className = "question">What do the different cards do?
</p>
         <p className = "answer">In general, there are zodiac item cards, attack cards, and general cards. Zodiac item cards are the cards each player must possess in order to win, though the set of cards each player must collect will be specific to their assigned role. Attack cards are used to “attack” other players and obtain their zodiac items. General cards all have their own specific actions, which are explained on the card.
</p>
<p className = "question">What’s different from the card game Bang?
</p>
         <p className = "answer">Bang is a game with different factions that try to eliminate each other, while Zodiac Showdown is a free-for-all game with no elimination and only a single winner per game.
</p>
     </div>
  );
}
