import { Component } from "react";
class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  render() {
    const { active } = this.state;
    const { images } = this.state;
    return (
      <div>
        <img src="images[actice]" alt="animal" />
        <div className="carousel-smaller">
          {images.map((phtoto, index) => {
            <img
              key={photo}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal-thumbnail"
            />;
          })}
        </div>
      </div>
    );
  }
}

export default Carousel;
