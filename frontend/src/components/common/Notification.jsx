import { IoMdClose } from "react-icons/io";
import { useAuth } from "../../contexts/AuthContext";

const Notification = () => {
  const { notification, setNotification } = useAuth();
  console.log(notification);

  if (notification === "close") return <></>;
  else
    return (
      <div className="fixed bottom-4 right-4 px-4 py-3 bg-purple-200 z-50 bg-opacity-95 rounded shadow-md ">
        <div className="flex items-center justify-between gap-4">
          <p className="font-semibold">
            {notification === "itemAdded" && "Item added to cart successfully."}
            {notification === "itemRemoved" &&
              "Item removed from cart successfully."}
            {notification === "orderSuccess" && "Order placed successfully."}
          </p>
          <div
            className="p-1 border-2 border-red-400 rounded-full cursor-pointer"
            onClick={() => {
              setNotification("close");
            }}
          >
            <IoMdClose color={"red"} />
          </div>
        </div>
      </div>
    );
};

export default Notification;
