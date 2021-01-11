function Container({ children }) {
    return (
      <div
        className={"container mx-auto w-full lg:w-2/4"}
        style={{
          marginTop: 30,
          backgroundColor: "white",
        }}
      >
        {children}
      </div>
    );
  }
  
  export default Container;