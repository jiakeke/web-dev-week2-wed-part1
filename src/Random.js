// Random.js

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function Random(props) {
  const min = props.min;
  const max = props.max;
  let num = getRandomInt(min, max);

  return (
    <div className="Random">
        Random value between {min} and {max} => {num}
    </div>
  );
}

export default Random;
