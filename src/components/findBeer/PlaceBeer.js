export default function PlaceBeer(props) {
    return (
        <div className="beerParams">
            <p>{props.title}</p>
            <input
                type="text"
                placeholder={props.placehold}
                name={props.name}
                className="placeBeer"
                value={props.value}
                onChange={props.changeHandler}
                style={props.style}
            ></input>
        </div>
    );
}
