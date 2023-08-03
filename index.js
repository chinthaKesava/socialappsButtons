const Button = (props) => {
    {className,buttonText}=props;
  //  Write your code here.
  return <button className={`button ${className}`}>{buttonText}</button>
}

const element = (
  //  Write your code here.
  <div className="bg-container">
      <div className="content-container">
          <h1 >Social Buttons</h1>
          <div className="buttons-container">
              <Button className="likeButton" buttonText="Like"/>
          </div>
      </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
