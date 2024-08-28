import './App.css';
import logo from './images/logo.svg';
import IdCard from './IdCard';
import Greeting from './Greeting';
import Random from './Random';
import './styles.css';


function App() {
  return (
    <div>
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />

        <Greeting lang="de">Ludwig</Greeting>
        <Greeting lang="fr">François</Greeting>
        <Greeting lang="zh">阳</Greeting>

        <Random min={1} max={6}/>
        <Random min={1} max={100}/>
    </div>
  );
}

export default App;
