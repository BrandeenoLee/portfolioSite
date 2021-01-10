function Container({ children }) {
    return (
      <div
        className={"container mx-auto w-full lg:w-2/4"}
        style={{
          padding: 30,
          backgroundColor: "white",
          border: "1px solid grey",
        }}
      >
        {children}
      </div>
    );
  }
  
  export default Container;