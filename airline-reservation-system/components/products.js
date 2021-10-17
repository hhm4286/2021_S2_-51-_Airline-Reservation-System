export default function Product({ name, price }) {
    return (
    <div>
      <div className = "card p-3 mb-2 bg-light text-white">
        <img className = "card-img-top" src = "photo-1597388522438-8f99f4cf354b_225x180.jpg" alt="Card image cap"/>
    <h5 className = "card-title text-center text-black">{name}</h5>
    <p className = "card-text text-center text-black"><button className = "btn btn-primary btn-sm"><strong>View Details</strong></button></p>
      </div>
    </div>
    );
  }