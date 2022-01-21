import Button from 'react-bootstrap/Button';




const Buttons = (props) => {
      return(
            <div>
                  <Button variant="primary">{props.name}</Button>
            </div>
      )
}
export default Buttons