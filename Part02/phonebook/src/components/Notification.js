import './Notification.css';

const Notification = ({ notification }) => {
  return (
    <div className="notification">
      {notification}
    </div>
  )  
}

export default Notification;