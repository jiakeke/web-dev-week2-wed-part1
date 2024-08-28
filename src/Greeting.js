// Greeting.js

function Greeting(props) {
    let hello = 'Hello';

    switch (props.lang) {
      case 'de':
        hello = 'Hallo';
        break;
      case 'fr':
        hello = 'Bonjour';
        break;
      case 'fi':
        hello = 'Moi';
        break;
      case 'zh':
        hello = '你好';
        break;
      case 'en':
        hello = 'Hello';
        break;
    }
  return (
    <div className="greeting">
        {hello} {props.children}
    </div>
  );
}

export default Greeting;
