function ButtonComponent(props: any) {
  return (
    <div>
      <button
        type="button"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        onClick={props.counter}
      >
        {props.buttonName}
      </button>
    </div>
  );
}

export default ButtonComponent;
