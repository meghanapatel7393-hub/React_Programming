// import { Fragment } from "react";
import { useState, type MouseEvent } from "react";
//{items:[],heading:string}
interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

//function ListGroup({items,heading}: ListGroupProps) { also we can used this way
function ListGroup(listGroupProps: ListGroupProps) {
  //befor passing props to function parameter we used this static data
  // const items = [
  //   "An item",
  //   "A second item",
  //   "A third item",
  //   "A fourth item",
  //   "And a fifth one",
  //   "Here item selected  using state",
  // ];

  //hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //   arr[0]; //variable (selectedIndex)
  //   arr[1]; //function to update variable (setSelectedIndex)

  //   items = []; // to check conditional rendering if we set var then set this way
  const getMessages = () => {
    // if (items.length === 0 ? <p>No items found</p> : null) alternate and better way below code
    //if (items.length === 0) && <p>No items found</p>; alternate and better way of above if condition true its return paragraph
    if (listGroupProps.items.length === 0)
      /*this is conditional rendering. alternate of ternary operator. its work same as if else*/
      return <p>No items found</p>;
  };

  //   if (items.length === 0) return <p>No items found</p>;
  //this is event handler function
  const handleClick = (index: number, item: string, event: MouseEvent) => {
    event.preventDefault();
    console.log(index, "clicked", item, event);
    setSelectedIndex(index);
  };

  const handleClickNw = (event: MouseEvent) => console.log(event);

  return (
    // <div> or
    // <Fragment> or
    //its called empty tag <>
    <>
      <h1>{listGroupProps.heading}</h1>
      {/* everywhere dynamic code written inside {} because its javascript code inside jsx code. that is allowed only in {} */}
      {/* this code is manualy written without using map function . now we write dynamicaly using map function*/}

      {
        /* {getMessages()} */
        listGroupProps.items.length === 0 && (
          <p>No items found</p>
        ) /* conditional rendering alternative way of function*/
      }
      <ul className="list-group">
        {listGroupProps.items.map((item, index) => (
          <li
            className={
              index === selectedIndex
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // onClick={handleClickNw}
            // onClick={(event) => handleClick(index, item, event)}
            onClick={() => {
              setSelectedIndex(index);
              listGroupProps.onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}

        {/* <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */}
      </ul>
    </>
    // </Fragment>
    // </div>
  );
}
export default ListGroup;
