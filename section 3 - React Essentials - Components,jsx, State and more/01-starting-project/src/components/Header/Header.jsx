import reactImg from '../../assets/react-core-concepts.png';
import './Header.css';
const reactDescription = ['Fundamental', 'Crucial', 'Essential'];   

function getRandomDescription(maxLength) {
  return Math.floor(Math.random() * (maxLength));
}

function Header() {
 
    const description = reactDescription[getRandomDescription(reactDescription.length)]
    
    return (

    <header>
      <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>{description} React concepts you will need for almost any app you are going to build!</p>
    </header>
  );
}

export default Header;  