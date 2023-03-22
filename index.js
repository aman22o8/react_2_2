const Notification = (props) => {
  //  Write your code here.
  const { content, image_link, background_of_container } = props;
  return (
    <div className={`${background_of_container} container`}>
      <img className="_images_" src={image_link} />
      <p className="block_heading">{content}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="main_container">
    <h1 className="main_heading">Notification</h1>
    <Notification
      content="Information message"
      image_link="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      background_of_container="information_container"
    />
    <Notification
      content="Success message"
      image_link="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      background_of_container="success_container"
    />
    <Notification
      content="Warning message"
      image_link="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      background_of_container="warning_container"
    />
    <Notification
      content="Error message"
      image_link="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      background_of_container="danger_container"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
