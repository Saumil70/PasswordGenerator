function ChildComponent(props: any) {
    console.log(props);

  return (
    <div>
        <h1>{props.value}</h1>
      <button type="button" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition" onClick={props.counter}>Click Me</button>
    </div>
  );
}

export default ChildComponent;
