const Filter = props => {
  return (
    <div>
      filter shown with:
      <input value={props.filter} onChange={props.filterChangeHandler} />
    </div>
  );
};

export default Filter;
