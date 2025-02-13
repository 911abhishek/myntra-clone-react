import { useDispatch, useSelector } from "react-redux";
import {bagActions} from "../store/bagSlice";
import { MdDeleteForever } from "react-icons/md";
import { FaBagShopping } from "react-icons/fa6";

const HomeItem=({item})=>{
  const disptach = useDispatch();
  const bagItems = useSelector((store)=>store.bag);
  const itemFound = bagItems.indexOf(item.id) >= 0;
  console.log(item.id, itemFound);

  const handleAddToBag = () =>{
    disptach(bagActions.addToBag(item.id));
    
  }
  const handleRemoveToBag = () => {
    disptach(bagActions.removeFromBag(item.id));
  };

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {itemFound ? (
        <button type="button" className="btn btn-danger btn-add-bag" onClick={handleRemoveToBag}>
          <MdDeleteForever />
          Remove
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-success btn-add-bag"
          onClick={handleAddToBag}
        >
          <FaBagShopping />
          Add to Bag
        </button>
      )}
    </div>
  );
}
export default HomeItem;