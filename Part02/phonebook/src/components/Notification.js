import './Notification.css'

const Notification = ({ notification, notificationColor }) => {
  return (
    <div className="notification" style={{color: notificationColor}}>
      {notification}
    </div>
  )  
}
export default Notification;